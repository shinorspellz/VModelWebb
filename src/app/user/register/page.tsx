'use client'
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER_MUTATION } from '@/service/queries';
import { RegisterUserResponse, RegisterUserVariables } from '@/types/types';
import RegisterForm from '@/app/components/forms/RegisterForm';
import SideImage from '@/app/components/General/SideImage';
import { withApollo } from '@/service/withApollo';

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterUserVariables>({
    label: '',
    displayName: '',
    dob: new Date("2000-01-01"),
    use2fa: false,
    useGoogleAuthenticator: false,
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    userType: '',
    isBusinessAccount: false,
    password1: '',
    password2: '',
  });

  const [registerUser, { loading, error, data }] = useMutation<
    RegisterUserResponse,
    RegisterUserVariables
  >(REGISTER_USER_MUTATION);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await registerUser({
        variables: { ...formData }, // Form data is passed as variables
      });
      console.log('User registered successfully', data);
    } catch (err) {
      console.error('Registration error:', err);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      {/* Left Section - Form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center">
        <div className="flex flex-1 flex-col justify-center h-full p-8">
          <RegisterForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
            error={error}
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

export default withApollo(Register);
