import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface ServiceDetailsPostProps {
    data: any;
}

const ServiceDetailsPost: React.FC<ServiceDetailsPostProps> = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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
        console.log(index);
    };

    const closeModal = () => {
        setSelectedIndex(null);
    };

    const handleNextImage = (event: React.MouseEvent) => {
        event.stopPropagation();
        if (data.bannerUrl && selectedIndex !== null) {
            const nextIndex = (selectedIndex + 1) % data.bannerUrl.length;
            setSelectedIndex(nextIndex);
        }
    };

    const handlePrevImage = (event: React.MouseEvent) => {
        event.stopPropagation();
        if (data.bannerUrl && selectedIndex !== null) {
            const prevIndex = (selectedIndex - 1 + data.bannerUrl.length) % data.bannerUrl.length;
            setSelectedIndex(prevIndex);
        }
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
                <div className="relative">
                    {data.bannerUrl.length > 2 && (
                        <button
                            onClick={() => scrollBanner(-100)}
                            className="absolute text-primary font-bold left-[-15px] top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-1 z-10"
                        >
                            {"<"}
                        </button>
                    )}

                    <div
                        id="banner-container"
                        className="flex overflow-x-scroll scrollbar-hide mb-4 space-x-2 p-2"
                    >
                        {data.bannerUrl.map((banner: any, index: number) => (
                            <div
                                key={banner.thumbnail}
                                className="w-[100px] h-24 cursor-pointer rounded-lg overflow-hidden border border-gray-300 hover:border-primary hover:border-[3px] transition"
                                onClick={() => handleBannerClick(index)}
                            >
                                <img
                                    src={banner.thumbnail}
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
                            {">"}
                        </button>
                    )}
                </div>
            )}

            {selectedIndex !== null && data.bannerUrl && data.bannerUrl.length > 0 && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div className="relative flex justify-center items-center w-full h-full" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute w-[40px] rounded-lg h-[40px] top-4 right-4 text-white bg-primary p-2"
                            onClick={closeModal}
                        >
                            x
                        </button>
                        <img
                            src={data.bannerUrl[selectedIndex].thumbnail}
                            alt="Expanded banner"
                            className="max-w-[100%] max-h-[100%] object-contain"
                        />
                        <button
                            className="px-4 font-bold hover:bg-primary hover:text-white text-primary absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                            onClick={handlePrevImage}
                        >
                            {"<"}
                        </button>
                        <button
                            className="px-4 font-bold hover:bg-primary hover:text-white text-primary absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                            onClick={handleNextImage}
                        >
                            {">"}
                        </button>
                    </div>
                </div>
            )}

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
