import { Button } from "@/components/ui/button";
import { Pill, Eye, Ear, Hand, Heart } from "lucide-react";

export default function Accessibility() {
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
            Accessibility <span className="text-primary">Statement</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Georgies Pharmacy is committed to ensuring digital accessibility for people with disabilities.
          </p>
          <p className="text-sm text-slate-500">Last updated: January 1, 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="text-primary h-8 w-8" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">Our Commitment</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We are committed to providing equal access to our services for all customers, including those with disabilities. We strive to ensure that our website and digital services are accessible to everyone.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Eye className="text-primary h-6 w-6 mr-3" />
                Accessibility Features
              </h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Visual Accessibility</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>High contrast color schemes for better visibility</li>
                    <li>Scalable text that can be enlarged up to 200% without loss of functionality</li>
                    <li>Alternative text for all images and graphics</li>
                    <li>Clear, readable fonts and proper spacing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Navigation Accessibility</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Consistent navigation structure throughout the site</li>
                    <li>Skip navigation links to main content</li>
                    <li>Logical tab order for keyboard navigation</li>
                    <li>Clear headings and page structure</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Hand className="text-primary h-6 w-6 mr-3" />
                Keyboard and Motor Accessibility
              </h3>
              <div className="space-y-4 text-slate-600">
                <p>Our website is designed to be fully navigable using only a keyboard:</p>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Keyboard Navigation</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>All interactive elements are accessible via keyboard</li>
                    <li>Visible focus indicators show which element is currently selected</li>
                    <li>Logical tab order follows the visual layout</li>
                    <li>Keyboard shortcuts for common actions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Motor Impairment Support</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Large click targets for easier selection</li>
                    <li>No time-sensitive actions that cannot be extended</li>
                    <li>Alternative input methods supported</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Ear className="text-primary h-6 w-6 mr-3" />
                Audio and Cognitive Accessibility
              </h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Audio Content</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Captions provided for all video content</li>
                    <li>Audio descriptions available when necessary</li>
                    <li>No auto-playing audio that cannot be controlled</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Cognitive Support</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Clear, simple language used throughout the site</li>
                    <li>Consistent page layouts and navigation</li>
                    <li>Error messages that clearly explain how to fix issues</li>
                    <li>Progress indicators for multi-step processes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Assistive Technology Support</h3>
              <div className="space-y-4 text-slate-600">
                <p>Our website is compatible with assistive technologies including:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                    <li>Voice recognition software</li>
                    <li>Keyboard-only navigation</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Screen magnification software</li>
                    <li>Alternative keyboards</li>
                    <li>Switch devices</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Standards Compliance</h3>
              <div className="text-slate-600">
                <p className="mb-4">
                  We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. These guidelines explain how to make web content more accessible for people with disabilities.
                </p>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Our Goals Include:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Making content perceivable by all users</li>
                    <li>Ensuring all functionality is operable</li>
                    <li>Making information and UI operation understandable</li>
                    <li>Maximizing compatibility with assistive technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Feedback and Contact</h3>
              <div className="text-slate-600">
                <p className="mb-4">
                  We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> accessibility@georgiespharmacy.com</p>
                  <p><strong>Phone:</strong> (908) 925-4567</p>
                  <p><strong>Address:</strong> 332 W. St. Georges Avenue, Linden, NJ 07036-5638</p>
                </div>
                <p className="mt-4">
                  We aim to respond to accessibility feedback within 5 business days.
                </p>
              </div>
            </section>

            <section className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ongoing Efforts</h3>
              <p className="text-slate-600">
                Accessibility is an ongoing effort. We regularly review our website and services to identify and address accessibility barriers. We also provide training to our staff on accessibility best practices and work with disability advocacy groups to improve our services.
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