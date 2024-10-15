import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { job_id: string }
}

// The `generateMetadata` function expects only `params` in layout, not `searchParams`
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Extract the job id from params (not from searchParams in layout)
  const { job_id } = params;

  if (!job_id) {
    return {
      title: 'Job Not Found',
    };
  }

  try {
    // Fetch data from the API
    const job = await fetch(`/api/jobs?job_id=${job_id}`, {
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch job data');
      }
      return res.json();
    });

    // Access metadata based on job data
    const title = job?.data?.jobWeb?.JobTitle || 'Vmodel Jobs';

    const imageUrl = job?.data?.creator?.profilePictureUrl || '/assets/images/vmodel-app-ui/vm-phone-16.jpg'; // Fallback image

    return {
      title,
      openGraph: {
        title,
        description:"Vmodel is great",
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
