import { Button } from "@/components/ui/button";
import { Pill, Shield, FileText, Scale } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Terms and <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Welcome to GeorgiesRx.com, the official website of Georgies Pharmacy.
          </p>
          <div className="text-sm text-slate-500">
            <p><strong>Effective Date:</strong> Since Inception</p>
            <p><strong>Last Updated:</strong> June 22, 2025</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Scale className="text-primary h-8 w-8" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">Our Locations</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Welcome to GeorgiesRx.com, operated by Georgies Pharmacy Group ("Georgies," "we," "us" or "our"), which includes the following locations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Georgies Family Pharmacy</strong> – 332 W. St. Georges Avenue, Linden, NJ 07036</li>
              <li><strong>Georgies Specialty Pharmacy</strong> – 521 N Wood Avenue, Linden, NJ 07036</li>
              <li><strong>Georgies Parlin Pharmacy</strong> – 499 Ernston Road, Parlin, NJ 08859</li>
              <li><strong>Georgies Outpatient Pharmacy</strong> – 6 Earlin Avenue, Suite 130, Browns Mills, NJ 08015</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              By using this website and any services offered herein, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <FileText className="text-primary h-6 w-6 mr-3" />
                1. Use of the Website
              </h3>
              <div className="text-slate-600">
                <p>This site may only be used for lawful purposes. You may not attempt to gain unauthorized access, use bots or scraping tools, upload malicious code, or post any content that is unlawful or harmful.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">2. Medical Disclaimer</h3>
              <div className="text-slate-600">
                <p>All information on GeorgiesRx.com is for informational purposes only and should not be used as a substitute for professional medical advice. Always consult a licensed healthcare provider.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. Prescription Services</h3>
              <div className="text-slate-600">
                <p>Prescription refills and pharmacy services are subject to federal and state regulations. We reserve the right to reject or modify any prescription request based on availability, insurance limitations, or pharmacist discretion.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">4. Product Availability and Pricing</h3>
              <div className="text-slate-600">
                <p>Prices and product availability may vary by location and are subject to change without notice. Information is provided for convenience and may not reflect real-time inventory.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Shield className="text-primary h-6 w-6 mr-3" />
                5. Your Account
              </h3>
              <div className="text-slate-600">
                <p>If you create an account, you are responsible for maintaining the confidentiality of your credentials and for all activities under your account.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">6. Communications and Text Messages</h3>
              <div className="text-slate-600">
                <p>By providing your phone number, you agree to receive communications from us, including text alerts for prescriptions or updates. To opt out, reply "STOP." Standard messaging rates may apply.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">7. Privacy</h3>
              <div className="text-slate-600">
                <p>We respect your privacy. All personal data is protected by HIPAA and handled in accordance with our <a href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</a>.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">8. Intellectual Property</h3>
              <div className="text-slate-600">
                <p>All content on GeorgiesRx.com is the property of Georgies Pharmacy Group. Unauthorized copying, distribution, or modification is prohibited.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">9. Third-Party Links</h3>
              <div className="text-slate-600">
                <p>Our website may link to third-party sites for convenience. We are not responsible for their content or practices and do not endorse them.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">10. Limitation of Liability</h3>
              <div className="text-slate-600">
                <p>Georgies is not liable for any damages resulting from your use of the website, including but not limited to service interruptions, data loss, or third-party content errors.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">11. Indemnification</h3>
              <div className="text-slate-600">
                <p>You agree to indemnify and hold harmless Georgies Pharmacy Group from any claims, liabilities, or damages resulting from your use of the site or violation of these Terms.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">12. Arbitration and Dispute Resolution</h3>
              <div className="text-slate-600">
                <p>Any dispute shall be resolved through binding individual arbitration in New Jersey. You waive your right to a jury trial or class action.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">13. Termination</h3>
              <div className="text-slate-600">
                <p>We may suspend or terminate your access at any time. The provisions on Indemnification, Dispute Resolution, and Liability survive termination.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">14. Governing Law and Venue</h3>
              <div className="text-slate-600">
                <p>These Terms are governed by the laws of the State of New Jersey. You consent to the exclusive jurisdiction of courts located in New Jersey for any dispute that is not subject to arbitration.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">15. Copyright & Digital Millennium Copyright Act (DMCA)</h3>
              <div className="text-slate-600">
                <p className="mb-4">If you believe that your copyright has been infringed, please send notice to our DMCA Agent including:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Description of the copyrighted work</li>
                  <li>Link to the infringing material</li>
                  <li>Your contact information</li>
                  <li>A statement of good faith belief</li>
                  <li>Your signature</li>
                </ul>
                <p className="mb-2"><strong>Send DMCA notices to:</strong></p>
                <ul className="space-y-1">
                  <li><strong>Email:</strong> <a href="mailto:dmca@georgiesrx.com" className="text-primary hover:underline">dmca@georgiesrx.com</a></li>
                  <li><strong>Mail:</strong> DMCA Agent<br />Georgies Pharmacy Group<br />6 Earlin Avenue, Suite 130<br />Browns Mills, NJ 08015</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">16. Force Majeure</h3>
              <div className="text-slate-600">
                <p>We are not responsible for delays or failures caused by events beyond our control, including natural disasters, outages, labor disruptions, or regulatory restrictions.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">17. General</h3>
              <div className="text-slate-600">
                <ul className="list-disc pl-6 space-y-1">
                  <li>These Terms are the entire agreement between you and Georgies.</li>
                  <li>If a provision is deemed invalid, it will be modified to remain enforceable.</li>
                  <li>We may assign these Terms without notice; you may not assign them without our consent.</li>
                  <li>Headings are for reference only and do not affect interpretation.</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">18. Wi‑Fi Use</h3>
              <div className="text-slate-600">
                <p>If you use Wi‑Fi at any Georgies location, do so at your own risk. Do not transmit personal or sensitive information while connected.</p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">19. How to Contact Us</h3>
              <div className="text-slate-600">
                <ul className="space-y-2">
                  <li><strong>Email:</strong> <a href="mailto:info@georgiesrx.com" className="text-primary hover:underline">info@georgiesrx.com</a></li>
                  <li><strong>Mail:</strong> Georgies Pharmacy Group<br />Attn: Legal Department<br />6 Earlin Avenue, Suite 130<br />Browns Mills, NJ 08015</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">&copy; 2025 by Georgies Pharmacy Group. All rights reserved. Licensed Pharmacy.</p>
        </div>
      </footer>
    </div>
  );
}