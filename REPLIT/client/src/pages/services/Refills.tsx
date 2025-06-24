import React from "react";
import { Button } from "@/components/ui/button";
import { Pill, Clock, Smartphone, CheckCircle, RotateCcw } from "lucide-react";

export default function Refills() {
  // SEO: Update page title for prescription refill searches
  React.useEffect(() => {
    document.title = "Prescription Refills Online | Georgies Pharmacy NJ | Fast & Easy Refills";
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Pill className="text-white h-4 w-4" />
              </div>
              <span className="text-xl font-bold text-slate-900">Georgies Pharmacy</span>
            </div>
            <Button onClick={() => window.location.href = "/api/login"} className="bg-primary text-white hover:bg-primary/90">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Prescription <span className="text-primary">Refills</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Quick, convenient prescription refills with multiple pickup options and automatic reminders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Request Your Refill</h3>
                  <p className="text-slate-600">Submit your refill request online, by phone, or through our mobile app using your prescription number.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">We Process Your Order</h3>
                  <p className="text-slate-600">Our pharmacy team reviews and prepares your prescription with careful attention to accuracy and safety.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Get Notified</h3>
                  <p className="text-slate-600">Receive a notification when your prescription is ready for pickup or delivery.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Pick Up or Receive</h3>
                  <p className="text-slate-600">Choose from in-store pickup, curbside service, or home delivery based on your preference.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Refill Options</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Smartphone className="text-primary h-6 w-6" />
                <span className="text-slate-700">Mobile app or online portal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-primary h-6 w-6" />
                <span className="text-slate-700">24/7 automated phone system</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="text-primary h-6 w-6" />
                <span className="text-slate-700">Automatic refill program</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary h-6 w-6" />
                <span className="text-slate-700">In-person at pharmacy counter</span>
              </div>
            </div>
          </div>
        </div>

        <section className="text-center bg-gradient-to-r from-primary to-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Refill Your Prescription?</h2>
          <p className="text-xl text-red-100 mb-8">Sign in to your account to request refills instantly.</p>
          <Button onClick={() => window.location.href = "/api/login"} size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Sign In to Refill
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">&copy; 2025 by Georgies Pharmacy Group. All rights reserved. Licensed Pharmacy.</p>
        </div>
      </footer>
    </div>
  );
}