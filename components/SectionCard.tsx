import React, { useState } from 'react';
import { ChevronDown, ChevronUp, LucideIcon } from 'lucide-react';

interface SectionCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  defaultOpen?: boolean;
  id?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, icon: Icon, children, defaultOpen = false, id }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div id={id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-4 transition-all duration-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 bg-white active:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isOpen ? 'bg-brand-blue text-white' : 'bg-brand-light text-brand-blue'}`}>
            <Icon size={24} />
          </div>
          <span className="text-lg font-semibold text-slate-800">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
      </button>
      
      {isOpen && (
        <div className="p-5 pt-0 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="mt-4 text-slate-600 space-y-3 leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionCard;