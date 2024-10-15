import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { job_id: string }
}

// The `generateMetadata` function expects only `params` in layout, not `searchParams`
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { job_id } = params;

  if (!job_id) {
    return {
      title: 'Job Not Found',
    };
  }

  try {
    // Fetch data from the API
    const response = await fetch(`https://www.vmodelapp.com/api/jobs?job_id=${job_id}`, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch job data');
    }

    const job = await response.json();

    // Access metadata based on job data
    const jobTitle = job?.data?.jobWeb?.jobTitle || 'Vmodel Jobs';
    const description = job?.data?.jobWeb?.shortDescription || 'Discover more jobs at Vmodel.';
    const imageUrl = job?.data?.creator?.profilePictureUrl || '/assets/images/vmodel-app-ui/vm-phone-16.jpg'; // Fallback image

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

export default function JobsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
