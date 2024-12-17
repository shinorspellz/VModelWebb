import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
interface ServiceDetailsPostProps {
    data: any;
}

const ServiceDetailsPost: React.FC<ServiceDetailsPostProps> = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0); // Default to first image
    const descriptionLimit = 200;

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const [sub, ...restDescription] = data.description.split('\n');
    const cleanSub = sub.replace(/\*\*/g, '');
    const cleanDescription = data.description;

    const displayedDescription = isExpanded
        ? cleanDescription
        : `${cleanDescription.slice(0, descriptionLimit)}${cleanDescription.length > descriptionLimit ? '...' : ''}`;

    const handleBannerClick = (index: number) => {
        setSelectedIndex(index);
    };

    const scrollBanner = (scrollOffset: number) => {
        const bannerContainer = document.getElementById('banner-container');
        if (bannerContainer) {
            // Animate the scroll smoothly
            bannerContainer.scrollTo({
                left: bannerContainer.scrollLeft + scrollOffset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="flex flex-col p-6 bg-white rounded-lg">
            {data.bannerUrl && data.bannerUrl.length > 0 && (
                <>
                    {/* Selected Image Display */}
                    {selectedIndex !== null && (
                        <div className="w-full h-[400px] mx-auto mb-4 rounded-lg overflow-hidden border border-gray-300">
                            <img
                                src={data.bannerUrl[selectedIndex]?.url}
                                alt="Selected banner"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Thumbnail List */}
                    <div className="relative">
                        {data.bannerUrl.length > 2 && (
                            <button
                                onClick={() => scrollBanner(-100)}
                                className="absolute text-primary font-bold left-[-15px] top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-1 z-10"
                            >
                                   <ChevronLeftIcon className="h-[15px] w-[15px] text-primary" />  

                            </button>
                        )}

                        <div
                            id="banner-container"
                            className="flex overflow-x-scroll scrollbar-hide mb-4 space-x-2 p-2"
                        >
                            {data.bannerUrl.map((banner: any, index: number) => (
                                <div
                                    key={banner.thumbnail}
                                    className={`w-[100px] h-24 cursor-pointer rounded-lg overflow-hidden border ${
                                        selectedIndex === index
                                            ? 'border-primary border-[3px]'
                                            : 'border-gray-300 hover:border-primary hover:border-[3px]'
                                    } transition`}
                                    onClick={() => handleBannerClick(index)}
                                >
                                    <img
                                        src={banner.url}
                                        alt={banner.thumbnail}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {data.bannerUrl.length > 2 && (
                            <button
                                onClick={() => scrollBanner(100)}
                                className="absolute text-primary font-bold right-[-15px] top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-1 z-10"
                            >
                                        <ChevronRightIcon className="h-[15px] w-[15px]  text-primary" />
                          </button>
                        )}
                    </div>
                </>
            )}

            {/* Rest of the Component */}
            <div className="flex items-center mb-4">
                <img
                    src={data.user.profilePictureUrl}
                    alt="User Profile"
                    className="w-12 h-12 rounded-full border border-[3px] border-primary mr-3"
                />
                <div className="flex flex-col">
                    <p className="font-semibold text-[13px] md:text-[16px]">{data?.user?.username}</p>
                    <p title={data?.user?.location?.locationName || 'Worldwide'} className="text-gray-400 truncate max-w-[200px] text-[13px] md:text-[16px]">{data?.user?.location?.locationName || 'Worldwide'}</p>
                </div>
                <div className="flex self-start items-center ml-auto">
                    <span className="text-yellow-500 mr-1 text-[13px] md:text-[16px]">★</span>
                    <p className="text-gray-500 text-[13px] md:text-[16px]">{data.reviewStats.rating} ({data.reviewStats.noOfReviews})</p>
                </div>
            </div>

            <h2 className="text-l text-primary font-bold mb-2">{data.title}</h2>

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

            {cleanDescription.length > descriptionLimit && (
                <button onClick={handleReadMore} className="px-4 text-[13px] md:text-[16px] py-3 bg-primary text-white rounded-[10px]">
                    {isExpanded ? 'Show Less' : 'Read More'}
                </button>
            )}
        </div>
    );
};

export default ServiceDetailsPost;
