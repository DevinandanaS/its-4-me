import React from 'react';
import { BarChart2 } from 'lucide-react';

interface WeeklyData {
  date: string;
  overworked: boolean;
  workHours: number;
  isBalanced: boolean;
}

interface WeeklyAnalysisProps {
  data: WeeklyData[];
}

const WeeklyAnalysisComponent: React.FC<WeeklyAnalysisProps> = ({ data }) => {
  const maxHours = Math.max(...data.map(d => d.workHours));
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <BarChart2 className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-800">Weekly Work Analysis</h2>
      </div>
      
      <div className="space-y-4">
        {data.map((day, index) => {
          const percentage = (day.workHours / maxHours) * 100;
          const date = new Date(day.date).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
          });
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">{date}</span>
                <span className="text-sm text-gray-500">{day.workHours}h</span>
              </div>
              <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${
                    day.overworked ? 'bg-red-500' : day.isBalanced ? 'bg-green-500' : 'bg-yellow-500'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              {day.overworked && (
                <p className="text-xs text-red-600">Overworked day</p>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Analysis Summary</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm text-gray-600">Balanced days</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-sm text-gray-600">Slightly unbalanced</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-sm text-gray-600">Overworked days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyAnalysisComponent;