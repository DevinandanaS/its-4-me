import React from 'react';
import { BookOpen, Youtube, Music, GraduationCap, Dumbbell, Code, Coffee } from 'lucide-react';
import { HobbyRecommendation, UserPreferences } from '../types';

interface RecommendationsProps {
  isBalanced: boolean;
  userHobbies: string[];
  preferences: UserPreferences;
}

const getRecommendations = (hobbies: string[], preferences: UserPreferences): HobbyRecommendation[] => {
  const recommendations: HobbyRecommendation[] = [];
  
  hobbies.forEach(hobby => {
    switch (hobby.toLowerCase()) {
      case 'programming':
        recommendations.push(
          {
            type: 'youtube',
            title: 'Advanced React Patterns',
            description: 'Learn advanced React patterns and best practices',
            link: 'https://www.youtube.com/c/WebDevSimplified',
            category: 'programming',
            tags: ['react', 'javascript']
          },
          {
            type: 'course',
            title: 'Full Stack Development',
            description: 'Master modern web development',
            link: 'https://www.coursera.org/specializations/full-stack-react',
            category: 'programming',
            tags: ['web development', 'react']
          },
          {
            type: 'playlist',
            title: 'Coding Focus',
            description: 'Ambient music for productive coding sessions',
            link: 'https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j',
            category: 'programming',
            tags: ['focus', 'productivity']
          }
        );
        break;
      case 'reading':
        recommendations.push(
          {
            type: 'book',
            title: 'Deep Work',
            description: 'Rules for Focused Success in a Distracted World',
            link: 'https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692',
            category: 'productivity',
            tags: ['focus', 'productivity']
          },
          {
            type: 'book',
            title: 'Atomic Habits',
            description: 'An Easy & Proven Way to Build Good Habits',
            link: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299',
            category: 'self-improvement',
            tags: ['habits', 'productivity']
          }
        );
        break;
      case 'music':
        recommendations.push(
          {
            type: 'playlist',
            title: 'Focus Flow',
            description: 'Deep focus playlist for productive work',
            link: 'https://open.spotify.com/playlist/37i9dQZF1DX3PFzdbtx1Us',
            category: 'productivity',
            tags: ['focus', 'work']
          },
          {
            type: 'playlist',
            title: 'Morning Energy',
            description: 'Energetic music to start your day',
            link: 'https://open.spotify.com/playlist/37i9dQZF1DX6XdJP0U7tGa',
            category: 'wellness',
            tags: ['morning', 'energy']
          }
        );
        break;
      case 'fitness':
        recommendations.push(
          {
            type: 'youtube',
            title: 'Home Workout Routines',
            description: '30-minute effective home workouts',
            link: 'https://www.youtube.com/c/FitnessBlender',
            category: 'fitness',
            tags: ['workout', 'health']
          },
          {
            type: 'course',
            title: 'Nutrition Fundamentals',
            description: 'Learn the basics of healthy eating',
            link: 'https://www.coursera.org/learn/nutrition-health',
            category: 'fitness',
            tags: ['nutrition', 'health']
          }
        );
        break;
      case 'meditation':
        recommendations.push(
          {
            type: 'youtube',
            title: 'Guided Meditation',
            description: 'Daily meditation practices for beginners',
            link: 'https://www.youtube.com/c/Headspace',
            category: 'wellness',
            tags: ['meditation', 'mindfulness']
          },
          {
            type: 'playlist',
            title: 'Meditation Sounds',
            description: 'Calming sounds for meditation',
            link: 'https://open.spotify.com/playlist/37i9dQZF1DX3PIPIT6lEg5',
            category: 'wellness',
            tags: ['meditation', 'relaxation']
          }
        );
        break;
      case 'cooking':
        recommendations.push(
          {
            type: 'youtube',
            title: 'Quick Healthy Recipes',
            description: 'Easy and nutritious meal preparations',
            link: 'https://www.youtube.com/c/PickUpLimes',
            category: 'cooking',
            tags: ['recipes', 'health']
          },
          {
            type: 'course',
            title: 'Essential Cooking Techniques',
            description: 'Master the basics of cooking',
            link: 'https://www.masterclass.com/categories/culinary-arts',
            category: 'cooking',
            tags: ['cooking', 'skills']
          }
        );
        break;
    }
  });

  // Filter recommendations based on user preferences
  return recommendations.filter(rec => {
    if (preferences.learningStyle === 'visual' && rec.type === 'book') return false;
    if (preferences.productiveHours === 'morning' && rec.tags?.includes('evening')) return false;
    return true;
  });
};

const RecommendationIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'youtube':
      return <Youtube className="w-5 h-5 text-red-600" />;
    case 'book':
      return <BookOpen className="w-5 h-5 text-blue-600" />;
    case 'playlist':
      return <Music className="w-5 h-5 text-green-600" />;
    case 'course':
      return <GraduationCap className="w-5 h-5 text-purple-600" />;
    default:
      return null;
  }
};

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category.toLowerCase()) {
    case 'programming':
      return <Code className="w-4 h-4" />;
    case 'fitness':
      return <Dumbbell className="w-4 h-4" />;
    case 'productivity':
      return <Coffee className="w-4 h-4" />;
    default:
      return null;
  }
};

const Recommendations: React.FC<RecommendationsProps> = ({ isBalanced, userHobbies, preferences }) => {
  if (!isBalanced) {
    return (
      <div className="bg-red-50 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-red-600">Schedule Alert</h2>
        <p className="text-red-700">Your schedule seems unbalanced. Consider adjusting your time allocation.</p>
      </div>
    );
  }

  const recommendations = getRecommendations(userHobbies, preferences);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Personalized Recommendations</h2>
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <a
            key={index}
            href={rec.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                <RecommendationIcon type={rec.type} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">{rec.title}</h3>
                  <CategoryIcon category={rec.category} />
                </div>
                <p className="text-sm text-gray-500 mt-1">{rec.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {rec.tags?.map(tag => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;