import React from 'react';

interface ServiceDetailsSummaryProps {
    label: string;
    value: string;
}

const JobDetailsSummary: React.FC<ServiceDetailsSummaryProps> = ({ label, value }) => {
    return (
        <div className="flex justify-between mb-2">
            <span className="font-medium text-primary text-lg md:text-xl">{label}</span>
            <span className="text-right text-primary text-lg md:text-xl opacity-50">{value}</span>
        </div>
    );
};

export default JobDetailsSummary;
