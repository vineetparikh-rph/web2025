import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import Dashboard from "@/pages/Dashboard";
import Landing from "@/pages/Landing";
import Locations from "@/pages/Locations";
import LocationsMap from "@/pages/LocationsMap";
import PetMedications from "@/pages/PetMedications";
import BestPrices from "@/pages/BestPrices";
import MedPack from "@/pages/MedPack";
import MedPackHowItWorks from "@/pages/MedPackHowItWorks";
import Testimonials from "@/pages/Testimonials";
import OTCStore from "@/pages/OTCStore";
import Partners from "@/pages/Partners";
import Features from "@/pages/Features";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Refills from "@/pages/services/Refills";
import Transfers from "@/pages/services/Transfers";
import FAQ from "@/pages/support/FAQ";
import Hours from "@/pages/support/Hours";
import Insurance from "@/pages/support/Insurance";
import Privacy from "@/pages/legal/Privacy";
import Terms from "@/pages/legal/Terms";
import HIPAA from "@/pages/legal/HIPAA";
import Accessibility from "@/pages/legal/Accessibility";
import NotFound from "@/pages/not-found";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <Switch>
      {isLoading || !isAuthenticated ? (
        <>
          <Route path="/" component={Landing} />
          <Route path="/locations" component={Locations} />
          <Route path="/locations/map" component={LocationsMap} />
          <Route path="/pet-medications" component={PetMedications} />
          <Route path="/best-prices" component={BestPrices} />
          <Route path="/partners" component={Partners} />
          <Route path="/features" component={Features} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services/refills" component={Refills} />
          <Route path="/services/transfers" component={Transfers} />
          <Route path="/support/faq" component={FAQ} />
          <Route path="/support/hours" component={Hours} />
          <Route path="/support/insurance" component={Insurance} />
          <Route path="/legal/privacy" component={Privacy} />
          <Route path="/legal/terms" component={Terms} />
          <Route path="/legal/hipaa" component={HIPAA} />
          <Route path="/legal/accessibility" component={Accessibility} />
        </>
      ) : (
        <>
          <Route path="/" component={Dashboard} />
          <Route path="/locations" component={Locations} />
          <Route path="/locations/map" component={LocationsMap} />
          <Route path="/pet-medications" component={PetMedications} />
          <Route path="/best-prices" component={BestPrices} />
          <Route path="/partners" component={Partners} />
          <Route path="/features" component={Features} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services/refills" component={Refills} />
          <Route path="/services/transfers" component={Transfers} />
          <Route path="/support/faq" component={FAQ} />
          <Route path="/support/hours" component={Hours} />
          <Route path="/support/insurance" component={Insurance} />
          <Route path="/legal/privacy" component={Privacy} />
          <Route path="/legal/terms" component={Terms} />
          <Route path="/legal/hipaa" component={HIPAA} />
          <Route path="/legal/accessibility" component={Accessibility} />
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
