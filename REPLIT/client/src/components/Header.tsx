import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Menu, Pill, LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import type { Patient } from "@/types";

interface HeaderProps {
  patient?: Patient;
}

export default function Header({ patient }: HeaderProps) {
  const { user } = useAuth();
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  
  const locations = ["Family", "Specialty", "Parlin", "Outpatient"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocationIndex((prev) => (prev + 1) % locations.length);
    }, 2000); // Change every 2 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const getInitials = (firstName?: string, lastName?: string) => {
    if (!firstName || !lastName) return "U";
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  return (
    <header className="bg-gradient-to-r from-primary to-red-900 shadow-lg border-b border-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14 lg:h-16">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                <Pill className="text-white h-3 w-3 sm:h-4 sm:w-4" />
              </div>
              <div className="flex items-center">
                <span className="text-lg sm:text-xl font-bold text-white">Georgies</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-lg sm:text-xl font-bold text-white px-1 sm:px-2 py-1 h-auto hover:bg-red-800 flex items-center w-[120px] sm:w-[160px] justify-center">
                      <span className="transition-all duration-500 ease-in-out transform text-sm sm:text-base">
                        {locations[currentLocationIndex]}
                      </span>
                      <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1 flex-shrink-0" />
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
                <span className="text-lg sm:text-xl font-bold text-white">Pharmacy</span>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-white hover:text-red-100 transition-colors font-medium">
              Home
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white hover:text-red-100 transition-colors font-medium flex items-center">
                Locations
                <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
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
            <a href="/services" className="text-white hover:text-red-100 transition-colors font-medium">
              Services
            </a>
            <a href="#refill" className="text-white hover:text-red-100 transition-colors font-medium">
              Refill
            </a>
            <a href="#transfer" className="text-white hover:text-red-100 transition-colors font-medium">
              Transfer
            </a>
            <a href="/api/login" className="text-white hover:text-red-100 transition-colors font-medium">
              Create An Account
            </a>
            <a href="/contact" className="text-white hover:text-red-100 transition-colors font-medium">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-red-100">
              <Bell className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                {user?.profileImageUrl && (
                  <AvatarImage src={user.profileImageUrl} alt="Profile" className="object-cover" />
                )}
                <AvatarFallback className="bg-secondary text-white text-sm font-medium">
                  {getInitials(user?.firstName, user?.lastName)}
                </AvatarFallback>
              </Avatar>
              <span className="hidden sm:block text-sm font-medium text-white">
                {user ? `${user.firstName || 'User'} ${user.lastName || ''}`.trim() : "User"}
              </span>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleLogout}
                className="text-white hover:text-red-100"
                title="Sign Out"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
            
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-red-100">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
