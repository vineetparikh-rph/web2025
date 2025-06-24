import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Phone, Clock, Navigation, Building2 } from "lucide-react";

interface PharmacyLocation {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  hours: string;
}

interface LocationsModalProps {
  open: boolean;
  onClose: () => void;
}

const pharmacyLocations: PharmacyLocation[] = [
  {
    id: 1,
    name: "Georgies Family Pharmacy",
    address: "332 W. St. Georges Avenue",
    city: "Linden",
    state: "NJ",
    zipCode: "07036-5638",
    phone: "908-925-4567",
    hours: "Mon-Fri: 8AM-9PM, Sat-Sun: 9AM-6PM",
  },
  {
    id: 2,
    name: "Georgies Specialty Pharmacy",
    address: "521 N Wood Avenue",
    city: "Linden",
    state: "NJ",
    zipCode: "07036-4146",
    phone: "908-925-4566",
    hours: "Mon-Fri: 8AM-9PM, Sat-Sun: 9AM-6PM",
  },
  {
    id: 3,
    name: "Georgies Parlin Pharmacy",
    address: "499 Ernston Road",
    city: "Parlin",
    state: "NJ",
    zipCode: "08859-1406",
    phone: "732-952-3022",
    hours: "Mon-Fri: 8AM-9PM, Sat-Sun: 9AM-6PM",
  },
  {
    id: 4,
    name: "Georgies Outpatient Pharmacy",
    address: "6 Earlin Drive, Suite 130",
    city: "Browns Mills",
    state: "NJ",
    zipCode: "08015-1768",
    phone: "609-726-5800",
    hours: "Mon-Fri: 8AM-9PM, Sat-Sun: 9AM-6PM",
  }
];

export default function LocationsModal({ open, onClose }: LocationsModalProps) {
  const [selectedLocation, setSelectedLocation] = useState<PharmacyLocation | null>(null);

  const handleGetDirections = (location: PharmacyLocation) => {
    const address = `${location.address}, ${location.city}, ${location.state} ${location.zipCode}`;
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  const handleCallPharmacy = (phone: string) => {
    window.open(`tel:${phone}`);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl">
            <Building2 className="w-6 h-6 mr-2 text-primary" />
            Georgies Pharmacy Locations
          </DialogTitle>
          <DialogDescription>
            Find and get directions to any of our convenient pharmacy locations throughout New Jersey.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Interactive Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48352.36573821695!2d-74.28168627832031!3d40.62158399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b3b3b3b3b3b3%3A0x1234567890abcdef!2sLinden%2C%20NJ!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Georgies Pharmacy Locations Map"
                    className="rounded-lg"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none"></div>
                </div>
                <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {pharmacyLocations.map((location) => (
                    <Button
                      key={location.id}
                      variant={selectedLocation?.id === location.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedLocation(location)}
                      className="text-xs"
                    >
                      {location.name.replace("Georgies ", "")}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Cards */}
          {pharmacyLocations.map((location) => (
            <Card 
              key={location.id} 
              className={`transition-all duration-200 ${
                selectedLocation?.id === location.id 
                  ? 'ring-2 ring-primary bg-primary/5' 
                  : 'hover:shadow-md cursor-pointer'
              }`}
              onClick={() => setSelectedLocation(location)}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-semibold text-slate-900">
                      {location.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-600">
                      Full-service pharmacy with expert care
                    </CardDescription>
                  </div>
                  {selectedLocation?.id === location.id && (
                    <Badge className="bg-primary text-white">Selected</Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <div className="font-medium text-slate-900">{location.address}</div>
                      <div className="text-slate-600">
                        {location.city}, {location.state} {location.zipCode}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <div className="text-sm">
                      <a 
                        href={`tel:${location.phone}`}
                        className="font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-slate-600">{location.hours}</div>
                  </div>
                </div>

                <div className="flex space-x-2 pt-4 border-t border-slate-200">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGetDirections(location);
                    }}
                    className="flex-1 text-primary border-primary hover:bg-primary hover:text-white"
                  >
                    <Navigation className="w-3 h-3 mr-1" />
                    Directions
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCallPharmacy(location.phone);
                    }}
                    className="flex-1 text-secondary border-secondary hover:bg-secondary hover:text-white"
                  >
                    <Phone className="w-3 h-3 mr-1" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedLocation && (
          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Selected Location</h4>
            <p className="text-sm text-slate-700">
              <strong>{selectedLocation.name}</strong> - {selectedLocation.address}, {selectedLocation.city}, {selectedLocation.state}
            </p>
            <div className="flex space-x-2 mt-3">
              <Button
                size="sm"
                onClick={() => handleGetDirections(selectedLocation)}
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Navigation className="w-3 h-3 mr-1" />
                Get Directions
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCallPharmacy(selectedLocation.phone)}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Phone className="w-3 h-3 mr-1" />
                Call Now
              </Button>
            </div>
          </div>
        )}

        <div className="flex justify-end pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}