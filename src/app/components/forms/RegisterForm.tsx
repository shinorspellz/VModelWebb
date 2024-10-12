import React from 'react';

interface RegisterFormProps {
    formData: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    loading: boolean;
    errors: any// Accept an object of errors
}

const RegisterForm: React.FC<RegisterFormProps> = ({
    formData,
    handleChange,
    handleSubmit,
    loading,
    errors, // Receive errors as props
}) => {
    return (
      
           

        <form onSubmit={handleSubmit}  className="flex flex-colflex flex-col p-8 lg:p-16">
                <h2 className="text-3xl text-primary font-bold mb-4">Sign up</h2>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                className="mb-4 p-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.firstName && errors.firstName.map((msg, index) => (
                    <p key={index}>{msg}</p> // Display each message as a separate paragraph
                ))}

                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                className="mb-4 p-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.lasttName && errors.lasttName.map((msg, index) => (
                    <p key={index}>{msg}</p> // Display each message as a separate paragraph
                ))}
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                className="mb-4 p-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.email && errors.email.map((msg, index) => (
                    <p key={index}>{msg}</p> // Display each message as a separate paragraph
                ))}
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                className="mb-4 p-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.username && errors.username.map((msg, index) => (
                    <p key={index}>{msg}</p> // Display each message as a separate paragraph
                ))}
                <input
                    type="password"
                    name="password1"
                    value={formData.password1}
                    onChange={handleChange}
                    placeholder="Password"
                className="mb-4 p-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.password1 && errors.password1.map((msg, index) => (
                    <p key={index}>{msg}</p> // Display each message as a separate paragraph
                ))}
                <input
                    type="password"
                    name="password2"
                    value={formData.password2}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                className="mb-4 p-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.password2 && errors.password2.map((msg, index) => (
                    <p key={index}>{msg}</p> // Display each message as a separate paragraph
                ))}
                <button
                    type="submit"
                    disabled={loading}
                    className="mt-4  p-3 bg-primary text-white rounded-[10px] transition"
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>

    );
};

export default RegisterForm;
