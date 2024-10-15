import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// Sample data for service images
const serviceImages = [
    { id: 1, src: '/assets/images/vmodel-app-ui/vm-phone-1.png', alt: 'Service 1' },
    { id: 2, src: '/assets/images/vmodel-app-ui/vm-phone-1.png', alt: 'Service 2' },
];

interface JobDetailsPostProp {
    data: any;
}

const JobDetailsPost: React.FC<JobDetailsPostProp> = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const descriptionLimit = 200; // Limit the description to 200 characters

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    // Prepare cleanDescription for Markdown format
    const cleanDescription = data.shortDescription; // Keep Markdown formatting

    const displayedDescription = isExpanded
        ? cleanDescription
        : `${cleanDescription.slice(0, descriptionLimit)}${cleanDescription.length > descriptionLimit ? '...' : ''}`;

    return (
        <div className="flex flex-col p-6 bg-white rounded-lg">
            {/* User Profile */}
            <div className="flex items-center mb-4">
                <img
                    src={data.creator.profilePictureUrl} // Replace with actual user image
                    alt="User Profile"
                    className="w-12 h-12 rounded-full border border-[3px] border-primary mr-3"
                />
                <div className="flex flex-col">
                    <p className="font-semibold text-[13px] md:text-[16px]">{data?.creator?.username}</p>
                    <p className="text-gray-400 text-[13px] md:text-[16px]">{data?.creator?.location?.locationName}</p>
                </div>
                {/* Ratings Section */}
                <div className="flex items-center ml-auto">
                    <span className="text-yellow-500 mr-1 text-[13px] md:text-[16px]">★</span> {/* You can replace this with star icons */}
                    <p className="text-gray-500 text-[13px] md:text-[16px]">5.0 (39)</p>
                </div>
            </div>

            {/* Service Title */}
            <h2 className="text-l text-primary font-bold mb-2">{data.jobTitle}</h2>

            {/* Service Description */}
            <div className="text-primary text-[13px] md:text-[16px] mb-4">
                <ReactMarkdown
                    components={{
                        h1: ({ node, ...props }) => <h1 className="mt-3 mb-3 " {...props} />,
                        h2: ({ node, ...props }) => <h2 className="mt-4 mb-4" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="mt-4 mb-4" {...props} />,
                        h4: ({ node, ...props }) => <h4 className="mt-4 mb-4" {...props} />,
                        h5: ({ node, ...props }) => <h4 className="mt-4 mb-4" {...props} />,
                        h6: ({ node, ...props }) => <h4 className="mt-4 mb-4" {...props} />,
                    }}
                >
                    {displayedDescription}
                </ReactMarkdown>
            </div>

            {/* Read More / Show Less Button */}
            {cleanDescription.length > descriptionLimit && (
                <button onClick={handleReadMore} className="px-4 text-[13px] my-3 md:text-[16px] py-2 bg-primary text-white rounded-[10px]">
                    {isExpanded ? 'Show Less' : 'Read More'}
                </button>
            )}

            {/* Container for CreatedAt and No of Applicants */}
            <div className="flex justify-between mt-4">
                <span className="text-gray-500 text-[13px] md:text-[16px]">
                    {new Date(data.createdAt).toLocaleDateString()} {/* Format createdAt date */}
                </span>
                <span className="text-gray-500 text-[13px] md:text-[16px]">
                    {data.noOfApplicants} applicants {/* Show number of applicants */}
                </span>
            </div>
        </div>
    );
};

export default JobDetailsPost;
