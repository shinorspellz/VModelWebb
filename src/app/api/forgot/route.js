// app/api/register/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req) {
    const SEND_EMAIL_TOKEN = `
   mutation SendPasswordResetEmail($email: String!) {
      sendPasswordResetEmail(email: $email) {
        success
        errors
      }
    }
  `;

    const data = await req.json();

    try {
        const response = await axios.post(
            'https://uat-api.vmodel.app/graphql/',
            {
              query: SEND_EMAIL_TOKEN,
                variables:{email: data},
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer your-auth-token',  // replace with your real token
                },
            }
        );
        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.json({ error: error.response ? error.response.data : error.message }, { status: 500 });
    }
}
