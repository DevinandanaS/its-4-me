import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from 'recharts';

const PieChartComponent = ({ data, title }) => {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
    const radius = outerRadius * 1.2; // Increased radius to push labels further out
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Calculate if label should be aligned left or right of the point
    const textAnchor = x > cx ? 'start' : 'end';

    return (
      <g>
        {/* Draw a line from pie to label */}
        <path
          d={`M${cx + (outerRadius * Math.cos(-midAngle * RADIAN))},${
            cy + (outerRadius * Math.sin(-midAngle * RADIAN))
          }L${x},${y}`}
          stroke="#666"
          strokeWidth={1}
          fill="none"
        />
        {/* Add a small dot at the end of the line */}
        <circle cx={x} cy={y} r={2} fill="#666" />
        {/* Position text next to the dot */}
        <text
          x={x + (x > cx ? 5 : -5)}
          y={y}
          textAnchor={textAnchor}
          fill="#333"
          className="text-xs"
          dominantBaseline="central"
        >
          {`${name} (${(percent * 100).toFixed(0)}%)`}
        </text>
      </g>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100">
          <p className="text-gray-900 font-semibold text-sm mb-1">{payload[0].name}</p>
          <p className="text-gray-600 text-sm">
            {payload[0].value} hours ({(payload[0].payload.percent * 100).toFixed(1)}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-center">{title}</h2>
      <div className="h-80"> {/* Increased height for better label spacing */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={90}
              innerRadius={45} // Added inner radius to create a donut chart
              fill="#8884d8"
              dataKey="value"
              paddingAngle={2} // Added padding between sectors
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  strokeWidth={1}
                  stroke="#fff"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartComponent;