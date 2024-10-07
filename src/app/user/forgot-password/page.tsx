"use client";

import React from "react";
import SideImage from "@/app/components/General/SideImage";
import ForgotPasswordForm from "@/app/components/forms/ForgotPasswordForm";
import VerifyTokenForm from "@/app/components/forms/VerifyTokenForm";

const ForgotPassword = () => {
  const [email, setEmail] = React.useState("");
  const [emailSubmitted, setEmailSubmitted] = React.useState(false);

  // Handle form submission
  const handleEmailSubmit = () => {
   console.log('yes')
    setEmailSubmitted(true);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center h-screen bg-white">
      {/* Left Section - Form */}
      <div className="lg:w-1/2 w-full flex justify-center lg:h-auto h-full p-8">
        {!emailSubmitted ? (
          <ForgotPasswordForm email={email} setEmail={setEmail} onEmailSubmit={handleEmailSubmit} />
        ) : (
          <VerifyTokenForm />
        )}
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2 hidden lg:flex items-center justify-center lg:h-auto h-full">
        <SideImage />
      </div>
    </div>
  );
};

export default ForgotPassword;
