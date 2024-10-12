// app/api/register/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req) {
    const REGISTER_USER_MUTATION = `
    mutation RegisterUser(
      $label: String,
      $displayName: String,
      $use2fa: Boolean,
      $useGoogleAuthenticator: Boolean,
      $email: String!,
      $username: String!,
      $firstName: String!,
      $lastName: String!,
      $userType: String!,
      $isBusinessAccount: Boolean!,
      $password1: String!,
      $password2: String!
    ) {
      register(
        label: $label,
        displayName: $displayName,
        use2fa: $use2fa,
        useGoogleAuthenticator: $useGoogleAuthenticator,
        email: $email,
        username: $username,
        firstName: $firstName,
        lastName: $lastName,
        userType: $userType,
        isBusinessAccount: $isBusinessAccount,
        password1: $password1,
        password2: $password2
      ) {
        success
    errors
    token
    pk
    id
    restToken
      }
    }
  `;

    const data = await req.json();

    try {
        const response = await axios.post(
            'https://uat-api.vmodel.app/graphql/',
            {
                query: REGISTER_USER_MUTATION,
                variables: data,
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
