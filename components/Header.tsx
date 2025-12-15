import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { HOTEL_NAME, HOTEL_SUBTITLE, HOTEL_LOCATION, GOOGLE_REVIEW_LINK } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-navy text-white pt-8 pb-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
      <div className="relative z-10">
        <h1 className="text-2xl font-bold tracking-tight">{HOTEL_NAME}</h1>
        <p className="text-brand-light opacity-90 text-sm font-medium mt-1">{HOTEL_SUBTITLE}</p>
        
        <div className="flex items-center mt-4 text-sm text-slate-300">
          <MapPin size={14} className="mr-1" />
          <span>{HOTEL_LOCATION}</span>
        </div>

        <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-1">Welcome</h2>
          <p className="text-sm leading-relaxed text-slate-100 mb-4">
            We are delighted to have you with us. Please use this guide to explore our amenities and local Tombstone attractions.
          </p>
          
          <a 
            href={GOOGLE_REVIEW_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-xs font-bold text-brand-accent"
          >
            <Star size={14} fill="currentColor" />
            <span>Review us on Google</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;