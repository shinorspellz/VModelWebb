import React, { useState } from 'react';

// Sample data for service images
const serviceImages = [
    { id: 1, src: '/assets/images/vmodel-app-ui/vm-phone-1.png', alt: 'Service 1' },
    { id: 2, src: '/assets/images/vmodel-app-ui/vm-phone-1.png', alt: 'Service 2' },
];

interface ServiceDetailsPostProps {
    data: any;
}

const ServiceDetailsPost: React.FC<ServiceDetailsPostProps> = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const descriptionLimit = 100; // Limit the description to 100 characters

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    // Extract the first line as a subtitle from description and remove '**'
    const [sub, ...restDescription] = data.description.split('\n');
    const cleanSub = sub.replace(/\*\*/g, ''); // Remove '**' from subtitle
    const cleanDescription = data.description.replace(/\*\*/g, ''); // Remove '**' from description

    const displayedDescription = isExpanded
        ? cleanDescription
        : `${cleanDescription.slice(0, descriptionLimit)}${cleanDescription.length > descriptionLimit ? '...' : ''}`;

    return (
        <div className="flex flex-col p-6 bg-white rounded-lg">
            {/* Service Images Selection with horizontal scroll */}
          { data.banner&& <div className="flex overflow-x-scroll mb-4 space-x-2 p-2 scrollbar-hide">
                {data.banner.map((banner:any) => (
                    <div
                        key={banner.thumbnail}
                        className="w-24 h-24 cursor-pointer rounded-lg overflow-hidden border border-gray-300 hover:border-primary hover:border-[3px] transition"
                    >
                        <img src={banner.thumbnail} alt={banner.thumbnail} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>}

            {/* User Profile */}
            <div className="flex items-center mb-4">
                <img
                    src={data.user.profilePictureUrl} // Replace with actual user image
                    alt="User Profile"
                    className="w-12 h-12 rounded-full border border-[3px] border-primary  mr-3"
                />
                <div className="flex flex-col">
                    <p className="font-semibold">{data?.user?.username}</p>
                    <p className="text-gray-400">{data?.user?.location?.locationName}</p>
                </div>
                {/* Ratings Section */}
                <div className="flex items-center ml-auto">
                    <span className="text-yellow-500 mr-1">★</span> {/* You can replace these with star icons */}
                    <p className="text-gray-500 text-sm">5.0 (39)</p>
                </div>
            </div>

            {/* Service Title */}
            <h2 className="text-xl text-primary font-bold mb-2">{data.title}</h2>

            {/* Service Subtitle */}
            <h3 className="text-md font-medium text-primary text-gray-700 mb-2">{cleanSub}</h3>

            {/* Service Description */}
            <p className="text-primary mb-4">
                {displayedDescription}
            </p>

            {/* Read More / Show Less Button */}
            {cleanDescription.length > descriptionLimit && (
                <button onClick={handleReadMore} className="px-4 py-3 bg-primary text-white rounded-[10px]">
                    {isExpanded ? 'Show Less' : 'Read More'}
                </button>
            )}
        </div>
    );
};

export default ServiceDetailsPost;
