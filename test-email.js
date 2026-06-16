import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function test() {
  console.log("Testing email with", process.env.GMAIL_EMAIL);
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: 'reinformtech@gmail.com',
      subject: 'Local SMTP Test',
      text: 'This is a test from local dev environment.',
    });
    console.log("Success:", info.messageId);
  } catch (err) {
    console.error("Failed:", err);
  }
}

test();
