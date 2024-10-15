// app/api/register/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
    const POST_QUERY = `
  query Post($postId: Int!) {
  post(id: $postId) {
    id
    user {
      username
      profilePictureUrl
      profileRing
      location {
        locationName
      }
    }
    media {
      thumbnail
    }
    commentSet {
      comment
      upVotes
      user {
        username
      }
    }
  }
}
  `;
  const { searchParams } = req.nextUrl;
  const postId = searchParams.get('post_id');

  if (!postId) {
    return NextResponse.json({ error: 'Missing post parameter' }, { status: 400 });
  }
    try {
        const response = await axios.post(
            'https://uat-api.vmodel.app/graphql',
            {
                query: POST_QUERY,
                variables: { postId: parseInt(postId, 10) },
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBldGVyLWV2YW5jZSIsImV4cCI6MTcxNzUxMTA2MSwib3JpZ0lhdCI6MTcxNzUxMDc2MX0.-2qI6ihJ5X9VZ3K_SaiDJ0EgiBeZTCQ41G7eTKXL4-o',  // replace with your real token
                },
            }
        );
        return NextResponse.json(response.data);
    } catch (error) {
      console.log(error)
        return NextResponse.json({ error: error.response ? error.response.data : error.message }, { status: 500 });
    }
}
