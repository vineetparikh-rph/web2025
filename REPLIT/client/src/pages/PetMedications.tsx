import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Phone, ArrowRight, Heart, Pill, Stethoscope, Droplets, PawPrint, Leaf } from "lucide-react";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface MedicationCategory {
  icon: JSX.Element;
  title: string;
  description: string;
  medications: string[];
}

const medicationCategories: MedicationCategory[] = [
  {
    icon: <PawPrint className="h-12 w-12 text-primary" />,
    title: "Flea & Tick Prevention",
    description: "Protect your pets from fleas, ticks, and other parasites with our selection of topical and oral treatments.",
    medications: ["Frontline Plus", "Bravecto", "Seresto Collars", "Nexgard", "Simparica"]
  },
  {
    icon: <Heart className="h-12 w-12 text-primary" />,
    title: "Heartworm Prevention",
    description: "Keep your pet's heart healthy with effective heartworm preventatives available in various formulations.",
    medications: ["Heartgard Plus", "Interceptor Plus", "Revolution", "Trifexis", "Sentinel Spectrum"]
  },
  {
    icon: <Pill className="h-12 w-12 text-primary" />,
    title: "Antibiotics & Pain Relief",
    description: "Prescription medications to treat infections, manage pain, and support your pet's recovery.",
    medications: ["Amoxicillin", "Cephalexin", "Tramadol", "Carprofen", "Meloxicam"]
  },
  {
    icon: <Stethoscope className="h-12 w-12 text-primary" />,
    title: "Chronic Condition Management",
    description: "Long-term medications for managing diabetes, thyroid conditions, and other chronic health issues.",
    medications: ["Insulin (Vetsulin, Novolin)", "Levothyroxine", "Enalapril", "Furosemide", "Prednisone"]
  },
  {
    icon: <Droplets className="h-12 w-12 text-primary" />,
    title: "Skin & Ear Care",
    description: "Topical treatments for skin conditions, ear infections, and dermatological issues.",
    medications: ["Malaseb Shampoo", "Otomax", "Surolan", "Apoquel", "Atopica"]
  },
  {
    icon: <Leaf className="h-12 w-12 text-primary" />,
    title: "Supplements & Vitamins",
    description: "Nutritional support for joint health, digestive wellness, and overall pet vitality.",
    medications: ["Cosequin", "Dasuquin", "Omega-3 Supplements", "Probiotics", "Multivitamins"]
  }
];

interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
}

const steps: HowItWorksStep[] = [
  {
    number: 1,
    title: "Get Your Prescription",
    description: "Have your veterinarian send the prescription directly to us or bring it in person."
  },
  {
    number: 2,
    title: "We'll Prepare Your Order",
    description: "Our licensed pharmacists will carefully prepare your pet's medication with attention to detail."
  },
  {
    number: 3,
    title: "Pick Up or Delivery",
    description: "Choose convenient pickup at any of our locations or opt for our free delivery service."
  },
  {
    number: 4,
    title: "Ongoing Support",
    description: "Our team is always available to answer questions about your pet's medication and care."
  }
];

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <span className="text-2xl">💰</span>,
    title: "Best Prices Guaranteed",
    description: "Competitive pricing on all pet medications with price matching available on most items."
  },
  {
    icon: <span className="text-2xl">⚡</span>,
    title: "Fast Turnaround",
    description: "Most prescriptions ready within 2-4 hours, with express service available for urgent needs."
  },
  {
    icon: <span className="text-2xl">🎯</span>,
    title: "Expert Consultation",
    description: "Licensed pharmacists available to answer questions about dosing, side effects, and administration."
  },
  {
    icon: <span className="text-2xl">🚚</span>,
    title: "Free Delivery",
    description: "Complimentary delivery service to your home for orders over $50 within our service area."
  },
  {
    icon: <span className="text-2xl">📋</span>,
    title: "Prescription Management",
    description: "Easy refill reminders and automatic refill services to keep your pet's medications current."
  },
  {
    icon: <span className="text-2xl">🏥</span>,
    title: "Veterinary Partnership",
    description: "Direct coordination with your veterinarian for seamless prescription transfers and updates."
  }
];

export default function PetMedications() {
  const [, setLocation] = useLocation();

  const handleCall = () => {
    window.location.href = 'tel:+19089254567';
  };

  const handleTransfer = () => {
    setLocation('/services/transfers');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-primary to-red-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
            Pet Medications
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-90 mb-2 sm:mb-3">
            Better Care. Better Health. For Your Pets.
          </p>
          <p className="text-base sm:text-lg font-semibold">
            Best Prices for all pet medications
          </p>
        </div>

        {/* Intro Section */}
        <Card className="bg-white shadow-lg border-0 mb-8 sm:mb-10 lg:mb-12">
          <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6">
              Caring for Your Pet's Health
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              At Georgies Pharmacy, we understand that your pets are family. That's why we're proud to offer a comprehensive selection of pet medications at competitive prices. From prescription treatments to preventive care, we're here to help keep your furry friends healthy and happy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleCall}
                className="w-full sm:w-auto bg-primary hover:bg-red-900 text-white px-6 py-3 min-h-[48px] text-sm sm:text-base font-semibold transition-all duration-200 hover:shadow-lg"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call for Pet Prescriptions
              </Button>
              <Button
                onClick={handleTransfer}
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 min-h-[48px] text-sm sm:text-base font-semibold border-2 transition-all duration-200"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                Transfer Pet Prescription
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Categories Section */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary text-center mb-6 sm:mb-8 lg:mb-10">
            Pet Medication Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {medicationCategories.map((category, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 border-t-4 border-t-primary">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {category.medications.map((medication, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-700 py-2 border-b border-slate-100 last:border-b-0">
                        {medication}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <Card className="bg-white shadow-lg border-0 mb-8 sm:mb-10 lg:mb-12">
          <CardContent className="p-6 sm:p-8 lg:p-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary text-center mb-6 sm:mb-8">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-900 mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <Card className="bg-white shadow-lg border-0 mb-8 sm:mb-10 lg:mb-12">
          <CardContent className="p-6 sm:p-8 lg:p-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary text-center mb-6 sm:mb-8">
              Why Choose Georgies for Pet Medications?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-gradient-to-r from-primary to-red-900 text-white shadow-lg border-0">
          <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us today to discuss your pet's medication needs. Our friendly team is here to help ensure your furry family members get the best care possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 justify-center items-center">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <a href="tel:+19089254567" className="text-white hover:underline font-semibold text-sm sm:text-base">
                  (908) 925-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <span className="font-semibold text-sm sm:text-base">info@georgiesrx.com</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
}