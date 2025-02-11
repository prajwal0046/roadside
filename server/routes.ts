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
        { city: "Koramangala", response: "15-25 min" },
        { city: "Indiranagar", response: "20-30 min" },
        { city: "HSR Layout", response: "15-25 min" },
        { city: "Whitefield", response: "25-35 min" },
        { city: "Electronic City", response: "25-35 min" },
        { city: "Marathahalli", response: "20-30 min" }
      ]
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}