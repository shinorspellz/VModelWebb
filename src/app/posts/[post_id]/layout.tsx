import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { post_id: string }
}

// The `generateMetadata` function expects only `params` in layout, not `searchParams`
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { post_id } = params;

  if (!post_id) {
    return {
      title: 'Post Not Found',
    };
  }

  try {
    // Fetch data from the API
    const response = await fetch(`https://www.vmodelapp.com/api/posts?post_id=${post_id}`, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch post data');
    }

    const post = await response.json();

    // Access metadata based on job data
    const jobTitle = 'Vmodel Posts';
    const description =  'Discover more post on Vmodel app.';
    const imageUrl = post?.data?.postWeb?.media[0]?.thumbnail || 'https://www.vmodelapp.com/assets/images/vmodel-app-ui/vm-phone-16.jpg'; // Fallback image

    return {
      title: jobTitle,
      description,
      openGraph: {
        title: jobTitle,
        description,
        images: [
          {
            url: imageUrl,
            alt: jobTitle,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: jobTitle,
        description,
        images: [imageUrl],
      },
    };
  } catch (error) {
    console.error('Error fetching job data:', error);
    return {
      title: 'Job Data Error',
    };
  }
}

export default function Posts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


