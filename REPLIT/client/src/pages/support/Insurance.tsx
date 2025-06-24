import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pill, Shield, CreditCard, FileText, Phone, CheckCircle } from "lucide-react";

export default function Insurance() {
  const acceptedInsurance = [
    "Aetna", "Blue Cross Blue Shield", "Cigna", "UnitedHealthcare", 
    "Humana", "Medicare", "Medicaid", "Express Scripts", "CVS Caremark",
    "OptumRx", "Prime Therapeutics", "Anthem", "Kaiser Permanente",
    "Tricare", "Workers' Compensation", "Most Commercial Plans"
  ];

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
            Insurance <span className="text-primary">Information</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            We accept most major insurance plans to make your prescriptions affordable and accessible.
          </p>
        </div>

        {/* Accepted Insurance Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Accepted Insurance Plans</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {acceptedInsurance.map((insurance, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-700">{insurance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">Don't see your insurance listed? We accept many other plans too!</p>
            <Button onClick={() => window.open('tel:908-925-4567')} variant="outline">
              <Phone className="w-4 h-4 mr-2" />
              Call to Verify Coverage
            </Button>
          </div>
        </section>

        {/* Insurance Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Insurance Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-primary" />
                  Coverage Verification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-slate-600">
                  <p>We verify your insurance coverage before filling prescriptions to ensure accurate pricing.</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Real-time benefit verification</li>
                    <li>Copay and deductible information</li>
                    <li>Prior authorization assistance</li>
                    <li>Formulary checking</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-6 h-6 mr-2 text-primary" />
                  Cost Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-slate-600">
                  <p>We help you find the most cost-effective options for your medications.</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Generic medication counseling</li>
                    <li>Manufacturer discount programs</li>
                    <li>Pharmacy discount programs</li>
                    <li>90-day supply options</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-primary" />
                  Claims Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-slate-600">
                  <p>Our team handles all insurance claims processing efficiently and accurately.</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Electronic claims submission</li>
                    <li>Rejection resolution</li>
                    <li>Prior authorization requests</li>
                    <li>Appeals assistance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Medicare Information */}
        <section className="mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Medicare Coverage</CardTitle>
              <CardDescription className="text-blue-700">Special information for Medicare beneficiaries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-blue-800">
                <div>
                  <h4 className="font-semibold mb-2">Medicare Part D</h4>
                  <p>We participate in most Medicare Part D prescription drug plans. Our pharmacists can help you understand your coverage and find cost-effective options.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Medicare Advantage</h4>
                  <p>We work with Medicare Advantage plans to ensure you receive the benefits you're entitled to, including any additional prescription coverage.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Annual Enrollment</h4>
                  <p>Our team can provide guidance during Medicare open enrollment periods to help you choose the best plan for your medication needs.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Medicaid Information */}
        <section className="mb-16">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-900">Medicaid Coverage</CardTitle>
              <CardDescription className="text-green-700">Information for Medicaid beneficiaries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-green-800">
                <div>
                  <h4 className="font-semibold mb-2">New Jersey Medicaid</h4>
                  <p>We accept New Jersey Medicaid and most Medicaid managed care plans. Bring your Medicaid card and photo ID for prescription pickup.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Medicaid Managed Care</h4>
                  <p>We work with Medicaid managed care organizations including AmeriHealth, Horizon NJ Health, and UnitedHealthcare Community Plan.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Prior Authorizations</h4>
                  <p>Our clinical team assists with Medicaid prior authorization requests to ensure timely access to your medications.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What to Bring */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What to Bring</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">For New Prescriptions</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Current insurance card
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Photo identification
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Original prescription from your doctor
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      List of current medications
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">For Prescription Pickups</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Current insurance card
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Photo identification
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Payment method for copay
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Prescription number (if applicable)
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact for Insurance Questions */}
        <section className="text-center bg-gradient-to-r from-primary to-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Insurance Questions?</h2>
          <p className="text-xl text-red-100 mb-8">
            Our insurance specialists are here to help you understand your coverage and maximize your benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => window.open('tel:908-925-4567')} size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Phone className="w-4 h-4 mr-2" />
              Call Insurance Team
            </Button>
            <Button onClick={() => window.location.href = "/contact"} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Visit Our Locations
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">&copy; 2025 by Georgies Pharmacy Group. All rights reserved. Licensed Pharmacy.</p>
        </div>
      </footer>
    </div>
  );
}