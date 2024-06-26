//import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const {body} = await req.json();
    const {email, subject, message} = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['clairepare2024@u.northwestern.edu', email],
      subject: subject,
      react: (<>
                <h1>{subject}</h1>
                <p>Thanks for reaching out!</p>
                <p>Message submitted:</p>
                <p>{message}</p>
            </>),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}