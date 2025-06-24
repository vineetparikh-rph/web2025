import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface PharmacyLocation {
  name: string;
  legalName: string;
  address: string;
  phone: string;
  fax: string;
  nabp: string;
  refillUrl: string;
}

interface PharmacySystemStatus {
  authenticated: boolean;
  username: string | null;
  nabp: string | null;
  location: PharmacyLocation | null;
}

interface PharmacyCredentials {
  username: string;
  password: string;
  nabp: string;
  locationName?: string;
}

interface RefillRequest {
  prescriptionId: string;
  rxNumber: string;
  pickupMethod: string;
  notes?: string;
}

export function usePharmacySystemStatus() {
  return useQuery({
    queryKey: ["/api/pharmacy-system/status"],
    retry: false,
  });
}

export function usePharmacySystemAuth() {
  const queryClient = useQueryClient();

  const authenticate = useMutation({
    mutationFn: async (credentials: PharmacyCredentials) => {
      return await apiRequest("/api/pharmacy-system/authenticate", {
        method: "POST",
        body: JSON.stringify(credentials),
      });
    },
    onSuccess: () => {
      // Refresh the status query after successful authentication
      queryClient.invalidateQueries({ queryKey: ["/api/pharmacy-system/status"] });
      queryClient.invalidateQueries({ queryKey: ["/api/pharmacy-system/prescriptions"] });
    },
  });

  const logout = useMutation({
    mutationFn: async () => {
      return await apiRequest("/api/pharmacy-system/logout", {
        method: "POST",
      });
    },
    onSuccess: () => {
      // Clear all pharmacy system related queries
      queryClient.invalidateQueries({ queryKey: ["/api/pharmacy-system/status"] });
      queryClient.removeQueries({ queryKey: ["/api/pharmacy-system/prescriptions"] });
    },
  });

  return {
    authenticate,
    logout,
  };
}

export function usePharmacySystemPrescriptions() {
  return useQuery({
    queryKey: ["/api/pharmacy-system/prescriptions"],
    enabled: false, // Only fetch when explicitly enabled
    retry: false,
  });
}

export function usePharmacySystemRefill() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (refillData: RefillRequest) => {
      return await apiRequest("/api/pharmacy-system/refill", {
        method: "POST",
        body: JSON.stringify(refillData),
      });
    },
    onSuccess: () => {
      // Refresh prescriptions and refill requests after successful refill
      queryClient.invalidateQueries({ queryKey: ["/api/pharmacy-system/prescriptions"] });
      queryClient.invalidateQueries({ queryKey: ["/api/patient/1/refill-requests"] });
    },
  });
}

export function usePharmacySystem() {
  const [isConnected, setIsConnected] = useState(false);
  const status = usePharmacySystemStatus();
  const auth = usePharmacySystemAuth();
  const prescriptions = usePharmacySystemPrescriptions();
  const refill = usePharmacySystemRefill();

  useEffect(() => {
    if (status.data?.authenticated) {
      setIsConnected(true);
      // Enable prescription fetching when authenticated
      prescriptions.refetch();
    } else {
      setIsConnected(false);
    }
  }, [status.data?.authenticated]);

  const connectToPharmacySystem = async (credentials: PharmacyCredentials) => {
    try {
      await auth.authenticate.mutateAsync(credentials);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Authentication failed" 
      };
    }
  };

  const disconnectFromPharmacySystem = async () => {
    try {
      await auth.logout.mutateAsync();
      setIsConnected(false);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Logout failed" 
      };
    }
  };

  const submitRefillRequest = async (refillData: RefillRequest) => {
    try {
      await refill.mutateAsync(refillData);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Refill request failed" 
      };
    }
  };

  const syncPrescriptions = async () => {
    try {
      await prescriptions.refetch();
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Sync failed" 
      };
    }
  };

  return {
    // Status
    isConnected,
    isLoading: status.isLoading || auth.authenticate.isPending || auth.logout.isPending,
    pharmacyStatus: status.data as PharmacySystemStatus | undefined,
    
    // Data
    pharmacyPrescriptions: prescriptions.data,
    prescriptionsLoading: prescriptions.isLoading,
    
    // Actions
    connectToPharmacySystem,
    disconnectFromPharmacySystem,
    submitRefillRequest,
    syncPrescriptions,
    
    // Loading states
    authenticating: auth.authenticate.isPending,
    refillSubmitting: refill.isPending,
  };
}