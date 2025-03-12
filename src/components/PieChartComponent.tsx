import React from 'react';

interface PieChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  title: string;
}

const PieChartComponent: React.FC<PieChartProps> = ({ data, title }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="relative w-64 h-64 mx-auto">
        <svg viewBox="0 0 100 100" className="transform -rotate-90">
          {data.map((item, index) => {
            const startAngle = currentAngle;
            const percentage = (item.value / total) * 100;
            const angle = (percentage / 100) * 360;
            currentAngle += angle;

            const x1 = 50 + 50 * Math.cos((startAngle * Math.PI) / 180);
            const y1 = 50 + 50 * Math.sin((startAngle * Math.PI) / 180);
            const x2 = 50 + 50 * Math.cos(((startAngle + angle) * Math.PI) / 180);
            const y2 = 50 + 50 * Math.sin(((startAngle + angle) * Math.PI) / 180);

            const largeArcFlag = angle > 180 ? 1 : 0;

            const pathData = `
              M 50 50
              L ${x1} ${y1}
              A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2}
              Z
            `;

            return (
              <path
                key={index}
                d={pathData}
                fill={item.color}
                className="transition-all duration-300 hover:opacity-90"
              >
                <title>{`${item.name}: ${item.value}%`}</title>
              </path>
            );
          })}
        </svg>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600">
              {item.name}: {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;