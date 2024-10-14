// GettingStartedForm.tsx
"use client";

import React from "react";
import { Listbox } from "@headlessui/react";
import { UserType, SubCategory, FormData } from "@/types/types";

interface GettingStartedFormProps {
    formData: FormData;
    handleChange: (field: keyof FormData, value: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
}

const userTypes: UserType[] = [
    "Model",
    "Influencer",
    "Digital Creator",
    "Photographer",
    "Videographer",
    "Pet Model",
    "Stylist",
    "Chef",
    "Cook",
    "Baker",
    "Event Planner",
    "Party Entertainer",
    "Booker",
    "Business",
];

const subCategories: SubCategory[] = [
    "Alternative/Edgy Model",
    "Art Model",
    "Beauty Model",
    "Catalog Model",
    "Celebrity Lookalike Model",
    "Character/Costume Model",
    "Editorial Model",
    "Fashion Model",
    "Fit Model",
    "Fitness Model",
    "Glamour Model",
    "High Fashion Model",
    "Lifestyle Model",
    "Lingerie Model",
    "Maternity Model",
    "Parts Model (e.g. Face Model, Hair Model, etc.)",
    "Petite Model",
    "Plus-Size Model",
    "Print Model",
    "Promotional Model",
    "Runway Model",
    "Showroom Model",
    "Streetwear Model",
    "Swimwear Model",
    "Trade Show Model",
    "Underwear Model",
    "Virtual Model",
];

const GettingStartedForm: React.FC<GettingStartedFormProps> = ({
    formData,
    handleChange,
    handleSubmit,
}) => {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-4 lg:p-8">
            <h2 className="text-2xl lg:text-3xl text-primary font-bold mb-4">Get Started Now</h2>

            {/* Account Type Selection */}
            <div className="mb-4">
                <Listbox
                    value={formData.userType}
                    onChange={(value) => handleChange("userType", value)}
                >
                    <Listbox.Label className="block text-sm font-medium text-gray-700 mb-1">
                        Select Account Type
                    </Listbox.Label>
                    <div className="relative">
                        <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-lg shadow-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm">
                            <span className="block truncate">{formData.userType || "Select account type"}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            </span>
                        </Listbox.Button>
                        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                            {userTypes.map((type) => (
                                <Listbox.Option
                                    key={type}
                                    className={({ active }) =>
                                        `${active ? "text-white bg-primary" : "text-gray-900"
                                        } cursor-default select-none relative py-2 pl-3 pr-9`
                                    }
                                    value={type}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`${selected ? "font-semibold" : "font-normal"
                                                    } block truncate`}
                                            >
                                                {type}
                                            </span>

                                            {selected ? (
                                                <span
                                                    className={`${active ? "text-white" : "text-primary"
                                                        } absolute inset-y-0 right-0 flex items-center pr-4`}
                                                >
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </div>
                </Listbox>
            </div>

            {/* Sub-Category Selection */}
            <div className="mb-6">
                <Listbox
                    value={formData.subCategory}
                    onChange={(value) => handleChange("subCategory", value)}
                >
                    <Listbox.Label className="block text-sm font-medium text-gray-700 mb-1">
                        Select Sub-Category
                    </Listbox.Label>
                    <div className="relative">
                        <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-lg shadow-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm">
                            <span className="block truncate">
                                {formData.subCategory || "Select a subcategory"}
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            </span>
                        </Listbox.Button>
                        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                            {subCategories.map((category) => (
                                <Listbox.Option
                                    key={category}
                                    className={({ active }) =>
                                        `${active ? "text-white bg-primary" : "text-gray-900"
                                        } cursor-default select-none relative py-2 pl-3 pr-9`
                                    }
                                    value={category}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`${selected ? "font-semibold" : "font-normal"
                                                    } block truncate`}
                                            >
                                                {category}
                                            </span>

                                            {selected ? (
                                                <span
                                                    className={`${active ? "text-white" : "text-primary"
                                                        } absolute inset-y-0 right-0 flex items-center pr-4`}
                                                >
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </div>
                </Listbox>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="p-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300"
            >
                Continue
            </button>

            {/* Sign In Link */}
            <p className="mt-6 text-center text-sm">
                Have an account?{" "}
                <a href="/sign-in" className="text-primary font-semibold hover:underline">
                    Sign in
                </a>
            </p>
        </form>
    );
};

export default GettingStartedForm;
