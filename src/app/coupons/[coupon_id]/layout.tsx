import type { Metadata, ResolvingMetadata } from 'next'


type Props = {
  params: { coupon_id: string }
}


export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { coupon_id } = params;

  if (!coupon_id) {
    return {
      title: 'Coupon Not Found',
      description:'Discover more coupons on VModel app'
    };
  }

  try {
    // Fetch data from the API
    const response = await fetch(`https://www.vmodelapp.com/api/coupons?coupon_id=${coupon_id}`, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch job data');
    }

    const coupon = await response.json();

    // Access metadata based on job data
    const jobTitle = coupon?.data?.couponWeb?.title || 'VModel Coupons';
    const description = coupon?.data?.couponWeb?.description || 'Discover more coupons on VModel app';
    const imageUrl = 'https://www.vmodelapp.com/assets/images/vmodel-app-ui/coupon_slip.png'; // Fallback image

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
      title: 'coupon Data Error',
    };
  }
}


export default function Coupon({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


