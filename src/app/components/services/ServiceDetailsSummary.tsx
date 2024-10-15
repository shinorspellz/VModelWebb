// ServiceDetailsSummary.tsx
import React from 'react';

interface ServiceDetailsSummaryProps {
    label: string;
    value: string;
}

const ServiceDetailsSummary: React.FC<ServiceDetailsSummaryProps> = ({ label, value }) => {
    return (
        <div className="flex justify-between mb-4  ">
            <span className="font-medium p-x-10 text-primary ">{label}</span>
            <span className="text-right text-primary opacity-50">{value}</span>
        </div>
    );
};

export default ServiceDetailsSummary;
