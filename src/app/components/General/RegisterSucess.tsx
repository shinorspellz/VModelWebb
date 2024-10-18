import React from 'react';

interface RegisterSuccessProps {
    name: string;
}

const RegisterSuccess: React.FC<RegisterSuccessProps> = ({ name }) => {
    const handleContinue = () => {
             
        // Replace 'yourapp://' with your app's URL scheme
        window.location.href = 'vmodelapp://home'; // Update this URL to your app's deep link
    };

    return (
        <div className="flex flex-col items-center mt-10 justify-center p-4 lg:p-8 xl:p-16">
            {/* Checkmark with Circle Background */}
            <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center border-opacity-30 border-4 border-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5 5L20 7" />
                    </svg>
                </div>
            </div>

            <h1 className="text-lg lg:text-xl text-primary text-center mb-2">Registration Complete</h1>

            {/* Greeting */}
            <p className="text-xl lg:text-2xl text-center text-primary mb-2">Hi {name},</p>
            {/* Welcome Message */}
            <p className="text-base lg:text-lg font-semibold text-primary text-center mb-2">Welcome to VModel!</p>

            {/* Description */}
            <p className="text-gray-600 text-primary opacity-75 text-center mb-6 text-sm lg:text-base">
                Your account has been successfully created. You can now access all features and start your journey with us.
            </p>

            {/* Continue Button */}
            <button
                type="button"
                onClick={handleContinue}
                className="mt-4 w-[80%] lg:w-[60%] xl:w-[50%] p-3 bg-primary text-white rounded-[10px] transition hover:bg-primary-dark"
            >
                Continue on App
            </button>
        </div>
    );
};

export default RegisterSuccess;
