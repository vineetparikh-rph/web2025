import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Phone, ArrowLeft, ExternalLink } from "lucide-react";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface LocationData {
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
}

const locations: LocationData[] = [
  {
    name: "Georgies Family Pharmacy",
    address: "332 W. St. Georges Avenue\nLinden, NJ 07036-5638",
    phone: "(908) 925-4567",
    mapUrl: "https://maps.google.com/?q=332+W.+St.+Georges+Avenue,+Linden,+NJ+07036"
  },
  {
    name: "Georgies Specialty Pharmacy",
    address: "521 N Wood Avenue\nLinden, NJ 07036-4146",
    phone: "(908) 925-4566",
    mapUrl: "https://maps.google.com/?q=521+N+Wood+Avenue,+Linden,+NJ+07036"
  },
  {
    name: "Georgies Parlin Pharmacy",
    address: "499 Ernston Road\nParlin, NJ 08859-1406",
    phone: "(732) 952-3022",
    mapUrl: "https://maps.google.com/?q=499+Ernston+Road,+Parlin,+NJ+08859"
  },
  {
    name: "Georgies Outpatient Pharmacy",
    address: "6 Earlin Drive, Suite 130\nBrowns Mills, NJ 08015-1768",
    phone: "(609) 726-5800",
    mapUrl: "https://maps.google.com/?q=6+Earlin+Drive,+Suite+130,+Browns+Mills,+NJ+08015"
  }
];

export default function LocationsMap() {
  const [, setLocation] = useLocation();

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleDirections = (mapUrl: string) => {
    window.open(mapUrl, '_blank');
  };

  const openFullMap = () => {
    window.open("https://www.google.com/maps/search/pharmacy+near+Linden,+NJ/@40.6221,-74.2448,12z", '_blank');
  };

  const goBack = () => {
    setLocation('/locations');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-primary to-red-900 rounded-2xl p-6 sm:p-8 lg:p-10 text-white">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Find Your Nearest Georgies Pharmacy
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90">
            All locations pinned on the map for your convenience
          </p>
        </div>

        {/* Interactive Map Section */}
        <Card className="bg-white shadow-lg border-0 mb-6 sm:mb-8 lg:mb-10">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="bg-slate-50 border-2 border-dashed border-primary rounded-lg p-6 sm:p-8 lg:p-12 text-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4">
                Interactive Map View
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 max-w-md mx-auto leading-relaxed">
                Click the button below to open an interactive map with all Georgies Pharmacy locations
              </p>
              <Button
                onClick={openFullMap}
                className="bg-primary hover:bg-red-900 text-white px-6 py-3 text-sm sm:text-base font-semibold inline-flex items-center gap-2 mx-auto min-h-[48px] shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <ExternalLink className="h-4 w-4" />
                Open Full Map View
              </Button>
            </div>
            
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-slate-50 rounded-lg text-center">
              <p className="text-xs sm:text-sm text-slate-600 mb-0">
                <span className="font-semibold">Find Your Nearest Location:</span> Use the location cards below to get precise directions to each Georgies Pharmacy.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Locations Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-10">
          {locations.map((location, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 border-l-4 border-l-primary"
            >
              <CardHeader className="pb-3 sm:pb-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary">
                  {location.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 whitespace-pre-line leading-relaxed">
                  {location.address}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <button
                    onClick={() => handleCall(location.phone)}
                    className="text-primary hover:text-red-900 font-medium text-sm sm:text-base transition-colors duration-200 hover:underline"
                  >
                    {location.phone}
                  </button>
                </div>
                
                <Button
                  onClick={() => handleDirections(location.mapUrl)}
                  className="w-full bg-primary hover:bg-red-900 text-white h-10 sm:h-11 text-xs sm:text-sm font-medium min-h-[44px] transition-all duration-200 hover:shadow-lg active:shadow-sm"
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Button
            onClick={goBack}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 text-sm sm:text-base font-semibold border-2 inline-flex items-center gap-2 min-h-[48px] transition-all duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Locations
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}