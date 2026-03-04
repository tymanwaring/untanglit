"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    projectType: formData.get("projectType"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  }

  const result = contactSchema.safeParse(raw)

  if (!result.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: result.error.flatten().fieldErrors,
    }
  }

  // Placeholder: In production, send via Resend / SendGrid / etc.
  // await sendEmail(result.data)

  return {
    success: true,
    message:
      "Thank you for reaching out! We will get back to you within 24 hours.",
  }
}
