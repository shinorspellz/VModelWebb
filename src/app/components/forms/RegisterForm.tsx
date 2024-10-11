import React from 'react';

interface RegisterFormProps {
    formData: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    loading: boolean;
    error: any;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
}) => {
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="p-3 border border-gray-300 rounded-lg"
            />
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-3 border border-gray-300 rounded-lg"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-lg"
            />
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="p-3 border border-gray-300 rounded-lg"
            />
            <input
                type="password"
                name="password1"
                value={formData.password1}
                onChange={handleChange}
                placeholder="Password"
                className="p-3 border border-gray-300 rounded-lg"
            />
            <input
                type="password"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="p-3 border border-gray-300 rounded-lg"
            />
            <button
                type="submit"
                disabled={loading}
                className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                {loading ? 'Registering...' : 'Register'}
            </button>
            {error && <p className="text-red-500">Error: {JSON.stringify(error)}</p>}
        </form>
    );
};

export default RegisterForm;
