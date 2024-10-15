"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use `useParams` to get the dynamic route param
import ServiceDetailsPost from '@/app/components/services/ServiceDetailsPost';
import JobDetailsPost from '../../components/jobs/JobDetailsPost';
import ServiceDetailsSummary from '../../components/services/ServiceDetailsSummary';

import Head from 'next/head'; // Import for SEO metadata
import VMContainer from '../../components/Layout/VMContainer';
import VMHeader from '../../components/Layout/VMHeader';
import { VFooterN } from '../../components/Home';

const JobDetail: React.FC = () => {
  const { job_id } = useParams(); // Get job_id from params

  const handleClick = () => {
    window.location.href = `https://www.vmodelapp.com/jobs?job_id=${job_id}`;
  };

  const [jobData, setJobData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`/api/jobs?job_id=${job_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch service details');
        }
        const data = await response.json();
        console.log(data.data.jobWeb);

        setJobData(data?.data?.jobWeb);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
        console.log(error);
        setLoading(false);
      }
    };

    if (job_id) {
      fetchServiceDetails();
    }
  }, [job_id]);

  if (loading) {
    return <div className="flex bg-white items-center text-primary justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">No service found. Please try again later</div>;
  }

  return (
    <>
      <Head>
        <title>{jobData?.jobTitle || 'Job Details'} - Deluxe Motorcycle Engineering</title>
        <meta name="description" content={jobData?.shortDescription || 'Learn more about our motorcycle engineering services.'} />
        <meta property="og:title" content={jobData?.jobTitle || 'Deluxe Motorcycle Engineering Service'} />
        <meta property="og:description" content={jobData?.shortDescription || 'Check out our top-notch motorcycle services.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://vmodelapp.com/services?service_id=${job_id}`} />
        <meta property="og:image" content={jobData?.creator?.profilePictureUrl} /> {/* Add a relevant image URL */}
        <meta name="robots" content="index, follow" />
      </Head>
      <VMContainer noWrapper={true} autoHeight={true}>
        <VMHeader />
      </VMContainer>
      <div style={{ borderWidth: 0.1, borderRight: 0, borderLeft: 0 }} className="flex py-10 border-gray-500 flex-col items-center justify-center min-h-screen p-3">
        <div className="w-full max-w-5xl"> {/* Increased max-width */}
          <h4 className="text-xl font-bold mb-6 text-white text-center">Job Details</h4>

          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 mb-6 items-center justify-center">
            <div className="w-full md:w-1/2 rounded-lg">
              <JobDetailsPost data={jobData} />
            </div>

            <div className="w-full md:w-1/2 p-8 bg-white rounded-lg">
              <ServiceDetailsSummary label="Job Category" value={jobData?.category.name ?? 'unavailable'} />
              <ServiceDetailsSummary label="Looking for a" value={jobData?.talents.join(',') ?? 'unavailable'} />
              <ServiceDetailsSummary label="Job Type" value={jobData?.jobType ?? 'unavailable'} />
              <ServiceDetailsSummary label="Gender" value={jobData?.preferredGender ?? 'unavailable'} />
              <ServiceDetailsSummary label="Creative Brief" value={jobData?.Brief ?? 'unavailable'} />
              <ServiceDetailsSummary label="Multiple applicants" value={jobData?.acceptMultiple ? 'Yes' : 'No'} />
              <ServiceDetailsSummary label="Price" value={jobData?.priceValue ?? 'unavailable'} />
            </div>
          </div>

          <div className="flex flex-col space-y-3 items-center justify-center mt-16">
            <button onClick={handleClick} className="font-bold md:w-[50%] w-full mb-2 py-3 bg-white hover:border hover:bg-primary hover:text-white text-primary rounded-[10px] transition">
              Apply
            </button>
          </div>
        </div>
      </div>
      <VFooterN noPadd={true} />
    </>
  );
};

export default JobDetail;
