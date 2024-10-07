import React, { useRef, useState } from "react";

const VerifyTokenForm = () => {
    const [token, setToken] = useState(["", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Handle input change for each token box
    const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value)) { // Only allow digits
            const updatedToken = [...token];
            updatedToken[index] = value;
            setToken(updatedToken);

            // Move to the next input
            if (index < inputRefs.current.length - 1 && value) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    // Handle backspace key to move to the previous input
    const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !token[index]) {
            if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    return (
        <div className="flex flex-col h-full p-8 lg:p-16">
            <h2 className="text-3xl font-bold mb-4">Verify Code</h2>
            <p className="mb-6 text-gray-600">
                An authentication code has been sent to your email to your email
            </p>

            {/* Token Input Fields */}
            <div className="flex space-x-6 mb-6">
                {token.map((value, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={value}
                        ref={(el) => (inputRefs.current[index] = el)}
                        onChange={(e) => handleTokenChange(e, index)}
                        onKeyDown={(e) => handleBackspace(e, index)}
                        className="w-12 h-12 text-center p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                ))}
            </div>

            <p className="mt-6 text-gray-600 mb-6">
                Didn&apos;t receive code?{" "}
                <span className="text-primary  font-bold cursor-pointer hover:underline">
                    Resend
                </span>
            </p>

            <button
                type="submit"
                className="p-3 bg-primary text-white rounded-lg hover:bg-indigo-500 transition"
            >
                Verify
            </button>
        </div>
    );
};

export default VerifyTokenForm;
