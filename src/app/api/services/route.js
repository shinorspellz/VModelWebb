import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
  const SERVICE_QUERY = `
    query Service($serviceId: Int!) {
  service(serviceId: $serviceId) {
    id
    title
    description
    banner {
      thumbnail
    }
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
    subType {
      name
      serviceType {
         name
        serviceSet {
          title
          description
          price
          meta

        }
      }
    }
    deliverablesType
    pinnedServices {
      coverImageUrl
    }
  }
}
    `;

  // Extract serviceId from the query params in the request URL
  const { searchParams } = req.nextUrl;
  const serviceId = searchParams.get('service_id');

  if (!serviceId) {
    return NextResponse.json({ error: 'Missing service_id parameter' }, { status: 400 });
  }

  try {
    // Make a POST request to the GraphQL endpoint with the query and variables
    const response = await axios.post(
      'https://uat-api.vmodel.app/graphql/',  // your GraphQL endpoint
      {
        query: SERVICE_QUERY,  // GraphQL query
        variables: { serviceId: parseInt(serviceId, 10) },  // Pass the serviceId as a variable, parsed to an integer
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer your-auth-token',  // replace with your actual token
        },
      }
    );

    // Return the data from the GraphQL API
    return NextResponse.json(response.data);
  } catch (error) {
    // Handle any errors from the API call
    return NextResponse.json(
      { error: error.response ? error.response.data : error.message },
      { status: 500 }
    );
  }
}