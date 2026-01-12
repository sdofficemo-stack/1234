import React, { useState } from 'react';
import { MapPin, Utensils, Bed, Baby, Bus, ShoppingBag, Camera, Lightbulb, Navigation, RefreshCcw } from 'lucide-react';
import { ActivityType, ItineraryEvent } from '../types';

interface EventCardProps {
  event: ItineraryEvent;
  isLast: boolean;
  onSwap?: (newEvent: ItineraryEvent) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, isLast, onSwap }) => {
  const [showAlternatives, setShowAlternatives] = useState(false);

  const getIcon = () => {
    switch (event.type) {
      case ActivityType.Food: return <Utensils className="w-5 h-5 text-orange-500" />;
      case ActivityType.Hotel: return <Bed className="w-5 h-5 text-purple-500" />;
      case ActivityType.Transport: return <Bus className="w-5 h-5 text-blue-500" />;
      case ActivityType.Shopping: return <ShoppingBag className="w-5 h-5 text-pink-500" />;
      case ActivityType.Highlight: return <Baby className="w-5 h-5 text-green-500" />;
      default: return <Camera className="w-5 h-5 text-indigo-500" />;
    }
  };

  const getTypeLabel = () => {
    switch (event.type) {
      case ActivityType.Food: return "美食";
      case ActivityType.Hotel: return "住宿";
      case ActivityType.Transport: return "交通";
      case ActivityType.Shopping: return "購物";
      case ActivityType.Highlight: return "亮點";
      default: return "景點";
    }
  };

  const getBgColor = () => {
    switch (event.type) {
      case ActivityType.Food: return "bg-orange-50/50";
      case ActivityType.Hotel: return "bg-purple-50/50";
      case ActivityType.Transport: return "bg-blue-50/50";
      default: return "bg-white";
    }
  };

  const handleMapClick = () => {
    const query = event.location ? `${event.location} Hong Kong` : `${event.title} Hong Kong`;
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
  };

  // Generate Google Maps Embed URL
  const mapQuery = event.location || event.title + " Hong Kong";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="relative flex gap-4 md:gap-6 pb-8 last:pb-0">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[19px] md:left-[19px] top-10 bottom-0 w-0.5 bg-slate-200" />
      )}

      {/* Icon Circle */}
      <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full border-2 border-white shadow-md flex items-center justify-center bg-white`}>
        {getIcon()}
      </div>

      {/* Content Card */}
      <div className={`flex-1 rounded-xl p-4 md:p-5 shadow-sm border border-slate-100 ${getBgColor()} relative transition-all duration-300`}>
        
        {/* Swap Button (only if alternatives exist) */}
        {event.alternatives && event.alternatives.length > 0 && (
          <div className="absolute top-4 right-4 z-20">
             <button 
              onClick={() => setShowAlternatives(!showAlternatives)}
              className="p-1.5 rounded-full bg-white text-slate-400 border border-slate-200 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all shadow-sm group"
              title="更換行程"
             >
               <RefreshCcw className={`w-4 h-4 transition-transform duration-500 ${showAlternatives ? 'rotate-180 text-blue-600' : ''}`} />
             </button>
             
             {/* Swap Dropdown */}
             {showAlternatives && (
               <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-200 p-2 z-50 animate-fade-in-up">
                 <div className="text-xs font-bold text-slate-400 px-2 py-1 mb-1">選擇替代方案</div>
                 {event.alternatives.map((alt) => (
                   <button
                    key={alt.id}
                    onClick={() => {
                      if(onSwap) onSwap(alt);
                      setShowAlternatives(false);
                    }}
                    className="w-full text-left p-2 hover:bg-slate-50 rounded-md group transition-colors flex flex-col gap-1"
                   >
                     <div className="font-bold text-slate-700 text-sm group-hover:text-blue-700">{alt.title}</div>
                     <div className="text-xs text-slate-500 line-clamp-2">{alt.description}</div>
                   </button>
                 ))}
                 {/* Option to revert/swap back would require passing the original list, simplifying for now */}
               </div>
             )}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-4">
          
          {/* Left Column: Details */}
          <div className="flex-1 min-w-0">
            {/* Travel Time Badge */}
            {event.travelTime && (
              <div className="inline-flex items-center gap-1.5 px-2 py-1 mb-2.5 rounded-md bg-slate-100/80 border border-slate-200 text-slate-600">
                <Navigation className="w-3 h-3" />
                <span className="text-[10px] md:text-xs font-medium leading-none">移動：{event.travelTime}</span>
              </div>
            )}

            <div className="flex flex-wrap justify-between items-start mb-2 gap-2 pr-8">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{event.time}</span>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">{event.title}</h3>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide border 
                ${event.type === ActivityType.Food ? 'text-orange-600 border-orange-200 bg-orange-100' : 
                  event.type === ActivityType.Hotel ? 'text-purple-600 border-purple-200 bg-purple-100' :
                  'text-indigo-600 border-indigo-200 bg-indigo-100'}`}>
                {getTypeLabel()}
              </span>
            </div>

            {event.location && (
              <div 
                onClick={handleMapClick}
                className="flex items-center text-slate-500 text-sm mb-3 cursor-pointer hover:text-blue-600 transition-colors group w-fit"
              >
                <MapPin className="w-3.5 h-3.5 mr-1 group-hover:text-blue-600" />
                <span className="underline decoration-dotted underline-offset-2 truncate">{event.location}</span>
              </div>
            )}

            {event.description && (
              <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                {event.description}
              </p>
            )}

            {event.note && (
              <div className="mt-auto bg-amber-50 border-l-4 border-amber-300 p-2.5 rounded-r-md">
                <div className="flex items-start">
                  <Lightbulb className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-amber-900 font-medium leading-relaxed">
                    {event.note}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Map */}
          {event.location && (
            <div className="md:w-56 h-32 md:h-auto flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 relative group order-last md:order-none shadow-inner">
              <iframe
                title={`Map for ${event.title}`}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={mapUrl}
                loading="lazy"
                className="absolute inset-0 w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 pointer-events-none border-0 group-hover:border-[3px] border-blue-400/50 rounded-lg transition-all z-20"></div>
              
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location || event.title)} Hong Kong`}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-10 flex items-center justify-center bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors"
              >
                <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-[10px] font-bold px-2 py-1.5 rounded shadow-sm text-slate-800 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 border border-slate-200 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-red-500" />
                  開啟 Google Maps
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;