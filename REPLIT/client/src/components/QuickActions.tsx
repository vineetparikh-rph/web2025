import { Button } from "@/components/ui/button";
import { RotateCcw, ArrowRightLeft, MapPin, MessageCircle } from "lucide-react";
import SocketRefillModal from "./SocketRefillModal";

interface QuickActionsProps {
  onRefillClick: () => void;
  onTransferClick: () => void;
  onLocationsClick: () => void;
  onChatClick: () => void;
}

export default function QuickActions({
  onRefillClick,
  onTransferClick,
  onLocationsClick,
  onChatClick,
}: QuickActionsProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <SocketRefillModal
          trigger={
            <Button
              variant="ghost"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 hover:border-primary group h-auto flex-col space-y-3 w-full"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <RotateCcw className="text-primary h-6 w-6" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-slate-900 mb-1">Request Refill</h3>
                <p className="text-sm text-slate-600">Submit via WinRx portal</p>
              </div>
            </Button>
          }
        />

        <Button
          variant="ghost"
          onClick={onTransferClick}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 hover:border-secondary group h-auto flex-col space-y-3"
        >
          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
            <ArrowRightLeft className="text-secondary h-6 w-6" />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-slate-900 mb-1">Transfer Rx</h3>
            <p className="text-sm text-slate-600">Transfer prescriptions</p>
          </div>
        </Button>

        <Button
          variant="ghost"
          onClick={onLocationsClick}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 hover:border-warning group h-auto flex-col space-y-3"
        >
          <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center group-hover:bg-warning/20 transition-colors">
            <MapPin className="text-warning h-6 w-6" />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-slate-900 mb-1">Locations</h3>
            <p className="text-sm text-slate-600">Find nearest pharmacy</p>
          </div>
        </Button>

        <Button
          variant="ghost"
          onClick={onChatClick}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 hover:border-success group h-auto flex-col space-y-3"
        >
          <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center group-hover:bg-success/20 transition-colors">
            <MessageCircle className="text-success h-6 w-6" />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-slate-900 mb-1">Chat Support</h3>
            <p className="text-sm text-slate-600">Get help instantly</p>
          </div>
        </Button>
      </div>
    </section>
  );
}
