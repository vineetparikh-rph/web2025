import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Pill, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    console.log("Contact form submitted:", data);
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    form.reset();
  };

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
              <a href="/features" className="text-slate-600 hover:text-primary transition-colors font-medium">
                Features
              </a>
              <a href="/about" className="text-slate-600 hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="/contact" className="text-primary font-medium">
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
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Our Locations */}
          <div className="grid grid-rows-[auto_1fr]">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Locations</h2>
            
            <div className="space-y-4">
              {/* Location 1 - Georgies Family Pharmacy */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                <h3 className="text-base font-semibold text-slate-900 mb-2">Georgies Family Pharmacy</h3>
                <div className="flex items-start text-sm text-slate-600 mb-1">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>332 W. St. Georges Avenue, Linden, NJ 07036-5638</span>
                </div>
                <div className="flex items-center text-sm text-slate-600 mb-2">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>908-925-4567</span>
                </div>
                <div className="text-xs text-slate-500">
                  Mon-Fri: 9:00 AM - 7:00 PM | Sat: 9:00 AM - 5:00 PM | Sun: Closed
                </div>
              </div>

              {/* Location 2 - Georgies Specialty Pharmacy */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                <h3 className="text-base font-semibold text-slate-900 mb-2">Georgies Specialty Pharmacy</h3>
                <div className="flex items-start text-sm text-slate-600 mb-1">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>521 N Wood Avenue, Linden, NJ 07036-4146</span>
                </div>
                <div className="flex items-center text-sm text-slate-600 mb-2">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>908-925-4566</span>
                </div>
                <div className="text-xs text-slate-500">
                  Mon-Fri: 9:30 AM - 6:00 PM | Sat: Closed | Sun: Closed
                </div>
              </div>

              {/* Location 3 - Georgies Parlin Pharmacy */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                <h3 className="text-base font-semibold text-slate-900 mb-2">Georgies Parlin Pharmacy</h3>
                <div className="flex items-start text-sm text-slate-600 mb-1">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>499 Ernston Road, Parlin, NJ 08859-1406</span>
                </div>
                <div className="flex items-center text-sm text-slate-600 mb-2">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>732-952-3022</span>
                </div>
                <div className="text-xs text-slate-500">
                  Mon-Fri: 9:00 AM - 7:00 PM | Sat: 9:00 AM - 5:00 PM | Sun: Closed
                </div>
              </div>

              {/* Location 4 - Georgies Outpatient Pharmacy */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                <h3 className="text-base font-semibold text-slate-900 mb-2">Georgies Outpatient Pharmacy</h3>
                <div className="flex items-start text-sm text-slate-600 mb-1">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>6 Earlin Drive, Suite 130, Browns Mills, NJ 08015-1768</span>
                </div>
                <div className="flex items-center text-sm text-slate-600 mb-2">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>609-726-5800</span>
                </div>
                <div className="text-xs text-slate-500">
                  Mon-Fri: 9:30 AM - 6:00 PM | Sat: 10:00 AM - 2:00 PM | Sun: Closed
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-rows-[auto_1fr]">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full flex flex-col space-y-6">
                  <div className="flex-1 space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="prescription">Prescription Question</SelectItem>
                              <SelectItem value="refill">Refill Request</SelectItem>
                              <SelectItem value="transfer">Transfer Request</SelectItem>
                              <SelectItem value="insurance">Insurance Question</SelectItem>
                              <SelectItem value="complaint">Complaint/Feedback</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="flex-1 flex flex-col">
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe how we can help you..."
                              className="flex-1 min-h-[200px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-white hover:bg-primary/90"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        {/* Get In Touch */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Get In Touch</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 max-w-md mx-auto text-center">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Georgies Pharmacy Group</h3>
                <p className="text-slate-600">New Jersey</p>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <Mail className="text-primary h-5 w-5" />
                <span className="text-slate-600">info@georgiesrx.com</span>
              </div>
            </div>
          </div>
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