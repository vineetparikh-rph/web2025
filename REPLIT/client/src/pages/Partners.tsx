import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building2, Globe, Award, Users } from "lucide-react";

export default function Partners() {
  // SEO: Update page title for partners page
  useEffect(() => {
    document.title = "Our Partners | Georgies Pharmacy | Local & National Healthcare Partners";
  }, []);

  const nationalPartners = [
    {
      name: "AmerisourceBergen",
      type: "National Pharmaceutical Distributor",
      description: "Leading pharmaceutical sourcing and distribution services company providing medications and healthcare solutions.",
      category: "Distribution",
      established: "1985",
      website: "https://www.amerisourcebergen.com"
    },
    {
      name: "McKesson Corporation", 
      type: "Healthcare Services Company",
      description: "Fortune 6 company providing pharmaceuticals and medical supplies to healthcare facilities nationwide.",
      category: "Distribution",
      established: "1833",
      website: "https://www.mckesson.com"
    },
    {
      name: "Cardinal Health",
      type: "Healthcare Services & Products",
      description: "Global, integrated healthcare services company providing customized solutions for hospitals, health systems, pharmacies.",
      category: "Distribution", 
      established: "1971",
      website: "https://www.cardinalhealth.com"
    },
    {
      name: "Express Scripts",
      type: "Pharmacy Benefit Management",
      description: "Leading pharmacy benefit management organization providing prescription drug benefits.",
      category: "PBM",
      established: "1986", 
      website: "https://www.express-scripts.com"
    },
    {
      name: "Outcomes",
      type: "Pharmacy Technology Solutions",
      description: "Leading provider of pharmacy management software and technology solutions for independent pharmacies.",
      category: "Technology",
      established: "1999",
      website: "https://www.outcomes.com"
    },
    {
      name: "ComputerRx",
      type: "Pharmacy Management System",
      description: "Comprehensive pharmacy management software providing dispensing, inventory, and patient management solutions.",
      category: "Technology",
      established: "1982",
      website: "https://www.computerrx.com"
    },
    {
      name: "Microsoft",
      type: "Cloud & Technology Solutions",
      description: "Enterprise cloud computing and technology solutions for healthcare data management and security.",
      category: "Technology",
      established: "1975",
      website: "https://www.microsoft.com"
    }
  ];

  const localPartners = [
    {
      name: "Trinitas Regional Medical Center",
      type: "Regional Medical Center",
      description: "Full-service medical center serving Union County and surrounding areas with comprehensive healthcare services.",
      category: "Healthcare",
      location: "Elizabeth, NJ",
      services: "Emergency care, surgical services, specialty clinics"
    },
    {
      name: "Robert Wood Johnson University Hospital",
      type: "Academic Medical Center", 
      description: "Leading academic medical center providing advanced healthcare services and medical education.",
      category: "Healthcare",
      location: "New Brunswick, NJ",
      services: "Trauma center, cancer care, cardiovascular services"
    },
    {
      name: "Deborah Heart and Lung Center",
      type: "Specialty Hospital",
      description: "Nationally recognized heart and lung specialty hospital providing advanced cardiac and pulmonary care.",
      category: "Healthcare",
      location: "Browns Mills, NJ",
      services: "Cardiac surgery, pulmonary care, cardiovascular rehabilitation"
    },
    {
      name: "Hackensack Meridian Health",
      type: "Integrated Health Network",
      description: "Leading health network providing comprehensive medical services across New Jersey.",
      category: "Healthcare",
      location: "Multiple NJ Locations",
      services: "Primary care, specialty services, urgent care"
    },
    {
      name: "Englewood Hospital and Medical Center",
      type: "Community Hospital",
      description: "Full-service hospital providing quality healthcare services to northern New Jersey communities.",
      category: "Healthcare",
      location: "Englewood, NJ",
      services: "Emergency care, maternity services, cancer care"
    },
    {
      name: "CareStation Medical Group",
      type: "Primary Care Network",
      description: "Multi-specialty medical group providing comprehensive primary and specialty care services.",
      category: "Primary Care",
      location: "Central NJ",
      services: "Family medicine, internal medicine, specialty care"
    },
    {
      name: "Joint Base McGuire-Dix-Lakehurst",
      type: "Military Medical Facility",
      description: "Military medical services supporting active duty personnel, veterans, and their families.",
      category: "Military",
      location: "Joint Base MDL, NJ",
      services: "Military healthcare, veteran services, family medicine"
    },
    {
      name: "Amboy Bank",
      type: "Community Banking Partner",
      description: "Local financial institution providing banking services and community support for healthcare initiatives.",
      category: "Financial",
      location: "Old Bridge, NJ",
      services: "Business banking, community investment, healthcare financing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Local and National Partners</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Georgies Pharmacy collaborates with leading healthcare organizations and pharmaceutical companies 
            to provide you with the highest quality medications and services.
          </p>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-slate-900">15+</h3>
              <p className="text-slate-600">Healthcare Partners</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-slate-900">4</h3>
              <p className="text-slate-600">National Distributors</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-slate-900">13+</h3>
              <p className="text-slate-600">Years Partnership</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-slate-900">10,000+</h3>
              <p className="text-slate-600">Patients Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* National Partners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">National Healthcare Partners</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We work with Fortune 500 pharmaceutical companies and healthcare organizations 
              to ensure reliable medication supply and competitive pricing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {nationalPartners.map((partner, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-900">{partner.name}</CardTitle>
                      <p className="text-primary font-medium">{partner.type}</p>
                    </div>
                    <div className="text-right text-sm text-slate-500">
                      <p>Est. {partner.established}</p>
                      <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs mt-1">
                        {partner.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{partner.description}</p>
                  <div className="flex items-center justify-between">
                    <a 
                      href={partner.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-red-700 text-sm font-medium"
                    >
                      Learn More →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Partners */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Local Healthcare Partners</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Strong relationships with local healthcare providers ensure coordinated care 
              and seamless prescription management for our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {localPartners.map((partner, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-900">{partner.name}</CardTitle>
                      <p className="text-primary font-medium">{partner.type}</p>
                    </div>
                    <div className="text-right text-sm text-slate-500">
                      <p>{partner.location}</p>
                      <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs mt-1">
                        {partner.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{partner.description}</p>
                  <div className="bg-slate-100 p-3 rounded">
                    <p className="text-sm text-slate-700">
                      <strong>Services:</strong> {partner.services}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Payment Partners</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We accept all major credit cards and work with financial partners to make healthcare accessible.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
            <div className="flex items-center space-x-2 bg-slate-100 px-6 py-4 rounded-lg">
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">VISA</span>
              </div>
              <span className="font-medium text-slate-700">Visa</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-slate-100 px-6 py-4 rounded-lg">
              <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">MC</span>
              </div>
              <span className="font-medium text-slate-700">Mastercard</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-slate-100 px-6 py-4 rounded-lg">
              <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">AMEX</span>
              </div>
              <span className="font-medium text-slate-700">American Express</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-slate-100 px-6 py-4 rounded-lg">
              <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">DISC</span>
              </div>
              <span className="font-medium text-slate-700">Discover</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Partnership Benefits for Our Patients</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliable Supply Chain</h3>
              <p className="text-slate-600">
                Direct partnerships with major distributors ensure consistent medication availability and competitive pricing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Coordinated Care</h3>
              <p className="text-slate-600">
                Seamless communication with local healthcare providers for better patient outcomes and care coordination.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-slate-600">
                Partnerships with accredited organizations ensure the highest standards of pharmaceutical care and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}