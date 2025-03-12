import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface RecommendationsProps {
  isBalanced: boolean;
  userHobbies: string[];
}

const Recommendations: React.FC<RecommendationsProps> = ({ isBalanced, userHobbies }) => {
  const getRecommendations = () => {
    return [
      "Try to reduce work hours and allocate more time to rest",
      "Consider taking short breaks every 2 hours",
      "Schedule dedicated family time in your calendar",
      "Make time for your hobbies: " + userHobbies.join(", "),
      "Aim for 7-8 hours of sleep daily"
    ];
  };

  return (
    <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-6 w-6 text-yellow-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-yellow-800">
            Your schedule needs attention
          </h3>
          <div className="mt-2 text-yellow-700">
            <p className="mb-4">Here are some suggestions to improve your work-life balance:</p>
            <ul className="list-disc list-inside space-y-2">
              {getRecommendations().map((rec, index) => (
                <li key={index} className="text-yellow-700">{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;