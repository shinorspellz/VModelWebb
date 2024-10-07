// ServiceDetailsSummary.tsx
import React from 'react';

interface ServiceDetailsSummaryProps {
    label: string;
    value: string;
}

const ServiceDetailsSummary: React.FC<ServiceDetailsSummaryProps> = ({ label, value }) => {
    return (
        <div className="flex justify-between mb-2 ">
            <span className="font-medium text-primary text-[20px]">{label}</span>
            <span className="text-right text-primary text-[20px] opacity-50">{value}</span>
        </div>
    );
};

export default ServiceDetailsSummary;
