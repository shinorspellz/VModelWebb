import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
  const COUPON_QUERY = `
   query CouponWeb($couponId: String!) {
     couponWeb(couponId: $couponId) {
       id
       title
       description
       code
         reviewStats {
      noOfReviews
      rating
    }
       owner {
         username
          profilePictureUrl
         location {
           locationName
         }
       }
     }
   }
  `;

  // Extract couponId from the query params in the request URL
  const { searchParams } = req.nextUrl;
  const couponId = searchParams.get('coupon_id');

  // Check if couponId exists
  if (!couponId) {
    return NextResponse.json({ error: 'Missing coupon_id parameter' }, { status: 400 });
  }

  try {
    // Make a POST request to the GraphQL endpoint with the query and variables
    const response = await axios.post(
      'https://uat-api.vmodel.app/graphql/',  // your GraphQL endpoint
      {
        query: COUPON_QUERY,  // GraphQL query
        variables: { couponId },  // Pass the couponId as a variable
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Return the data from the GraphQL API
    return NextResponse.json(response.data);
  } catch (error) {
    // Handle any errors from the API call
    return NextResponse.json(
      { error: error.response ? error.response.data : 'An unknown error occurred' },
      { status: 500 }
    );
  }
}
