import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const primaryColor = "#199e55"; // hsl(142, 76%, 36%)
    const primaryForeground = "#fafafa"; // hsl(0, 0%, 98%)

    const host = req.headers.host || "https://tom-site.vercel.app";
    const rootDomain = host.split(':')[0].replace(/^www\./, '');

    const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border:1px solid #eee; border-radius:8px; overflow:hidden;">
        <div style="background: ${primaryColor}; color: ${primaryForeground}; padding: 24px 32px;">
        <h2 style="margin:0;">New Contact Form Submission</h2>
        </div>
        <div style="padding: 24px 32px;">
        <p style="margin-bottom: 16px;">You have received a new message from your website contact form:</p>
        <table style="width:100%; border-collapse:collapse;">
            <tr>
            <td style="font-weight:bold; padding: 8px 0;">Name:</td>
            <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
            <td style="font-weight:bold; padding: 8px 0;">Email:</td>
            <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
            <td style="font-weight:bold; padding: 8px 0;">Subject:</td>
            <td style="padding: 8px 0;">${subject}</td>
            </tr>
            <tr>
            <td style="font-weight:bold; padding: 8px 0; vertical-align:top;">Message:</td>
            <td style="padding: 8px 0; white-space:pre-line;">${message}</td>
            </tr>
        </table>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
        <p style="font-size: 13px; color: #888;">
            This email was sent from the contact form on 
            <a href="https://${rootDomain}" style="color:${primaryColor}; text-decoration:none;">${rootDomain}</a>.<br/>
            &copy; ${new Date().getFullYear()} Thong Minh Lai (Tom)
        </p>
        </div>
    </div>
    `;


    const mailOptions = {
      from: {
        name: 'Contact Form',
        address: process.env.EMAIL_FROM as string,
      },
      to: process.env.EMAIL_TO,
      subject: `New Contact Form: ${subject}`,
      text: `
You have received a new message from your website contact form:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}

-------------------------
This email was sent from the contact form on yourdomain.com
© ${new Date().getFullYear()} Tom Minh Lai
      `,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    // Optionally log error for debugging
    // console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
