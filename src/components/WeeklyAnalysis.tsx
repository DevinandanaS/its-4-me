import React from 'react';
import { WeeklyAnalysis } from '../types';
import { format } from 'date-fns';
import { CheckCircle2, AlertCircle, Clock } from 'lucide-react';

interface WeeklyAnalysisProps {
  data: WeeklyAnalysis[];
}

const WeeklyAnalysisComponent: React.FC<WeeklyAnalysisProps> = ({ data }) => {
  const overworkedDays = data.filter(day => day.overworked);
  const balancedDays = data.filter(day => day.isBalanced);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Weekly Analysis</h2>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-green-700">Balanced Days:</span>
            <span className="font-semibold text-green-700">{balancedDays.length}</span>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-red-700">Overworked Days:</span>
            <span className="font-semibold text-red-700">{overworkedDays.length}</span>
          </div>
        </div>
      </div>

      {/* Daily Schedule Analysis */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-700 mb-3">Daily Schedule Overview</h3>
        {data.map((day, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg ${
              day.isBalanced 
                ? 'bg-green-50 border border-green-100' 
                : day.overworked 
                  ? 'bg-red-50 border border-red-100'
                  : 'bg-gray-50 border border-gray-100'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                {day.isBalanced ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                ) : day.overworked ? (
                  <AlertCircle className="w-5 h-5 text-red-600" />
                ) : (
                  <Clock className="w-5 h-5 text-gray-600" />
                )}
                <span className="font-medium">
                  {format(new Date(day.date), 'EEEE, MMM d')}
                </span>
              </div>
              <span 
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  day.isBalanced 
                    ? 'bg-green-100 text-green-800' 
                    : day.overworked 
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                }`}
              >
                {day.workHours} hours
              </span>
            </div>
            <div className="ml-7">
              <div className="text-sm">
                {day.isBalanced ? (
                  <span className="text-green-700">
                    Perfect balance achieved! Keep up the good work!
                  </span>
                ) : day.overworked ? (
                  <span className="text-red-700">
                    Exceeded ideal work hours by {(day.workHours - 8)} hours
                  </span>
                ) : (
                  <span className="text-gray-700">
                    Within acceptable work range
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Summary */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Weekly Summary</h3>
        <div className="text-sm text-blue-700 space-y-1">
          <p>• Average work hours: {(data.reduce((acc, day) => acc + day.workHours, 0) / data.length).toFixed(1)} hours/day</p>
          <p>• Most productive day: {format(new Date(balancedDays[0]?.date || data[0].date), 'EEEE')}</p>
          <p>• Balance rate: {((balancedDays.length / data.length) * 100).toFixed(0)}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyAnalysisComponent;