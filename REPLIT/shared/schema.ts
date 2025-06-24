import {
  pgTable,
  text,
  varchar,
  timestamp,
  jsonb,
  index,
  serial,
  integer,
  boolean,
  decimal,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table.
// (IMPORTANT) This table is mandatory for Replit Auth, don't drop it.
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table.
// (IMPORTANT) This table is mandatory for Replit Auth, don't drop it.
export const users = pgTable("users", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const patients = pgTable("patients", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  dateOfBirth: text("date_of_birth").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  address: text("address"),
  city: text("city"),
  state: text("state"),
  zipCode: text("zip_code"),
});

export const prescriptions = pgTable("prescriptions", {
  id: serial("id").primaryKey(),
  patientId: integer("patient_id").notNull(),
  rxNumber: text("rx_number").notNull().unique(),
  medicationName: text("medication_name").notNull(),
  dosage: text("dosage").notNull(),
  instructions: text("instructions").notNull(),
  quantity: integer("quantity").notNull(),
  refillsLeft: integer("refills_left").notNull(),
  status: text("status").notNull(), // "ready", "processing", "pending", "filled"
  prescriber: text("prescriber").notNull(),
  dateIssued: text("date_issued").notNull(),
  lastFilled: text("last_filled"),
});

export const refillRequests = pgTable("refill_requests", {
  id: serial("id").primaryKey(),
  patientId: integer("patient_id").notNull(),
  rxNumber: text("rx_number").notNull(),
  patientName: text("patient_name").notNull(),
  dateOfBirth: text("date_of_birth").notNull(),
  pickupPreference: text("pickup_preference").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: text("created_at").notNull(),
});

export const transferRequests = pgTable("transfer_requests", {
  id: serial("id").primaryKey(),
  patientId: integer("patient_id").notNull(),
  currentPharmacyName: text("current_pharmacy_name").notNull(),
  currentPharmacyPhone: text("current_pharmacy_phone").notNull(),
  rxNumber: text("rx_number").notNull(),
  medicationName: text("medication_name").notNull(),
  patientName: text("patient_name").notNull(),
  dateOfBirth: text("date_of_birth").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: text("created_at").notNull(),
});

export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  patientId: integer("patient_id").notNull(),
  message: text("message").notNull(),
  isFromPatient: boolean("is_from_patient").notNull(),
  timestamp: text("timestamp").notNull(),
});

export const pharmacyLocations = pgTable("pharmacy_locations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zipCode: text("zip_code").notNull(),
  phone: text("phone").notNull(),
  hours: text("hours").notNull(),
  latitude: decimal("latitude"),
  longitude: decimal("longitude"),
});

// Insert schemas
export const insertPatientSchema = createInsertSchema(patients).omit({ id: true });
export const insertPrescriptionSchema = createInsertSchema(prescriptions).omit({ id: true });
export const insertRefillRequestSchema = createInsertSchema(refillRequests).omit({ id: true, status: true, createdAt: true });
export const insertTransferRequestSchema = createInsertSchema(transferRequests).omit({ id: true, status: true, createdAt: true });
export const insertChatMessageSchema = createInsertSchema(chatMessages).omit({ id: true, timestamp: true });
export const insertPharmacyLocationSchema = createInsertSchema(pharmacyLocations).omit({ id: true });

// Types
export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

export type Patient = typeof patients.$inferSelect;
export type InsertPatient = z.infer<typeof insertPatientSchema>;

export type Prescription = typeof prescriptions.$inferSelect;
export type InsertPrescription = z.infer<typeof insertPrescriptionSchema>;

export type RefillRequest = typeof refillRequests.$inferSelect;
export type InsertRefillRequest = z.infer<typeof insertRefillRequestSchema>;

export type TransferRequest = typeof transferRequests.$inferSelect;
export type InsertTransferRequest = z.infer<typeof insertTransferRequestSchema>;

export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;

export type PharmacyLocation = typeof pharmacyLocations.$inferSelect;
export type InsertPharmacyLocation = z.infer<typeof insertPharmacyLocationSchema>;
