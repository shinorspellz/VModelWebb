'use client';
import React, { useState } from 'react';
import RegisterForm from '@/app/components/forms/RegisterForm';
import SideImage from '@/app/components/General/SideImage';
import { useSearchParams } from 'next/navigation';
import RegisterSuccess from '@/app/components/General/RegisterSucess';
const Register = () => {

  const searchParams = useSearchParams();
  const userType = searchParams.get('userType');
  const subCategory = searchParams.get('subCategory');
  const [formData, setFormData] = useState({
    label: subCategory,
    // displayName: '',
    // dob: new Date("2000-01-01"),
    use2fa: false,
    useGoogleAuthenticator: false,
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    userType: userType,
    isBusinessAccount: false,
    password1: '',
    password2: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
 console.log(formData,'kkk')
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
 
      if (response.ok) {
        const errorData = await response.json();
        if (!errorData.data.register.success){
  
        console.log(errorData);

        // Create an object to hold field-specific error messages
        const fieldErrors = {};

        // Iterate over the errors array for each field
        Object.entries(errorData?.data?.register?.errors || {}).forEach(([field, errorArray]) => {
          // Collect messages for each field
          fieldErrors[field] = errorArray.map((err) => err.message);
        });

        setError(fieldErrors);
        } else{
          setSuccess(true)
          alert('registration successful')
        }
      } 
    } catch (err) {
      setError('An error occurred while registering');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center h-screen bg-white">
      {/* Left Section - Form */}
      <div className="lg:w-1/2 w-full flex-1 justify-center lg:h-auto h-full p-8">
        {success ?<RegisterSuccess/>: <RegisterForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          loading={loading}
          errors={{
            firstName: error?.firstName || null,
            lastName: error?.lastName || null,
            email: error?.email || null,
            username: error?.username || null,
            password1: error?.password1 || null,
            password2: error?.password2 || null,
          }}
        />}

      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2 hidden lg:flex items-center justify-center lg:h-auto h-full">
        <SideImage />
      </div>
    </div>
  );
};

export default Register;
