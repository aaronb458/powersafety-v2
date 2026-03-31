import { NextResponse } from "next/server";

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 1000);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Honeypot check
    if (data.website) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    // Required field validation
    const firstName = sanitize(data.firstName);
    const lastName = sanitize(data.lastName);
    const email = sanitize(data.email);
    const phone = sanitize(data.phone);
    const message = sanitize(data.message);

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (phone && !/^[\d\s()+-]{7,20}$/.test(phone)) {
      return NextResponse.json(
        { error: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOHIGHLEVEL_CONTACT_WEBHOOK_URL;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
          bestTime: sanitize(data.bestTime),
          referral: sanitize(data.referral),
          source: "Power Safety Website - Contact",
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
