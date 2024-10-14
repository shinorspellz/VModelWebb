"use client";

import React,{useState} from "react";
import SideImage from "@/app/components/General/SideImage";
import ForgotPasswordForm from "@/app/components/forms/ForgotPasswordForm";
import VerifyTokenForm from "@/app/components/forms/VerifyTokenForm";

const ForgotPassword = () => {
  const [email, setEmail] = React.useState("");
  const [emailSubmitted, setEmailSubmitted] = React.useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  // Handle form submission
  const handleEmailSubmit = async() => {
    console.log('yes')
    setLoading(true)
    try {
      const response = await fetch('/api/forgot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(email),
      });

      if (response.ok) {
        const errorData = await response.json();
        if (!errorData.data.sendPasswordResetEmail.errors.errors) {

          console.log(errorData);
          setEmailSubmitted(true);
        
        
        } else {
          alert('Account not found')
        }
      }
    } catch (err) {
      setError('An error occurred while registering');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="flex flex-col lg:flex-row justify-center h-screen bg-white">
      {/* Left Section - Form */}
      <div   className="lg:w-1/2 w-full flex lg:h-auto h-full p-8">
        {!emailSubmitted ? (
          <ForgotPasswordForm loading={loading} email={email} setEmail={setEmail} onEmailSubmit={handleEmailSubmit} />
        ) : (
          <VerifyTokenForm />
        )}
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2 hidden ml-10 lg:flex items-center justify-start lg:h-auto h-full">
        <SideImage />
      </div>
    </div>
  );
};

export default ForgotPassword;
