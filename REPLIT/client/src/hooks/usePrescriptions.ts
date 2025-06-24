import { useQuery } from "@tanstack/react-query";
import type { Prescription } from "@/types";

export function usePrescriptions(patientId: number) {
  return useQuery<Prescription[]>({
    queryKey: [`/api/patient/${patientId}/prescriptions`],
  });
}
