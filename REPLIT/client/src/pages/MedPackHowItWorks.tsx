import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MedPackHowItWorks() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12 bg-gradient-to-br from-primary to-red-900 rounded-xl p-12 text-white shadow-xl">
          <h1 className="text-4xl font-bold mb-4">How MedPack Works</h1>
          <p className="text-xl opacity-90">Simple, organized medication management and delivery</p>
        </div>

        {/* Step 1 */}
        <div className="bg-white rounded-xl p-10 mb-8 shadow-lg border-l-6 border-primary">
          <div className="inline-block w-12 h-12 bg-primary text-white rounded-full text-xl font-bold text-center leading-12 mb-5">
            1
          </div>
          <h2 className="text-2xl font-bold text-primary mb-5">We Transfer Your Prescriptions</h2>
          <p className="text-lg text-slate-600 mb-5 leading-relaxed">
            First, we'll work with you to transfer all your current prescriptions to Georgies Outpatient Pharmacy. This process is completely free and we handle all the coordination with your current pharmacy and doctors.
          </p>
          
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-4">What We Do:</h3>
            <ul className="ml-5 space-y-2 text-slate-600">
              <li>• Contact your current pharmacy to transfer prescriptions</li>
              <li>• Verify all medications and dosages with your doctors</li>
              <li>• Review your insurance coverage and benefits</li>
              <li>• Set up your personalized medication profile</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-xl p-10 mb-8 shadow-lg border-l-6 border-primary">
          <div className="inline-block w-12 h-12 bg-primary text-white rounded-full text-xl font-bold text-center leading-12 mb-5">
            2
          </div>
          <h2 className="text-2xl font-bold text-primary mb-5">We Sort Your Medications by Date and Time</h2>
          <p className="text-lg text-slate-600 mb-5 leading-relaxed">
            Our pharmacists carefully organize all your medications into individual dose packets. Each packet is clearly labeled with the date, time, and contains exactly the medications you need for that specific dose.
          </p>
          
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-4">What You Get:</h3>
            <ul className="ml-5 space-y-2 text-slate-600">
              <li>• Individual packets for each dose (morning, afternoon, evening)</li>
              <li>• Clear labeling with date, time, and medication names</li>
              <li>• Easy-to-open, tamper-evident packaging</li>
              <li>• Large print labels for easy reading</li>
              <li>• Color-coded by time of day</li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-xl p-10 mb-8 shadow-lg border-l-6 border-primary">
          <div className="inline-block w-12 h-12 bg-primary text-white rounded-full text-xl font-bold text-center leading-12 mb-5">
            3
          </div>
          <h2 className="text-2xl font-bold text-primary mb-5">We Deliver to Your Door Every Month</h2>
          <p className="text-lg text-slate-600 mb-5 leading-relaxed">
            Your medications are delivered directly to your home every month, completely free of charge. No more trips to the pharmacy or worrying about running out of medications.
          </p>
          
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-4">Delivery Details:</h3>
            <ul className="ml-5 space-y-2 text-slate-600">
              <li>• Free monthly delivery to your doorstep</li>
              <li>• Secure, discreet packaging</li>
              <li>• Delivery notifications and tracking</li>
              <li>• Flexible delivery scheduling</li>
              <li>• Emergency refill options available</li>
            </ul>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-white rounded-xl p-10 mb-8 shadow-lg border-l-6 border-primary">
          <div className="inline-block w-12 h-12 bg-primary text-white rounded-full text-xl font-bold text-center leading-12 mb-5">
            4
          </div>
          <h2 className="text-2xl font-bold text-primary mb-5">Ongoing Support and Management</h2>
          <p className="text-lg text-slate-600 mb-5 leading-relaxed">
            We don't just deliver your medications - we actively manage your prescriptions, work with your doctors for refills, and provide ongoing pharmacist support whenever you need it.
          </p>
          
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-4">Our Support Includes:</h3>
            <ul className="ml-5 space-y-2 text-slate-600">
              <li>• Automatic prescription refill management</li>
              <li>• Coordination with doctors for new prescriptions</li>
              <li>• Insurance claims processing and prior authorizations</li>
              <li>• Medication counseling and interaction checks</li>
              <li>• 24/7 pharmacist support for questions</li>
              <li>• Regular medication reviews and updates</li>
            </ul>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-white rounded-xl p-10 mb-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Your First Month Timeline</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📞</div>
              <div className="font-semibold text-slate-600">
                Day 1-2<br />Initial Call & Setup
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📋</div>
              <div className="font-semibold text-slate-600">
                Day 3-5<br />Prescription Transfer
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💊</div>
              <div className="font-semibold text-slate-600">
                Day 6-8<br />Medication Preparation
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚚</div>
              <div className="font-semibold text-slate-600">
                Day 9-10<br />First Delivery
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary to-red-900 text-white rounded-xl p-10 text-center shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-5">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Call Georgies Outpatient Pharmacy today to begin your MedPack service. Our team will guide you through the simple setup process.
          </p>
          
          <div className="flex gap-5 justify-center flex-wrap">
            <Button 
              onClick={() => window.location.href = 'tel:+16097265800'}
              className="bg-white text-primary hover:bg-slate-100 px-8 py-3 text-lg font-bold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (609) 726-5800
            </Button>
            <Button 
              onClick={() => window.location.href = '/locations'}
              className="bg-white text-primary hover:bg-slate-100 px-8 py-3 text-lg font-bold"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Visit Our Pharmacy
            </Button>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Button 
            variant="outline"
            onClick={() => window.location.href = '/medpack'}
            className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 font-semibold"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to MedPack
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}