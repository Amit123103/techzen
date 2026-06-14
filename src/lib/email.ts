import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const sendEmail = async ({
  to,
  subject,
  html,
}: {
  to: string | string[];
  subject: string;
  html: string;
}) => {
  try {
    // If credentials are not set, log and skip (for local dev without env vars)
    if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_APP_PASSWORD) {
      console.warn("⚠️ Email credentials not set in environment variables. Email would have been sent to:", to);
      console.warn("Subject:", subject);
      return true; // Pretend it succeeded
    }

    const info = await transporter.sendMail({
      from: `"ReInformTech" <${process.env.GMAIL_EMAIL}>`,
      to,
      subject,
      html,
    });
    
    console.log("Message sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
