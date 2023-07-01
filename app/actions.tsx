/** @format */
"use server"
import { transporter } from "@/lib/nodemailer/nodemailer"

export type ContactFormType = {
  name: string
  email: string
  message: string
}

export async function sendEmail({ name, email, message }: ContactFormType) {
  const messageData = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: "Client inquiry",
    text: email + " " + name + " " + message,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(messageData, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve("Email sent successfully")
      }
    })
  })
}

