"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head'; // Import for SEO metadata
import ServiceDetailsPost from '@/app/components/services/ServiceDetailsPost';
import ServiceDetailsSummary from '@/app/components/services/ServiceDetailsSummary';

const ServiceDetail: React.FC = () => {
  const searchParams = useSearchParams();
  const service_id = searchParams.get("service_id"); // Get service_id from params

  interface Service {
    title: string;
    description: string;
    price: number;
    user: {
      location: {
        locationName: string;
      };
      profilePictureUrl?: string; // Add this line
    };
    deliveryTimeline: string;
    subType: {
      name: string;
    };
    expressDelivery: boolean;
  }

  const [serviceData, setServiceData] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log(service_id);

  const handleClick = () => {
    window.location.href = `https://www.vmodelapp.com/services?service_id=${service_id}`;
  };

  // Fetch service details from the API
  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`/api/services?service_id=${service_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch service details');
        }
        const data = await response.json();
        console.log(data.data.service);

        setServiceData(data?.data?.service);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
        console.log(error);
        setLoading(false);
      }
    };

    if (service_id) {
      fetchServiceDetails();
    }
  }, [service_id]);

  if (loading) {
    return <div className="flex bg-white items-center text-primary justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">No service found. Please try again later</div>;
  }

  return (
    <>
      <Head>
        <title>{serviceData?.title || 'Service Details'} - Deluxe Motorcycle Engineering</title>
        <meta name="description" content={serviceData?.description || 'Learn more about our motorcycle engineering services.'} />
        <meta property="og:title" content={serviceData?.title || 'Deluxe Motorcycle Engineering Service'} />
        <meta property="og:description" content={serviceData?.description || 'Check out our top-notch motorcycle services.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://vmodelapp.com/services?service_id=${service_id}`} />
        <meta property="og:image" content={serviceData?.user?.profilePictureUrl} /> {/* Add a relevant image URL */}
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
        <div className="w-full max-w-5xl p-6 bg-white">
          <h4 className="text-xl font-bold mb-6 text-primary text-center">Service Details</h4>

          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 mb-6 items-center justify-center">
            <div className="w-full md:w-1/2 p-4 border border-primary rounded-lg">
              <ServiceDetailsPost data={serviceData} />
            </div>

            <div className="w-full md:w-1/2 p-6 border border-primary rounded-lg">
              {/* Displaying fetched service data */}
              <ServiceDetailsSummary label="Content License:" value="Private" />
              <ServiceDetailsSummary label="Pricing:" value={`${serviceData?.price || "0.00"}`} />
              <ServiceDetailsSummary label="Location:" value={serviceData?.user?.location?.locationName || "Not Available"} />
              <ServiceDetailsSummary label="Delivery Timeline:" value={serviceData?.deliveryTimeline || "Not Available"} />
              <ServiceDetailsSummary label="Subcategory:" value={serviceData?.subType?.name || "N/A"} />
              <ServiceDetailsSummary label="Express Delivery:" value={serviceData?.expressDelivery ? "Available" : "Not Available"} />
              <ServiceDetailsSummary label="Total:" value={`${(serviceData?.price ?? 0).toFixed(2)}`} />
            </div>
          </div>

          <div className="flex flex-col space-y-3 items-center justify-center mt-16">
            <button onClick={handleClick} className="md:w-[50%] w-full mb-2 py-3 bg-primary text-white rounded-[10px] transition">
              Book Now
            </button>
            <button onClick={handleClick} className="w-[50%] py-3 border-primary bg-white font-bold text-primary hover:text-white rounded-[10px] hover:bg-primary transition">
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
