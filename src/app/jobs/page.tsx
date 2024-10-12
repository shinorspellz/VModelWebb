"use client";

import ServiceDetailsPost from '@/app/components/services/ServiceDetailsPost';
import JobDetailsPost from '../components/jobs/JobDetailsPost';
import JobDetailsSummary from '../components/jobs/JobDetailsSummary';
import React from 'react';

const JobDetail: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-5xl p-6 bg-white"> {/* Increased max-width */}
        {/* Title */}
        <h4 className="text-xl font-bold mb-6 text-primary text-center">Details</h4>

        {/* Two Containers in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> {/* Increased gap between containers */}
          {/* Left Container */}
          <div className="p-4 border border-primary rounded-lg w-full"> {/* Ensure it takes full width */}
            <JobDetailsPost />
          </div>

          {/* Right Container */}
          <div className="p-6 border border-primary rounded-lg w-full"> {/* Ensure it takes full width */}
            <JobDetailsSummary label="Job Category" value="$100.00" />
            <JobDetailsSummary label="Looking for a" value="$5.00" />
            <JobDetailsSummary label="Total:" value="$105.00" />
            <JobDetailsSummary label="Service Fee:" value="$100.00" />
            <JobDetailsSummary label="Tax (5%):" value="$5.00" />
            <JobDetailsSummary label="Total:" value="$105.00" />
            <JobDetailsSummary label="Service Fee:" value="$100.00" />
            <JobDetailsSummary label="Tax (5%):" value="$5.00" />
            <JobDetailsSummary label="Total:" value="$105.00" />

          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3 items-center justify-center mt-16">
          <button className="w-full md:w-[50%] mb-2 p-3 rounded-[10px] bg-primary text-white   transition">
            Apply
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
