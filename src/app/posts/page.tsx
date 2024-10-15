"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ServiceDetailsPost from '@/app/components/services/ServiceDetailsPost'; // Not used, consider removing if unnecessary
import ServiceDetailsSummary from '@/app/components/services/ServiceDetailsSummary'; // Not used, consider removing if unnecessary
import CommentsComponent from '../components/posts/CommentsComponent';

const Posts: React.FC = () => {
  const searchParams = useSearchParams();
  const post_id = searchParams.get("post_id"); // Get service_id from params
  const [postData, setPostData] = useState<any| null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log(post_id);

  const handleClick = () => {
    window.location.href = `https://www.vmodelapp.com/posts?post_id=${post_id}`;
  };

  // Fetch service details from the API
  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await fetch(`/api/posts?post_id=${post_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch service details');
        }
        const data = await response.json();
        console.log(data.data.post);
        console.log(data)
        setPostData(data?.data?.post);
        setLoading(false);
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
        console.log(error);
        setLoading(false);
      }
    };

    if (post_id) {
      fetchPostDetails();
    }
  }, [post_id]);

  if (loading) {
    return <div className="flex bg-white items-center text-primary justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">No psot found. Please try again later</div>;
  }

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
          <div className="border-t border-r border-b border-l md:border-l[] border-primary  overflow-hidden"> {/* Ensure it takes full width */}
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
