import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { generateHealthTips } from "./healthTipsService";
import { pharmacyIntegration } from "./pharmacySystemIntegration";
import { socketProtocol } from "./socketProtocol";
import { winRxScrapers } from "./winrxScraper";
import { insertRefillRequestSchema, insertTransferRequestSchema, insertChatMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = (req.user as any).claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  // Get patient data
  app.get("/api/patient/:id", isAuthenticated, async (req, res) => {
    try {
      const patientId = parseInt(req.params.id);
      const patient = await storage.getPatient(patientId);
      
      if (!patient) {
        return res.status(404).json({ message: "Patient not found" });
      }
      
      res.json(patient);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get prescriptions for patient
  app.get("/api/patient/:id/prescriptions", isAuthenticated, async (req, res) => {
    try {
      const patientId = parseInt(req.params.id);
      const prescriptions = await storage.getPrescriptionsByPatientId(patientId);
      res.json(prescriptions);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Submit refill request
  app.post("/api/refill-requests", isAuthenticated, async (req, res) => {
    try {
      const validatedData = insertRefillRequestSchema.parse({
        ...req.body,
        patientId: (req.user as any).claims.sub // Use authenticated user's ID
      });
      
      const refillRequest = await storage.createRefillRequest(validatedData);
      res.status(201).json(refillRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid request data", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get refill requests for patient
  app.get("/api/patient/:id/refill-requests", isAuthenticated, async (req, res) => {
    try {
      const patientId = parseInt(req.params.id);
      const requests = await storage.getRefillRequestsByPatientId(patientId);
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Submit transfer request
  app.post("/api/transfer-requests", isAuthenticated, async (req, res) => {
    try {
      const validatedData = insertTransferRequestSchema.parse({
        ...req.body,
        patientId: (req.user as any).claims.sub // Use authenticated user's ID
      });
      
      const transferRequest = await storage.createTransferRequest(validatedData);
      res.status(201).json(transferRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid request data", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get transfer requests for patient
  app.get("/api/patient/:id/transfer-requests", isAuthenticated, async (req, res) => {
    try {
      const patientId = parseInt(req.params.id);
      const requests = await storage.getTransferRequestsByPatientId(patientId);
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get chat messages for patient
  app.get("/api/patient/:id/chat-messages", isAuthenticated, async (req, res) => {
    try {
      const patientId = parseInt(req.params.id);
      const messages = await storage.getChatMessagesByPatientId(patientId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Send chat message
  app.post("/api/chat-messages", isAuthenticated, async (req, res) => {
    try {
      const validatedData = insertChatMessageSchema.parse({
        ...req.body,
        patientId: (req.user as any).claims.sub // Use authenticated user's ID
      });
      
      const message = await storage.createChatMessage(validatedData);
      
      // Simulate automatic response after a delay
      if (validatedData.isFromPatient) {
        setTimeout(async () => {
          await storage.createChatMessage({
            patientId: validatedData.patientId,
            message: "Thank you for your message. A pharmacy team member will respond shortly.",
            isFromPatient: false
          });
        }, 2000);
      }
      
      res.status(201).json(message);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid request data", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get pharmacy locations
  app.get("/api/pharmacy-locations", async (req, res) => {
    try {
      const locations = await storage.getPharmacyLocations();
      res.json(locations);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get prescription stats for patient
  app.get("/api/patient/:id/stats", isAuthenticated, async (req, res) => {
    try {
      const patientId = parseInt(req.params.id);
      const prescriptions = await storage.getPrescriptionsByPatientId(patientId);
      
      const activePrescriptions = prescriptions.length;
      const readyForPickup = prescriptions.filter(p => p.status === "ready").length;
      
      // Calculate next refill days (simplified calculation)
      const nextRefillDays = 5; // Mock calculation
      
      res.json({
        activePrescriptions,
        readyForPickup,
        nextRefillDays
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
