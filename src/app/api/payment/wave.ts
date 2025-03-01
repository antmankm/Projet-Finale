import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { amount, phone, description } = await request.json();

  // Simuler un appel à l'API Wave
  const response = await fetch("https://api.wave.com/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.WAVE_API_KEY}`,
    },
    body: JSON.stringify({
      amount,
      phone,
      description,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json({ success: true, data });
  } else {
    return NextResponse.json({ success: false, error: data.message }, { status: 400 });
  }
}