import sgMail from "@sendgrid/mail";
import { NextResponse, NextRequest } from "next/server";

sgMail.setApiKey(process.env.NEXT_SENDGRID_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, affair, message } = data;

    const msg = {
      to: "laiba.iqbal825@gmail.com",
      from: "no-reply@paradisegaming.net",
      subject: `New message from ${email}`,

      text: `
        Name: ${name}
        Email: ${email}
        Affair: ${affair}
        Message: ${message}
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error });
  }
}
