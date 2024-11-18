import type { Metadata, ResolvingMetadata } from 'next'


type Props = {
  params: { service_id: string }
}


export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { service_id } = params;

  if (!service_id) {
    return {
      title: 'Service Not Found',
    };
  }

  try {
    // Fetch data from the API
    const response = await fetch(`https://www.vmodelapp.com/api/services?service_id=${service_id}`, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch job data');
    }

    const job = await response.json();
    const stripMarkdown = (text:string) => {
      return text
        .replace(/[*_~`]/g, '') // Removes **, *, _, ~, ` symbols
        .replace(/[-+]\s/g, '') // Removes list markers like - or +
        .replace(/\n+/g, ' ')   // Replaces newlines with spaces
        .replace(/\\n/g, ' ');  // Handles escaped newlines
    };

    const rawDescription = job?.data?.serviceWeb?.description || 'Discover more services at Vmodel.';
    // Access metadata based on job data
    const jobTitle = job?.data?.serviceWeb?.title || 'Vmodel Services';
    const description = stripMarkdown(rawDescription)
    const imageUrl = job?.data?.serviceWeb?.bannerUrl[0]?.thumbnail || 'https://www.vmodelapp.com/assets/images/vmodel-app-ui/vm-phone-16.jpg'; // Fallback image

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
      title: 'service Data Error',
    };
  }
}


export default function GettingStarted({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


