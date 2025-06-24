import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertTransferRequestSchema } from "@shared/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface TransferModalProps {
  open: boolean;
  onClose: () => void;
}

const transferFormSchema = insertTransferRequestSchema.omit({ patientId: true });

export default function TransferModal({ open, onClose }: TransferModalProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof transferFormSchema>>({
    resolver: zodResolver(transferFormSchema),
    defaultValues: {
      currentPharmacyName: "",
      currentPharmacyPhone: "",
      rxNumber: "",
      medicationName: "",
      patientName: "",
      dateOfBirth: "",
    },
  });

  const transferMutation = useMutation({
    mutationFn: async (data: z.infer<typeof transferFormSchema>) => {
      const response = await apiRequest("POST", "/api/transfer-requests", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Transfer Request Submitted",
        description: "Your prescription transfer request has been submitted successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/patient/1/transfer-requests"] });
      form.reset();
      onClose();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit transfer request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: z.infer<typeof transferFormSchema>) => {
    transferMutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Transfer Prescription</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="currentPharmacyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Pharmacy Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Previous Pharmacy" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="currentPharmacyPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Pharmacy Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(555) 000-0000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="rxNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prescription Number</FormLabel>
                  <FormControl>
                    <Input placeholder="RX Number to transfer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="medicationName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Medication Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Medication name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="patientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Patient name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex space-x-3 pt-4">
              <Button 
                type="submit" 
                className="flex-1 bg-secondary text-white hover:bg-secondary/90"
                disabled={transferMutation.isPending}
              >
                {transferMutation.isPending ? "Submitting..." : "Submit Transfer"}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
