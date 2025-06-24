import { Button } from "@/components/ui/button";
import { Pill, Shield, Lock, Eye, FileText } from "lucide-react";

export default function Privacy() {
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Your privacy and the security of your health information is our top priority.
          </p>
          <p className="text-sm text-slate-500">Last updated: January 1, 2024</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="text-primary h-8 w-8" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">Our Commitment to Privacy</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              At Georgies Pharmacy, we are committed to protecting your privacy and maintaining the confidentiality of your personal health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <FileText className="text-primary h-6 w-6 mr-3" />
                Information We Collect
              </h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Personal Information</h4>
                  <p>We collect personal information necessary to provide pharmacy services, including your name, date of birth, address, phone number, and email address.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Health Information</h4>
                  <p>We collect and maintain health information including prescription history, medication allergies, insurance information, and clinical data necessary for safe medication dispensing.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Usage Information</h4>
                  <p>When you use our online services, we may collect information about how you interact with our website and mobile applications.</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Eye className="text-primary h-6 w-6 mr-3" />
                How We Use Your Information
              </h3>
              <div className="space-y-3 text-slate-600">
                <p>• <strong>Pharmacy Services:</strong> To fill prescriptions, provide medication counseling, and ensure medication safety</p>
                <p>• <strong>Communication:</strong> To contact you about prescription readiness, refill reminders, and important health information</p>
                <p>• <strong>Insurance Processing:</strong> To process insurance claims and verify coverage for your medications</p>
                <p>• <strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and professional standards</p>
                <p>• <strong>Service Improvement:</strong> To improve our services and develop new features for better patient care</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Lock className="text-primary h-6 w-6 mr-3" />
                Information Security
              </h3>
              <div className="space-y-4 text-slate-600">
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Security Measures Include:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>End-to-end encryption for data transmission</li>
                    <li>Secure servers with regular security updates</li>
                    <li>Access controls limiting who can view your information</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Employee training on privacy and security protocols</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Information Sharing</h3>
              <div className="space-y-4 text-slate-600">
                <p>We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Healthcare Providers:</strong> With your doctors and other healthcare providers involved in your care</li>
                  <li><strong>Insurance Companies:</strong> For coverage verification and claim processing</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect public health and safety</li>
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in our operations</li>
                  <li><strong>Emergency Situations:</strong> To prevent serious harm to you or others</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Your Rights</h3>
              <div className="space-y-3 text-slate-600">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request restrictions on certain uses of your information</li>
                  <li>Receive a copy of your health information</li>
                  <li>File a complaint if you believe your privacy rights have been violated</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h3>
              <div className="text-slate-600">
                <p className="mb-4">If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
                <div className="space-y-2">
                  <p><strong>Phone:</strong> (555) 123-4567</p>
                  <p><strong>Email:</strong> privacy@georgiespharmacy.com</p>
                  <p><strong>Address:</strong> 123 Health Street, Medical City, MC 12345</p>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">HIPAA Notice</h3>
              <p className="text-slate-600">
                This Privacy Policy works in conjunction with our HIPAA Notice of Privacy Practices, which provides additional details about how we protect your health information as required by federal law. You can view our complete HIPAA Notice <a href="/legal/hipaa" className="text-primary hover:underline">here</a>.
              </p>
            </section>
          </div>
        </div>
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