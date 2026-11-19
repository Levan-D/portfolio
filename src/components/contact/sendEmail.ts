'use server';

import { transporter } from '@/lib/mailer';
import { contactSchema } from './contactSchema';

export type SendEmailResultType = { ok: true } | { ok: false; error: string };

export async function sendEmail(input: unknown): Promise<SendEmailResultType> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: 'Please check the form and try again.' };
  }

  const { name, email, message, website } = parsed.data;
  if (website) return { ok: true };

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: { name, address: email },
      subject: `Client inquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    return { ok: true };
  } catch (error) {
    console.error('Contact email failed', error);
    return {
      ok: false,
      error: "Couldn't send your message. Please try again later.",
    };
  }
}
