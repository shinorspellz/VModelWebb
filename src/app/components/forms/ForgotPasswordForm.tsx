import React, { useState } from 'react';

interface ForgotPasswordFormProps {
    onEmailSubmit: () => void;
    email: string;
    setEmail: (email: string) => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onEmailSubmit, email, setEmail }) => {
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
        <div className="flex flex-col h-full p-8 lg:p-16">
            <h2 className="text-3xl font-bold mb-4">Forgot your password?</h2>
            <p className="mb-6 text-gray-600">
                Don't worry, happens to all of us. Enter your email below to recover your password
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
                    className="p-3 mb-[30px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                    type="submit"
                    className="mt-4 p-3 bg-primary text-white rounded-md hover:bg-indigo-500 transition"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;