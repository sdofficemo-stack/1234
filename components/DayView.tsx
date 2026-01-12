import React, { useMemo } from 'react';
import { DaySchedule, ItineraryEvent } from '../types';
import EventCard from './EventCard';
import { Baby, Activity, AlertTriangle, CheckCircle } from 'lucide-react';
import { analyzeSchedule } from '../analysis';

interface DayViewProps {
  schedule: DaySchedule;
  onSwapEvent: (eventIndex: number, newEvent: ItineraryEvent) => void;
}

const DayView: React.FC<DayViewProps> = ({ schedule, onSwapEvent }) => {
  // Real-time analysis based on current schedule
  const analysis = useMemo(() => analyzeSchedule(schedule), [schedule]);

  return (
    <div className="animate-fade-in-up pb-24 md:pb-0">
      {/* Header for the Day */}
      <div className="mb-6 flex justify-between items-start">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">{schedule.title}</h2>
           <p className="text-slate-500 font-medium">{schedule.theme}</p>
        </div>
      </div>

      {/* Analysis Panel (Dynamic) */}
      <div className={`mb-6 rounded-xl p-4 border transition-colors duration-500 ${
        analysis.score > 80 ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'
      }`}>
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-full ${analysis.score > 80 ? 'bg-emerald-200 text-emerald-700' : 'bg-amber-200 text-amber-700'}`}>
                    <Activity className="w-4 h-4" />
                </div>
                <h4 className={`text-sm font-bold uppercase ${analysis.score > 80 ? 'text-emerald-800' : 'text-amber-800'}`}>
                    行程健檢 (AI 評估)
                </h4>
            </div>
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                analysis.score > 80 ? 'bg-white text-emerald-600' : 'bg-white text-amber-600'
            }`}>
                適合度: {analysis.score}%
            </span>
        </div>
        
        <div className="space-y-2">
            {analysis.suggestions.map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{s}</span>
                </div>
            ))}
             {analysis.warnings.map((w, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <span>{w}</span>
                </div>
            ))}
            {analysis.suggestions.length === 0 && analysis.warnings.length === 0 && (
                <div className="text-sm text-slate-500 italic">目前行程安排非常標準。</div>
            )}
        </div>
      </div>

      {/* Parenting Highlight Box */}
      {schedule.parentingHighlight && (
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start shadow-sm">
          <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
            <Baby className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-blue-800 uppercase mb-1">親子放電亮點</h4>
            <p className="text-blue-800 text-sm leading-relaxed">
              {schedule.parentingHighlight}
            </p>
          </div>
        </div>
      )}

      {/* Timeline of Events */}
      <div className="pl-2">
        {schedule.events.map((event, index) => (
          <EventCard 
            key={event.id} // Use ID for better React reconciliation
            event={event} 
            isLast={index === schedule.events.length - 1} 
            onSwap={(newEvent) => onSwapEvent(index, newEvent)}
          />
        ))}
      </div>
    </div>
  );
};

export default DayView;