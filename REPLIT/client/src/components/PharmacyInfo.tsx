import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export default function PharmacyInfo() {
  const { data: locations } = useQuery({
    queryKey: ["/api/pharmacy-locations"],
  });

  const mainLocation = locations?.[0];

  const handleGetDirections = () => {
    if (mainLocation) {
      const address = encodeURIComponent(`${mainLocation.address}, ${mainLocation.city}, ${mainLocation.state} ${mainLocation.zipCode}`);
      window.open(`https://maps.google.com/?q=${address}`, '_blank');
    }
  };

  const handleCallPharmacy = () => {
    if (mainLocation) {
      window.location.href = `tel:${mainLocation.phone}`;
    }
  };

  if (!mainLocation) {
    return null;
  }

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Your Pharmacy</h2>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">{mainLocation.name}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-slate-400 h-5 w-5 mt-0.5" />
                <div>
                  <p className="text-slate-900">{mainLocation.address}</p>
                  <p className="text-slate-600">{mainLocation.city}, {mainLocation.state} {mainLocation.zipCode}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-slate-400 h-5 w-5" />
                <a 
                  href={`tel:${mainLocation.phone}`} 
                  className="text-primary hover:text-red-700 transition-colors"
                >
                  {mainLocation.phone}
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="text-slate-400 h-5 w-5 mt-0.5" />
                <div>
                  {mainLocation.hours.split('\n').map((line, index) => (
                    <p key={index} className={index === 0 ? "text-slate-900" : "text-slate-600"}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-4">
              <Button 
                onClick={handleGetDirections}
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Navigation className="h-4 w-4 mr-2" />
                Directions
              </Button>
              <Button 
                variant="outline"
                onClick={handleCallPharmacy}
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="w-full h-48 bg-slate-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-slate-400 h-8 w-8 mx-auto mb-2" />
                <p className="text-slate-600 text-sm">Interactive map would load here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
