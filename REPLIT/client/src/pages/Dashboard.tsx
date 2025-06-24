import { useState, useEffect } from "react";
import Header from "@/components/Header";
import QuickActions from "@/components/QuickActions";
import PrescriptionCard from "@/components/PrescriptionCard";
import PharmacyInfo from "@/components/PharmacyInfo";
import RefillModal from "@/components/modals/RefillModal";
import TransferModal from "@/components/modals/TransferModal";
import ChatModal from "@/components/modals/ChatModal";
import LocationsModal from "@/components/modals/LocationsModal";
import { useAuth } from "@/hooks/useAuth";
import { usePatient } from "@/hooks/usePatient";
import { usePrescriptions } from "@/hooks/usePrescriptions";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";

export default function Dashboard() {
  const [refillModalOpen, setRefillModalOpen] = useState(false);
  const [transferModalOpen, setTransferModalOpen] = useState(false);
  const [chatModalOpen, setChatModalOpen] = useState(false);
  const [locationsModalOpen, setLocationsModalOpen] = useState(false);

  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const { toast } = useToast();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [isAuthenticated, authLoading, toast]);

  const userId = user?.id || "1";
  const { data: patient, isLoading: patientLoading } = usePatient(1);
  const { data: prescriptions, isLoading: prescriptionsLoading } = usePrescriptions(1);
  
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["/api/patient/1/stats"],
  });

  if (authLoading || patientLoading || prescriptionsLoading || statsLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            <Skeleton className="h-48 w-full rounded-xl" />
            <Skeleton className="h-32 w-full rounded-xl" />
            <Skeleton className="h-64 w-full rounded-xl" />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header patient={patient} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <section className="mb-8">
          <div className="gradient-primary rounded-xl p-6 text-white">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Welcome back, {user?.firstName || patient?.firstName || 'User'}!
            </h1>
            <p className="text-red-100 mb-4">
              Your health, simplified. Manage your prescriptions easily and securely.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">{stats?.activePrescriptions || 0}</div>
                <div className="text-red-100 text-sm">Active Prescriptions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">{stats?.readyForPickup || 0}</div>
                <div className="text-red-100 text-sm">Ready for Pickup</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">{stats?.nextRefillDays || 0}</div>
                <div className="text-red-100 text-sm">Days to Next Refill</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <QuickActions
          onRefillClick={() => setRefillModalOpen(true)}
          onTransferClick={() => setTransferModalOpen(true)}
          onLocationsClick={() => setLocationsModalOpen(true)}
          onChatClick={() => setChatModalOpen(true)}
        />

        {/* Prescriptions Dashboard */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-slate-900">Your Prescriptions</h2>
            <Button variant="ghost" className="text-primary hover:text-red-700 text-sm font-medium">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {prescriptions?.map((prescription) => (
              <PrescriptionCard
                key={prescription.id}
                prescription={prescription}
                onRefill={() => setRefillModalOpen(true)}
              />
            ))}
          </div>
        </section>

        {/* Pharmacy Info */}
        <PharmacyInfo />
      </main>

      {/* Modals */}
      <RefillModal 
        open={refillModalOpen} 
        onClose={() => setRefillModalOpen(false)} 
      />
      <TransferModal 
        open={transferModalOpen} 
        onClose={() => setTransferModalOpen(false)} 
      />
      <ChatModal 
        open={chatModalOpen} 
        onClose={() => setChatModalOpen(false)} 
      />
      <LocationsModal 
        open={locationsModalOpen} 
        onClose={() => setLocationsModalOpen(false)} 
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <i className="fas fa-prescription-bottle text-white text-xs"></i>
                </div>
                <span className="font-bold text-slate-900">Georgies Pharmacy</span>
              </div>
              <p className="text-sm text-slate-600">
                Your trusted healthcare partner, providing convenient prescription management and exceptional patient care.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary transition-colors">Prescription Refills</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Prescription Transfers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Medication Synchronization</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Health Consultations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pharmacy Hours</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Insurance Information</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">HIPAA Notice</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 mt-8 pt-6 text-center">
            <p className="text-sm text-slate-600">&copy; 2024 GeorgiesRx. All rights reserved. Licensed Pharmacy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
