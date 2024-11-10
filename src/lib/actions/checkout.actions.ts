"use server";

import Stripe from "stripe";
import { redirect } from "next/navigation";
export async function checkoutCredits(amount: number) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3001" || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: "payment",
    success_url: `${serverUrl}/contents/success`,
    cancel_url: `${serverUrl}/contents/canceled`,
    line_items: [
      {
        price_data: {
          currency: "lkr",
          product_data: {
            name: "Credit Purchase",
          },
          unit_amount: amount*100, 
        },
        quantity: 1,
      },
    ],
  });

  redirect(session.url!);
}
