import { Button } from "@/components/ui/button";
import { Pill, Heart, Users, Award, Shield, Clock } from "lucide-react";

export default function About() {
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
              <span className="text-xl font-bold text-slate-900">Georgies Pharmacy</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-slate-600 hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="/features" className="text-slate-600 hover:text-primary transition-colors font-medium">
                Features
              </a>
              <a href="/about" className="text-primary font-medium">
                About
              </a>
              <a href="/contact" className="text-slate-600 hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </nav>

            <Button onClick={() => window.location.href = "/api/login"} className="bg-primary text-white hover:bg-primary/90">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            About <span className="text-primary">Georgies Pharmacy</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Better Care. Better Health. Your trusted healthcare partner for over 15 years, committed to providing exceptional pharmaceutical care and personalized services to everyone in New Jersey.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded in 2011, Georgies Pharmacy began as a small community pharmacy in Linden as St. Georges Family Pharmacy with a simple mission: to provide personalized healthcare solutions with genuine care and attention to detail.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Over the years, we've grown from a single location to 4 locations, with as a comprehensive healthcare provider, but our core values remain unchanged. We believe that every patient deserves individualized care, expert guidance, and convenient access to their medications.
              </p>
              <p className="text-lg text-slate-600">
                Today, we serve thousands of patients while maintaining the personal touch that sets us apart from larger chain pharmacies.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-slate-600">Years of Service</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                  <div className="text-slate-600">Patients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1Million+</div>
                  <div className="text-slate-600">Prescriptions Filled</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-slate-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Compassionate Care</h3>
              <p className="text-slate-600">
                We treat every patient with empathy, understanding, and genuine concern for their well-being.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600">
                We maintain the highest standards in pharmaceutical care, accuracy, and customer service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Community Focus</h3>
              <p className="text-slate-600">
                We're deeply committed to the health and wellness of our local community.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">GP</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Vineet Parikh</h3>
              <p className="text-primary font-medium mb-2">Pharmacy CEO & Founder</p>
              <p className="text-slate-600 text-sm">
                PharmD, 15+ years of experience in entrepreneurship, leadership and management, operations, and patient care.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/70 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">SM</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Prashant Patel, Rph</h3>
              <p className="text-primary font-medium mb-2">Pharmacist Charge-Georgies Family Pharmacy</p>
              <p className="text-slate-600 text-sm">
                Pharmacist, specialized in medication sync programs and pharmacy operations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-warning to-warning/70 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">MR</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Hiral Shah</h3>
              <p className="text-primary font-medium mb-2">Pharmacist in Charge-Georgies Parlin Pharmacy</p>
              <p className="text-slate-600 text-sm">
                PharmD, 15+ years in pharmacy operations, ensuring quality and efficiency in all services.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="text-center bg-gradient-to-r from-primary to-red-600 rounded-2xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-red-100 max-w-4xl mx-auto">
            To provide exceptional pharmaceutical care through personalized service, innovative technology, and unwavering commitment to our patients' health and well-being. We strive to be the most trusted healthcare partner in our community.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
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
                <li><a href="/services/sync" className="hover:text-white transition-colors">Medication Synchronization</a></li>
                <li><a href="/services/consultations" className="hover:text-white transition-colors">Health Consultations</a></li>
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