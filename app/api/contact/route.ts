import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // Honeypot check
    if (data.honeypot) {
      return NextResponse.json({ success: true });
    }

    // ============================================================
    // EMAIL INTEGRATION - Choose ONE option and configure
    // ============================================================

    // OPTION 1: Resend (recommended - already installed)
    // npm install resend (already done)
    // Set RESEND_API_KEY in .env.local
    /*
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Customs Clearance <noreply@customsclearance.com>",
      to: process.env.CONTACT_TO_EMAIL || "hello@customsclearance.com",
      subject: `New Quote Request from ${data.fullName}`,
      html: formatEmailHtml(data),
    });
    */

    // OPTION 2: SendGrid
    // npm install @sendgrid/mail
    // Set SENDGRID_API_KEY in .env.local
    /*
    const sgMail = await import("@sendgrid/mail");
    sgMail.default.setApiKey(process.env.SENDGRID_API_KEY!);

    await sgMail.default.send({
      from: "noreply@customsclearance.com",
      to: process.env.CONTACT_TO_EMAIL || "hello@customsclearance.com",
      subject: `New Quote Request from ${data.fullName}`,
      html: formatEmailHtml(data),
    });
    */

    // OPTION 3: Nodemailer (any SMTP)
    // npm install nodemailer
    // Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local
    /*
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Customs Clearance" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || "hello@customsclearance.com",
      subject: `New Quote Request from ${data.fullName}`,
      html: formatEmailHtml(data),
    });
    */

    // For now: Log to console (development mode)
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log(JSON.stringify(data, null, 2));
    console.log("===================================");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

// Email template helper
function formatEmailHtml(data: {
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  country: string;
  originCity?: string;
  service: string;
  volume?: string;
  message: string;
}) {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #041532;">New Quote Request</h2>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7; font-weight: 600;">Name</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7;">${data.fullName}</td>
        </tr>
        ${data.company ? `
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7; font-weight: 600;">Company</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7;">${data.company}</td>
        </tr>
        ` : ""}
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7; font-weight: 600;">Email</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7;"><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7; font-weight: 600;">Phone</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7;">${data.phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7; font-weight: 600;">Destination</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7;">${data.country}</td>
        </tr>
        ${data.originCity ? `
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7; font-weight: 600;">Origin (China)</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7;">${data.originCity}</td>
        </tr>
        ` : ""}
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7; font-weight: 600;">Service</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7;">${data.service}</td>
        </tr>
        ${data.volume ? `
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7; font-weight: 600;">Volume/Weight</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #E4E5E7;">${data.volume}</td>
        </tr>
        ` : ""}
      </table>

      <h3 style="color: #041532; margin-top: 24px;">Message</h3>
      <p style="color: #616669; line-height: 1.6;">${data.message.replace(/\n/g, "<br>")}</p>
    </div>
  `;
}
