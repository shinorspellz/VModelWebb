import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
  const JOB_QUERY = `
   query JobWeb($jobId: String!) {
  jobWeb(jobId: $jobId) {

    creator {
      username
      profilePictureUrl
      profileRing
      rating
      location {
        locationName
      }
    }
    jobTitle
    jobType
    status
    createdAt
  preferredGender
    shortDescription
    category {
      name
    }
    subCategory {
      name
    }
    jobLocation {
      country
    }
    deliveryType
    noOfApplicants
    talents
    ethnicity
    brief
    acceptMultiple
    priceValue
  }
}
    `;

  // Extract serviceId from the query params in the request URL
  const { searchParams } = req.nextUrl;
  const jobId = searchParams.get('job_id');

  if (!jobId) {
    return NextResponse.json({ error: 'Missing job parameter' }, { status: 400 });
  }

  try {
    // Make a POST request to the GraphQL endpoint with the query and variables
    const response = await axios.post(
      'https://uat-api.vmodel.app/graphql/',  // your GraphQL endpoint
      {
        query: JOB_QUERY,  // GraphQL query
        variables: { jobId: jobId },  // Pass the serviceId as a variable, parsed to an integer
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
