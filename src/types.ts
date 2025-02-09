export interface ActivityData {
  name: string;
  value: number;
  color: string;
}

export interface UserPreferences {
  hobbies: string[];
  workPreference: string;
  learningStyle: string;
  fitnessGoals: string[];
  breakfastTime: string;
  productiveHours: string;
}

export interface WeeklyAnalysis {
  date: string;
  overworked: boolean;
  workHours: number;
  isBalanced: boolean;
}

export interface HobbyRecommendation {
  type: 'youtube' | 'book' | 'course' | 'playlist';
  title: string;
  description: string;
  link: string;
  category: string;
  tags?: string[];
}