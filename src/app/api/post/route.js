// app/api/register/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
    const POST_QUERY = `
  query Service($serviceId: Int!) {
  service(serviceId: $serviceId) {
    id
    title
    description
    user {
      username
      profilePictureUrl
      location {
        locationName
      }
      rating
    }
    serviceLocation
    createdAt
    deliveryTimeline
    expressDelivery
    price
    serviceType {
      name
    }

  }
}
  `;

    const data = await req.json();

    try {
        const response = await axios.get(
            'https://uat-api.vmodel.app/graphql/',
            {
                query: POST_QUERY,
                variables: { D: data },
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
