"use client";

import ServiceDetailsPost from '@/app/components/services/ServiceDetailsPost';
import ServiceDetailsSummary from '@/app/components/services/ServiceDetailsSummary';
import React from 'react';

const ServiceDetail: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-5xl p-6 bg-white"> {/* Increased max-width */}
        {/* Title */}
        <h4 className="text-xl font-bold mb-6 text-primary text-center">Details</h4>

        {/* Two Containers in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> {/* Increased gap between containers */}
          {/* Left Container */}
          <div className="p-4 border border-primary rounded-lg w-full"> {/* Ensure it takes full width */}
            <ServiceDetailsPost />
          </div>

          {/* Right Container */}
          <div className="p-6 border border-primary rounded-lg w-full"> {/* Ensure it takes full width */}
            <ServiceDetailsSummary label="Service Fee:" value="$100.00" />
            <ServiceDetailsSummary label="Tax (5%):" value="$5.00" />
            <ServiceDetailsSummary label="Total:" value="$105.00" />
            <ServiceDetailsSummary label="Service Fee:" value="$100.00" />
            <ServiceDetailsSummary label="Tax (5%):" value="$5.00" />
            <ServiceDetailsSummary label="Total:" value="$105.00" />
            <ServiceDetailsSummary label="Service Fee:" value="$100.00" />
            <ServiceDetailsSummary label="Tax (5%):" value="$5.00" />
            <ServiceDetailsSummary label="Total:" value="$105.00" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3 items-center justify-center mt-16">
          <button className="w-[50%] mb-2 py-3 bg-primary text-white rounded-[10px]  transition">
            Book Now
          </button>
          <button className="w-[50%] py-3  border-primary bg-white font-bold text-primary hover:text-white rounded-[10px] hover:bg-primary transition">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
