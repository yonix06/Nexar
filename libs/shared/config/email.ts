import nodemailer from "nodemailer"
import { Resend } from "resend"

import { env } from "@/env.mjs"

export const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: `${env.SMTP_USERNAME}@${env.SMTP_DOMAIN}`,
    pass: env.SMTP_PASSWORD,
  },
})
export const resend = new Resend(env.RESEND_API_KEY)

export const transporterGoogle = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: env.SMTP_USERNAME_GOOGLE,
    pass: env.SMTP_PASSWORD_GOOGLE,
  },
})
