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
    label: 'jjj',
    displayName: '',
    dob: new Date("2000-01-01"),
    use2fa: false,
    useGoogleAuthenticator: false,
    email: 'adukyererrr@gmail.com',
    username: '',
    firstName: '',
    lastName: '',
    userType: 'jjj',
    isBusinessAccount: false,
    password1: 'qddasaxxx',
    password2: 'xaxaxaxax',
  });

  const [registerUser, { loading, error, data }] = useMutation
    (REGISTER_USER_MUTATION);

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
    //registerUser2()
  };
// error&& console.log(error)
  const registerUserMutation = `
  mutation RegisterUser(
    $label: String,
    $displayName: String,
    $dob: Date,
    $use2fa: Boolean,
    $useGoogleAuthenticator: Boolean,
    $email: String!,
    $username: String!,
    $firstName: String!,
    $lastName: String!,
    $userType: String!,
    $isBusinessAccount: Boolean!,
    $password1: String!,
    $password2: String!
  ) {
    register(
      label: $label,
      displayName: $displayName,
      dob: $dob,
      use2fa: $use2fa,
      useGoogleAuthenticator: $useGoogleAuthenticator,
      email: $email,
      username: $username,
      firstName: $firstName,
      lastName: $lastName,
      userType: $userType,
      isBusinessAccount: $isBusinessAccount,
      password1: $password1,
      password2: $password2
    ) {
      id
      token
    }
  }
`;

  async function registerUser2() {
    const variables = {
      label: "Art Model",
      displayName: "dsds",
      dob: "1990-05-15",
      use2fa: false,
      useGoogleAuthenticator: false,
      email: "adukyerer@gmail.com",
      username: "rich",
      firstName: "adu",
      lastName: "kyere",
      userType: "Model",
      isBusinessAccount: false,
      password1: "password1_value",
      password2: "password2_value"
    };

    const response = await fetch('https://uat-api.vmodel.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': `Bearer your-auth-token`,  // If required
      },
      body: JSON.stringify({
        query: registerUserMutation,
        variables: variables
      }),
    });

    const result = await response.json();
    if (response.ok) {
      console.log('User registered successfully:', result.data);
    } else {
      console.error('Error registering user:', result.errors);
    }
  }

  // Call the function
  // registerUser();


  // Call the function


 


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
