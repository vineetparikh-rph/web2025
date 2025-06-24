import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { format } from "date-fns";
import type { ChatMessage } from "@/types";

interface ChatModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ChatModal({ open, onClose }: ChatModalProps) {
  const [message, setMessage] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  const { data: messages, isLoading } = useQuery<ChatMessage[]>({
    queryKey: ["/api/patient/1/chat-messages"],
    enabled: open,
    refetchInterval: 2000, // Poll for new messages every 2 seconds
  });

  const sendMessageMutation = useMutation({
    mutationFn: async (messageText: string) => {
      const response = await apiRequest("POST", "/api/chat-messages", {
        message: messageText,
        isFromPatient: true,
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/patient/1/chat-messages"] });
      setMessage("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessageMutation.mutate(message.trim());
    }
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg h-[500px] flex flex-col">
        <DialogHeader>
          <DialogTitle>Chat Support</DialogTitle>
          <p className="text-sm text-slate-600">We're here to help</p>
        </DialogHeader>
        
        <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {isLoading ? (
              <div className="text-center text-slate-500">Loading messages...</div>
            ) : messages?.length === 0 ? (
              <div className="text-center text-slate-500">Start a conversation</div>
            ) : (
              messages?.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isFromPatient ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs rounded-lg p-3 ${
                      msg.isFromPatient
                        ? "bg-primary text-white"
                        : "bg-slate-100 text-slate-900"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.isFromPatient ? "text-red-200" : "text-slate-500"
                      }`}
                    >
                      {msg.isFromPatient ? "You" : "Support Agent"} -{" "}
                      {format(new Date(msg.timestamp), "h:mm a")}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
        
        <form onSubmit={handleSubmit} className="flex space-x-2 pt-4 border-t">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
            disabled={sendMessageMutation.isPending}
          />
          <Button 
            type="submit" 
            size="icon"
            className="bg-success text-white hover:bg-success/90"
            disabled={!message.trim() || sendMessageMutation.isPending}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
