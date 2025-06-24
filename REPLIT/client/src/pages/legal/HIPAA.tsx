import { Button } from "@/components/ui/button";
import { Pill, Shield, Lock, FileText, Eye } from "lucide-react";

export default function HIPAA() {
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
            HIPAA Notice of <span className="text-primary">Privacy Practices</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            This notice describes how medical information about you may be used and disclosed and how you can get access to this information.
          </p>
          <p className="text-sm text-slate-500">Effective Date: January 1, 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="text-primary h-8 w-8" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">Our Commitment to Your Privacy</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Georgies Pharmacy is committed to protecting your health information. We are required by law to maintain the privacy of your protected health information and to provide you with this notice of our legal duties and privacy practices.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <FileText className="text-primary h-6 w-6 mr-3" />
                How We May Use and Disclose Your Health Information
              </h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">For Treatment</h4>
                  <p>We may use your health information to provide you with medical treatment or services, including prescription dispensing, medication therapy management, and clinical consultations.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">For Payment</h4>
                  <p>We may use and disclose your health information to obtain payment for services we provide to you, including billing your insurance company or other third-party payers.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">For Healthcare Operations</h4>
                  <p>We may use and disclose your health information for healthcare operations, including quality assessment, employee review, training of students, licensing, and conducting or arranging for other business activities.</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Eye className="text-primary h-6 w-6 mr-3" />
                Your Rights Regarding Your Health Information
              </h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Right to Inspect and Copy</h4>
                  <p>You have the right to inspect and copy your health information. To inspect and copy your health information, you must submit your request in writing.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Right to Amend</h4>
                  <p>If you feel that your health information is incorrect or incomplete, you may ask us to amend the information.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Right to an Accounting of Disclosures</h4>
                  <p>You have the right to request an accounting of disclosures of your health information made by us for certain purposes.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Right to Request Restrictions</h4>
                  <p>You have the right to request a restriction or limitation on the health information we use or disclose about you.</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Lock className="text-primary h-6 w-6 mr-3" />
                Security Safeguards
              </h3>
              <div className="space-y-4 text-slate-600">
                <p>We maintain physical, electronic, and procedural safeguards to protect your health information:</p>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Physical Safeguards</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Locked filing cabinets and restricted access areas</li>
                    <li>Secure workstations and computer terminals</li>
                    <li>Proper disposal of documents containing health information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Electronic Safeguards</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Encryption of electronic health information</li>
                    <li>User authentication and access controls</li>
                    <li>Audit logs and monitoring systems</li>
                    <li>Secure data transmission protocols</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Administrative Safeguards</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Employee training on privacy policies</li>
                    <li>Assigned privacy officer and security responsibilities</li>
                    <li>Regular security evaluations and updates</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Complaints</h3>
              <div className="text-slate-600">
                <p className="mb-4">
                  If you believe your privacy rights have been violated, you may file a complaint with us or with the Secretary of the Department of Health and Human Services.
                </p>
                <div className="space-y-2">
                  <p><strong>Privacy Officer:</strong> privacy@georgiespharmacy.com</p>
                  <p><strong>Phone:</strong> (908) 925-4567</p>
                  <p><strong>Address:</strong> 332 W. St. Georges Avenue, Linden, NJ 07036-5638</p>
                </div>
                <p className="mt-4">
                  <strong>Important:</strong> We will not retaliate against you for filing a complaint.
                </p>
              </div>
            </section>

            <section className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Changes to This Notice</h3>
              <p className="text-slate-600">
                We reserve the right to change this notice. We reserve the right to make the revised or changed notice effective for health information we already have about you as well as any information we receive in the future. We will post a copy of the current notice in our pharmacy and on our website.
              </p>
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