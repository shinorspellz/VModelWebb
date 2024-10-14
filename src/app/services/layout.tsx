import { Metadata } from "next/types";

export async function generateMetadata({ params, searchParams }: { params: any, searchParams: URLSearchParams }): Promise<Metadata> {
  const service_id = searchParams.get("service_id");
  const res = await fetch(`/api/services?service_id=${service_id}`);
  const serviceData = await res.json();

  return {
    title: `${serviceData?.title || 'Service Details'} - Deluxe Motorcycle Engineering`,
    description: serviceData?.description || 'Learn more about our motorcycle engineering services.',
    openGraph: {
      title: serviceData?.title || 'Deluxe Motorcycle Engineering',
      description: serviceData?.description || 'Check out our top-notch motorcycle services.',
      url: `https://vmodelapp.com/services?service_id=${service_id}`,
      images: [serviceData?.user?.profilePictureUrl || '/default-image.png'],
    },
  };
}
export default function GettingStarted({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


