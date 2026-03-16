import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, country, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure Nodemailer for Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your Hostinger email (e.g., info@mgeglobal.in)
        pass: process.env.SMTP_PASS, // Your Hostinger email password
      },
    });

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e8eaed; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #0073e6, #3395f0); color: #fff; padding: 25px 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">New Website Enquiry</h2>
          <p style="margin: 8px 0 0; font-size: 13px; opacity: 0.9;">You have a new message from mgeglobal.in</p>
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 8px;"><strong style="color: #0073e6; font-size: 13px; text-transform: uppercase;">Name:</strong></p>
            <p style="margin: 0; font-size: 15px; font-weight: 500;">${name}</p>
          </div>
          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 8px;"><strong style="color: #0073e6; font-size: 13px; text-transform: uppercase;">Email:</strong></p>
            <p style="margin: 0; font-size: 15px;">
              <a href="mailto:${email}" style="color: #333; text-decoration: none;">${email}</a>
            </p>
          </div>
          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 8px;"><strong style="color: #0073e6; font-size: 13px; text-transform: uppercase;">Phone:</strong></p>
            <p style="margin: 0; font-size: 15px;">
              <a href="tel:${phone.replace(/\s+/g, '')}" style="color: #333; text-decoration: none;">${phone}</a>
            </p>
          </div>
          <div style="margin-bottom: 25px;">
            <p style="margin: 0 0 8px;"><strong style="color: #0073e6; font-size: 13px; text-transform: uppercase;">Country:</strong></p>
            <p style="margin: 0; font-size: 15px;">${country || 'Not specified'}</p>
          </div>
          
          <hr style="border: none; border-top: 1px dashed #e8eaed; margin: 25px 0;" />
          
          <div>
            <p style="margin: 0 0 12px;"><strong style="color: #0073e6; font-size: 13px; text-transform: uppercase;">Message:</strong></p>
            <div style="background-color: #f8fafc; padding: 20px; border-left: 4px solid #3395f0; border-radius: 6px; font-size: 15px; white-space: pre-wrap;">${message}</div>
          </div>
        </div>
        <div style="text-align: center; padding: 20px; font-size: 11px; color: #9ca3af; background-color: #f4f5f7; border-top: 1px solid #e8eaed;">
          This is an automated email from the Contact Form on Maheshwari Global Exports website.<br/>
          <strong>Do not use this email configuration to send marketing emails directly.</strong>
        </div>
      </div>
    `;

    // Send email to info@mgeglobal.in
    await transporter.sendMail({
      from: `"MGE Global Website" <${process.env.SMTP_USER}>`, 
      to: 'info@mgeglobal.in', 
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
  }
}
