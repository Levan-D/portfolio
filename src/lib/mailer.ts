import 'server-only';
import nodemailer from 'nodemailer';

// A Gmail app password, not OAuth: it doesn't expire, and it's two settings instead of four
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});
