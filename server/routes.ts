import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertServiceRequestSchema, insertContactSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  app.post("/api/service-request", async (req, res) => {
    try {
      const data = insertServiceRequestSchema.parse(req.body);
      const request = await storage.createServiceRequest(data);
      res.json(request);
    } catch (error) {
      res.status(400).json({ message: "Invalid request data" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      res.json(contact);
    } catch (error) {
      res.status(400).json({ message: "Invalid contact data" });
    }
  });

  app.get("/api/service-area", (_req, res) => {
    res.json({
      serviceArea: [
        { city: "New York", response: "15-30 min" },
        { city: "Brooklyn", response: "20-35 min" },
        { city: "Queens", response: "25-40 min" },
        { city: "Bronx", response: "30-45 min" },
        { city: "Staten Island", response: "35-50 min" }
      ]
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
