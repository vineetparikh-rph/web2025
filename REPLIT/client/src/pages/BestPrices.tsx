import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MapPin, DollarSign, TrendingDown, Shield, Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface PriceResult {
  pharmacy: string;
  medication: string;
  quantity: string;
  price: number;
  savings: number;
}

export default function BestPrices() {
  const [medicationName, setMedicationName] = useState("");
  const [strength, setStrength] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [medicationType, setMedicationType] = useState("generic");
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const popularMedications = [
    "Metformin 500mg", "Lisinopril 10mg", "Atorvastatin 20mg", "Metoprolol 50mg",
    "Amlodipine 5mg", "Omeprazole 20mg", "Levothyroxine 75mcg", "Hydrochlorothiazide 25mg",
    "Simvastatin 40mg", "Losartan 50mg", "Gabapentin 300mg", "Sertraline 50mg",
    "Prednisone 20mg", "Furosemide 40mg", "Tramadol 50mg", "Ibuprofen 600mg",
    "Warfarin 5mg", "Citalopram 20mg", "Pantoprazole 40mg", "Insulin 100units/ml",
    "Amoxicillin 500mg", "Albuterol 90mcg", "Clonazepam 1mg", "Cyclobenzaprine 10mg"
  ];

  const sampleResults: PriceResult[] = [
    { pharmacy: "Georgies Family Pharmacy", medication: "Generic Metformin 500mg", quantity: "90 tablets", price: 15.99, savings: 24.50 },
    { pharmacy: "Georgies Specialty Pharmacy", medication: "Generic Metformin 500mg", quantity: "90 tablets", price: 16.49, savings: 24.00 },
    { pharmacy: "Georgies Parlin Pharmacy", medication: "Generic Metformin 500mg", quantity: "90 tablets", price: 15.99, savings: 24.50 },
    { pharmacy: "Chain Pharmacy A", medication: "Generic Metformin 500mg", quantity: "90 tablets", price: 28.99, savings: 11.50 },
    { pharmacy: "Chain Pharmacy B", medication: "Generic Metformin 500mg", quantity: "90 tablets", price: 32.49, savings: 8.00 },
    { pharmacy: "Online Pharmacy", medication: "Generic Metformin 500mg", quantity: "90 tablets", price: 40.49, savings: 0.00 }
  ];

  const searchPrices = async (e: FormEvent) => {
    e.preventDefault();
    if (!medicationName.trim() || !strength.trim() || !zipcode.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setShowResults(true);
      setLoading(false);
    }, 1500);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };

  const handlePopularSearch = (medication: string) => {
    const [name, strengthPart] = medication.split(' ');
    setMedicationName(name);
    setStrength(strengthPart || "");
    setZipcode("07036");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-10 bg-gradient-to-br from-primary to-red-900 rounded-xl p-12 text-white shadow-xl">
          <h1 className="text-5xl font-bold mb-4">Best Prices</h1>
          <p className="text-xl mb-2 opacity-90">Better Care. Better Health.</p>
          <div className="bg-white/15 text-white px-6 py-3 rounded-full inline-block font-semibold mt-4">
            Compare prescription prices and save money
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-xl p-10 mb-10 shadow-lg">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Find the Best Price For Your Medication
          </h2>
          
          <form onSubmit={searchPrices} className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Input
                type="text"
                placeholder="Medication name (e.g., Metformin, Lisinopril)"
                value={medicationName}
                onChange={(e) => setMedicationName(e.target.value)}
                className="flex-1 text-lg p-4 border-2 focus:border-primary"
                required
              />
              <Input
                type="text"
                placeholder="Strength (e.g., 500mg, 10mg)"
                value={strength}
                onChange={(e) => setStrength(e.target.value)}
                className="flex-1 text-lg p-4 border-2 focus:border-primary"
                required
              />
              <Input
                type="text"
                placeholder="Zip Code (e.g., 07036)"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                className="flex-1 text-lg p-4 border-2 focus:border-primary"
                required
              />
              <Button 
                type="submit" 
                disabled={loading}
                className="bg-primary hover:bg-red-900 px-8 py-4 text-lg font-semibold min-w-[140px]"
              >
                {loading ? "Searching..." : "Search Prices"}
              </Button>
            </div>
            
            <div className="flex justify-center gap-8 flex-wrap">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="medicationType"
                  value="brand"
                  checked={medicationType === "brand"}
                  onChange={(e) => setMedicationType(e.target.value)}
                  className="w-4 h-4 text-primary accent-primary"
                />
                <span className="text-slate-600 font-medium">Brand Name</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="medicationType"
                  value="generic"
                  checked={medicationType === "generic"}
                  onChange={(e) => setMedicationType(e.target.value)}
                  className="w-4 h-4 text-primary accent-primary"
                />
                <span className="text-slate-600 font-medium">Generic</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="medicationType"
                  value="both"
                  checked={medicationType === "both"}
                  onChange={(e) => setMedicationType(e.target.value)}
                  className="w-4 h-4 text-primary accent-primary"
                />
                <span className="text-slate-600 font-medium">Both</span>
              </label>
            </div>
          </form>
        </div>

        {/* Price Comparison Results */}
        {showResults && (
          <div className="bg-white rounded-xl p-10 mb-10 shadow-lg">
            <h3 className="text-3xl font-bold text-primary text-center mb-8">
              Price Comparison Results
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-8">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left font-semibold">Pharmacy</th>
                    <th className="p-4 text-left font-semibold">Medication</th>
                    <th className="p-4 text-left font-semibold">Quantity</th>
                    <th className="p-4 text-left font-semibold">Price</th>
                    <th className="p-4 text-left font-semibold">Savings vs. Average</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleResults.map((result, index) => (
                    <tr key={index} className="border-b hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium">{result.pharmacy}</td>
                      <td className="p-4">{result.medication}</td>
                      <td className="p-4">{result.quantity}</td>
                      <td className={`p-4 font-bold ${index < 3 ? 'text-green-600' : ''}`}>
                        {formatPrice(result.price)}
                      </td>
                      <td className="p-4 text-green-600 font-semibold">
                        {result.savings > 0 ? `$${result.savings.toFixed(2)}` : '--'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 text-center rounded-r">
              <div className="text-2xl font-bold text-green-600 mb-2">Save up to $24.50</div>
              <p className="text-slate-700">by choosing any Georgies Pharmacy location over other options</p>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="bg-white rounded-xl p-10 mb-10 shadow-lg">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Why Our Price Comparison Tool?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl flex-shrink-0">
                💰
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Real-Time Pricing</h3>
                <p className="text-slate-600 leading-relaxed">
                  Get up-to-date pricing from multiple sources including Mark Cuban Cost Plus Drug pricing data.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl flex-shrink-0">
                🔍
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Comprehensive Search</h3>
                <p className="text-slate-600 leading-relaxed">
                  Compare prices across brand name, generic, and alternative medications to find the best deal.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl flex-shrink-0">
                📊
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Transparent Comparison</h3>
                <p className="text-slate-600 leading-relaxed">
                  See exactly how much you can save compared to other pharmacies and online retailers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl flex-shrink-0">
                🎯
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Local Focus</h3>
                <p className="text-slate-600 leading-relaxed">
                  Prioritizes local pharmacy options while showing national pricing benchmarks.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl flex-shrink-0">
                🚀
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Fast Results</h3>
                <p className="text-slate-600 leading-relaxed">
                  Get pricing information in seconds, with options to transfer or fill prescriptions immediately.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl flex-shrink-0">
                🔒
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">No Personal Info Required</h3>
                <p className="text-slate-600 leading-relaxed">
                  Search anonymously without providing personal information or insurance details.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="bg-white rounded-xl p-10 mb-10 shadow-lg overflow-hidden">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Popular Medication Searches
          </h2>
          
          <div className="relative h-16 bg-slate-50 rounded-lg flex items-center overflow-hidden">
            <div 
              className="flex whitespace-nowrap animate-scroll hover:pause"
              style={{
                animation: 'scroll 45s linear infinite'
              }}
            >
              {[...popularMedications, ...popularMedications].map((medication, index) => (
                <div
                  key={index}
                  onClick={() => handlePopularSearch(medication)}
                  className="inline-flex items-center bg-primary text-white rounded-full px-6 py-3 mr-5 cursor-pointer hover:bg-red-900 transition-all duration-300 hover:scale-105 font-medium flex-shrink-0"
                >
                  {medication}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-primary to-red-900 text-white rounded-xl p-10 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Questions About Pricing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact any of our locations for personalized pricing information and to discuss your prescription needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-6 w-6" />
              <a href="tel:+19089254567" className="font-semibold hover:underline text-center">
                Georgies Family Pharmacy<br />(908) 925-4567
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-6 w-6" />
              <a href="tel:+19089254566" className="font-semibold hover:underline text-center">
                Georgies Specialty Pharmacy<br />(908) 925-4566
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-6 w-6" />
              <a href="tel:+17329523022" className="font-semibold hover:underline text-center">
                Georgies Parlin Pharmacy<br />(732) 952-3022
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-6 w-6" />
              <a href="tel:+16097265800" className="font-semibold hover:underline text-center">
                Georgies Outpatient Pharmacy<br />(609) 726-5800
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}