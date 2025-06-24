import { Button } from "@/components/ui/button";
import { Phone, MapPin, Package, Truck, ShoppingBag, RefreshCw, Users, Clipboard, Clock, Shield, Heart, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MedPack() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 bg-gradient-to-br from-primary to-red-900 rounded-xl p-16 text-white shadow-xl">
          <h1 className="text-6xl font-bold mb-6">MedPack</h1>
          <div className="text-2xl mb-4 opacity-95 font-light">Your medication, sorted and delivered</div>
          <div className="text-xl mb-10 opacity-90 max-w-4xl mx-auto leading-relaxed">
            MedPack is a full-service pharmacy service designed around your life, exclusively from Georgies Outpatient Pharmacy.
          </div>
          
          <div className="flex gap-6 justify-center flex-wrap mb-10">
            <Button 
              onClick={() => window.location.href = 'tel:+16097265800'}
              className="bg-white text-primary hover:bg-slate-100 px-9 py-4 text-xl font-bold border-3 border-white"
            >
              Get Started Today
            </Button>
            <Button 
              onClick={() => window.location.href = '/medpack/how-it-works'}
              variant="outline"
              className="bg-transparent text-white border-3 border-white/70 hover:bg-white hover:text-primary px-9 py-4 text-xl font-bold"
            >
              See How It Works
            </Button>
          </div>
          
          <div className="opacity-90">
            <a 
              href="#contact" 
              className="text-white underline text-lg hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn more about MedPack →
            </a>
          </div>
        </div>

        {/* How It Works Section */}
        <div id="how-it-works" className="bg-white rounded-xl p-12 mb-12 shadow-lg text-center">
          <h2 className="text-4xl font-bold text-primary mb-10">How MedPack Works</h2>
          
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div className="bg-slate-50 p-8 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary">
              <div className="text-6xl mb-6">📦</div>
              <h3 className="text-xl font-bold text-primary mb-4">We'll sort your meds by date and time</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                Each dose is individually packaged with the date and time clearly labeled, so you never miss a dose or take the wrong medication.
              </p>
              <a 
                href="/medpack/how-it-works" 
                className="text-primary font-semibold border-b-2 border-transparent hover:border-primary transition-all"
              >
                See how it works
              </a>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary">
              <div className="text-6xl mb-6">🚚</div>
              <h3 className="text-xl font-bold text-primary mb-4">Deliver them to you every month</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                Free delivery right to your doorstep every month. Never run out of medications or make trips to the pharmacy again.
              </p>
              <a 
                href="#contact" 
                className="text-primary font-semibold border-b-2 border-transparent hover:border-primary transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See delivery options
              </a>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary">
              <div className="text-6xl mb-6">🛍️</div>
              <h3 className="text-xl font-bold text-primary mb-4">Include any other pharmacy items</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                Need over-the-counter medications, vitamins, or health supplies? We'll include them with your monthly delivery at no extra charge.
              </p>
              <a 
                href="#contact" 
                className="text-primary font-semibold border-b-2 border-transparent hover:border-primary transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See what we include
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl p-12 mb-12 shadow-lg">
          <h2 className="text-4xl font-bold text-primary text-center mb-10">Full Service - A New Kind of Care</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex items-start gap-6">
              <div className="w-15 h-15 bg-gradient-to-br from-primary to-red-900 text-white rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                🔄
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Automatic Refills</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We monitor and manage your refills with your doctors so you always have the medications you need. No more calling for refills or running out unexpectedly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-15 h-15 bg-gradient-to-br from-primary to-red-900 text-white rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                🤝
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Behind-the-Scenes Support</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We work directly with your doctors and insurance companies to save you time and hassle. Prior authorizations, insurance issues, and prescription changes are handled for you.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-15 h-15 bg-gradient-to-br from-primary to-red-900 text-white rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                📋
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Everything in One Place</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  All your medications from all your doctors in one convenient package. We coordinate with multiple prescribers to ensure nothing falls through the cracks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-15 h-15 bg-gradient-to-br from-primary to-red-900 text-white rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                ⏰
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Perfect Timing</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Never take the wrong medication at the wrong time. Each dose is clearly labeled with exactly when to take it, making medication management simple and safe.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-15 h-15 bg-gradient-to-br from-primary to-red-900 text-white rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                🛡️
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Safety First</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Our pharmacists review every medication for interactions and contraindications. You get the peace of mind that comes with expert oversight.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-15 h-15 bg-gradient-to-br from-primary to-red-900 text-white rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                ❤️
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Personal Care</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  You're not just a prescription number. Our team knows you personally and is always available to answer questions and provide support when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-xl p-12 mb-12 shadow-lg text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Simple, Transparent Pricing</h2>
          
          <div className="bg-gradient-to-br from-primary to-red-900 text-white p-10 rounded-xl my-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">No Hidden Fees, No Surprises</h3>
            <p className="text-xl opacity-95">
              You pay exactly what your insurance copay would be at any pharmacy, plus our service is completely free.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 mb-6">
              MedPack costs the same as getting your prescriptions anywhere else, but with all the convenience and peace of mind included at no extra charge.
            </p>
            <p className="text-lg text-slate-600">
              Most insurance plans are accepted, and we'll verify your coverage before you start.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-gradient-to-br from-primary to-red-900 text-white rounded-xl p-12 text-center shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Call Georgies Outpatient Pharmacy today to learn more about MedPack and get started with your personalized medication management service.
          </p>
          
          <div className="flex justify-center gap-10 flex-wrap mb-8">
            <div className="flex items-center gap-3 text-xl">
              <Phone className="h-6 w-6" />
              <a 
                href="tel:+16097265800" 
                className="font-semibold hover:bg-white/25 px-5 py-3 rounded-lg transition-all hover:-translate-y-1"
              >
                (609) 726-5800
              </a>
            </div>
            <div className="flex items-center gap-3 text-xl">
              <MapPin className="h-6 w-6" />
              <span className="font-semibold">6 Earlin Dr, Browns Mills</span>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg mb-0">
              MedPack is exclusively available through Georgies Outpatient Pharmacy, serving patients throughout New Jersey with personalized care and convenience.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}