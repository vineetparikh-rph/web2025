import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Hours() {
  const locations = [
    {
      name: "Georgies Family Pharmacy",
      address: "332 W. St. Georges Avenue, Linden, NJ 07036-5638",
      phone: "908-925-4567",
      hours: {
        weekdays: "Monday - Friday: 9:00 AM - 7:00 PM",
        saturday: "Saturday: 9:00 AM - 5:00 PM",
        sunday: "Sunday: Closed"
      }
    },
    {
      name: "Georgies Specialty Pharmacy",
      address: "521 N Wood Avenue, Linden, NJ 07036-4146",
      phone: "908-925-4566",
      hours: {
        weekdays: "Monday - Friday: 9:30 AM - 6:00 PM",
        saturday: "Saturday: Closed",
        sunday: "Sunday: Closed"
      }
    },
    {
      name: "Georgies Parlin Pharmacy",
      address: "499 Ernston Road, Parlin, NJ 08859-1406",
      phone: "732-952-3022",
      hours: {
        weekdays: "Monday - Friday: 9:00 AM - 7:00 PM",
        saturday: "Saturday: 9:00 AM - 5:00 PM",
        sunday: "Sunday: Closed"
      }
    },
    {
      name: "Georgies Outpatient Pharmacy",
      address: "6 Earlin Drive, Suite 130, Browns Mills, NJ 08015-1768",
      phone: "609-726-5800",
      hours: {
        weekdays: "Monday - Friday: 9:30 AM - 6:00 PM",
        saturday: "Saturday: 10:00 AM - 2:00 PM",
        sunday: "Sunday: Closed"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Pharmacy Hours</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Find the operating hours for all Georgies Pharmacy locations.
          </p>
        </div>

        {/* Standard Hours Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Standard Hours</h2>
          <p className="text-lg text-slate-600 mb-8">All Georgies Pharmacy Locations</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    {location.name}
                  </CardTitle>
                  <CardDescription className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
                    {location.address}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-700">Weekdays:</span>
                      <span className="text-slate-600">{location.hours.weekdays.split(': ')[1]}</span>
                    </div>
                    {location.hours.saturday !== "Saturday: Closed" && (
                      <div className="flex justify-between">
                        <span className="font-medium text-slate-700">Saturday:</span>
                        <span className="text-slate-600">{location.hours.saturday.split(': ')[1]}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-700">Sunday:</span>
                      <span className="text-slate-600">Closed</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(`tel:${location.phone}`)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {location.phone}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Holiday Hours Section */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Holiday Hours</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-slate-600 mb-4">
                Our pharmacy hours may vary during holidays. Please call your local Georgies Pharmacy location or check our website for holiday-specific hours.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Major Holidays</h3>
                  <p className="text-slate-600">Closed on Christmas Day and New Year's Day</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Other Holidays</h3>
                  <p className="text-slate-600">
                    Modified hours may apply on Thanksgiving, Memorial Day, Independence Day, and Labor Day
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}