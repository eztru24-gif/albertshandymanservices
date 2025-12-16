import { db } from "./db";
import type { InsertContactSubmission, ContactSubmission } from "@shared/schema";
import { contactSubmissions } from "@shared/schema";

export interface IStorage {
  insertContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
}

class Storage implements IStorage {
  async insertContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [result] = await db.insert(contactSubmissions).values(submission).returning();
    return result;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(contactSubmissions.submittedAt);
  }
}

export const storage = new Storage();
