import React from "react";
import { Button } from "@/components/ui/button";
import { Pill, ArrowRightLeft, FileText, Clock, CheckCircle, Phone } from "lucide-react";

export default function Transfers() {
  // SEO: Update page title for prescription transfer searches  
  React.useEffect(() => {
    document.title = "Free Prescription Transfers | Georgies Pharmacy NJ | Transfer Prescriptions";
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
            Prescription <span className="text-primary">Transfers</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Easily transfer your prescriptions from another pharmacy to Georgies Pharmacy. We handle all the paperwork.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Transfer Process</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Provide Transfer Information</h3>
                  <p className="text-slate-600">Share your current pharmacy details, prescription numbers, and medication names.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">We Contact Your Pharmacy</h3>
                  <p className="text-slate-600">Our team contacts your current pharmacy to initiate the transfer process.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Transfer Approval</h3>
                  <p className="text-slate-600">We handle all necessary paperwork and obtain approvals from your previous pharmacy.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Ready for Pickup</h3>
                  <p className="text-slate-600">Your transferred prescription is filled and ready for pickup at Georgies Pharmacy.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">What You'll Need</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FileText className="text-secondary h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Prescription Information</h4>
                  <p className="text-slate-600 text-sm">Prescription numbers and medication names</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-secondary h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Current Pharmacy Details</h4>
                  <p className="text-slate-600 text-sm">Name, address, and phone number</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-secondary h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Personal Information</h4>
                  <p className="text-slate-600 text-sm">Your name and date of birth for verification</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Transfer Benefits</h4>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• No cost to transfer prescriptions</li>
                <li>• Maintain your refill history</li>
                <li>• Personalized pharmacy service</li>
                <li>• Convenient location and hours</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="text-center bg-gradient-to-r from-secondary to-green-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transfer Your Prescriptions?</h2>
          <p className="text-xl text-green-100 mb-8">Start your transfer request today and experience better pharmacy care.</p>
          <Button onClick={() => window.location.href = "/api/login"} size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
            Start Transfer Request
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