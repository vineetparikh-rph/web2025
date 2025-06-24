import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Prescription } from "@/types";

interface PrescriptionCardProps {
  prescription: Prescription;
  onRefill: () => void;
}

const statusColors = {
  ready: "bg-success/10 text-success",
  processing: "bg-warning/10 text-warning",
  pending: "bg-slate-100 text-slate-600",
  filled: "bg-red-100 text-red-600",
};

const statusLabels = {
  ready: "Ready",
  processing: "Processing",
  pending: "Pending",
  filled: "Filled",
};

export default function PrescriptionCard({ prescription, onRefill }: PrescriptionCardProps) {
  const isRefillDisabled = prescription.status === "processing" || prescription.refillsLeft === 0;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-slate-900">{prescription.medicationName}</h3>
          <p className="text-sm text-slate-600">{prescription.instructions}</p>
        </div>
        <Badge className={statusColors[prescription.status as keyof typeof statusColors]}>
          {statusLabels[prescription.status as keyof typeof statusLabels]}
        </Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide">Rx Number</p>
          <p className="font-medium text-slate-900">{prescription.rxNumber}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide">Refills Left</p>
          <p className="font-medium text-slate-900">{prescription.refillsLeft}</p>
        </div>
      </div>

      <div className="flex space-x-2">
        <Button
          onClick={onRefill}
          disabled={isRefillDisabled}
          className="flex-1 bg-primary text-white hover:bg-primary/90 disabled:bg-slate-200 disabled:text-slate-400"
        >
          {prescription.status === "processing" ? "Processing..." : "Refill Now"}
        </Button>
        <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
          Details
        </Button>
      </div>
    </div>
  );
}
