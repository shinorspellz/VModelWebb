import React, { useState } from 'react';

interface ForgotPasswordFormProps {
    onEmailSubmit: () => void;
    email: string;
    loading?: boolean;
    setEmail: (email: string) => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onEmailSubmit, loading, email, setEmail }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            onEmailSubmit(); // Trigger transition to VerifyTokenForm
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <div className="flex flex-col h-full mt-10 p-6 lg:mt-20 lg:p-16">
            <h2 className="text-2xl lg:text-3xl text-primary font-bold mb-4">Forgot your password?</h2>
            <p className="mb-6 text-gray-600 text-sm lg:text-base">
                Don&apos;t worry, happens to all of us. Enter your email below to recover your password
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="email" className="hidden font-medium text-gray-700">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}  // Bind input value to email state
                    onChange={handleEmailChange}
                    placeholder="Enter email address"
                    className="p-3 mb-4 md:mb-6 w-full md:w-[80%] border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                    type="submit"
                    className="mt-4 w-full md:w-[80%] rounded-[10px] p-3 bg-primary text-white  transition duration-300 ease-in-out hover:bg-primary-dark"
                >
                    {loading ? 'Verifying Email...' : 'Reset Password'}
                </button>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;
