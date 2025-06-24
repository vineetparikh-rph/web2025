import { 
  users, patients, prescriptions, refillRequests, transferRequests, chatMessages, pharmacyLocations,
  type User, type UpsertUser,
  type Patient, type InsertPatient,
  type Prescription, type InsertPrescription,
  type RefillRequest, type InsertRefillRequest,
  type TransferRequest, type InsertTransferRequest,
  type ChatMessage, type InsertChatMessage,
  type PharmacyLocation, type InsertPharmacyLocation
} from "@shared/schema";

export interface IStorage {
  // User operations
  // (IMPORTANT) these user operations are mandatory for Replit Auth.
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Patient operations
  getPatient(id: number): Promise<Patient | undefined>;
  createPatient(patient: InsertPatient): Promise<Patient>;
  
  // Prescription operations
  getPrescriptionsByPatientId(patientId: number): Promise<Prescription[]>;
  getPrescriptionByRxNumber(rxNumber: string): Promise<Prescription | undefined>;
  createPrescription(prescription: InsertPrescription): Promise<Prescription>;
  updatePrescriptionStatus(id: number, status: string): Promise<void>;
  
  // Refill request operations
  createRefillRequest(request: InsertRefillRequest): Promise<RefillRequest>;
  getRefillRequestsByPatientId(patientId: number): Promise<RefillRequest[]>;
  
  // Transfer request operations
  createTransferRequest(request: InsertTransferRequest): Promise<TransferRequest>;
  getTransferRequestsByPatientId(patientId: number): Promise<TransferRequest[]>;
  
  // Chat operations
  getChatMessagesByPatientId(patientId: number): Promise<ChatMessage[]>;
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  
  // Pharmacy location operations
  getPharmacyLocations(): Promise<PharmacyLocation[]>;
  getPharmacyLocation(id: number): Promise<PharmacyLocation | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private patients: Map<number, Patient>;
  private prescriptions: Map<number, Prescription>;
  private refillRequests: Map<number, RefillRequest>;
  private transferRequests: Map<number, TransferRequest>;
  private chatMessages: Map<number, ChatMessage>;
  private pharmacyLocations: Map<number, PharmacyLocation>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.patients = new Map();
    this.prescriptions = new Map();
    this.refillRequests = new Map();
    this.transferRequests = new Map();
    this.chatMessages = new Map();
    this.pharmacyLocations = new Map();
    this.currentId = 1;
    
    this.seedData();
  }

  // User operations
  // (IMPORTANT) these user operations are mandatory for Replit Auth.
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const existingUser = this.users.get(userData.id);
    const user: User = {
      id: userData.id,
      email: userData.email ?? null,
      firstName: userData.firstName ?? null,
      lastName: userData.lastName ?? null,
      profileImageUrl: userData.profileImageUrl ?? null,
      createdAt: existingUser?.createdAt ?? new Date(),
      updatedAt: new Date(),
    };
    this.users.set(userData.id, user);
    return user;
  }

  private seedData() {
    // Create sample patient
    const patient: Patient = {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "1985-06-15",
      phone: "(555) 123-4567",
      email: "john.doe@email.com",
      address: "123 Main Street",
      city: "Medical City",
      state: "MC",
      zipCode: "12345"
    };
    this.patients.set(1, patient);

    // Create sample prescriptions
    const prescriptions: Prescription[] = [
      {
        id: 1,
        patientId: 1,
        rxNumber: "RX123456",
        medicationName: "Metformin 500mg",
        dosage: "500mg",
        instructions: "Take twice daily with meals",
        quantity: 60,
        refillsLeft: 2,
        status: "ready",
        prescriber: "Dr. Smith",
        dateIssued: "2024-05-15",
        lastFilled: "2024-06-15"
      },
      {
        id: 2,
        patientId: 1,
        rxNumber: "RX789012",
        medicationName: "Lisinopril 10mg",
        dosage: "10mg",
        instructions: "Take once daily in morning",
        quantity: 30,
        refillsLeft: 5,
        status: "processing",
        prescriber: "Dr. Johnson",
        dateIssued: "2024-06-01",
        lastFilled: "2024-06-10"
      },
      {
        id: 3,
        patientId: 1,
        rxNumber: "RX345678",
        medicationName: "Atorvastatin 20mg",
        dosage: "20mg",
        instructions: "Take once daily at bedtime",
        quantity: 30,
        refillsLeft: 3,
        status: "ready",
        prescriber: "Dr. Smith",
        dateIssued: "2024-05-20",
        lastFilled: "2024-06-12"
      },
      {
        id: 4,
        patientId: 1,
        rxNumber: "RX901234",
        medicationName: "Vitamin D3 2000 IU",
        dosage: "2000 IU",
        instructions: "Take once daily with food",
        quantity: 90,
        refillsLeft: 1,
        status: "pending",
        prescriber: "Dr. Johnson",
        dateIssued: "2024-06-05",
        lastFilled: null
      }
    ];

    prescriptions.forEach(p => this.prescriptions.set(p.id, p));

    // Create sample pharmacy locations with authentic data
    const locations: PharmacyLocation[] = [
      {
        id: 1,
        name: "Georgies Family Pharmacy",
        address: "332 W. St. Georges Avenue",
        city: "Linden",
        state: "NJ",
        zipCode: "07036-5638",
        phone: "908-925-4567",
        hours: "Mon-Fri: 9:00 AM - 7:00 PM\nSaturday: 9:00 AM - 5:00 PM\nSunday: Closed",
        latitude: "40.6220",
        longitude: "-74.2447"
      },
      {
        id: 2,
        name: "Georgies Specialty Pharmacy", 
        address: "521 N Wood Avenue",
        city: "Linden",
        state: "NJ",
        zipCode: "07036-4146",
        phone: "908-925-4566",
        hours: "Mon-Fri: 9:30 AM - 6:00 PM\nSaturday: Closed\nSunday: Closed",
        latitude: "40.6220",
        longitude: "-74.2447"
      },
      {
        id: 3,
        name: "Georgies Parlin Pharmacy",
        address: "499 Ernston Road", 
        city: "Parlin",
        state: "NJ",
        zipCode: "08859-1406",
        phone: "732-952-3022",
        hours: "Mon-Fri: 9:00 AM - 7:00 PM\nSaturday: 9:00 AM - 5:00 PM\nSunday: Closed",
        latitude: "40.4615",
        longitude: "-74.3057"
      },
      {
        id: 4,
        name: "Georgies Outpatient Pharmacy",
        address: "6 Earlin Drive, Suite 130",
        city: "Browns Mills", 
        state: "NJ",
        zipCode: "08015-1768",
        phone: "609-726-5800",
        hours: "Mon-Fri: 9:30 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed",
        latitude: "39.9734",
        longitude: "-74.5679"
      }
    ];
    
    locations.forEach(location => this.pharmacyLocations.set(location.id, location));

    // Sample chat messages
    const messages: ChatMessage[] = [
      {
        id: 1,
        patientId: 1,
        message: "Hello! How can I help you today?",
        isFromPatient: false,
        timestamp: new Date().toISOString()
      }
    ];
    messages.forEach(m => this.chatMessages.set(m.id, m));

    this.currentId = 5;
  }

  async getPatient(id: number): Promise<Patient | undefined> {
    return this.patients.get(id);
  }

  async createPatient(insertPatient: InsertPatient): Promise<Patient> {
    const id = this.currentId++;
    const patient: Patient = { 
      ...insertPatient, 
      id,
      email: insertPatient.email ?? null,
      address: insertPatient.address ?? null,
      city: insertPatient.city ?? null,
      state: insertPatient.state ?? null,
      zipCode: insertPatient.zipCode ?? null
    };
    this.patients.set(id, patient);
    return patient;
  }

  async getPrescriptionsByPatientId(patientId: number): Promise<Prescription[]> {
    return Array.from(this.prescriptions.values()).filter(p => p.patientId === patientId);
  }

  async getPrescriptionByRxNumber(rxNumber: string): Promise<Prescription | undefined> {
    return Array.from(this.prescriptions.values()).find(p => p.rxNumber === rxNumber);
  }

  async createPrescription(insertPrescription: InsertPrescription): Promise<Prescription> {
    const id = this.currentId++;
    const prescription: Prescription = { 
      ...insertPrescription, 
      id,
      lastFilled: insertPrescription.lastFilled ?? null
    };
    this.prescriptions.set(id, prescription);
    return prescription;
  }

  async updatePrescriptionStatus(id: number, status: string): Promise<void> {
    const prescription = this.prescriptions.get(id);
    if (prescription) {
      prescription.status = status;
      this.prescriptions.set(id, prescription);
    }
  }

  async createRefillRequest(insertRequest: InsertRefillRequest): Promise<RefillRequest> {
    const id = this.currentId++;
    const request: RefillRequest = { 
      ...insertRequest, 
      id, 
      status: "pending",
      createdAt: new Date().toISOString()
    };
    this.refillRequests.set(id, request);
    return request;
  }

  async getRefillRequestsByPatientId(patientId: number): Promise<RefillRequest[]> {
    return Array.from(this.refillRequests.values()).filter(r => r.patientId === patientId);
  }

  async createTransferRequest(insertRequest: InsertTransferRequest): Promise<TransferRequest> {
    const id = this.currentId++;
    const request: TransferRequest = { 
      ...insertRequest, 
      id, 
      status: "pending",
      createdAt: new Date().toISOString()
    };
    this.transferRequests.set(id, request);
    return request;
  }

  async getTransferRequestsByPatientId(patientId: number): Promise<TransferRequest[]> {
    return Array.from(this.transferRequests.values()).filter(r => r.patientId === patientId);
  }

  async getChatMessagesByPatientId(patientId: number): Promise<ChatMessage[]> {
    return Array.from(this.chatMessages.values())
      .filter(m => m.patientId === patientId)
      .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  }

  async createChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = this.currentId++;
    const message: ChatMessage = { 
      ...insertMessage, 
      id, 
      timestamp: new Date().toISOString()
    };
    this.chatMessages.set(id, message);
    return message;
  }

  async getPharmacyLocations(): Promise<PharmacyLocation[]> {
    return Array.from(this.pharmacyLocations.values());
  }

  async getPharmacyLocation(id: number): Promise<PharmacyLocation | undefined> {
    return this.pharmacyLocations.get(id);
  }
}

export const storage = new MemStorage();
