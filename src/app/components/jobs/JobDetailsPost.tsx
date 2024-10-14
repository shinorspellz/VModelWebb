import React from 'react';

// Sample data for service images
const serviceImages = [
    { id: 1, src: '/assets/images/vmodel-app-ui/vm-phone-1.png', alt: 'Service 1' },
    { id: 2, src: '/assets/images/vmodel-app-ui/vm-phone-1.png', alt: 'Service 2' },
];

const JobDetailsPost: React.FC = () => {
    return (
        <div className="flex flex-col p-4 bg-white rounded-lg md:p-6">
            {/* User Profile */}
            <div className="flex items-center mb-4">
                <img
                    src="/assets/images/vmodel-app-ui/vm-phone-11.jpg" // Replace with actual user image
                    alt="User Profile"
                    className="w-10 h-10 rounded-full border border-gray-300 mr-3 md:w-12 md:h-12"
                />
                <div className="flex flex-col">
                    <p className="font-semibold text-sm md:text-base">John Doe</p>
                    <p className="text-gray-400 text-xs md:text-sm">San Francisco, CA</p>
                </div>
                {/* Ratings Section */}
                <div className="flex items-center ml-auto">
                    <span className="text-yellow-500 text-sm mr-1 md:text-base">★</span> {/* You can replace these with star icons */}
                    <p className="text-gray-500 text-xs md:text-sm">5.0 (39)</p>
                </div>
            </div>

            {/* Service Title */}
            <h2 className="text-lg text-primary font-bold mb-2 md:text-xl">Premium Service Package</h2>

            {/* Service Subtitle */}
            <h3 className="text-sm font-medium text-primary text-gray-700 mb-2 md:text-md">Get the best experience with our services</h3>

            {/* Service Description */}
            <p className="text-gray-700 text-sm md:text-base mb-4">
                This service includes a comprehensive range of features designed to ensure the highest satisfaction. Get the best experience with our services.
            </p>

            {/* Read More Button */}
            <button className="px-3 py-2 bg-primary text-white rounded-lg transition md:px-4 md:py-3">
                Read More
            </button>
        </div>
    );
};

export default JobDetailsPost;
