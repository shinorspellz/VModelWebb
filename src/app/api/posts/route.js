// app/api/register/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
    const POST_QUERY = `
  query PostWeb($postId: String!) {
  postWeb(postId: $postId) {
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
            'https://uat-api.vmodel.app/graphql/',
            {
                query: POST_QUERY,
                variables: { postId: postId },
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                'Authorization': 'Bearer ...',  // replace with your real token
                },
            }
        );
        return NextResponse.json(response.data);
    } catch (error) {
      console.log(error)
        return NextResponse.json({ error: error.response ? error.response.data : error.message }, { status: 500 });
    }
}
