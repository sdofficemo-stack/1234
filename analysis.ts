import { DaySchedule, ActivityType, AnalysisResult } from './types';

export const analyzeSchedule = (schedule: DaySchedule): AnalysisResult => {
  const warnings: string[] = [];
  const suggestions: string[] = [];
  let score = 100;
  let attractionCount = 0;
  let hasLunch = false;
  let hasDinner = false;

  schedule.events.forEach((event, index) => {
    // Count Attractions
    if (event.type === ActivityType.Attraction) {
      attractionCount++;
    }

    // Check Meals
    if (event.type === ActivityType.Food) {
      const hour = parseInt(event.time.split(':')[0]) || 
                   (event.time.includes('午餐') ? 12 : 
                   event.time.includes('晚餐') ? 18 : 0);
      
      if (hour >= 11 && hour <= 14) hasLunch = true;
      if (hour >= 17 && hour <= 20) hasDinner = true;
    }

    // Check Travel Time Fatigue
    if (event.travelTime && (event.travelTime.includes('40') || event.travelTime.includes('45') || event.travelTime.includes('1小時'))) {
      score -= 5;
      if (!warnings.includes('長途移動建議準備安撫玩具或點心。')) {
        warnings.push('長途移動建議準備安撫玩具或點心。');
      }
    }
  });

  // Intensity Logic
  let intensity: 'Low' | 'Medium' | 'High' = 'Medium';
  if (attractionCount > 3) {
    intensity = 'High';
    score -= 15;
    warnings.push('今日景點較多，幼童可能會體力透支，建議適度刪減。');
  } else if (attractionCount <= 2) {
    intensity = 'Low';
    suggestions.push('行程很鬆散，非常適合親子慢遊！');
  }

  // Meal Logic
  if (!hasLunch) {
    score -= 20;
    warnings.push('注意：似乎缺少了正餐（午餐）安排！');
  }

  // Disney Special Logic
  if (schedule.title.includes('迪士尼')) {
    intensity = 'High';
    suggestions.push('迪士尼全日遊極度耗體力，建議租借推車。');
  }

  return {
    score: Math.max(0, score),
    intensity,
    warnings,
    suggestions
  };
};