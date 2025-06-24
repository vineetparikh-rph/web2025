import { useQuery } from "@tanstack/react-query";
import type { Patient } from "@/types";

export function usePatient(patientId: number) {
  return useQuery<Patient>({
    queryKey: [`/api/patient/${patientId}`],
  });
}
