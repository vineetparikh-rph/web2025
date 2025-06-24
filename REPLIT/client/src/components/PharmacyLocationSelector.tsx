import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Navigation, Building2, Map } from "lucide-react";

interface PharmacyLocation {
  name: string;
  legalName: string;
  address: string;
  phone: string;
  fax: string;
  nabp: string;
  refillUrl: string;
}

interface PharmacyLocationSelectorProps {
  onLocationSelect: (location: PharmacyLocation) => void;
  selectedLocation?: PharmacyLocation | null;
  className?: string;
  showMap?: boolean;
}

export default function PharmacyLocationSelector({ 
  onLocationSelect, 
  selectedLocation, 
  className = "",
  showMap = true 
}: PharmacyLocationSelectorProps) {
  const [locations, setLocations] = useState<PharmacyLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  useEffect(() => {
    fetchPharmacyLocations();
  }, []);

  const fetchPharmacyLocations = async () => {
    try {
      const response = await fetch("/api/pharmacy-system/locations");
      const data = await response.json();
      
      if (data.success) {
        setLocations(data.locations);
      }
    } catch (err) {
      console.error("Failed to fetch pharmacy locations:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleGetDirections = (location: PharmacyLocation) => {
    const encodedAddress = encodeURIComponent(location.address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  const parseAddress = (fullAddress: string) => {
    // Split the full address to extract components
    const parts = fullAddress.split(', ');
    const address = parts[0];
    const cityStateZip = parts.slice(1).join(', ');
    return { address, cityStateZip };
  };

  if (loading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Loading Pharmacy Locations...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-slate-200 rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-primary" />
              Select Pharmacy Location
            </CardTitle>
            <CardDescription>
              Choose your preferred Georgies Pharmacy location for services and refills.
            </CardDescription>
          </div>
          {showMap && (
            <div className="flex space-x-2">
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                List
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('map')}
              >
                <Map className="w-4 h-4 mr-1" />
                Map
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        {viewMode === 'list' ? (
          <div className="space-y-4">
            {/* Quick Selector Dropdown */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Quick Select:</label>
              <Select 
                value={selectedLocation?.nabp || ""} 
                onValueChange={(nabp) => {
                  const location = locations.find(loc => loc.nabp === nabp);
                  if (location) onLocationSelect(location);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a pharmacy location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location.nabp} value={location.nabp}>
                      <div className="flex flex-col">
                        <span className="font-medium">{location.name}</span>
                        <span className="text-xs text-slate-500">{parseAddress(location.address).cityStateZip}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location Cards */}
            <div className="space-y-3">
              {locations.map((location) => {
                const { address, cityStateZip } = parseAddress(location.address);
                const isSelected = selectedLocation?.nabp === location.nabp;
                
                return (
                  <Card 
                    key={location.nabp}
                    className={`cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? 'ring-2 ring-primary bg-primary/5' 
                        : 'hover:shadow-md hover:bg-slate-50'
                    }`}
                    onClick={() => onLocationSelect(location)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-slate-900">{location.name}</h3>
                            {isSelected && (
                              <Badge className="bg-primary text-white text-xs">Selected</Badge>
                            )}
                          </div>
                          
                          <div className="space-y-1 text-sm text-slate-600">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-3 h-3 text-slate-400" />
                              <span>{address}</span>
                            </div>
                            <div className="ml-5">{cityStateZip}</div>
                            <div className="flex items-center space-x-2">
                              <Phone className="w-3 h-3 text-slate-400" />
                              <span>{location.phone}</span>
                            </div>
                            <div className="ml-5 text-xs">
                              <span className="font-medium">NABP:</span> {location.nabp}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col space-y-2 ml-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleGetDirections(location);
                            }}
                            className="text-xs"
                          >
                            <Navigation className="w-3 h-3 mr-1" />
                            Directions
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(`tel:${location.phone}`);
                            }}
                            className="text-xs"
                          >
                            <Phone className="w-3 h-3 mr-1" />
                            Call
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ) : (
          /* Map View */
          <div className="space-y-4">
            <div className="w-full h-96 bg-slate-100 rounded-lg border border-slate-300 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193681.46573821695!2d-74.51168627832031!3d40.32158399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b3b3b3b3b3b3%3A0x1234567890abcdef!2sNew%20Jersey!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Georgies Pharmacy Locations"
              ></iframe>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {locations.map((location) => (
                <Button
                  key={location.nabp}
                  variant={selectedLocation?.nabp === location.nabp ? "default" : "outline"}
                  size="sm"
                  onClick={() => onLocationSelect(location)}
                  className="text-xs h-auto p-2"
                >
                  <div className="text-center">
                    <div className="font-medium">{location.name.replace("Georgies ", "")}</div>
                    <div className="text-xs opacity-75">{parseAddress(location.address).cityStateZip.split(',')[0]}</div>
                  </div>
                </Button>
              ))}
            </div>

            {selectedLocation && (
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-primary mb-2">Selected Location</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    <strong>{selectedLocation.name}</strong>
                    <br />
                    {selectedLocation.address}
                    <br />
                    Phone: {selectedLocation.phone}
                  </p>
                  <div className="flex space-x-2">
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
                      onClick={() => window.open(`tel:${selectedLocation.phone}`)}
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}