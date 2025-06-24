import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pill, Menu, ChevronDown } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const { isAuthenticated, isLoading } = useAuth();
  
  const locations = ["Family", "Specialty", "Parlin", "Outpatient"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocationIndex((prev) => (prev + 1) % locations.length);
    }, 2000); // Change every 2 seconds
    
    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  return (
    <header className="bg-gradient-to-r from-primary to-red-900 shadow-lg border-b border-red-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Pill className="text-white h-4 w-4" />
            </div>
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Georgies</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-xl font-bold text-white px-2 py-1 h-auto hover:bg-red-800 flex items-center w-[160px] justify-center">
                    <span className="transition-all duration-500 ease-in-out transform">
                      {locations[currentLocationIndex]}
                    </span>
                    <ChevronDown className="h-4 w-4 ml-1 flex-shrink-0" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 mt-2">
                  <DropdownMenuItem className="cursor-pointer py-3">
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-900">Family Pharmacy</span>
                      <span className="text-xs text-slate-500">332 W. St. Georges Ave, Linden</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer py-3">
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-900">Specialty Pharmacy</span>
                      <span className="text-xs text-slate-500">521 N Wood Ave, Linden</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer py-3">
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-900">Parlin Pharmacy</span>
                      <span className="text-xs text-slate-500">499 Ernston Rd, Parlin</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer py-3">
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-900">Outpatient Pharmacy</span>
                      <span className="text-xs text-slate-500">6 Earlin Dr, Browns Mills</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <span className="text-xl font-bold text-white">Pharmacy</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-red-100 transition-colors">Home</a>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white hover:text-red-100 transition-colors flex items-center h-auto">
                Locations
                <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild className="cursor-pointer">
                  <a href="/locations" className="w-full">
                    <div className="flex flex-col">
                      <span className="font-medium text-primary">View All Locations</span>
                      <span className="text-xs text-slate-500">Complete location directory</span>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-medium">Family Pharmacy</span>
                    <span className="text-xs text-slate-500">332 W. St. Georges Ave, Linden</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-medium">Specialty Pharmacy</span>
                    <span className="text-xs text-slate-500">521 N Wood Ave, Linden</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-medium">Parlin Pharmacy</span>
                    <span className="text-xs text-slate-500">499 Ernston Rd, Parlin</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-medium">Outpatient Pharmacy</span>
                    <span className="text-xs text-slate-500">6 Earlin Dr, Browns Mills</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/features" className="text-white hover:text-red-100 transition-colors">Services</a>
            <a href="/otc-store" className="text-white hover:text-red-100 transition-colors">OTC Store</a>
            <a href="/api/login" className="text-white hover:text-red-100 transition-colors">Create An Account</a>
            <a href="/contact" className="text-white hover:text-red-100 transition-colors">Contact</a>
          </nav>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isLoading ? (
              <div className="w-20 h-9 bg-slate-200 animate-pulse rounded"></div>
            ) : isAuthenticated ? (
              <>
                <Button variant="outline" onClick={() => window.location.href = "/"}>
                  Dashboard
                </Button>
                <Button onClick={handleLogout} variant="outline">
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  onClick={() => window.location.href = '/services/refills'}
                  className="bg-white text-primary hover:bg-red-50 px-4 py-2 text-sm font-medium min-h-[40px]"
                >
                  Refill Rx
                </Button>
                <Button 
                  onClick={() => window.location.href = '/services/transfers'}
                  className="bg-white text-primary hover:bg-red-50 px-4 py-2 text-sm font-medium min-h-[40px]"
                >
                  Transfer Rx
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Pill className="text-white h-3 w-3" />
                  </div>
                  <span>Georgies Pharmacy</span>
                </SheetTitle>
                <SheetDescription>
                  Your trusted healthcare partner
                </SheetDescription>
              </SheetHeader>
              
              <div className="flex flex-col space-y-4 mt-8">
                <a href="/" className="text-slate-600 hover:text-primary transition-colors py-2">Home</a>
                <a href="/contact" className="text-slate-600 hover:text-primary transition-colors py-2">Locations</a>
                <a href="/features" className="text-slate-600 hover:text-primary transition-colors py-2">Services</a>
                <a href="#refill" className="text-slate-600 hover:text-primary transition-colors py-2">Refill</a>
                <a href="/api/login" className="text-slate-600 hover:text-primary transition-colors py-2">Create An Account</a>
                <a href="/contact" className="text-slate-600 hover:text-primary transition-colors py-2">Contact</a>
                
                <div className="border-t pt-4 mt-4">
                  {isAuthenticated ? (
                    <>
                      <Button variant="outline" className="w-full mb-2" onClick={() => window.location.href = "/"}>
                        Dashboard
                      </Button>
                      <Button onClick={handleLogout} variant="outline" className="w-full">
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" className="w-full mb-2" onClick={handleLogin}>
                        Sign In
                      </Button>
                      <Button onClick={() => window.location.href = '/about'} className="w-full bg-primary text-white hover:bg-primary/90">
                        About Us →
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>
              Access all pharmacy services and information
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <Button variant="ghost" className="justify-start" onClick={() => { window.location.href = "/"; setIsOpen(false); }}>
              Home
            </Button>
            <Button variant="ghost" className="justify-start" onClick={() => { window.location.href = "/services"; setIsOpen(false); }}>
              Services
            </Button>
            <Button variant="ghost" className="justify-start" onClick={() => { window.location.href = "/features"; setIsOpen(false); }}>
              Refill
            </Button>
            <Button variant="ghost" className="justify-start" onClick={() => { window.location.href = "/contact"; setIsOpen(false); }}>
              Contact
            </Button>
            <div className="border-t pt-4 mt-4">
              <Button onClick={() => { handleLogin(); setIsOpen(false); }} className="w-full mb-2">
                Login
              </Button>
              <Button onClick={() => { handleLogin(); setIsOpen(false); }} variant="outline" className="w-full">
                Create Account
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}