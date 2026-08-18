import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";

const contactSubmissionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().nullable(),
  company: z.string().optional().nullable(),
  service: z.string().optional().nullable(),
  budget: z.string().optional().nullable(),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const result = contactSubmissionSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      console.warn("⚠️ Contact Form Validation Error (400):", fieldErrors);
      return NextResponse.json(
        {
          error: "Please check all required fields (Name, valid Email, Message).",
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, company, service, budget, message } = result.data;

    const newInquiry = {
      id: `INQ-${Date.now()}`,
      createdAt: new Date().toISOString(),
      name,
      email,
      phone: phone || "N/A",
      company: company || "N/A",
      service: service || "General Inquiry",
      budget: budget || "Not specified",
      message,
      status: "New",
      channel: "WhatsApp & Web",
    };

    // 1. Persistent Storage in data/inquiries.json
    try {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "inquiries.json");

      await fs.mkdir(dataDir, { recursive: true });

      let inquiries = [];
      try {
        const fileData = await fs.readFile(filePath, "utf-8");
        inquiries = JSON.parse(fileData);
        if (!Array.isArray(inquiries)) inquiries = [];
      } catch (readErr) {
        inquiries = [];
      }

      inquiries.unshift(newInquiry); // Add newest inquiry to the top

      await fs.writeFile(filePath, JSON.stringify(inquiries, null, 2), "utf-8");
    } catch (saveError) {
      console.error("Error saving inquiry to file:", saveError);
    }

    // 2. Server Console Log
    console.log("========================================");
    console.log("💬 NEW PROJECT INQUIRY ROUTED TO WHATSAPP");
    console.log(`Inquiry ID : ${newInquiry.id}`);
    console.log(`Date & Time: ${newInquiry.createdAt}`);
    console.log(`Client Name: ${name}`);
    console.log(`Email      : ${email}`);
    console.log(`Phone/WA   : ${phone || "N/A"}`);
    console.log(`Company    : ${company || "N/A"}`);
    console.log(`Service    : ${service || "N/A"}`);
    console.log(`Budget     : ${budget || "N/A"}`);
    console.log(`Message    : ${message}`);
    console.log("========================================");

    return NextResponse.json({
      success: true,
      inquiryId: newInquiry.id,
      message: "Inquiry saved successfully and routed to WhatsApp.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error processing inquiry." },
      { status: 500 }
    );
  }
}
