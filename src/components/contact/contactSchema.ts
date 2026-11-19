import { z } from 'zod';

const REQUIRED = 'Please fill out this field';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, REQUIRED)
    .min(3, 'Name must be between 3 and 192 characters long')
    .max(192, 'Name must be between 3 and 192 characters long')
    .regex(/^[^\r\n]*$/, 'Name must be on one line'),
  email: z
    .string()
    .trim()
    .min(1, REQUIRED)
    .pipe(z.email('Please enter a valid email')),
  message: z
    .string()
    .trim()
    .min(1, REQUIRED)
    .min(3, 'Message must be at least 3 characters long')
    .max(2000, 'Message must be no more than 2000 characters long'),
  // honeypot: hidden from people, bots tend to fill it
  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
