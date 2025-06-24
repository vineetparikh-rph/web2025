import React, { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Phone, MapPin, Clock, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface LocationData {
  name: string;
  address: string;
  phone: string;
  fax: string;
  hours: { day: string; time: string }[];
  services: string[];
  mapUrl: string;
}

const locations: LocationData[] = [
  {
    name: "Georgies Family Pharmacy",
    address: "332 W. St. Georges Avenue\nLinden, NJ 07036-5638",
    phone: "(908) 925-4567",
    fax: "(908) 925-8090",
    hours: [
      { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
      { day: "Saturday", time: "9:00 AM - 5:00 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    services: ["Prescription Services", "Vaccinations", "Health Consultations", "Medication Therapy Management"],
    mapUrl: "https://maps.google.com/?q=332+W.+St.+Georges+Avenue,+Linden,+NJ+07036"
  },
  {
    name: "Georgies Specialty Pharmacy",
    address: "521 N Wood Avenue\nLinden, NJ 07036-4146",
    phone: "(908) 925-4566",
    fax: "(908) 345-5030",
    hours: [
      { day: "Monday - Friday", time: "9:30 AM - 6:00 PM" },
      { day: "Saturday", time: "Closed" },
      { day: "Sunday", time: "Closed" }
    ],
    services: ["Specialty Medications", "Compounding", "Clinical Services", "Patient Education"],
    mapUrl: "https://maps.google.com/?q=521+N+Wood+Avenue,+Linden,+NJ+07036"
  },
  {
    name: "Georgies Parlin Pharmacy",
    address: "499 Ernston Road\nParlin, NJ 08859-1406",
    phone: "(732) 952-3022",
    fax: "(407) 641-8434",
    hours: [
      { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
      { day: "Saturday", time: "9:00 AM - 5:00 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    services: ["Full Pharmacy Services", "Immunizations", "Blood Pressure Monitoring", "Diabetes Care"],
    mapUrl: "https://maps.google.com/?q=499+Ernston+Road,+Parlin,+NJ+08859"
  },
  {
    name: "Georgies Outpatient Pharmacy",
    address: "6 Earlin Drive, Suite 130\nBrowns Mills, NJ 08015-1768",
    phone: "(609) 726-5800",
    fax: "(609) 726-5810",
    hours: [
      { day: "Monday - Friday", time: "9:30 AM - 6:00 PM" },
      { day: "Saturday", time: "10:00 AM - 2:00 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    services: ["Hospital Outpatient Services", "Discharge Medications", "Clinical Consultations", "Medication Reviews"],
    mapUrl: "https://maps.google.com/?q=6+Earlin+Drive,+Suite+130,+Browns+Mills,+NJ+08015"
  }
];

type ActionType = "call" | "refill" | "delivery" | "transfer" | "";
type LocationType = "family" | "specialty" | "parlin" | "outpatient" | "";

export default function Locations() {
  // SEO: Update page title for location searches
  React.useEffect(() => {
    document.title = "Pharmacy Locations | Georgies Pharmacy - Linden, Parlin, Browns Mills NJ";
  }, []);
  const [selectedAction, setSelectedAction] = useState<ActionType>("");
  const [selectedLocation, setSelectedLocation] = useState<LocationType>("");
  const [, setLocation] = useLocation();

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleDirections = (mapUrl: string) => {
    window.open(mapUrl, '_blank');
  };

  const handleRefill = () => {
    setLocation('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-primary to-red-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Georgies Pharmacy Locations
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-90 mb-6 sm:mb-8">
            Better Care. Better Health.
          </p>
          
          {/* Action Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-4xl mx-auto">
            {[
              { value: "call", label: "Call Now" },
              { value: "refill", label: "Refill Prescriptions" },
              { value: "delivery", label: "Schedule Delivery" },
              { value: "transfer", label: "Transfer Now" }
            ].map((action) => (
              <label
                key={action.value}
                className={`flex items-center justify-center gap-3 p-3 sm:p-4 bg-white/15 border-2 border-white/30 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/25 hover:border-white/60 hover:-translate-y-1 ${
                  selectedAction === action.value ? 'bg-white/30 border-white shadow-lg' : ''
                }`}
              >
                <input
                  type="radio"
                  name="action"
                  value={action.value}
                  checked={selectedAction === action.value}
                  onChange={(e) => setSelectedAction(e.target.value as ActionType)}
                  className="w-4 h-4 accent-white"
                />
                <span className={`text-sm sm:text-base font-medium ${selectedAction === action.value ? 'text-white' : 'text-white/90'}`}>
                  {action.label}
                </span>
              </label>
            ))}
          </div>
          
          {/* Location Dropdown */}
          <div className="max-w-md mx-auto">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value as LocationType)}
              className="w-full p-3 sm:p-4 border-2 border-white/30 rounded-lg bg-white/15 text-white text-sm sm:text-base backdrop-blur-md focus:outline-none focus:border-white/60 focus:bg-white/25 transition-all duration-300"
            >
              <option value="" className="text-slate-900">Select a Location</option>
              <option value="family" className="text-slate-900">Georgies Family Pharmacy - Linden</option>
              <option value="specialty" className="text-slate-900">Georgies Specialty Pharmacy - Linden</option>
              <option value="parlin" className="text-slate-900">Georgies Parlin Pharmacy - Parlin</option>
              <option value="outpatient" className="text-slate-900">Georgies Outpatient Pharmacy - Browns Mills</option>
            </select>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {locations.map((location, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
              <CardHeader className="border-b-3 border-primary pb-4 sm:pb-6">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                    {location.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 whitespace-pre-line leading-relaxed">
                    {location.address}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Contact Information */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <button
                      onClick={() => handleCall(location.phone)}
                      className="text-primary hover:text-red-900 font-medium text-sm sm:text-base transition-colors duration-200"
                    >
                      {location.phone}
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 flex-shrink-0" />
                    <span className="text-slate-600 text-sm sm:text-base">Fax: {location.fax}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <button
                      onClick={() => handleDirections(location.mapUrl)}
                      className="text-primary hover:text-red-900 font-medium text-sm sm:text-base transition-colors duration-200"
                    >
                      Get Directions
                    </button>
                  </div>
                </div>

                {/* Store Hours */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Store Hours</h4>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="text-left p-2 sm:p-3 font-semibold text-xs sm:text-sm">Day</th>
                          <th className="text-left p-2 sm:p-3 font-semibold text-xs sm:text-sm">Hours</th>
                        </tr>
                      </thead>
                      <tbody>
                        {location.hours.map((hour, idx) => (
                          <tr key={idx} className={idx !== location.hours.length - 1 ? 'border-b border-slate-200' : ''}>
                            <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-slate-700">{hour.day}</td>
                            <td className="p-2 sm:p-3 text-xs sm:text-sm text-slate-600">{hour.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Services */}
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Services Available</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {location.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-slate-50 rounded-md">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-slate-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    onClick={() => handleCall(location.phone)}
                    className="flex-1 bg-primary hover:bg-red-900 text-white min-h-[44px] text-sm sm:text-base font-medium transition-all duration-200 hover:shadow-lg active:shadow-sm"
                  >
                    Call Now
                  </Button>
                  <Button
                    onClick={() => handleDirections(location.mapUrl)}
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white min-h-[44px] text-sm sm:text-base font-medium border-2 transition-all duration-200"
                  >
                    Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Information */}
        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-6 sm:p-8 text-center space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">
              Need Help Choosing a Service?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {[
                { value: "call", label: "Call for Consultation" },
                { value: "refill", label: "Online Refills" },
                { value: "delivery", label: "Home Delivery" },
                { value: "transfer", label: "Transfer Prescriptions" }
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center justify-center gap-3 p-3 sm:p-4 bg-slate-50 border-2 border-slate-200 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white hover:border-primary hover:shadow-md ${
                    selectedAction === option.value ? 'bg-white border-primary shadow-md' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="footerAction"
                    value={option.value}
                    checked={selectedAction === option.value}
                    onChange={(e) => setSelectedAction(e.target.value as ActionType)}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className={`text-sm sm:text-base font-medium ${selectedAction === option.value ? 'text-primary' : 'text-slate-700'}`}>
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Button
                onClick={handleRefill}
                className="w-full sm:w-auto bg-primary hover:bg-red-900 text-white px-6 py-3 min-h-[48px] text-sm sm:text-base font-medium transition-all duration-200 hover:shadow-lg"
              >
                Start Online Services
              </Button>
              <Button
                onClick={() => setLocation('/locations/map')}
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 min-h-[48px] text-sm sm:text-base font-medium border-2 transition-all duration-200"
              >
                Click Here for More Info
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
}