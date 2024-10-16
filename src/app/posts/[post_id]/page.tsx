"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use `useParams` to get the dynamic route param
import { useSearchParams } from 'next/navigation';
import ServiceDetailsPost from '@/app/components/services/ServiceDetailsPost'; // Not used, consider removing if unnecessary
import ServiceDetailsSummary from '@/app/components/services/ServiceDetailsSummary'; // Not used, consider removing if unnecessary
import CommentsComponent from '../../components/posts/CommentsComponent';
import VMContainer from '../../components/Layout/VMContainer';
import VMHeader from '../../components/Layout/VMHeader';
import { VFooterN } from '../../components/Home';
const Posts: React.FC = () => {
  const searchParams = useSearchParams();
  const { post_id } = useParams(); // Get job_id from params
  const [postData, setPostData] = useState<any | null>(null);
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
        console.log(data.data.postWeb);
        console.log(data)
        setPostData(data?.data?.postWeb);
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
     <><VMContainer noWrapper={true} autoHeight={true}>
      <VMHeader />
    </VMContainer>
      <div style={{ borderWidth: 0.1, borderRight: 0, borderLeft: 0 }} className="flex py-10 border-gray-500 flex-col items-center justify-center min-h-screen p-3">
        <div className="w-full max-w-4xl p-6 "> {/* Added rounded corners and shadow for better aesthetics */}
          {/* Title */}
          <h1 className="text-xl font-bold text-white text-center mb-4">Post Details</h1> {/* Added a title */}

          {/* Two Containers in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 mb-6"> {/* Adjusted gap between containers */}
            {/* Left Container */}
            <div className="overflow-hidden"> {/* Ensure it takes full width */}
              <img
                src={postData?.media[0]?.thumbnail} // Replace with actual user image
                alt="Service Visual"
                className="w-full h-full object-cover" // Ensure image covers the container without distortion
              />
            </div>

            {/* Right Container */}
            <div className="border-primary  overflow-hidden"> {/* Ensure it takes full width */}
              <CommentsComponent data={postData} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-3 items-center justify-center mt-10">
            <button onClick={handleClick} className="font-bold md:w-[50%] w-full mb-2 py-3 bg-white hover:border hover:bg-primary hover:text-white text-primary rounded-[10px] transition">
            Continue on app
            </button>
          </div>        </div>
      </div><VFooterN noPadd={true} /></>
  );
};

export default Posts;
