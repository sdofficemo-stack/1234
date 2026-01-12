export enum ActivityType {
  Transport = 'TRANSPORT',
  Hotel = 'HOTEL',
  Food = 'FOOD',
  Attraction = 'ATTRACTION',
  Shopping = 'SHOPPING',
  Highlight = 'HIGHLIGHT'
}

export interface ItineraryEvent {
  id: string; // Unique ID for swapping
  time: string;
  title: string;
  location?: string;
  type: ActivityType;
  description?: string;
  note?: string; 
  travelTime?: string;
  alternatives?: ItineraryEvent[]; // List of swappable options
}

export interface DaySchedule {
  day: number;
  date: string;
  title: string;
  theme: string;
  parentingHighlight?: string;
  events: ItineraryEvent[];
}

export interface AnalysisResult {
  score: number; // 0-100
  intensity: 'Low' | 'Medium' | 'High';
  warnings: string[];
  suggestions: string[];
}