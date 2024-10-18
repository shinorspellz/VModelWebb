import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface ServiceDetailsPostProps {
    data: any;
}

const ServiceDetailsPost: React.FC<ServiceDetailsPostProps> = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Track the selected banner index
    const descriptionLimit = 200; // Limit the description to 200 characters

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    // Extract the first line as a subtitle from description and remove '**'
    const [sub, ...restDescription] = data.description.split('\n');
    const cleanSub = sub.replace(/\*\*/g, ''); // Remove '**' from subtitle

    // Prepare cleanDescription for Markdown format
    const cleanDescription = data.description; // Keep Markdown formatting

    const displayedDescription = isExpanded
        ? cleanDescription
        : `${cleanDescription.slice(0, descriptionLimit)}${cleanDescription.length > descriptionLimit ? '...' : ''}`;

    // Handle banner click to show the first image
    const handleBannerClick = (index: number) => {
        setSelectedIndex(index); // Set the clicked index as the selected image
    };

    // Handle modal close
    const closeModal = () => {
        setSelectedIndex(null); // Deselect the image when closing the modal
    };

    // Function to go to the next image
    const handleNextImage = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent modal close
        if (data.banner && selectedIndex !== null) {
            const nextIndex = (selectedIndex + 1) % data.banner.length; // Wrap around to the first image
            setSelectedIndex(nextIndex);
        }
    };

    // Function to go to the previous image
    const handlePrevImage = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent modal close
        if (data.banner && selectedIndex !== null) {
            const prevIndex = (selectedIndex - 1 + data.banner.length) % data.banner.length; // Wrap around to the last image
            setSelectedIndex(prevIndex);
        }
    };

    return (
        <div className="flex flex-col p-6 bg-white rounded-lg">
            {/* Service Images Selection with horizontal scroll */}
            {data.banner && (
                <div className="flex overflow-x-scroll mb-4 space-x-2 p-2 scrollbar-hide">
                    {data.banner.map((banner: any, index: number) => (
                        <div
                            key={banner.thumbnail}
                            className="w-[100px] h-24 cursor-pointer rounded-lg overflow-hidden border border-gray-300 hover:border-primary hover:border-[3px] transition"
                            onClick={() => handleBannerClick(index)} // Handle click to expand
                        >
                            <img src={banner.thumbnail} alt={banner.thumbnail} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            )}

            {/* Modal for displaying the larger image */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={closeModal} // Close modal when clicking outside the image
                >
                    <div className="relative flex justify-center items-center w-full h-full" onClick={(e) => e.stopPropagation()}>
                        {/* Close button */}
                        <button
                            className="absolute w-[40px] rounded-lg h-[40px] top-4 right-4 text-white bg-primary p-2"
                            onClick={closeModal}
                        >
                            x
                        </button>
                        {/* Enlarged image by 50% and centered */}
                        <img
                            src={data.banner[selectedIndex].thumbnail} // Use selected index to get the current image
                            alt="Expanded banner"
                            className="max-w-[100%] max-h-[100%] object-contain"
                        />
                        {/* Navigation Buttons */}
                        <button
                            className="px-4 hover:bg-primary hover:text-white text-primary absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                            onClick={handlePrevImage}
                        >
                            Prev
                        </button>
                        <button
                            className= "px-4 hover:bg-primary hover:text-white text-primary absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                            onClick={handleNextImage}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

            {/* User Profile */}
            <div className="flex items-center mb-4">
                <img
                    src={data.user.profilePictureUrl} // Replace with actual user image
                    alt="User Profile"
                    className="w-12 h-12 rounded-full border border-[3px] border-primary mr-3"
                />
                <div className="flex flex-col">
                    <p className="font-semibold text-[13px] md:text-[16px]">{data?.user?.username}</p>
                    <p className="text-gray-400 text-[13px] md:text-[16px]">{data?.user?.location?.locationName||'Worldwide'}</p>
                </div>
                {/* Ratings Section */}
                <div className="flex self-start items-center ml-auto">
                    <span className="text-yellow-500 mr-1 text-[13px] md:text-[16px]">★</span> {/* You can replace this with star icons */}
                    <p className="text-gray-500 text-[13px] md:text-[16px]">5.0 (39)</p>
                </div>
            </div>

            {/* Service Title */}
            <h2 className="text-l text-primary font-bold mb-2">{data.title}</h2>

            {/* Service Description */}
            <div className="text-primary text-[13px] md:text-[16px] mb-4">
                <ReactMarkdown
                    components={{
                        h1: ({ node, ...props }) => <h1 className="mt-3 mb-3 " {...props}/>,
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
                <button onClick={handleReadMore} className="px-4 text-[13px] md:text-[16px] py-3 bg-primary text-white rounded-[10px]">
                    {isExpanded ? 'Show Less' : 'Read More'}
                </button>
            )}
        </div>
    );
};

export default ServiceDetailsPost;
