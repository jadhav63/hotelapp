import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Navigation } from 'lucide-react';
import { ATTRACTIONS, HOTEL_COORDINATES, HOTEL_NAME } from '../constants';

const AttractionMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  // Calculate bounds to include hotel and all attractions
  const points: L.LatLngTuple[] = [
    [HOTEL_COORDINATES.lat, HOTEL_COORDINATES.lng],
    ...ATTRACTIONS.map(a => [a.lat, a.lng] as L.LatLngTuple)
  ];
  // Create bounds object
  const bounds = L.latLngBounds(points);

  const handleRecenter = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.fitBounds(bounds, { 
        padding: [50, 50],
        animate: true,
        duration: 1
      });
    }
  };

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      // Initialize map
      const map = L.map(mapContainerRef.current, {
        dragging: true,
        scrollWheelZoom: false,
        touchZoom: true,
        zoomControl: false // Custom position or just rely on pinch/touch
      });

      // Add standard zoom control to top-right
      L.control.zoom({ position: 'topright' }).addTo(map);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap',
        maxZoom: 19,
      }).addTo(map);

      // --- Create Custom Hotel Marker ---
      // Distinct marker for the hotel with a star icon and navy branding
      const hotelHtml = `
        <div class="flex flex-col items-center relative" style="transform: translate(-50%, -100%);">
          <div class="bg-brand-navy text-white text-[11px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap mb-1 border border-white z-20 relative flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3 text-brand-accent"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
            ${HOTEL_NAME}
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-navy rotate-45"></div>
          </div>
          <div class="relative">
            <div class="w-4 h-4 bg-brand-blue rounded-full border-2 border-white shadow-xl z-10 relative"></div>
            <div class="absolute inset-0 bg-brand-blue rounded-full animate-ping opacity-20"></div>
          </div>
          <div class="w-3 h-1 bg-black/20 blur-[2px] rounded-full absolute bottom-0 translate-y-1"></div>
        </div>
      `;
      
      const hotelIcon = L.divIcon({
        className: '!bg-transparent !border-none', 
        html: hotelHtml,
        iconSize: [0, 0], // Size handled by CSS
        iconAnchor: [0, 0], // Position relative to coordinate
        popupAnchor: [0, -35] // Open popup above the label
      });

      const hotelPopupContent = `
        <div class="text-left min-w-[140px]">
          <div class="font-bold text-slate-900 text-sm mb-0.5">${HOTEL_NAME}</div>
          <div class="text-xs text-slate-500 mb-2">You are here</div>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${HOTEL_COORDINATES.lat},${HOTEL_COORDINATES.lng}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="inline-flex items-center text-xs font-bold text-brand-blue hover:text-brand-navy">
            Get Directions
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      `;

      L.marker([HOTEL_COORDINATES.lat, HOTEL_COORDINATES.lng], { icon: hotelIcon, zIndexOffset: 1000 })
        .addTo(map)
        .bindPopup(hotelPopupContent);

      // --- Create Custom Attraction Markers ---
      ATTRACTIONS.forEach(attr => {
        const attractionHtml = `
          <div class="flex flex-col items-center group" style="transform: translate(-50%, -100%);">
            <div class="bg-white text-slate-800 text-[10px] font-bold px-2 py-1 rounded shadow-md whitespace-nowrap mb-1 border border-slate-200 relative z-20 transition-transform group-hover:scale-110 origin-bottom">
              ${attr.name}
              <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-slate-200"></div>
            </div>
            <div class="w-3 h-3 bg-brand-accent rounded-full border-2 border-white shadow-md z-10"></div>
          </div>
        `;

        const attrIcon = L.divIcon({
          className: '!bg-transparent !border-none',
          html: attractionHtml,
          iconSize: [0, 0],
          iconAnchor: [0, 0],
          popupAnchor: [0, -30]
        });

        const popupContent = `
          <div class="text-left min-w-[160px]">
            <div class="font-bold text-slate-900 text-sm mb-1">${attr.name}</div>
            <div class="text-xs text-slate-600 mb-2 leading-snug">${attr.desc}</div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${attr.lat},${attr.lng}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="block w-full text-center bg-brand-blue hover:bg-brand-navy text-white text-xs font-bold py-1.5 px-3 rounded transition-colors no-underline">
              Get Directions
            </a>
          </div>
        `;

        L.marker([attr.lat, attr.lng], { icon: attrIcon })
          .addTo(map)
          .bindPopup(popupContent);
      });

      // Fit map to show all points
      map.fitBounds(bounds, { padding: [50, 50] });
      
      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden border border-slate-200 shadow-sm z-0">
      <div ref={mapContainerRef} className="w-full h-full bg-slate-100" />
      
      {/* Recenter Button Overlay */}
      <button 
        onClick={handleRecenter}
        className="absolute bottom-4 right-4 z-[400] bg-white text-slate-700 p-2 rounded-lg shadow-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100 transition-colors flex items-center gap-2"
        aria-label="Recenter Map"
      >
        <Navigation size={16} className="fill-current" />
        <span className="text-xs font-bold">Recenter</span>
      </button>
    </div>
  );
};

export default AttractionMap;