"use client";

import ServiceDetailsPost from '@/app/components/services/ServiceDetailsPost'; // Not used, consider removing if unnecessary
import ServiceDetailsSummary from '@/app/components/services/ServiceDetailsSummary'; // Not used, consider removing if unnecessary
import React from 'react';
import CommentsComponent from '../components/posts/CommentsComponent';

const Posts: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-4xl p-6 bg-white  "> {/* Added rounded corners and shadow for better aesthetics */}
        {/* Title */}
        <h1 className="text-xl font-bold text-primary text-center mb-4">Details</h1> {/* Added a title */}

        {/* Two Containers in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-6"> {/* Adjusted gap between containers */}
          {/* Left Container */}
          <div className="overflow-hidden"> {/* Ensure it takes full width */}
            <img
              src="/assets/images/vmodel-app-ui/vm-phone-17.jpg" // Replace with actual user image
              alt="Service Visual"
              className="w-full h-full object-cover" // Ensure image covers the container without distortion
            />
          </div>

          {/* Right Container */}
          <div className="border-t border-r border-b border-primary  overflow-hidden"> {/* Ensure it takes full width */}
            <CommentsComponent />
          </div>
        </div>

        {/* Action Buttons */}
        <a href="#" className="block p-3 text-xl font-semibold mb-6 text-primary width-[50%] rounded-[10px] text-center hover:text-white hover:bg-primary transition">Continue on app</a> {/* Improved link styling */}
      </div>
    </div>
  );
};

export default Posts;
