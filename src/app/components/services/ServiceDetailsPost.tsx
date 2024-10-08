import React from 'react';

// Sample data for service images
const serviceImages = [
    { id: 1, src: '/assets/images/vmodel-app-ui/vm-phone-1.png', alt: 'Service 1' },
    { id: 2, src: '/assets/images/vmodel-app-ui/vm-phone-1.png', alt: 'Service 2' },
   
];

const ServiceDetailsPost: React.FC = () => {
    return (
        <div className="flex flex-col p-6 bg-white rounded-lg">
            {/* Service Images Selection with horizontal scroll */}
            <div className="flex overflow-x-scroll mb-4 space-x-2 p-2 scrollbar-hide">
                {serviceImages.map((service) => (
                    <div
                        key={service.id}
                        className="w-24 h-24 cursor-pointer rounded-lg overflow-hidden border border-gray-300 hover:border-primary transition"
                    >
                        <img src={service.src} alt={service.alt} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            {/* User Profile */}
            <div className="flex items-center mb-4">
                <img
                    src="/assets/images/vmodel-app-ui/vm-phone-11.jpg" // Replace with actual user image
                    alt="User Profile"
                    className="w-12 h-12 rounded-full border border-gray-300 mr-3"
                />
                <div className="flex flex-col">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-gray-400">San Francisco, CA</p>
                </div>
                {/* Ratings Section */}
                <div className="flex items-center ml-auto">
                    <span className="text-yellow-500 mr-1">★</span> {/* You can replace these with star icons */}
                    <p className="text-gray-500 text-sm">5.0 (39)</p>
                </div>
            </div>

            {/* Service Title */}
            <h2 className="text-xl text-primary font-bold mb-2">Premium Service Package</h2>

            {/* Service Subtitle */}
            <h3 className="text-md font-medium text-primary  text-gray-700 mb-2">Get the best experience with our services</h3>

            {/* Service Description */}
            <p className="text-primary mb-4">
                This service includes a comprehensive range of features designed to ensure the highest satisfaction.
            </p>

            {/* Read More Button */}
            <button className="px-4 py-3 bg-primary text-white rounded-[10px] ">
                Read More
            </button>
        </div>
    );
};

export default ServiceDetailsPost;
