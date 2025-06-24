import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Prescription } from "@shared/schema";
import { Wifi, Send, CheckCircle, AlertCircle, Settings } from "lucide-react";

interface SocketRefillModalProps {
  prescription?: Prescription;
  trigger?: React.ReactNode;
}

interface SocketRefillData {
  prescriptionId?: number;
  rxNumber: string;
  patientName: string;
  dob: string;
  phone: string;
  nabp: string;
  pickupMethod: string;
  notes: string;
}

export default function SocketRefillModal({ prescription, trigger }: SocketRefillModalProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<SocketRefillData>({
    prescriptionId: prescription?.id,
    rxNumber: prescription?.rxNumber || '',
    patientName: '',
    dob: '',
    phone: '',
    nabp: '3156177', // Default to Georgies Outpatient Pharmacy
    pickupMethod: 'IN_STORE',
    notes: ''
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Test socket connection
  const { data: connectionTest, refetch: testConnection } = useQuery({
    queryKey: ['/api/socket/test'],
    enabled: false, // Only run when manually triggered
  });

  // Get WinRx form information
  const { data: winRxFormInfo } = useQuery({
    queryKey: ['/api/winrx/form-info', formData.nabp],
    enabled: !!formData.nabp,
  });

  // Submit socket refill
  const socketRefillMutation = useMutation({
    mutationFn: async (data: SocketRefillData) => {
      return await apiRequest('/api/refills/socket', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
    },
    onSuccess: (data) => {
      toast({
        title: "Refill Submitted",
        description: "Your refill request has been submitted via socket protocol.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/refills'] });
      setOpen(false);
      resetForm();
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to submit refill request via socket.",
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setFormData({
      prescriptionId: prescription?.id,
      rxNumber: prescription?.rxNumber || '',
      patientName: '',
      dob: '',
      phone: '',
      nabp: '3156177',
      pickupMethod: 'IN_STORE',
      notes: ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.rxNumber || !formData.patientName || !formData.dob || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    socketRefillMutation.mutate(formData);
  };

  const pharmacyLocations = [
    { nabp: '3198098', name: 'Georgies Family Pharmacy', address: 'Linden, NJ' },
    { nabp: '3155973', name: 'Georgies Specialty Pharmacy', address: 'Linden, NJ' },
    { nabp: '3151482', name: 'Georgies Parlin Pharmacy', address: 'Parlin, NJ' },
    { nabp: '3156177', name: 'Georgies Outpatient Pharmacy', address: 'Browns Mills, NJ' }
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-primary text-white hover:bg-primary/90">
            <Wifi className="w-4 h-4 mr-2" />
            Socket Refill
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Wifi className="w-5 h-5 mr-2 text-primary" />
            Socket-Based Refill Request
          </DialogTitle>
          <DialogDescription>
            Submit refill request using direct socket communication protocol to s1.winrxrefill.com:569
          </DialogDescription>
        </DialogHeader>

        {/* Connection Status Card */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Submission Methods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {/* WinRx Portal Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant="default" className="bg-blue-100 text-blue-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Primary
                  </Badge>
                  <span className="text-sm text-slate-600">
                    WinRx Portal ({formData.nabp}.winrxrefill.com)
                  </span>
                </div>
                {winRxFormInfo && (
                  <Badge variant="outline" className="text-xs">
                    {winRxFormInfo.requiredFields?.length || 0} fields required
                  </Badge>
                )}
              </div>
              
              {/* Socket Protocol Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {connectionTest?.success ? (
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Fallback Ready
                    </Badge>
                  ) : connectionTest?.success === false ? (
                    <Badge variant="destructive">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Fallback Failed
                    </Badge>
                  ) : (
                    <Badge variant="secondary">
                      Fallback Available
                    </Badge>
                  )}
                  <span className="text-sm text-slate-600">Socket Protocol</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => testConnection()}
                >
                  Test Fallback
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Patient Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Patient Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="patientName">Patient Name *</Label>
                <Input
                  id="patientName"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  placeholder="Enter full name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="dob">Date of Birth *</Label>
                <Input
                  id="dob"
                  type="date"
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(555) 123-4567"
                required
              />
            </div>
          </div>

          {/* Prescription Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Prescription Information</h3>
            
            <div>
              <Label htmlFor="rxNumber">Prescription Number *</Label>
              <Input
                id="rxNumber"
                value={formData.rxNumber}
                onChange={(e) => setFormData({ ...formData, rxNumber: e.target.value })}
                placeholder="Enter prescription number"
                required
              />
            </div>

            <div>
              <Label htmlFor="nabp">Pharmacy Location *</Label>
              <Select 
                value={formData.nabp} 
                onValueChange={(value) => setFormData({ ...formData, nabp: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select pharmacy location" />
                </SelectTrigger>
                <SelectContent>
                  {pharmacyLocations.map((location) => (
                    <SelectItem key={location.nabp} value={location.nabp}>
                      {location.name} - {location.address} (NABP: {location.nabp})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="pickupMethod">Pickup Method</Label>
              <Select 
                value={formData.pickupMethod} 
                onValueChange={(value) => setFormData({ ...formData, pickupMethod: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IN_STORE">In-Store Pickup</SelectItem>
                  <SelectItem value="DRIVE_THRU">Drive-Thru</SelectItem>
                  <SelectItem value="DELIVERY">Delivery</SelectItem>
                  <SelectItem value="MAIL">Mail Order</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any special instructions or notes"
                rows={3}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3 pt-6 border-t">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={socketRefillMutation.isPending}
              className="bg-primary text-white hover:bg-primary/90"
            >
              {socketRefillMutation.isPending ? (
                "Submitting..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit via Socket
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}