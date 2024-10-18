"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use `useParams` to get the dynamic route param
import Head from 'next/head'; // Import for SEO metadata
import ServiceDetailsPost from '@/app/components/services/ServiceDetailsPost';
import ServiceDetailsSummary from '@/app/components/services/ServiceDetailsSummary';
import VMContainer from '../../components/Layout/VMContainer';
import VMHeader from '../../components/Layout/VMHeader';
import { VFooterN } from '../../components/Home';

const CouponDetail: React.FC = () => {

  const { coupon_id } = useParams();

  interface Service {
    title: string;
    description: string;
    price: number;
    code: string;
    owner: {
      username: String;
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

  const [couponData, setCouponData] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log(coupon_id);

  const handleClick = () => {
    window.location.assign(`https://www.vmodelapp.com/coupons/${coupon_id}`);
  };

  // Fetch service details from the API
  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`/api/coupons?coupon_id=${coupon_id}`);
        // if (!response.ok) {
        //   throw new Error('Failed to fetch service details');
        // }
        const data = await response.json();
        console.log(data.data.couponWeb);
        console.log(data,'sss')
        if (data.errors) {

          setError('Coupon not found');
        } 
        setCouponData(data?.data?.couponWeb);
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

    if (coupon_id) {
      fetchServiceDetails();
    }
  }, [coupon_id]);
  if (!error && loading) {
    return <div className="flex bg-white items-center text-primary justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center bg-white justify-center min-h-screen text-red-500">No coupon found. Please try again later</div>;
  }
  return (
    <>
      <VMContainer noWrapper={true} autoHeight={true}>
        <VMHeader />
      </VMContainer>
      <div style={{ borderWidth: 0.1, borderRight: 0, borderLeft: 0 }} className="flex py-10 border-gray-500 flex-col items-center justify-center pb-[200px] p-3">
        <div className="w-full max-w-5xl ">
          <h4 className="text-l md:text-xl font-bold mb-6 text-white text-center">Coupon Details</h4>

          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 mb-6 items-center justify-center">
            <div className="w-full md:w-1/2 bg-white rounded-lg">
              <div className="flex items-center p-6 mb-4 w-full bg-white rounded-lg ">
                {/* User Profile Picture */}
                <img
                  src={couponData?.owner.profilePictureUrl || '/placeholder.jpg'} // Fallback to a placeholder if no image
                  alt="User Profile"
                  className="w-12 h-12 rounded-full border-[3px] border-primary mr-4"
                />

                {/* User Info and Ratings */}
                <div className="flex items-center justify-between w-full">
                  {/* User Info (Username and Location) */}
                  <div className="flex flex-col">
                    <p className="font-semibold text-[13px] md:text-[16px]">{couponData?.owner?.username}</p>
                    <p className="text-gray-400 text-[13px] md:text-[16px]">{couponData?.owner?.location?.locationName}</p>
                  </div>

                  {/* Ratings Section */}
                  <div className="flex  self-start items-center">
                    <span className="text-yellow-500 mr-1 text-[13px] md:text-[16px]">★</span> {/* Star icon */}
                    <p className="text-gray-500 text-[13px] md:text-[16px]">5.0 (39)</p>
                  </div>
                </div>
              </div>

              <h3 className="text-l  md:text-xl font-bold mb-6 text-primary text-center">{couponData?.title}</h3>
              <div className='flex flex-col items-center justify-center'>
                <div className="border text-primary border-dashed border-2 border-opacity-75 border-primary p-6 w-64 h-30 flex flex-col items-center justify-center text-center space-y-2">
                  <p className="text-lg opacity-75 font-semibold">Coupon Code</p>
                  <p className="text-xl font-bold">{couponData?.code}</p>
                </div>
              </div>
              <div className="mb-4 flex w-full flex-col items-center justify-center mt-16">
                <button
                  onClick={handleClick}
                  className="font-bold w-[80%] mb-2 py-3 bg-primary hover:bg-white hover:bg-primary hover:text-white text-white rounded-[10px] transition"
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VFooterN noPadd={true} />
    </>
  );
};

export default CouponDetail;
