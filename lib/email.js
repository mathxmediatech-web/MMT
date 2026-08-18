import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { getContactConfig, getCompanyConfig } from "./config";

function getEnvValue(key) {
  // First check process.env
  if (process.env[key]) return process.env[key];
  try {
    const envPath = path.join(process.cwd(), ".env.local");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      const lines = content.split("\n");
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("#") || !trimmed.includes("=")) continue;
        const [k, ...v] = trimmed.split("=");
        if (k.trim() === key) {
          return v.join("=").trim().replace(/^["']|["']$/g, "");
        }
      }
    }
  } catch (e) {}
  return "";
}

export async function sendInquiryEmailNotification(inquiry) {
  const contact = getContactConfig();
  const company = getCompanyConfig();

  const recipientEmail =
    getEnvValue("NOTIFICATION_RECIPIENT_EMAIL") ||
    contact?.email ||
    "support@mathxmedia.tech";

  const rawHost = getEnvValue("SMTP_HOST") || "smtp.titan.email";
  const rawPort = getEnvValue("SMTP_PORT") || "465";
  const rawUser = getEnvValue("SMTP_USER") || "support@mathxmedia.tech";
  const rawPass = getEnvValue("SMTP_PASS");

  const smtpHost = rawHost ? rawHost.replace(/^["']|["']$/g, "").trim() : "";
  const smtpPort = parseInt(rawPort.replace(/^["']|["']$/g, "").trim(), 10);
  const smtpUser = rawUser ? rawUser.replace(/^["']|["']$/g, "").trim() : "";
  const smtpPass = rawPass ? rawPass.replace(/^["']|["']$/g, "").trim() : "";
  const smtpSecure = getEnvValue("SMTP_SECURE") === "true" || smtpPort === 465;
  const fromEmail = getEnvValue("SMTP_FROM")
    ? getEnvValue("SMTP_FROM").replace(/^["']|["']$/g, "").trim()
    : smtpUser || recipientEmail;

  // If SMTP is not yet configured, log notification payload and setup hint
  if (!smtpHost || !smtpUser || !smtpPass) {
    console.log(
      `ℹ️  [Email Notification]: SMTP credentials not set in .env.local. Inquiry ${inquiry.id} was saved to data/inquiries.json. To receive emails, configure SMTP_HOST, SMTP_USER, and SMTP_PASS.`
    );
    return {
      sent: false,
      reason: "SMTP not configured in environment variables",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false, // Prevents self-signed / local TLS verification rejections
      },
    });

    const cleanPhone = inquiry.phone ? inquiry.phone.replace(/[^0-9+]/g, "") : "";
    const waLink = cleanPhone ? `https://wa.me/${cleanPhone.replace("+", "")}` : "";

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
    .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: #ffffff; padding: 32px 24px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
    .header p { margin: 6px 0 0; font-size: 14px; opacity: 0.9; }
    .content { padding: 28px 24px; }
    .badge { display: inline-block; padding: 4px 12px; background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; border-radius: 9999px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 16px; }
    .field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
    .field-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px 16px; }
    .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px; }
    .field-val { font-size: 14px; font-weight: 600; color: #0f172a; word-break: break-word; }
    .message-box { background: #f1f5f9; border-left: 4px solid #3b82f6; border-radius: 4px 12px 12px 4px; padding: 16px; margin: 20px 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
    .actions { display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; }
    .btn { display: inline-block; padding: 12px 20px; border-radius: 10px; font-size: 13px; font-weight: 700; text-decoration: none; text-align: center; }
    .btn-reply { background: #2563eb; color: #ffffff !important; }
    .btn-wa { background: #10b981; color: #ffffff !important; }
    .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 24px; font-size: 12px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 New Project Inquiry Received</h1>
      <p>${company.name} (${company.full_name}) Website Notification</p>
    </div>
    <div class="content">
      <span class="badge">Inquiry ID: ${inquiry.id}</span>

      <div class="field-grid">
        <div class="field-card">
          <div class="field-label">Client Name</div>
          <div class="field-val">${inquiry.name}</div>
        </div>
        <div class="field-card">
          <div class="field-label">Email Address</div>
          <div class="field-val"><a href="mailto:${inquiry.email}" style="color: #2563eb;">${inquiry.email}</a></div>
        </div>
        <div class="field-card">
          <div class="field-label">Phone / WhatsApp</div>
          <div class="field-val">${inquiry.phone || "Not Provided"}</div>
        </div>
        <div class="field-card">
          <div class="field-label">Company / Brand</div>
          <div class="field-val">${inquiry.company || "Not Provided"}</div>
        </div>
        <div class="field-card">
          <div class="field-label">Service Required</div>
          <div class="field-val" style="color: #1d4ed8;">${inquiry.service}</div>
        </div>
        <div class="field-card">
          <div class="field-label">Estimated Budget</div>
          <div class="field-val">${inquiry.budget}</div>
        </div>
      </div>

      <div class="field-label">Project Brief & Message:</div>
      <div class="message-box">${inquiry.message}</div>

      <div class="actions">
        <a href="mailto:${inquiry.email}?subject=Re:%20Project%20Inquiry%20with%20MMT%20(${inquiry.id})" class="btn btn-reply">
          ✉️ Reply via Email
        </a>
        ${
          waLink
            ? `<a href="${waLink}" class="btn btn-wa" target="_blank">
          💬 Chat on WhatsApp
        </a>`
            : ""
        }
      </div>
    </div>
    <div class="footer">
      Received on ${new Date(inquiry.createdAt).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      })} IST • MMT Lead System
    </div>
  </div>
</body>
</html>
    `;

    const mailOptions = {
      from: `"${company.name} Inquiries" <${fromEmail}>`,
      to: recipientEmail,
      replyTo: inquiry.email,
      subject: `🔥 New Lead: ${inquiry.name} - ${inquiry.service} (${inquiry.id})`,
      text: `
New Project Inquiry Received (${inquiry.id})
--------------------------------------------------
Client Name: ${inquiry.name}
Email: ${inquiry.email}
Phone/WA: ${inquiry.phone || "N/A"}
Company: ${inquiry.company || "N/A"}
Service: ${inquiry.service}
Budget: ${inquiry.budget}

Message:
${inquiry.message}
--------------------------------------------------
Reply directly to this email to contact the client.
      `,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ [Email Notification Sent]: Message ID ${info.messageId} to ${recipientEmail}`);

    return { sent: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ [Email Notification Failed]:", error);
    return { sent: false, error: error.message };
  }
}
