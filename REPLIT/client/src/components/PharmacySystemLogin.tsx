import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Building2, Key, User, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PharmacySystemLoginProps {
  onAuthSuccess: (userData: any) => void;
  className?: string;
}

interface PharmacyLocation {
  name: string;
  legalName: string;
  address: string;
  phone: string;
  fax: string;
  nabp: string;
  refillUrl: string;
}

export default function PharmacySystemLogin({ onAuthSuccess, className = "" }: PharmacySystemLoginProps) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    nabp: "",
    locationName: "",
  });
  const [locations, setLocations] = useState<PharmacyLocation[]>([]);
  const [loading, setLoading] = useState(false);
  const [locationsLoading, setLocationsLoading] = useState(true);
  const [error, setError] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchPharmacyLocations();
  }, []);

  const fetchPharmacyLocations = async () => {
    try {
      const response = await fetch("/api/pharmacy-system/locations");
      const data = await response.json();
      
      if (data.success) {
        setLocations(data.locations);
      }
    } catch (err) {
      console.error("Failed to fetch pharmacy locations:", err);
    } finally {
      setLocationsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/pharmacy-system/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Authentication Successful",
          description: "Connected to pharmacy system successfully.",
        });
        onAuthSuccess(data.userData);
      } else {
        setError(data.message || "Authentication failed");
        toast({
          title: "Authentication Failed", 
          description: data.message || "Please check your credentials and try again.",
          variant: "destructive",
        });
      }
    } catch (err) {
      const errorMessage = "Unable to connect to pharmacy system";
      setError(errorMessage);
      toast({
        title: "Connection Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setCredentials(prev => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  return (
    <Card className={`w-full max-w-md ${className}`}>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Building2 className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="text-xl">Connect to Pharmacy System</CardTitle>
        <CardDescription>
          Sign in with your existing pharmacy system credentials to sync your prescription data.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="location">Pharmacy Location</Label>
            <Select 
              value={credentials.nabp} 
              onValueChange={(value) => {
                const selectedLocation = locations.find(loc => loc.nabp === value);
                setCredentials(prev => ({
                  ...prev,
                  nabp: value,
                  locationName: selectedLocation?.name || ""
                }));
                if (error) setError("");
              }}
              disabled={loading || locationsLoading}
            >
              <SelectTrigger>
                <SelectValue placeholder={locationsLoading ? "Loading locations..." : "Select pharmacy location"} />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.nabp} value={location.nabp}>
                    <div className="flex flex-col">
                      <span className="font-medium">{location.name}</span>
                      <span className="text-xs text-slate-500">{location.address}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                id="username"
                type="text"
                value={credentials.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                className="pl-10"
                placeholder="Enter your pharmacy username"
                disabled={loading}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Key className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="pl-10"
                placeholder="Enter your pharmacy password"
                disabled={loading}
                required
              />
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            className="w-full bg-primary text-white hover:bg-primary/90"
            disabled={loading || !credentials.username || !credentials.password || !credentials.nabp}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Connecting...
              </>
            ) : (
              "Connect to Pharmacy System"
            )}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">Integration Benefits:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Real-time prescription synchronization</li>
            <li>• Direct refill requests to your pharmacy</li>
            <li>• Automatic data updates</li>
            <li>• Seamless workflow integration</li>
          </ul>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-slate-500">
            Your credentials are securely transmitted and not stored locally.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}