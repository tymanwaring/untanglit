"use server"

import Stripe from "stripe"

const getBaseUrl = () =>
  process.env.NEXT_PUBLIC_APP_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

export type CreateCheckoutResult =
  | { url: string; error?: never }
  | { url?: never; error: string }

export type CheckoutPlan = "monthly" | "yearly"

/**
 * Creates a Stripe Checkout Session for the Small Business Plan (monthly or yearly).
 * Requires STRIPE_SECRET_KEY and STRIPE_PRICE_ID_MONTHLY (and STRIPE_PRICE_ID_YEARLY for yearly).
 * If not configured, returns an error so the UI can fall back to #contact.
 */
export async function createSubscriptionCheckout(
  plan: CheckoutPlan = "monthly"
): Promise<CreateCheckoutResult> {
  const secretKey = process.env.STRIPE_SECRET_KEY
  const priceId =
    plan === "yearly"
      ? process.env.STRIPE_PRICE_ID_YEARLY
      : process.env.STRIPE_PRICE_ID_MONTHLY

  if (!secretKey || !priceId) {
    return {
      error: `Stripe is not configured for ${plan}. Add STRIPE_SECRET_KEY and STRIPE_PRICE_ID_${plan === "yearly" ? "YEARLY" : "MONTHLY"} to your environment.`,
    }
  }

  const baseUrl = getBaseUrl()

  try {
    const stripe = new Stripe(secretKey)
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/?checkout=success`,
      cancel_url: `${baseUrl}/#pricing`,
      allow_promotion_codes: true,
      phone_number_collection: { enabled: true },
    })

    if (!session.url) {
      return { error: "Could not create checkout session." }
    }

    return { url: session.url }
  } catch (err) {
    console.error("Stripe checkout error:", err)
    const message = err instanceof Error ? err.message : "Something went wrong."
    return { error: message }
  }
}
