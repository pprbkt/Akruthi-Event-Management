import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const OWNER_EMAIL = "vaibsnayak.813@gmail.com";

// Create reusable transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, eventType, eventDate, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !eventType || !eventDate || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // ── 1. Send notification email to owner (paperbukit@gmail.com) ─────
    await transporter.sendMail({
      from: `"Akruthi Events Website" <${process.env.GMAIL_USER}>`,
      to: OWNER_EMAIL,
      subject: `New Consultation Request — ${eventType} by ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #faf8f5; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #8B1A1A, #4A0E0E); padding: 28px 32px;">
            <h1 style="color: #D4AF37; margin: 0; font-size: 22px;">🎉 New Consultation Request</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 13px;">Received from Akruthi Events Website</p>
          </div>
          
          <div style="padding: 28px 32px;">
            <h2 style="color: #2c1810; font-size: 16px; margin: 0 0 16px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #D4AF37; padding-bottom: 8px;">Customer Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #8B7355; font-size: 13px; font-weight: 600; width: 120px;">Name</td>
                <td style="padding: 10px 0; color: #2c1810; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8B7355; font-size: 13px; font-weight: 600;">Phone</td>
                <td style="padding: 10px 0; color: #2c1810; font-size: 14px;"><a href="tel:${phone}" style="color: #8B1A1A; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8B7355; font-size: 13px; font-weight: 600;">Email</td>
                <td style="padding: 10px 0; color: #2c1810; font-size: 14px;"><a href="mailto:${email}" style="color: #8B1A1A; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8B7355; font-size: 13px; font-weight: 600;">Event Type</td>
                <td style="padding: 10px 0; color: #2c1810; font-size: 14px; font-weight: 600;">${eventType}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8B7355; font-size: 13px; font-weight: 600;">Event Date</td>
                <td style="padding: 10px 0; color: #2c1810; font-size: 14px;">${eventDate}</td>
              </tr>
            </table>

            <h2 style="color: #2c1810; font-size: 16px; margin: 24px 0 12px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #D4AF37; padding-bottom: 8px;">Requirements</h2>
            <p style="color: #4a3728; font-size: 14px; line-height: 1.7; background: #f0ebe4; padding: 16px; border-radius: 8px; margin: 0;">${message}</p>
          </div>

          <div style="padding: 16px 32px; background: #f0ebe4; text-align: center;">
            <p style="color: #8B7355; font-size: 12px; margin: 0;">Please respond to this inquiry within 24 hours.</p>
          </div>
        </div>
      `,
    });

    // ── 2. Send confirmation email to customer ────────────────────────
    await transporter.sendMail({
      from: `"Akruthi Event Solution" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `We've received your ${eventType} consultation request! — Akruthi Events`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #faf8f5; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #8B1A1A, #4A0E0E); padding: 32px; text-align: center;">
            <h1 style="color: #D4AF37; margin: 0; font-size: 24px;">Akruthi Event Solution</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 6px 0 0; font-size: 11px; letter-spacing: 3px; text-transform: uppercase;">Curated Celebrations</p>
          </div>
          
          <div style="padding: 32px;">
            <h2 style="color: #2c1810; font-size: 20px; margin: 0 0 8px;">Dear ${name},</h2>
            <p style="color: #4a3728; font-size: 14px; line-height: 1.8; margin: 16px 0;">
              Thank you for reaching out to us! We've received your consultation request and we're excited to help you plan your <strong>${eventType}</strong>.
            </p>

            <div style="background: #f0ebe4; border-radius: 10px; padding: 20px; margin: 20px 0;">
              <p style="color: #8B7355; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px; font-weight: 600;">Your Request Summary</p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; color: #8B7355; font-size: 13px;">Event Type</td>
                  <td style="padding: 6px 0; color: #2c1810; font-size: 13px; font-weight: 600;">${eventType}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #8B7355; font-size: 13px;">Event Date</td>
                  <td style="padding: 6px 0; color: #2c1810; font-size: 13px; font-weight: 600;">${eventDate}</td>
                </tr>
              </table>
            </div>

            <p style="color: #4a3728; font-size: 14px; line-height: 1.8; margin: 20px 0;">
              Our event coordinator will review your requirements and get back to you <strong>within 24 hours</strong>. In the meantime, feel free to reach us directly:
            </p>

            <div style="background: #2c1810; border-radius: 10px; padding: 20px; margin: 20px 0;">
              <p style="color: #D4AF37; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px; font-weight: 600;">Get In Touch</p>
              <p style="color: #fff; font-size: 13px; margin: 6px 0;">📞 <a href="tel:9964143968" style="color: #D4AF37; text-decoration: none;">+91 99641 43968</a> / <a href="tel:8618954564" style="color: #D4AF37; text-decoration: none;">+91 86189 54564</a></p>
              <p style="color: #fff; font-size: 13px; margin: 6px 0;">📧 <a href="mailto:${OWNER_EMAIL}" style="color: #D4AF37; text-decoration: none;">${OWNER_EMAIL}</a></p>
              <p style="color: #fff; font-size: 13px; margin: 6px 0;">💬 <a href="https://wa.me/918618954564" style="color: #D4AF37; text-decoration: none;">WhatsApp Us</a></p>
            </div>

            <p style="color: #4a3728; font-size: 14px; line-height: 1.8; margin: 20px 0 0;">
              We look forward to creating an extraordinary celebration for you!
            </p>
            <p style="color: #2c1810; font-size: 14px; font-weight: 600; margin: 16px 0 0;">
              Warm Regards,<br/>
              <span style="color: #8B7355;">Team Akruthi Event Solution</span><br/>
              <span style="color: #8B7355; font-size: 12px;">Mangaluru, Karnataka</span>
            </p>
          </div>

          <div style="padding: 16px 32px; background: #f0ebe4; text-align: center;">
            <p style="color: #8B7355; font-size: 11px; margin: 0;">© ${new Date().getFullYear()} Akruthi Event Solution. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Consultation request sent successfully! Check your email for confirmation.",
    });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
