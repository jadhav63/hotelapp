import React, { useEffect } from 'react';
import { 
  Wifi, 
  Coffee, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  Waves, 
  Phone, 
  ExternalLink,
  ShieldCheck,
  Info,
  ArrowRight,
  MessageSquareHeart,
  Star,
  Leaf,
  Mail,
  Scroll,
  Sparkles,
  Beer,
  Compass
} from 'lucide-react';
import Header from './components/Header';
import SectionCard from './components/SectionCard';
import InfoRow from './components/InfoRow';
import AttractionMap from './components/AttractionMap';
import { 
  WIFI_NETWORK, 
  WIFI_PASSWORD, 
  BREAKFAST_ITEMS, 
  ATTRACTIONS,
  MAINTENANCE_FORM_URL,
  LOCAL_LINKS,
  GOOGLE_REVIEW_LINK,
  GUEST_REVIEWS,
  HOTEL_PHONE,
  HOTEL_EMAIL,
  HOTEL_LOCATION,
  HOTEL_HISTORY,
  VIRTUAL_TOUR_URL
} from './constants';

const App: React.FC = () => {

  // Simple offline detection enhancement and smooth scrolling logic
  useEffect(() => {
    const handleOnline = () => console.log('Back online');
    const handleOffline = () => console.log('Offline mode');
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (!link) return;
      
      const href = link.getAttribute('href');
      // Intercept hash links that point to an element on the current page
      if (href && href.startsWith('#') && href.length > 1) {
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen pb-24 relative max-w-md mx-auto bg-gray-50 shadow-2xl">
      <Header />

      <main className="px-4 -mt-8 relative z-20">
        
        {/* Essentials Section */}
        <SectionCard title="Hotel Essentials" icon={Clock} defaultOpen={true} id="essentials">
          <div className="bg-brand-light/30 rounded-lg p-3 border border-blue-100 mb-4">
             <div className="flex items-start gap-3">
               <Wifi className="text-brand-blue shrink-0 mt-1" size={20} />
               <div>
                 <p className="text-sm font-bold text-brand-navy uppercase tracking-wide">Wi-Fi Access</p>
                 <div className="mt-1">
                   <p className="text-sm text-slate-600">Network: <span className="font-mono font-medium text-slate-900 bg-white px-1 rounded border border-slate-200">{WIFI_NETWORK}</span></p>
                   <p className="text-sm text-slate-600 mt-1">Password: <span className="font-mono font-medium text-slate-900 bg-white px-1 rounded border border-slate-200">{WIFI_PASSWORD}</span></p>
                 </div>
               </div>
             </div>
          </div>

          <InfoRow label="Check-in" value="3:00 PM" />
          <InfoRow label="Check-out" value="11:00 AM" />
          <InfoRow 
            label="Front Desk" 
            value={
              <a href="tel:0" className="font-bold text-brand-blue hover:text-brand-navy transition-colors">
                Dial 0
              </a>
            }
            isLast 
          />
        </SectionCard>

        {/* Breakfast Section */}
        <SectionCard title="Breakfast" icon={Coffee} id="breakfast">
          <div className="bg-orange-50 rounded-lg p-3 border border-orange-100 mb-4 text-center">
             <span className="block text-xs font-bold text-orange-800 uppercase tracking-widest">Hours</span>
             <span className="block text-lg font-bold text-slate-800">6:30 AM — 9:30 AM</span>
          </div>
          
          <h4 className="font-medium text-slate-900 mb-2">Morning Selection</h4>
          <ul className="grid grid-cols-1 gap-2">
            {BREAKFAST_ITEMS.map((item, idx) => (
              <li key={idx} className="flex items-center text-sm text-slate-600">
                <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-2 shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>

        {/* Amenities Section */}
        <SectionCard title="Amenities" icon={Waves} id="amenities">
           <InfoRow label="Pool Hours" value="10:00 AM – 10:00 PM" />
           <InfoRow label="Sundry Shop" value="Open 24 Hours" />
           <InfoRow label="Tesla Charger" value="Available for guests only" />
           
           <div className="mt-3 flex items-start p-3 bg-amber-50 border border-amber-100 rounded-lg">
              <Beer size={18} className="text-amber-700 mt-0.5 mr-3 shrink-0" />
              <div>
                <h5 className="text-sm font-bold text-amber-900">Beer & Wine Available</h5>
                <p className="text-xs text-amber-800 mt-1">
                  Available for purchase at the sundry shop. Valid ID required for all purchases.
                </p>
              </div>
           </div>
        </SectionCard>

        {/* Virtual Tour Section */}
        <SectionCard title="360° Virtual Tour" icon={Compass} id="virtual-tour">
          <p className="text-sm text-slate-600 mb-3">
            Explore our lobby, pool area, and guest rooms from anywhere.
          </p>
          
          <div className="relative w-full aspect-video bg-slate-200 rounded-xl overflow-hidden mb-4 border border-slate-200 shadow-inner group">
             {/* Placeholder Image Layer */}
             <div 
               className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
               style={{ 
                 backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000)',
                 filter: 'brightness(0.7)'
               }}
             />
             
             {/* Overlay Content */}
             <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30 mb-3 shadow-lg group-hover:bg-white/30 transition-all">
                  <Compass size={32} className="text-white drop-shadow-md" />
                </div>
                <span className="text-white font-bold text-lg shadow-black drop-shadow-md tracking-wide">Start Tour</span>
             </div>

             {/* Clickable Link Covering Area */}
             <a 
               href={VIRTUAL_TOUR_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="absolute inset-0 z-10"
               aria-label="Start Virtual Tour"
             ></a>
          </div>

          <a 
            href={VIRTUAL_TOUR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2.5 bg-brand-light text-brand-blue border border-brand-blue/20 rounded-lg font-bold text-sm hover:bg-brand-blue hover:text-white transition-colors"
          >
            <ExternalLink size={16} className="mr-2" />
            Open in Full Screen
          </a>
        </SectionCard>

        {/* Daily Services Section */}
        <SectionCard title="Daily Services" icon={Sparkles} id="services">
          <div className="bg-white rounded-lg border border-slate-200 p-4 mb-4">
            <h4 className="font-bold text-green-700 mb-3 flex items-center">
               <Leaf className="text-green-600 mr-2" size={18} />
               Wyndham Green Program
            </h4>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              To support sustainability, our housekeeping schedule is designed to conserve water and energy.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start p-3 bg-slate-50 rounded-lg">
                <div className="min-w-[4.5rem] text-xs font-bold uppercase tracking-wider text-slate-500 mt-0.5">Daily</div>
                <div className="text-sm text-slate-700">
                  <span className="font-bold text-slate-900">Light Service:</span> Trash removal, towel replacement (if left on floor), and amenity replenishment.
                </div>
              </div>
              
              <div className="flex items-start p-3 bg-slate-50 rounded-lg">
                <div className="min-w-[4.5rem] text-xs font-bold uppercase tracking-wider text-slate-500 mt-0.5">Day 3</div>
                <div className="text-sm text-slate-700">
                  <span className="font-bold text-slate-900">Full Service:</span> Complete room cleaning, dusting, vacuuming, and fresh linens every 3rd day of your stay.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
             <h4 className="font-bold text-brand-blue text-sm mb-2">Need Additional Items?</h4>
             <p className="text-sm text-slate-700 mb-3">
               We are happy to provide extra amenities upon request at any time during your stay.
             </p>
             <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600 mb-4">
               <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-2"></span>Extra Towels</li>
               <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-2"></span>Toiletries</li>
               <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-2"></span>Coffee/Tea</li>
               <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-2"></span>Blankets</li>
             </ul>
             <a href="tel:0" className="inline-flex items-center text-xs font-bold text-white bg-brand-blue px-4 py-2.5 rounded-lg shadow-sm active:scale-95 transition-all hover:bg-brand-navy">
               <Phone size={14} className="mr-2" />
               Call Front Desk (Press 0)
             </a>
          </div>
        </SectionCard>

        {/* History Section */}
        <SectionCard title="Our History" icon={Scroll} id="history">
          <div className="space-y-4 text-slate-600">
            {HOTEL_HISTORY.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-sm">
                {paragraph}
              </p>
            ))}
          </div>
        </SectionCard>

        {/* Policies Section */}
        <SectionCard title="Policies" icon={ShieldCheck} id="policies">
          <div className="space-y-4">
             <div className="p-3 border-l-4 border-amber-500 bg-amber-50 rounded-r-lg">
                <h4 className="font-bold text-amber-900 text-sm">Property Info</h4>
                <p className="text-xs text-amber-800 mt-1 uppercase font-bold">No Elevator on property.</p>
             </div>

             <div className="p-3 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                <h4 className="font-bold text-red-900 text-sm">Non-Smoking Property</h4>
                <p className="text-xs text-red-800 mt-1">$250 fee for smoking in rooms.</p>
             </div>
             
             <div className="p-3 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                <h4 className="font-bold text-brand-navy text-sm">Pet Policy</h4>
                <p className="text-xs text-slate-700 mt-1">Pets allowed with nightly fee. Service animals stay free.</p>
                <p className="text-xs text-brand-blue font-semibold mt-2">Pets allowed ONLY in downstairs rooms.</p>
                <p className="text-xs text-slate-700 mt-1 italic">Please contact us in advance for arrangements.</p>
             </div>

             <div className="p-3 border-l-4 border-indigo-500 bg-indigo-50 rounded-r-lg">
                <h4 className="font-bold text-indigo-900 text-sm">Quiet Hours</h4>
                <p className="text-xs text-indigo-800 mt-1">Please respect your neighbors by keeping noise down during quiet hours.</p>
             </div>
          </div>
        </SectionCard>

        {/* Local Area Section */}
        <SectionCard title="Local Attractions" icon={MapPin} id="local-area">
          <p className="text-sm text-slate-500 mb-4 italic">Explore historic Tombstone, AZ.</p>
          
          <div className="mb-6">
            <AttractionMap />
            <p className="text-xs text-slate-400 mt-2 text-center">Use two fingers to move the map.</p>
          </div>

          <div className="space-y-3 mb-6">
            {ATTRACTIONS.map((spot, idx) => (
              <div key={idx} className="bg-white border border-slate-100 shadow-sm rounded-lg p-3">
                <h5 className="font-bold text-slate-900">{spot.name}</h5>
                <p className="text-sm text-slate-600">{spot.desc}</p>
              </div>
            ))}
          </div>

          <h4 className="text-sm font-bold text-slate-800 mb-2 uppercase tracking-wide">Visitor Resources</h4>
          <div className="grid grid-cols-1 gap-2">
            {LOCAL_LINKS.map((link, idx) => (
              <a 
                key={idx}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors group"
              >
                <span className="text-sm font-medium text-brand-blue group-hover:text-brand-navy">{link.text}</span>
                <ExternalLink size={14} className="text-slate-400 group-hover:text-brand-navy" />
              </a>
            ))}
          </div>
        </SectionCard>

        {/* Guest Reviews Section */}
        <SectionCard title="Guest Reviews" icon={MessageSquareHeart} id="reviews">
          <div className="space-y-4 mb-6">
            {GUEST_REVIEWS.map((review, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill={i < review.rating ? "currentColor" : "none"} 
                      className={i < review.rating ? "text-yellow-400" : "text-slate-300"} 
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic mb-2">"{review.text}"</p>
                <p className="text-xs font-bold text-slate-500">— {review.author}</p>
              </div>
            ))}
          </div>

          <a 
             href={GOOGLE_REVIEW_LINK}
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center justify-center w-full py-3 bg-brand-light border border-brand-blue/30 text-brand-blue rounded-lg font-bold text-sm active:bg-blue-100 transition-colors"
           >
             <Star size={16} className="mr-2" />
             Rate us on Google
           </a>
        </SectionCard>

        {/* Contact Info Section */}
        <SectionCard title="Contact Information" icon={Phone} id="contact">
          <div className="space-y-4">
            <p className="text-sm text-slate-600">
              For general inquiries, reservations, or assistance before or after your stay.
            </p>
            
            <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="bg-white p-2 rounded-full shadow-sm mr-3 text-brand-blue">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Front Desk Direct</p>
                <a href={`tel:${HOTEL_PHONE.replace(/\D/g,'')}`} className="text-lg font-bold text-slate-900 hover:text-brand-blue transition-colors">
                  {HOTEL_PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="bg-white p-2 rounded-full shadow-sm mr-3 text-brand-blue">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">General Inquiries</p>
                <a href={`mailto:${HOTEL_EMAIL}`} className="text-base font-medium text-slate-900 hover:text-brand-blue transition-colors break-all">
                  {HOTEL_EMAIL}
                </a>
              </div>
            </div>
            
            <div className="text-xs text-slate-500 mt-2 italic flex items-center">
              <MapPin size={12} className="mr-1" />
              {HOTEL_LOCATION}
            </div>
          </div>
        </SectionCard>

        {/* Maintenance & Help Section */}
        <SectionCard title="Help & Maintenance" icon={AlertTriangle} id="help">
           <p className="text-sm text-slate-600 mb-4">
             Need something fixed? Let us know immediately.
           </p>
           <a 
             href={MAINTENANCE_FORM_URL}
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center justify-center w-full py-3 bg-slate-800 text-white rounded-lg font-medium active:bg-slate-900 transition-colors"
           >
             <ExternalLink size={18} className="mr-2" />
             Request Maintenance
           </a>

           <div className="mt-6 pt-4 border-t border-slate-200">
             <h4 className="font-bold text-red-600 mb-2 flex items-center">
               <AlertTriangle size={16} className="mr-2" /> Emergency
             </h4>
             <p className="text-sm text-slate-600 mb-2">
               For medical or security emergencies, please dial <strong>911</strong> immediately.
             </p>
             <p className="text-sm text-slate-600">
               For hotel emergencies, dial <strong>0</strong>.
             </p>
           </div>
        </SectionCard>

        <div className="py-6 text-center">
            <p className="text-xs text-slate-400">© {new Date().getFullYear()} Tombstone Grand Hotel</p>
        </div>
      </main>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 max-w-md mx-auto">
        <div className="flex gap-3">
           <a 
             href="tel:0"
             className="flex-1 flex flex-col items-center justify-center bg-brand-blue text-white py-3 px-4 rounded-xl shadow-lg active:scale-95 transition-transform"
           >
             <Phone size={24} className="mb-1" />
             <span className="text-xs font-bold uppercase tracking-wide">Call Front Desk</span>
           </a>
        </div>
      </div>

    </div>
  );
};

export default App;