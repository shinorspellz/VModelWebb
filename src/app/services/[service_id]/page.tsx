"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import ServiceDetailsPost from '@/app/components/services/ServiceDetailsPost';
import ServiceDetailsSummary from '@/app/components/services/ServiceDetailsSummary';
import VMContainer from '../../components/Layout/VMContainer';
import VMHeader from '../../components/Layout/VMHeader';
import { VFooterN } from '../../components/Home';

const ServiceDetail: React.FC = () => {

  const { service_id } = useParams();

  interface Service {
    title: string;
    perks: string[];
    description: string;
    price: number;
    user: {
      location: {
        locationName: string;
      };
      profilePictureUrl?: string;
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
    window.location.assign(`https://www.vmodelapp.com/services/${service_id}`);
  };

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`/api/services?service_id=${service_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch service details');
        }
        const data = await response.json();
        if (data.errors) {
          setError('No service found');
        }
        setServiceData(data?.data?.serviceWeb);
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

  if (!error && loading) {
    return <div className="flex bg-white items-center text-primary justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center bg-white justify-center min-h-screen text-red-500">No service found. Please try again later</div>;
  }

  return (
    <>
      <VMContainer noWrapper={true} autoHeight={true}>
        <VMHeader />
      </VMContainer>
      <div style={{ borderWidth: 0.1, borderRight: 0, borderLeft: 0 }} className="flex py-10 border-gray-500 flex-col items-center justify-center min-h-screen p-3">
        <div className="w-full max-w-5xl">
          <h4 className="text-l md:text-xl font-bold mb-6 text-white text-center">Service Details</h4>

          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 mb-6 items-center justify-center">
            <div className="w-full md:w-1/2 rounded-lg">
              <ServiceDetailsPost data={serviceData} />
            </div>

            <div className="w-full md:w-1/2 p-8 bg-white rounded-lg">
              {/* Displaying fetched service data */}
              <div className="flex flex-col gap-1 overflow-x-auto scrollbar-hide mb-4 ">
                {serviceData?.perks && serviceData.perks.length > 0 ? (
                  [...serviceData.perks].map((perk, index) => (
                    <div key={index} className="font-bold text-primary flex items-center space-x-1 flex-shrink-0">
                      <span className="text-[13px] md:text-[16px]">•</span> {/* Bullet symbol */}
                      <span className="text-[13px] md:text-[16px]">{perk}</span>
                      <span className="text-[13px] md:text-[16px]" role="img" aria-label="check">✅</span>
                    </div>
                  ))
                ) : (
                  <span>No perks available</span>
                )}
              </div>


              <ServiceDetailsSummary label="Content License:" value="Private" />
              <ServiceDetailsSummary label="Pricing:" value={`£${serviceData?.price || "0.00"}`} />
              <ServiceDetailsSummary label="Location:" value={serviceData?.user?.location?.locationName || "Not Available"} />
              <ServiceDetailsSummary label="Delivery Timeline:" value={serviceData?.deliveryTimeline || "Not Available"} />
              <ServiceDetailsSummary label="Subcategory:" value={serviceData?.subType?.name || "N/A"} />
              <ServiceDetailsSummary label="Express Delivery:" value={serviceData?.expressDelivery ? "Available" : "Not Available"} />

              {/* Perks as a horizontally scrollable list with bullets and no background */}
             

              <ServiceDetailsSummary label="Total:" value={`£${(serviceData?.price ?? 0).toFixed(2)}`} />
            </div>
          </div>

          <div className="flex flex-col space-y-3 items-center justify-center mt-16">
            <button onClick={handleClick} className="font-bold md:w-[50%] w-full mb-2 py-3 bg-white hover:border hover:bg-primary hover:text-white text-primary rounded-[10px] transition">
              Book Now
            </button>
            <button onClick={handleClick} className="font-bold md:w-[50%] w-full mb-2 py-3 bg-white hover:border hover:bg-primary hover:text-white text-primary rounded-[10px] transition">
              Share
            </button>
          </div>
        </div>
      </div>
      <VFooterN noPadd={true} />
    </>
  );
};

export default ServiceDetail;
