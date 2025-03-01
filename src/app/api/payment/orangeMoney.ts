// /app/api/payment/orangeMoney.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { amount, phone, description } = await request.json();

  // Récupérer les clés API depuis les variables d'environnement
  const clientId = process.env.ORANGE_MONEY_CLIENT_ID;
  const clientSecret = process.env.ORANGE_MONEY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { success: false, error: "Clés API Orange Money manquantes" },
      { status: 500 }
    );
  }

  // Étape 1 : Obtenir un token d'accès via OAuth 2.0
  const authResponse = await fetch("https://api.orange.com/oauth/v2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
  });

  const authData = await authResponse.json();

  if (!authResponse.ok) {
    return NextResponse.json(
      { success: false, error: "Échec de l'authentification Orange Money" },
      { status: 401 }
    );
  }

  const accessToken = authData.access_token;

  // Étape 2 : Effectuer le paiement via l'API Orange Money
  const paymentResponse = await fetch("https://api.orange.com/payment/v1/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      amount,
      currency: "XOF",
      customer: {
        phone,
      },
      description,
    }),
  });

  const paymentData = await paymentResponse.json();

  if (paymentResponse.ok) {
    return NextResponse.json({ success: true, data: paymentData });
  } else {
    return NextResponse.json(
      { success: false, error: paymentData.message || "Échec du paiement" },
      { status: 400 }
    );
  }
}