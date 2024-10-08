// GettingStartedForm.tsx
import React, { useState } from 'react';
import { UserType,SubCategory, FormData } from '@/types/types';
const userTypes: UserType[] = ['Admin', 'User', 'Guest'];
const subCategories: SubCategory[] = ['Category1', 'Category2', 'Category3'];

const GettingStartedForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        userType: userTypes[0], // Default to the first user type
        subCategory: subCategories[0], // Default to the first sub-category
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value as UserType | SubCategory, // Type assertion
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Handle form submission logic (e.g., API call, redirect, etc.)
    };

    return (
        <form onSubmit={handleSubmit} className=" flex flex-col p-8 lg:p-16">
            <h2 className="text-3xl text-primary font-bold mb-4">Get Started Now</h2>

            <label htmlFor="userType" className="mb-2 font-medium">
                Select Account Type
            </label>
            <select
                name="userType"
                id="userType"
                value={formData.userType}
                onChange={handleChange}
                className="mb-4 p-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary"
            >
                {userTypes.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
            <select
            placeholder='subcategory'
                name="subCategory"
                id="subCategory"
                
                value={formData.subCategory}
                onChange={handleChange}
                className="mb-6 p-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary"
            >
                <option value="" disabled>Select a subcategory</option>
                {subCategories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            <button
                type="submit"
                className="p-3 bg-primary text-white rounded-[10px] hover:bg-primary transition"
            >
              Continue
            </button>
            <p className="mt-[30px] text-center mt-4">
                Have an account?{' '}
                <a href="/sign-in" className="text-primary font-bold hover:underline">
                    Sign in
                </a>
            </p>
        </form>

    );
};

export default GettingStartedForm;
