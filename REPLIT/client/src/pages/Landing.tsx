import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pill, Shield, Clock, Users, ArrowRight, ChevronDown, Car, Menu } from "lucide-react";

export default function Landing() {
  // SEO: Set document title for better search rankings
  React.useEffect(() => {
    document.title = "Georgies Pharmacy - #1 Rated Pharmacy | Linden, Parlin, Browns Mills NJ | Better Care. Better Health.™";
    
    // Add structured data for local business
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Georgies Pharmacy",
      "image": "https://georgiesrx.com/logo.png",
      "address": {
        "@type": "PostalAddress", 
        "streetAddress": "332 W. St. Georges Avenue",
        "addressLocality": "Linden",
        "addressRegion": "NJ",
        "postalCode": "07036",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.6220,
        "longitude": -74.2447
      },
      "url": "https://georgiesrx.com",
      "telephone": "+19089254567",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification", 
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "17:00"
        }
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
  const [shuffledTestimonials, setShuffledTestimonials] = useState([]);
  
  const locations = ["Family", "Specialty", "Parlin", "Outpatient"];

  // Array of testimonials to randomize
  const allTestimonials = [
    {
      id: "SM",
      name: "Sarah M.",
      initials: "SM",
      review: "Amazing service! The staff is incredibly helpful and my prescriptions are always ready on time. The online system makes everything so convenient.",
      source: "via Facebook"
    },
    {
      id: "DJ",
      name: "David J.",
      initials: "DJ",
      review: "Best pharmacy in the area! They go above and beyond to help their customers. Free delivery is a game changer for my family.",
      source: "via Facebook"
    },
    {
      id: "ML",
      name: "Maria L.",
      initials: "ML",
      review: "Professional, caring, and always available when I need them. The pharmacists take time to explain everything clearly.",
      source: "via Facebook"
    },
    {
      id: "RT",
      name: "Robert T.",
      initials: "RT",
      review: "Switched from a chain pharmacy and couldn't be happier. Personal attention and care you just can't get elsewhere.",
      source: "via Facebook"
    },
    {
      id: "BM",
      name: "Brian M.",
      initials: "BM",
      review: "The delivery service is amazing! I'm disabled and can't always get out, so having my medications delivered monthly is a lifesaver.",
      source: "via Facebook"
    },
    {
      id: "JL",
      name: "Jennifer L.",
      initials: "JL",
      review: "The MedPack service has been a game changer for my elderly mother. All her medications are sorted by time and delivered monthly.",
      source: "via Facebook"
    },
    {
      id: "MS",
      name: "Michael S.",
      initials: "MS",
      review: "Outstanding pharmacy! They filled my prescription in 10 minutes and the pharmacist caught a dangerous drug interaction my doctor missed.",
      source: "via Google"
    },
    {
      id: "LW",
      name: "Lisa W.",
      initials: "LW",
      review: "I've been coming here for 8 years. They remember my allergies and always double-check everything. True community pharmacy at its best!",
      source: "via Google"
    },
    {
      id: "AG",
      name: "Anthony G.",
      initials: "AG",
      review: "Fast, friendly, and professional. The pharmacist took time to make sure I understood my medication interactions. Highly recommend!",
      source: "via Facebook"
    },
    {
      id: "CD",
      name: "Carol D.",
      initials: "CD",
      review: "Best prices in town! I compared with 5 other pharmacies and Georgies was significantly cheaper. Plus they accept all my insurance plans.",
      source: "via Google"
    }
  ];

  const awards = [
    "in Customer Service",
    "in Resolving problems or complaints",
    "in Ability to get prescriptions", 
    "in People",
    "in Helping save time or money",
    "in Digital channels - website, mobile app, text",
    "in Level of trust"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocationIndex((prev) => (prev + 1) % locations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAwardIndex((prev) => (prev + 1) % awards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Shuffle testimonials on component mount
  useEffect(() => {
    const shuffled = [...allTestimonials].sort(() => Math.random() - 0.5);
    setShuffledTestimonials(shuffled);
  }, []);

  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Pill className="text-white h-4 w-4" />
              </div>
              <div className="flex items-center">
                <span className="text-xl font-bold text-slate-900">Georgies</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-xl font-bold text-slate-900 px-2 py-1 h-auto hover:bg-slate-50 flex items-center w-[160px] justify-center">
                      <span className="transition-all duration-500 ease-in-out transform">
                        {locations[currentLocationIndex]}
                      </span>
                      <ChevronDown className="h-4 w-4 ml-1 flex-shrink-0" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 mt-2">
                    <DropdownMenuItem className="cursor-pointer py-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-900">Gerogies Family Pharmacy</span>
                        <span className="text-xs text-slate-500">332 W. St. Georges Ave, Linden</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-900">Georgies Specialty Pharmacy</span>
                        <span className="text-xs text-slate-500">521 N Wood Ave, Linden</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-900">Georgies Parlin Pharmacy</span>
                        <span className="text-xs text-slate-500">499 Ernston Rd, Parlin</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-900">Georgies Outpatient Pharmacy</span>
                        <span className="text-xs text-slate-500">6 Earlin Dr, Browns Mills</span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <span className="text-base sm:text-lg lg:text-xl font-bold text-slate-900">Pharmacy</span>
              </div>
            </div>
            
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <a href="/" className="text-slate-600 hover:text-primary transition-colors font-medium">
                Home
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-slate-600 hover:text-primary transition-colors font-medium flex items-center">
                  Locations
                  <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem className="cursor-pointer">
                    <div className="flex flex-col">
                      <span className="font-medium">Georgies Family Pharmacy</span>
                      <span className="text-xs text-slate-500">332 W. St. Georges Ave, Linden</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <div className="flex flex-col">
                      <span className="font-medium">Georgies Specialty Pharmacy</span>
                      <span className="text-xs text-slate-500">521 N Wood Ave, Linden</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <div className="flex flex-col">
                      <span className="font-medium">Georgies Parlin Pharmacy</span>
                      <span className="text-xs text-slate-500">499 Ernston Rd, Parlin</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <div className="flex flex-col">
                      <span className="font-medium">Georgies Outpatient Pharmacy</span>
                      <span className="text-xs text-slate-500">6 Earlin Dr, Browns Mills</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="/features" className="text-slate-600 hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="/api/login" className="text-slate-600 hover:text-primary transition-colors font-medium">
                Create An Account
              </a>
              <a href="/contact" className="text-slate-600 hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-2">
              <Button 
                onClick={() => window.location.href = '/services/refills'}
                className="bg-primary text-white hover:bg-red-900 px-4 py-2 text-sm font-medium min-h-[40px]"
              >
                Refill Rx
              </Button>
              <Button 
                onClick={() => window.location.href = '/services/transfers'}
                className="bg-primary text-white hover:bg-red-900 px-4 py-2 text-sm font-medium min-h-[40px]"
              >
                Transfer Rx
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {/* Parallax Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 parallax-bg">
          <div className="parallax-layer parallax-back">
            <div className="w-full h-full" style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: '0.08'
            }}></div>
          </div>
          <div className="parallax-layer parallax-mid">
            <div className="w-full h-full" style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: '0.12'
            }}></div>
          </div>
          <div className="parallax-layer parallax-front">
            <div className="w-full h-full bg-gradient-to-br from-slate-50/85 to-white/95"></div>
          </div>
        </div>
        

        
        {/* Hero Content */}
        <div className="relative z-20 flex items-center justify-center h-full py-8 px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-full max-w-7xl mx-auto">
            {/* Top Spacing */}
            <div className="h-16 sm:h-20 lg:h-24"></div>
            
            {/* Family & Pharmacy Slideshow */}
            <div className="mb-8 relative w-full mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-200/50 bg-white/10 backdrop-blur-sm">
                <div className="sr-only" aria-live="polite" aria-atomic="true">
                  Slideshow displaying pharmacy services: Family Care, Pet Medications, Expert Pharmacists, and Community Focus
                </div>
                
                <div 
                  className="flex animate-slideshow"
                  role="region"
                  aria-label="Pharmacy services slideshow"
                  aria-describedby="slideshow-description"
                >
                  {/* Slide 1: Family at Pharmacy */}
                  <div 
                    className="w-full flex-shrink-0 relative"
                    role="group"
                    aria-roledescription="slide"
                    aria-labelledby="slide1-heading"
                    aria-describedby="slide1-description"
                  >
                    <div className="h-72 sm:h-80 bg-gradient-to-r from-slate-50 via-white to-slate-50 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-red-700/5"></div>
                      <div className="text-center p-8 relative z-10">
                        <div 
                          className="w-24 h-24 bg-gradient-to-br from-primary/90 to-red-700/90 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 shadow-lg border-4 border-white"
                          role="img"
                          aria-label="Family icon representing family healthcare"
                        >
                          👨‍👩‍👧‍👦
                        </div>
                        <h3 id="slide1-heading" className="text-2xl font-bold text-slate-900 mb-3">Family Care</h3>
                        <p id="slide1-description" className="text-lg text-slate-700 max-w-md mx-auto">Trusted healthcare for every member of your family</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Slide 2: Pet Care */}
                  <div 
                    className="w-full flex-shrink-0 relative"
                    role="group"
                    aria-roledescription="slide"
                    aria-labelledby="slide2-heading"
                    aria-describedby="slide2-description"
                  >
                    <div className="h-72 sm:h-80 bg-gradient-to-r from-slate-50 via-white to-slate-50 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-red-700/5"></div>
                      <div className="text-center p-8 relative z-10">
                        <div 
                          className="w-24 h-24 bg-gradient-to-br from-primary/90 to-red-700/90 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 shadow-lg border-4 border-white"
                          role="img"
                          aria-label="Pet icon representing pet medication services"
                        >
                          🐕
                        </div>
                        <h3 id="slide2-heading" className="text-2xl font-bold text-slate-900 mb-3">Pet Medications</h3>
                        <p id="slide2-description" className="text-lg text-slate-700 max-w-md mx-auto">Comprehensive care for your beloved pets</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Slide 3: Pharmacy Professional */}
                  <div 
                    className="w-full flex-shrink-0 relative"
                    role="group"
                    aria-roledescription="slide"
                    aria-labelledby="slide3-heading"
                    aria-describedby="slide3-description"
                  >
                    <div className="h-72 sm:h-80 bg-gradient-to-r from-slate-50 via-white to-slate-50 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-red-700/5"></div>
                      <div className="text-center p-8 relative z-10">
                        <div 
                          className="w-24 h-24 bg-gradient-to-br from-primary/90 to-red-700/90 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 shadow-lg border-4 border-white"
                          role="img"
                          aria-label="Pharmacist icon representing professional expertise"
                        >
                          👨‍⚕️
                        </div>
                        <h3 id="slide3-heading" className="text-2xl font-bold text-slate-900 mb-3">Expert Pharmacists</h3>
                        <p id="slide3-description" className="text-lg text-slate-700 max-w-md mx-auto">Professional guidance you can trust</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Slide 4: Community Care */}
                  <div 
                    className="w-full flex-shrink-0 relative"
                    role="group"
                    aria-roledescription="slide"
                    aria-labelledby="slide4-heading"
                    aria-describedby="slide4-description"
                  >
                    <div className="h-72 sm:h-80 bg-gradient-to-r from-slate-50 via-white to-slate-50 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-red-700/5"></div>
                      <div className="text-center p-8 relative z-10">
                        <div 
                          className="w-24 h-24 bg-gradient-to-br from-primary/90 to-red-700/90 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 shadow-lg border-4 border-white"
                          role="img"
                          aria-label="Community icon representing local healthcare service"
                        >
                          🏘️
                        </div>
                        <h3 id="slide4-heading" className="text-2xl font-bold text-slate-900 mb-3">Community Focused</h3>
                        <p id="slide4-description" className="text-lg text-slate-700 max-w-md mx-auto">Serving Linden, Parlin, and Browns Mills since 2011</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3"
                  role="tablist"
                  aria-label="Slideshow navigation"
                >
                  <button
                    role="tab"
                    aria-label="Go to slide 1: Family Care"
                    aria-selected="true"
                    className="w-4 h-4 rounded-full bg-primary/80 hover:bg-primary focus:bg-primary focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all duration-300 shadow-lg"
                    tabIndex="0"
                  ></button>
                  <button
                    role="tab"
                    aria-label="Go to slide 2: Pet Medications"
                    aria-selected="false"
                    className="w-4 h-4 rounded-full bg-white/60 hover:bg-primary/60 focus:bg-primary/60 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all duration-300 shadow-lg"
                    tabIndex="-1"
                  ></button>
                  <button
                    role="tab"
                    aria-label="Go to slide 3: Expert Pharmacists"
                    aria-selected="false"
                    className="w-4 h-4 rounded-full bg-white/60 hover:bg-primary/60 focus:bg-primary/60 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all duration-300 shadow-lg"
                    tabIndex="-1"
                  ></button>
                  <button
                    role="tab"
                    aria-label="Go to slide 4: Community Focused"
                    aria-selected="false"
                    className="w-4 h-4 rounded-full bg-white/60 hover:bg-primary/60 focus:bg-primary/60 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all duration-300 shadow-lg"
                    tabIndex="-1"
                  ></button>
                </div>
                
                <div id="slideshow-description" className="sr-only">
                  Automatically rotating slideshow showcasing our pharmacy services including family care, pet medications, expert pharmacists, and community focus. Navigation dots below allow manual control.
                </div>
              </div>
            </div>

            <h1 className="fluid-text-5xl font-bold text-slate-900 mb-4 leading-tight adaptive-spacing">
              <span className="sr-only">Georgies Pharmacy - J.D. Power #1 Rated Pharmacy in New Jersey serving Linden, Parlin, Browns Mills - </span>
              Better Care.{" "}
              <span className="text-primary">Better Health.</span>
              <sup className="fluid-text-lg">™</sup>
            </h1>
            <p className="fluid-text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed adaptive-spacing">
              At Georgies Pharmacy, you become part of our family. We provide old-fashioned, personalized service combined with modern technology. Serving Linden, Parlin, and Browns Mills NJ since 2011.
            </p>


            
            {/* Bottom Spacing */}
            <div className="h-16 sm:h-20 lg:h-24"></div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* About Us Section - Centered */}
        <section className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-200 max-w-md text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <label className="font-bold text-slate-900 text-lg">About Us</label>
              </div>
              <p className="fluid-text-sm text-slate-600 mb-4">Learn more about our family-owned pharmacy and our commitment to personalized healthcare in your community.</p>
              <Button 
                onClick={() => window.location.href = '/about'}
                className="w-full bg-primary text-white hover:bg-red-700"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </section>

        {/* Service Options with Icons */}
        <section className="mb-16">
          <div className="text-center mb-12 adaptive-spacing">
            <h2 className="fluid-text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="fluid-text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive healthcare services designed with your family's needs in mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Quick Refills */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-200 flex flex-col h-full min-h-[200px] hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xs mt-0.5 flex-shrink-0">
                  Rx
                </div>
                <label className="font-semibold text-slate-900 leading-tight fluid-text-base">Quick Refills</label>
              </div>
              <p className="fluid-text-sm text-slate-600 mb-6 flex-grow">Request prescription refills online with just a few clicks. Choose pickup or delivery options.</p>
              <Button 
                onClick={() => window.location.href = '/services/refills'}
                className="w-full bg-primary text-white hover:bg-red-700 mt-auto"
              >
                Start Refill
              </Button>
            </div>

            {/* Easy Transfers */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-200 flex flex-col h-full min-h-[200px] hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xs mt-0.5 flex-shrink-0">
                  ⇄
                </div>
                <label className="font-semibold text-slate-900 leading-tight text-base">Easy Transfers</label>
              </div>
              <p className="text-sm text-slate-600 mb-6 flex-grow">Transfer prescriptions from other pharmacies seamlessly. We handle the paperwork.</p>
              <Button 
                onClick={() => window.location.href = '/services/transfers'}
                className="w-full bg-primary text-white hover:bg-red-700 mt-auto"
              >
                Transfer Prescription
              </Button>
            </div>

            {/* Live Support */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-200 flex flex-col h-full min-h-[200px] hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-xs mt-0.5 flex-shrink-0">
                  💬
                </div>
                <label className="font-semibold text-slate-900 leading-tight text-base">Live Support</label>
              </div>
              <p className="text-sm text-slate-600 mb-6 flex-grow">Chat directly with our pharmacy team for questions, consultations, and support.</p>
              <Button 
                onClick={() => window.location.href = '/contact'}
                className="w-full bg-primary text-white hover:bg-red-700 mt-auto"
              >
                Start Chat
              </Button>
            </div>

            {/* Delivery Service */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-200 flex flex-col h-full min-h-[200px] hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center text-white font-bold text-xs mt-0.5 flex-shrink-0">
                  🚚
                </div>
                <label className="font-semibold text-slate-900 leading-tight text-base">Delivery Service</label>
              </div>
              <p className="text-sm text-slate-600 mb-6 flex-grow">FREE delivery and pickup options: Home Delivery, Curbside Pickup, In-Store Pickup</p>
              <Button 
                onClick={() => window.location.href = '/contact'}
                className="w-full bg-primary text-white hover:bg-red-700 mt-auto"
              >
                Schedule Delivery
              </Button>
            </div>

            {/* Vaccination Hub */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-200 flex flex-col h-full min-h-[200px] hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xs mt-0.5 flex-shrink-0">
                  💉
                </div>
                <label className="font-semibold text-slate-900 leading-tight text-base">Vaccination Hub</label>
              </div>
              <p className="text-sm text-slate-600 mb-6 flex-grow">Vaccines and clinical testing: Flu, MMR, Tdap, HepB, COVID testing and more. WALK IN available</p>
              <Button 
                onClick={() => window.location.href = '/features'}
                className="w-full bg-primary text-white hover:bg-red-700 mt-auto"
              >
                Book Appointment
              </Button>
            </div>

            {/* Over The Counter */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-200 flex flex-col h-full min-h-[200px] hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-xs mt-0.5 flex-shrink-0">
                  🛒
                </div>
                <label className="font-semibold text-slate-900 leading-tight text-base">Over The Counter</label>
              </div>
              <p className="text-sm text-slate-600 mb-6 flex-grow">Wide selection of OTC medications, vitamins, and health products with pickup or delivery options</p>
              <Button 
                onClick={() => window.location.href = '/otc-store'}
                className="w-full bg-primary text-white hover:bg-red-700 mt-auto"
              >
                Buy OTC Online
              </Button>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary to-red-900 rounded-2xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Access Prescription Management 24/7
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Track all your medications in one place. View status, refill counts, and prescription details. Your health information is protected with enterprise-grade security and HIPAA compliance. Join thousands of satisfied patients who trust Georgies Pharmacy for their healthcare needs. Experience the difference personalized care makes.
          </p>
          <Button
            onClick={() => window.location.href = '/api/login'}
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-red-50 px-8 py-4 text-lg"
          >
            Create Account or Login
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>

        {/* J.D. Power Awards Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20 px-3 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 lg:mb-4 px-2">
                <span className="block mb-1">Ranked Highest by J.D. Power</span>
                <span className="block text-primary text-lg sm:text-xl lg:text-2xl mb-2">
                  8 Years in a Row • 13 out of the Last 15 Years!
                </span>
                <span 
                  key={currentAwardIndex}
                  className="block h-8 sm:h-10 lg:h-12 transition-all duration-500 ease-in-out transform text-lg sm:text-xl lg:text-2xl text-primary"
                  style={{
                    animation: 'fadeInUp 0.5s ease-in-out'
                  }}
                >
                  {awards[currentAwardIndex]}
                </span>
              </h2>
              
              {/* Awards Badges Section */}
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                      <span className="text-white font-bold text-sm sm:text-lg">JD</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">J.D. Power</h3>
                    <p className="text-xs text-slate-600">8 Years Running</p>
                    <p className="text-xs text-primary font-medium">13 of 15 Years</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                      <span className="text-white font-bold text-xs sm:text-sm">5★</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">Facebook Reviews</h3>
                    <p className="text-xs text-slate-600">5/5 Stars</p>
                    <p className="text-xs text-primary font-medium">Excellent Rating</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                      <span className="text-white font-bold text-xs sm:text-sm">5★</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">Google Reviews</h3>
                    <p className="text-xs text-slate-600">5/5 Stars</p>
                    <p className="text-xs text-primary font-medium">Highly Rated</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                      <span className="text-white font-bold text-sm sm:text-lg">13+</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">Years Serving</h3>
                    <p className="text-xs text-slate-600">Community</p>
                    <p className="text-xs text-primary font-medium">Since 2011</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                      <span className="text-white font-bold text-sm sm:text-lg">4</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">Locations</h3>
                    <p className="text-xs text-slate-600">Serving You</p>
                    <p className="text-xs text-primary font-medium">Convenient</p>
                  </div>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8">
                Source: <a 
                  href="https://www.wearegnp.com/jd-power-2024#:~:text=According%20to%20the%20J.D.%20Power,across%20all%20seven%20study%20dimensions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-red-900 underline break-words transition-colors"
                >
                  Customer Satisfaction Study 2024
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* What Our Patients Say Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Real Testimony, by our Patients
          </h2>
          
          {/* Continuous Scrolling Testimonials */}
          <div className="relative overflow-hidden mb-8">
            <div className="flex animate-scroll-left space-x-8">
              {/* Render shuffled testimonials twice for seamless loop */}
              {shuffledTestimonials.concat(shuffledTestimonials).map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 bg-white p-8 rounded-xl shadow-lg border border-slate-200 w-80 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {testimonial.initials}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{testimonial.name}</h3>
                  <div className="flex justify-center mb-3">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{testimonial.source}</p>
                  <p className="text-slate-700 italic">
                    "{testimonial.review}"
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Button
              onClick={() => window.location.href = '/testimonials'}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
            >
              Read More Reviews
            </Button>
          </div>
        </section>



        {/* Partners Section */}
        <section className="py-16 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Healthcare Partners</h3>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              We collaborate with leading healthcare institutions, technology partners, and pharmaceutical distributors 
              to provide you with the highest quality care and service.
            </p>
            
            {/* Scrolling Partners */}
            <div className="relative overflow-hidden mb-8">
              <div className="flex animate-scroll-right space-x-8">
                {/* Render partners twice for seamless loop */}
                {[
                  { name: "AmerisourceBergen", type: "Pharmaceutical Distribution", logo: "AB" },
                  { name: "Microsoft", type: "Technology Partner", logo: "MS" },
                  { name: "ComputerRx", type: "Pharmacy Software", logo: "CRx" },
                  { name: "Outcomes", type: "Healthcare Analytics", logo: "OUT" },
                  { name: "Trinitas Medical Center", type: "Regional Healthcare", logo: "TMC" },
                  { name: "RWJ Hospital", type: "Academic Medicine", logo: "RWJ" },
                  { name: "Deborah Heart & Lung", type: "Specialty Hospital", logo: "DHL" },
                  { name: "Hackensack Meridian", type: "Health Network", logo: "HM" },
                  { name: "Englewood Hospital", type: "Community Hospital", logo: "EH" },
                  { name: "Joint Base MDL", type: "Military Medical", logo: "MDL" }
                ].concat([
                  { name: "AmerisourceBergen", type: "Pharmaceutical Distribution", logo: "AB" },
                  { name: "Microsoft", type: "Technology Partner", logo: "MS" },
                  { name: "ComputerRx", type: "Pharmacy Software", logo: "CRx" },
                  { name: "Outcomes", type: "Healthcare Analytics", logo: "OUT" },
                  { name: "Trinitas Medical Center", type: "Regional Healthcare", logo: "TMC" },
                  { name: "RWJ Hospital", type: "Academic Medicine", logo: "RWJ" },
                  { name: "Deborah Heart & Lung", type: "Specialty Hospital", logo: "DHL" },
                  { name: "Hackensack Meridian", type: "Health Network", logo: "HM" },
                  { name: "Englewood Hospital", type: "Community Hospital", logo: "EH" },
                  { name: "Joint Base MDL", type: "Military Medical", logo: "MDL" }
                ]).map((partner, index) => (
                  <div key={`${partner.name}-${index}`} className="flex-shrink-0 bg-white p-6 rounded-xl shadow-lg border border-slate-200 w-64 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xs mx-auto mb-4 shadow-lg">
                      {partner.logo}
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm leading-tight">{partner.name}</h4>
                    <p className="text-xs text-slate-600">{partner.type}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <Button
              onClick={() => window.location.href = '/partners'}
              className="bg-primary text-white hover:bg-red-700 px-8 py-3"
            >
              View All Partners
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Pill className="text-white h-3 w-3" />
                </div>
                <span className="font-bold">Georgies Pharmacy</span>
              </div>
              <p className="text-slate-400">
                Your trusted healthcare partner, providing convenient prescription management and exceptional patient care.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/services/refills" className="hover:text-white transition-colors">Prescription Refills</a></li>
                <li><a href="/services/transfers" className="hover:text-white transition-colors">Prescription Transfers</a></li>
                <li><a href="/features" className="hover:text-white transition-colors">Medication Synchronization</a></li>
                <li><a href="/features" className="hover:text-white transition-colors">Health Consultations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/support/faq" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="/support/hours" className="hover:text-white transition-colors">Pharmacy Hours</a></li>
                <li><a href="/support/insurance" className="hover:text-white transition-colors">Insurance Information</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/legal/hipaa" className="hover:text-white transition-colors">HIPAA Notice</a></li>
                <li><a href="/legal/accessibility" className="hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-6 text-center">
            <p className="text-slate-400">&copy; 2025 by Georgies Pharmacy Group. All rights reserved. Licensed Pharmacy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}