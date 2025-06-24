import { Button } from "@/components/ui/button";
import { Pill, RotateCcw, ArrowRightLeft, MessageCircle, Shield, Clock, Users, Bell, Smartphone, CreditCard, MapPin, Calendar } from "lucide-react";

export default function Features() {
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
              <a href="/features" className="text-primary font-medium">
                Features
              </a>
              <a href="/about" className="text-slate-600 hover:text-primary transition-colors font-medium">
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
            Powerful <span className="text-primary">Features</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Everything you need to manage your health, all in one convenient platform designed with your needs in mind.
          </p>
        </div>

        {/* Main Features */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Prescription Management */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Pill className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Prescription Management</h3>
              <p className="text-slate-600 mb-6">
                Keep track of all your medications in one place. View detailed information, dosage instructions, refill dates, and prescription history.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  View all active prescriptions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Track refill counts and dates
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Access prescription history
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  View dosage and instructions
                </li>
              </ul>
            </div>

            {/* Quick Refills */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <RotateCcw className="text-secondary h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Quick Refills</h3>
              <p className="text-slate-600 mb-6">
                Request prescription refills with just a few clicks. Choose your preferred pickup method and get notified when ready.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  One-click refill requests
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Multiple pickup options
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Automatic refill reminders
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Real-time status updates
                </li>
              </ul>
            </div>

            {/* Easy Transfers */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mb-6">
                <ArrowRightLeft className="text-warning h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Easy Transfers</h3>
              <p className="text-slate-600 mb-6">
                Transfer prescriptions from other pharmacies seamlessly. We handle all the paperwork and coordination for you.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  Simple transfer process
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  We handle all paperwork
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  Transfer multiple prescriptions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  Quick approval process
                </li>
              </ul>
            </div>

            {/* Live Support */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="text-success h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Live Support</h3>
              <p className="text-slate-600 mb-6">
                Connect directly with our pharmacy team through live chat. Get answers to questions and professional consultations.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                  Real-time chat support
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                  Professional consultations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                  Medication counseling
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                  Quick response times
                </li>
              </ul>
            </div>

            {/* Secure & Private */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Secure & Private</h3>
              <p className="text-slate-600 mb-6">
                Your health information is protected with enterprise-grade security, encryption, and full HIPAA compliance.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  HIPAA compliant platform
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  End-to-end encryption
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Secure data storage
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Privacy protection
                </li>
              </ul>
            </div>

            {/* 24/7 Access */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-secondary h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">24/7 Access</h3>
              <p className="text-slate-600 mb-6">
                Access your prescription information and request services anytime, anywhere from any device.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Always available platform
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Mobile-friendly design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Cross-device sync
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Offline functionality
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Additional Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="text-primary h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Smart Notifications</h3>
              <p className="text-sm text-slate-600">Get reminders for refills, pickups, and medication schedules</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-secondary h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Mobile App</h3>
              <p className="text-sm text-slate-600">Full-featured mobile application for iOS and Android</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-warning h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Easy Payments</h3>
              <p className="text-sm text-slate-600">Secure online payments and insurance processing</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-success h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Location Services</h3>
              <p className="text-sm text-slate-600">Find nearby locations and get directions</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary to-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join thousands of patients who have simplified their healthcare with Georgies Pharmacy.
          </p>
          <Button
            onClick={() => window.location.href = "/api/login"}
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg"
          >
            Get Started Today
          </Button>
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