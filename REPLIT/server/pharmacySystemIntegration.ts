import { storage } from "./storage";

interface PharmacyLocation {
  name: string;
  legalName: string;
  address: string;
  phone: string;
  fax: string;
  nabp: string;
  refillUrl: string;
}

interface PharmacySystemConfig {
  locations: PharmacyLocation[];
  endpoints: {
    login: string;
    refills: string;
    prescriptions: string;
    patients: string;
  };
}

interface PharmacySystemCredentials {
  username: string;
  password: string;
  nabp: string;
  locationName?: string;
}

interface PharmacySystemResponse {
  success: boolean;
  data?: any;
  error?: string;
  sessionToken?: string;
}

export class PharmacySystemIntegration {
  private config: PharmacySystemConfig;
  private sessionTokens: Map<string, string> = new Map();

  constructor() {
    this.config = {
      locations: [
        {
          name: "Georgies Family Pharmacy",
          legalName: "St. George Healthcare Inc.",
          address: "332 W. St. Georges Avenue, Linden, NJ 07036-5638",
          phone: "908-925-4567",
          fax: "908-925-8090",
          nabp: "3198098",
          refillUrl: "https://3198098.winrxrefill.com"
        },
        {
          name: "Georgies Specialty Pharmacy",
          legalName: "Georgies Wood Avenue Inc.",
          address: "521 N Wood Avenue, Linden, NJ 07036-4146",
          phone: "908-925-4566",
          fax: "908-345-5030",
          nabp: "3155973",
          refillUrl: "https://3155973.winrxrefill.com"
        },
        {
          name: "Georgies Parlin Pharmacy",
          legalName: "Parlin Pharmacy Inc.",
          address: "499 Ernston Road, Parlin, NJ 08859-1406",
          phone: "732-952-3022",
          fax: "407-641-8434",
          nabp: "3151482",
          refillUrl: "https://3151482.winrxrefill.com"
        },
        {
          name: "Georgies Outpatient Pharmacy",
          legalName: "Georgies Browns Mills Inc.",
          address: "6 Earlin Drive, Suite 130, Browns Mills, NJ 08015-1768",
          phone: "609-726-5800",
          fax: "609-726-5810",
          nabp: "3156177",
          refillUrl: "https://3156177.winrxrefill.com"
        }
      ],
      endpoints: {
        login: "/api/auth/login",
        refills: "/OrderRefill/OrderRefills",
        prescriptions: "/api/prescriptions",
        patients: "/api/patients",
      },
    };
  }

  /**
   * Get pharmacy location by NABP number
   */
  getLocationByNabp(nabp: string): PharmacyLocation | undefined {
    return this.config.locations.find(location => location.nabp === nabp);
  }

  /**
   * Get all pharmacy locations
   */
  getAllLocations(): PharmacyLocation[] {
    return this.config.locations;
  }

  /**
   * Authenticate with the pharmacy system using existing credentials
   */
  async authenticateWithPharmacySystem(
    credentials: PharmacySystemCredentials
  ): Promise<PharmacySystemResponse> {
    try {
      const location = this.getLocationByNabp(credentials.nabp);
      if (!location) {
        return { success: false, error: "Invalid pharmacy location" };
      }

      // First, try to authenticate with the specific pharmacy location
      const loginResponse = await this.makePharmacyRequest(
        "/api/auth/login", 
        {
          method: "POST",
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
            nabp: credentials.nabp,
            location: location.name,
          }),
        },
        location.refillUrl
      );

      if (loginResponse.success && loginResponse.sessionToken) {
        // Store session token with location info for future requests
        this.sessionTokens.set(credentials.username, JSON.stringify({
          token: loginResponse.sessionToken,
          nabp: credentials.nabp,
          location: location.name,
        }));
        
        // Create or update user in our system
        await this.syncUserData(credentials.username, loginResponse.data);
        
        return {
          success: true,
          data: { ...loginResponse.data, location },
          sessionToken: loginResponse.sessionToken,
        };
      }

      return { success: false, error: "Authentication failed" };
    } catch (error) {
      console.error("Pharmacy system authentication error:", error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error" 
      };
    }
  }

  /**
   * Sync user data from pharmacy system to our database
   */
  private async syncUserData(username: string, pharmacyUserData: any): Promise<void> {
    try {
      // Create or update user based on pharmacy system data
      const userData = {
        id: pharmacyUserData.patientId || username,
        email: pharmacyUserData.email,
        firstName: pharmacyUserData.firstName,
        lastName: pharmacyUserData.lastName,
        profileImageUrl: null,
      };

      await storage.upsertUser(userData);

      // Create or update patient record
      if (pharmacyUserData.patientDetails) {
        const patientData = {
          firstName: pharmacyUserData.firstName,
          lastName: pharmacyUserData.lastName,
          dateOfBirth: pharmacyUserData.dateOfBirth,
          email: pharmacyUserData.email,
          phone: pharmacyUserData.phone,
          address: pharmacyUserData.address,
          city: pharmacyUserData.city,
          state: pharmacyUserData.state,
          zipCode: pharmacyUserData.zipCode,
          insuranceProvider: pharmacyUserData.insurance?.provider,
          insuranceMemberId: pharmacyUserData.insurance?.memberId,
          emergencyContactName: pharmacyUserData.emergencyContact?.name,
          emergencyContactPhone: pharmacyUserData.emergencyContact?.phone,
        };

        await storage.createPatient(patientData);
      }
    } catch (error) {
      console.error("Error syncing user data:", error);
    }
  }

  /**
   * Fetch prescriptions from pharmacy system
   */
  async fetchPrescriptionsFromPharmacy(username: string): Promise<PharmacySystemResponse> {
    try {
      const sessionData = this.sessionTokens.get(username);
      if (!sessionData) {
        return { success: false, error: "No active session" };
      }

      const sessionInfo = JSON.parse(sessionData);
      const location = this.getLocationByNabp(sessionInfo.nabp);
      if (!location) {
        return { success: false, error: "Invalid pharmacy location" };
      }

      const response = await this.makePharmacyRequest(
        "/api/prescriptions", 
        {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${sessionInfo.token}`,
          },
        },
        location.refillUrl
      );

      if (response.success && response.data) {
        // Sync prescriptions to our database
        await this.syncPrescriptions(username, response.data);
      }

      return response;
    } catch (error) {
      console.error("Error fetching prescriptions:", error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Failed to fetch prescriptions" 
      };
    }
  }

  /**
   * Submit refill request to pharmacy system
   */
  async submitRefillToPharmacy(
    username: string, 
    refillData: {
      prescriptionId: string;
      rxNumber: string;
      pickupMethod: string;
      notes?: string;
    }
  ): Promise<PharmacySystemResponse> {
    try {
      const sessionData = this.sessionTokens.get(username);
      if (!sessionData) {
        return { success: false, error: "No active session" };
      }

      const sessionInfo = JSON.parse(sessionData);
      const location = this.getLocationByNabp(sessionInfo.nabp);
      if (!location) {
        return { success: false, error: "Invalid pharmacy location" };
      }

      const response = await this.makePharmacyRequest(
        "/OrderRefill/OrderRefills", 
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${sessionInfo.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prescriptionId: refillData.prescriptionId,
            rxNumber: refillData.rxNumber,
            pickupMethod: refillData.pickupMethod,
            notes: refillData.notes,
            nabp: sessionInfo.nabp,
            location: location.name,
          }),
        },
        location.refillUrl
      );

      if (response.success) {
        // Create refill request record in our system
        await storage.createRefillRequest({
          patientId: 1, // This should be dynamically determined
          prescriptionId: parseInt(refillData.prescriptionId),
          pickupMethod: refillData.pickupMethod,
          notes: refillData.notes || "",
        });
      }

      return response;
    } catch (error) {
      console.error("Error submitting refill:", error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Failed to submit refill" 
      };
    }
  }

  /**
   * Make authenticated request to pharmacy system
   */
  private async makePharmacyRequest(
    endpoint: string, 
    options: RequestInit = {},
    baseUrl?: string
  ): Promise<PharmacySystemResponse> {
    try {
      const url = `${baseUrl || "https://3156177.winrxrefill.com"}${endpoint}`;
      
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "GeorgiesPharmacy-Portal/1.0",
          "Accept": "application/json",
          ...options.headers,
        },
      });

      if (!response.ok) {
        // Handle different HTTP error codes
        if (response.status === 401) {
          return { success: false, error: "Authentication required" };
        } else if (response.status === 403) {
          return { success: false, error: "Access denied" };
        } else if (response.status === 404) {
          return { success: false, error: "Endpoint not found" };
        }
        
        return { 
          success: false, 
          error: `HTTP ${response.status}: ${response.statusText}` 
        };
      }

      // Handle both JSON and HTML responses
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        return { success: true, data };
      } else {
        // For HTML responses (like the actual refill page), return success with page info
        const html = await response.text();
        return { 
          success: true, 
          data: { 
            type: "html_page",
            content: html,
            url: url,
            message: "Refill page accessed successfully"
          } 
        };
      }
      
    } catch (error) {
      // Handle network errors, timeout, etc.
      if (error instanceof TypeError && error.message.includes('fetch')) {
        return { 
          success: false, 
          error: "Network error: Unable to connect to pharmacy system" 
        };
      }
      
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error" 
      };
    }
  }

  /**
   * Sync prescriptions from pharmacy system to our database
   */
  private async syncPrescriptions(username: string, prescriptions: any[]): Promise<void> {
    try {
      for (const prescription of prescriptions) {
        const prescriptionData = {
          patientId: 1, // This should be dynamically determined
          rxNumber: prescription.rxNumber,
          medicationName: prescription.medicationName,
          dosage: prescription.dosage,
          instructions: prescription.instructions,
          prescribedBy: prescription.prescribedBy,
          datePrescribed: prescription.datePrescribed ? new Date(prescription.datePrescribed) : new Date(),
          quantity: prescription.quantity || 30,
          refillsRemaining: prescription.refillsRemaining || 0,
          status: prescription.status || "active",
        };

        await storage.createPrescription(prescriptionData);
      }
    } catch (error) {
      console.error("Error syncing prescriptions:", error);
    }
  }

  /**
   * Check if user has active session with pharmacy system
   */
  hasActiveSession(username: string): boolean {
    return this.sessionTokens.has(username);
  }

  /**
   * Clear session for user
   */
  clearSession(username: string): void {
    this.sessionTokens.delete(username);
  }
}

export const pharmacyIntegration = new PharmacySystemIntegration();