import { users, type User, type InsertUser } from "@shared/schema";
import { type ServiceRequest, type InsertServiceRequest, type Contact, type InsertContact } from "@shared/schema";

export interface IStorage {
  // Service Request methods
  createServiceRequest(request: InsertServiceRequest): Promise<ServiceRequest>;
  getServiceRequest(id: number): Promise<ServiceRequest | undefined>;

  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContact(id: number): Promise<Contact | undefined>;
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private serviceRequests: Map<number, ServiceRequest>;
  private contacts: Map<number, Contact>;
  private currentId: number;
  private serviceRequestsCurrentId: number;
  private contactsCurrentId: number;

  constructor() {
    this.users = new Map();
    this.serviceRequests = new Map();
    this.contacts = new Map();
    this.currentId = 1;
    this.serviceRequestsCurrentId = 1;
    this.contactsCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createServiceRequest(request: InsertServiceRequest): Promise<ServiceRequest> {
    const id = this.serviceRequestsCurrentId++;
    const createdAt = new Date();
    const serviceRequest: ServiceRequest = {
      ...request,
      id,
      status: "pending",
      createdAt
    };
    this.serviceRequests.set(id, serviceRequest);
    return serviceRequest;
  }

  async getServiceRequest(id: number): Promise<ServiceRequest | undefined> {
    return this.serviceRequests.get(id);
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.contactsCurrentId++;
    const createdAt = new Date();
    const newContact: Contact = {
      ...contact,
      id,
      createdAt
    };
    this.contacts.set(id, newContact);
    return newContact;
  }

  async getContact(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }
}

export const storage = new MemStorage();