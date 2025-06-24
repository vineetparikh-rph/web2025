import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertRefillRequestSchema } from "@shared/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface RefillModalProps {
  open: boolean;
  onClose: () => void;
}

const refillFormSchema = insertRefillRequestSchema.omit({ patientId: true });

export default function RefillModal({ open, onClose }: RefillModalProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof refillFormSchema>>({
    resolver: zodResolver(refillFormSchema),
    defaultValues: {
      rxNumber: "",
      patientName: "",
      dateOfBirth: "",
      pickupPreference: "",
    },
  });

  const refillMutation = useMutation({
    mutationFn: async (data: z.infer<typeof refillFormSchema>) => {
      const response = await apiRequest("POST", "/api/refill-requests", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Refill Request Submitted",
        description: "Your prescription refill request has been submitted successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/patient/1/refill-requests"] });
      form.reset();
      onClose();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit refill request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: z.infer<typeof refillFormSchema>) => {
    refillMutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request Prescription Refill</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="rxNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prescription Number</FormLabel>
                  <FormControl>
                    <Input placeholder="RX123456" {...field} />
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
                    <Input placeholder="John Doe" {...field} />
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

            <FormField
              control={form.control}
              name="pickupPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup Preference</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pickup preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="in-store">In-store pickup</SelectItem>
                      <SelectItem value="curbside">Curbside pickup</SelectItem>
                      <SelectItem value="delivery">Delivery</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex space-x-3 pt-4">
              <Button 
                type="submit" 
                className="flex-1 bg-primary text-white hover:bg-primary/90"
                disabled={refillMutation.isPending}
              >
                {refillMutation.isPending ? "Submitting..." : "Submit Request"}
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
