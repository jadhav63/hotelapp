import React from 'react';

interface InfoRowProps {
  label: string;
  value: string | React.ReactNode;
  isLast?: boolean;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value, isLast = false }) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 ${!isLast ? 'border-b border-dashed border-slate-200' : ''}`}>
      <span className="font-medium text-slate-900">{label}</span>
      <span className="text-slate-600 mt-1 sm:mt-0">{value}</span>
    </div>
  );
};

export default InfoRow;
