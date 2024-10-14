'use client';

import React, { useState } from "react";
import SideImage from "@/app/components/General/SideImage";
import GettingStartedForm from "@/app/components/forms/GettingStartedForm";
import { FormData } from '@/types/types';
import { useRouter } from 'next/navigation';
const userTypes = ['Model', 'Influencer', 'Digital Creator', 'Photographer', 'Videographer', 'Pet Model', 'Stylist', 'Chef', 'Cook', 'Baker', 'Event Planner', 'Party Entertainer', 'Booker', 'Business']
const subCategories = ['Alternative/Edgy Model', 'Art Model', 'Beauty Model', 'Catalog Model', 'Celebrity Lookalike Model', 'Character/Costume Model', 'Editorial Model', 'Fashion Model', 'Fit Model', 'Fitness Model', 'Glamour Model', 'High Fashion Model', 'Lifestyle Model', 'Lingerie Model', 'Maternity Model', 'Parts Model (e.g. Face Model, Hair Model, etc.)', 'Petite Model', 'Plus-Size Model', 'Print Model', 'Promotional Model', 'Runway Model', 'Showroom Model', 'Streetwear Model', 'Swimwear Model', 'Trade Show Model', 'Underwear Model', 'Virtual Model']

const GettingStarted = () => {
  const [formData, setFormData] = useState({
    userType: userTypes[0], // Default to the first user type
    subCategory: subCategories[0], // Default to the first sub-category
  });
  const router = useRouter();
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/user/register?userType=${formData.userType}&subCategory=${formData.subCategory}`);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      {/* Left Section - Form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center">
        <div className="flex flex-1 flex-col justify-center h-full p-8">
          <GettingStartedForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2 hidden lg:flex items-center justify-center">
        <SideImage />
      </div>
    </div>
  );
};

export default GettingStarted;
