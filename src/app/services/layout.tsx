// src/app/services/layout.tsx

import { Metadata } from 'next';

async function getServiceData(service_id: string): Promise<any | null> {
  const res = await fetch(`/api/services?service_id=${service_id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch service details');
  }
  const data = await res.json();
  return data?.data?.service || null;
}

export async function generateMetadata({ params }: { params: { service_id: string } }): Promise<Metadata> {
  const serviceData = await getServiceData(params.service_id);

  return {
    title: serviceData?.title || 'Service Details - Deluxe Motorcycle Engineering',
    description: serviceData?.description || 'Explore the best motorcycle engineering services.',
    openGraph: {
      title: serviceData?.title || 'Service Details',
      description: serviceData?.description || 'Check out our top-notch motorcycle services.',
      images: serviceData?.user?.profilePictureUrl || '/default-image.png',
      url: `https://vmodelapp.com/services?service_id=${params.service_id}`,
      type: 'website',
    },
  };
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
