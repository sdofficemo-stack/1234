import React, { useState, useEffect } from 'react';
import { ITINERARY } from './constants';
import { ItineraryEvent, DaySchedule } from './types';
import DayView from './components/DayView';
import { Plane, CalendarCheck } from 'lucide-react';

const App: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  
  // State for the full itinerary to allow modifications
  const [scheduleData, setScheduleData] = useState<DaySchedule[]>(ITINERARY);

  // Handle selected day content
  const currentSchedule = scheduleData.find(day => day.day === selectedDay) || scheduleData[0];
  const currentIndex = scheduleData.findIndex(day => day.day === selectedDay);

  // Function to handle event swapping
  const handleSwapEvent = (dayIndex: number, eventIndex: number, newEvent: ItineraryEvent) => {
    // 1. Create a deep copy of the schedule to avoid mutation
    const newScheduleData = [...scheduleData];
    const currentDay = { ...newScheduleData[dayIndex] };
    const currentEvents = [...currentDay.events];
    const originalEvent = currentEvents[eventIndex];

    // 2. Prepare the new event (keep alternatives from the original, but add the original back as an alternative)
    // Basically swapping the current active event with one from the alternatives list
    const updatedAlternatives = originalEvent.alternatives ? 
        [...originalEvent.alternatives.filter(a => a.id !== newEvent.id), originalEvent] : 
        [originalEvent];

    // 3. Construct the new active event
    currentEvents[eventIndex] = {
        ...newEvent,
        alternatives: updatedAlternatives
    };

    // 4. Update state
    currentDay.events = currentEvents;
    newScheduleData[dayIndex] = currentDay;
    setScheduleData(newScheduleData);
  };

  // Scroll to top when changing days
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedDay]);

  // Handle sticky nav shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsMenuFixed(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pb-20 bg-slate-50">
      
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-12 pb-24 px-6 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16 transform" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -ml-16 -mb-16" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className="font-medium tracking-wide text-blue-100 text-sm uppercase">2024 香港親子之旅</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
            四天三夜<br/>美食與放電行程
          </h1>
          <p className="text-blue-100 max-w-lg">
            專為親子設計的輕鬆動線，囊括迪士尼、樂高樂園與米其林美食。
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 -mt-12 relative z-20">
        
        {/* Navigation Tabs */}
        <div className={`bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden mb-6 transition-all duration-300 ${isMenuFixed ? 'sticky top-4 z-50 shadow-xl ring-1 ring-black/5' : ''}`}>
          <div className="flex overflow-x-auto no-scrollbar">
            {scheduleData.map((day) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                className={`flex-1 min-w-[90px] py-4 px-2 flex flex-col items-center justify-center transition-colors relative
                  ${selectedDay === day.day ? 'bg-blue-50 text-blue-700' : 'bg-white text-slate-400 hover:bg-slate-50'}`}
              >
                <span className="text-xs font-bold uppercase mb-1 tracking-wider">Day {day.day}</span>
                <span className={`text-sm font-medium ${selectedDay === day.day ? 'text-blue-900' : 'text-slate-600'}`}>
                  {day.date.split(' ')[0]}
                </span>
                {selectedDay === day.day && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 md:p-8 min-h-[500px]">
          <DayView 
            schedule={currentSchedule} 
            onSwapEvent={(eventIndex, newEvent) => handleSwapEvent(currentIndex, eventIndex, newEvent)}
          />
        </div>

      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto mt-12 px-6 text-center pb-10">
        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
          <CalendarCheck className="w-5 h-5 text-blue-500 mr-2" />
          <span className="text-slate-600 text-sm font-medium">祝旅途愉快，平安順利！</span>
        </div>
        <p className="text-slate-400 text-xs">
          行程規劃僅供參考，請依實際交通狀況調整。
        </p>
      </footer>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;