import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface ServiceDetailsPostProps {
    data: any;
}

const CouponDetail: React.FC<ServiceDetailsPostProps> = ({ data }) => {
  

    return (
        <div className="flex flex-col p-6 bg-white rounded-lg">
          

            {/* User Profile */}
            <div className="flex items-center mb-4">
                <img
                    src={data.user.profilePictureUrl} // Replace with actual user image
                    alt="User Profile"
                    className="w-12 h-12 rounded-full border border-[3px] border-primary mr-3"
                />
                <div className="flex flex-col">
                    <p className="font-semibold text-[13px] md:text-[16px]">{data?.user?.username}</p>
                    <p className="text-gray-400 text-[13px] md:text-[16px]">{data?.user?.location?.locationName}</p>
                </div>
                {/* Ratings Section */}
                <div className="flex items-center ml-auto">
                    <span className="text-yellow-500 mr-1 text-[13px] md:text-[16px]">★</span> {/* You can replace this with star icons */}
                    <p className="text-gray-500 text-[13px] md:text-[16px]">5.0 (39)</p>
                </div>
            </div>

            {/* Service Title */}
            <h2 className="text-l text-primary font-bold mb-2">{data.title}</h2>

            {/* Service Description */}
            <div className="text-primary text-[13px] md:text-[16px] mb-4">
                
            </div>

        </div>
    );
};

export default CouponDetail;
