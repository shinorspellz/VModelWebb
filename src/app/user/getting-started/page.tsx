"use client";

import React from "react";
import SideImage from "@/app/components/General/SideImage";
import GettingStartedForm from "@/app/components/forms/GettingStartedForm";

const GettingStarted = () => {
  const [email, setEmail] = React.useState("");
  const [emailSubmitted, setEmailSubmitted] = React.useState(false);

  // Handle form submission
  const handleEmailSubmit = () => {
    console.log('yes');
    setEmailSubmitted(true);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      {/* Left Section - Form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center">
        <div className="flex flex-1 flex-col justify-center h-full p-8">
          <GettingStartedForm />
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
