import React, { useState } from "react";
import { Bell, Users, BarChart2, ChevronDown } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import PieChartComponent from "./components/PieChartComponent";
import WeeklyAnalysisComponent from "./components/WeeklyAnalysis";
import Recommendations from "./components/Recommendations";
import AIAvatar from "./components/AIAvatar";

function App() {
  const [showWeeklyAnalysis, setShowWeeklyAnalysis] = useState(false);
  const [selectedDay, setSelectedDay] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dailySchedules = {
    All: {
      ideal: [
        { name: "Work", value: 33, color: "#FF6B6B" },
        { name: "Sleep", value: 33, color: "#4ECDC4" },
        { name: "Family", value: 13, color: "#45B7D1" },
        { name: "Exercise", value: 8, color: "#96CEB4" },
        { name: "Social", value: 13, color: "#FFEEAD" },
      ],
      actual: [
        { name: "Work", value: 40, color: "#FF6B6B" },
        { name: "Sleep", value: 30, color: "#4ECDC4" },
        { name: "Family", value: 10, color: "#45B7D1" },
        { name: "Exercise", value: 5, color: "#96CEB4" },
        { name: "Social", value: 15, color: "#FFEEAD" },
      ],
    },
    Monday: {
      ideal: [
        { name: "Work", value: 33, color: "#FF6B6B" },
        { name: "Sleep", value: 33, color: "#4ECDC4" },
        { name: "Family", value: 13, color: "#45B7D1" },
        { name: "Exercise", value: 8, color: "#96CEB4" },
        { name: "Social", value: 13, color: "#FFEEAD" },
      ],
      actual: [
        { name: "Work", value: 40, color: "#FF6B6B" },
        { name: "Sleep", value: 30, color: "#4ECDC4" },
        { name: "Family", value: 10, color: "#45B7D1" },
        { name: "Exercise", value: 5, color: "#96CEB4" },
        { name: "Social", value: 15, color: "#FFEEAD" },
      ],
    },
    Tuesday: {
      ideal: [
        { name: "Work", value: 33, color: "#FF6B6B" },
        { name: "Sleep", value: 33, color: "#4ECDC4" },
        { name: "Family", value: 13, color: "#45B7D1" },
        { name: "Exercise", value: 8, color: "#96CEB4" },
        { name: "Social", value: 13, color: "#FFEEAD" },
      ],
      actual: [
        { name: "Work", value: 35, color: "#FF6B6B" },
        { name: "Sleep", value: 32, color: "#4ECDC4" },
        { name: "Family", value: 12, color: "#45B7D1" },
        { name: "Exercise", value: 8, color: "#96CEB4" },
        { name: "Social", value: 13, color: "#FFEEAD" },
      ],
    },
    Wednesday: {
      ideal: [
        { name: "Work", value: 33, color: "#FF6B6B" },
        { name: "Sleep", value: 33, color: "#4ECDC4" },
        { name: "Family", value: 13, color: "#45B7D1" },
        { name: "Exercise", value: 8, color: "#96CEB4" },
        { name: "Social", value: 13, color: "#FFEEAD" },
      ],
      actual: [
        { name: "Work", value: 38, color: "#FF6B6B" },
        { name: "Sleep", value: 31, color: "#4ECDC4" },
        { name: "Family", value: 11, color: "#45B7D1" },
        { name: "Exercise", value: 7, color: "#96CEB4" },
        { name: "Social", value: 13, color: "#FFEEAD" },
      ],
    },
    Thursday: {
      ideal: [
        { name: "Work", value: 33, color: "#FF6B6B" },
        { name: "Sleep", value: 33, color: "#4ECDC4" },
        { name: "Family", value: 13, color: "#45B7D1" },
        { name: "Exercise", value: 8, color: "#96CEB4" },
        { name: "Social", value: 13, color: "#FFEEAD" },
      ],
      actual: [
        { name: "Work", value: 36, color: "#FF6B6B" },
        { name: "Sleep", value: 32, color: "#4ECDC4" },
        { name: "Family", value: 12, color: "#45B7D1" },
        { name: "Exercise", value: 7, color: "#96CEB4" },
        { name: "Social", value: 13, color: "#FFEEAD" },
      ],
    },
    Friday: {
      ideal: [
        { name: "Work", value: 33, color: "#FF6B6B" },
        { name: "Sleep", value: 33, color: "#4ECDC4" },
        { name: "Family", value: 13, color: "#45B7D1" },
        { name: "Exercise", value: 8, color: "#96CEB4" },
        { name: "Social", value: 13, color: "#FFEEAD" },
      ],
      actual: [
        { name: "Work", value: 34, color: "#FF6B6B" },
        { name: "Sleep", value: 33, color: "#4ECDC4" },
        { name: "Family", value: 13, color: "#45B7D1" },
        { name: "Exercise", value: 8, color: "#96CEB4" },
        { name: "Social", value: 12, color: "#FFEEAD" },
      ],
    },
    Saturday: {
      ideal: [
        { name: "Work", value: 20, color: "#FF6B6B" },
        { name: "Sleep", value: 33, color: "#4ECDC4" },
        { name: "Family", value: 20, color: "#45B7D1" },
        { name: "Exercise", value: 12, color: "#96CEB4" },
        { name: "Social", value: 15, color: "#FFEEAD" },
      ],
      actual: [
        { name: "Work", value: 25, color: "#FF6B6B" },
        { name: "Sleep", value: 35, color: "#4ECDC4" },
        { name: "Family", value: 15, color: "#45B7D1" },
        { name: "Exercise", value: 10, color: "#96CEB4" },
        { name: "Social", value: 15, color: "#FFEEAD" },
      ],
    },
    Sunday: {
      ideal: [
        { name: "Work", value: 15, color: "#FF6B6B" },
        { name: "Sleep", value: 35, color: "#4ECDC4" },
        { name: "Family", value: 25, color: "#45B7D1" },
        { name: "Exercise", value: 10, color: "#96CEB4" },
        { name: "Social", value: 15, color: "#FFEEAD" },
      ],
      actual: [
        { name: "Work", value: 20, color: "#FF6B6B" },
        { name: "Sleep", value: 35, color: "#4ECDC4" },
        { name: "Family", value: 20, color: "#45B7D1" },
        { name: "Exercise", value: 10, color: "#96CEB4" },
        { name: "Social", value: 15, color: "#FFEEAD" },
      ],
    },
  };

  const weekDays = [
    "All",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [userPreferences] = useState({
    hobbies: ["reading", "programming", "music"],
  });

  const getHobbyRecommendations = (hobby: string) => {
    const recommendations: { [key: string]: { message: string }[] } = {
      reading: [
        { message: "📚 Check out 'Atomic Habits' on Kindle!" },
        { message: "📖 New book release: 'Deep Work' by Cal Newport" },
      ],
      programming: [
        { message: "💻 Watch this new React course on YouTube!" },
        { message: "🔧 Learn advanced JavaScript on Udemy" },
      ],
      music: [
        { message: "🎵 Try this focus-enhancing Spotify playlist" },
        { message: "🎼 Live music streaming happening tonight!" },
      ],
    };
    return recommendations[hobby] || [];
  };

  const [weeklyData] = useState([
    { date: "2024-03-10", overworked: true, workHours: 10, isBalanced: false },
    { date: "2024-03-11", overworked: false, workHours: 8, isBalanced: true },
    { date: "2024-03-12", overworked: true, workHours: 11, isBalanced: false },
    { date: "2024-03-13", overworked: false, workHours: 8, isBalanced: true },
    { date: "2024-03-14", overworked: false, workHours: 7, isBalanced: true },
    { date: "2024-03-15", overworked: true, workHours: 12, isBalanced: false },
    { date: "2024-03-16", overworked: false, workHours: 6, isBalanced: true },
  ]);

  const isScheduleBalanced = () => {
    const actualSchedule = dailySchedules[selectedDay].actual;
    const idealSchedule = dailySchedules[selectedDay].ideal;
    const maxDifference = 5;

    return actualSchedule.every((actual) => {
      const ideal = idealSchedule.find((i) => i.name === actual.name);
      return ideal && Math.abs(ideal.value - actual.value) <= maxDifference;
    });
  };

  const isOverworked = () => {
    const actualWork = dailySchedules[selectedDay].actual.find(
      (item) => item.name === "Work"
    );
    const idealWork = dailySchedules[selectedDay].ideal.find(
      (item) => item.name === "Work"
    );
    return (
      actualWork &&
      idealWork &&
      actualWork.value > idealWork.value + 5
    );
  };

  const handleReschedule = () => {
    toast.success("Jerry's on the case! Let's make your schedule as smooth as cheese! 🧀", {
      duration: 4000,
    });
    setShowWeeklyAnalysis(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />

      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Schedule Manager
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center space-x-2 hover:bg-gray-50"
                >
                  <span>{selectedDay}</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {weekDays.map((day) => (
                      <button
                        key={day}
                        onClick={() => {
                          setSelectedDay(day);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                          selectedDay === day
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="w-6 h-6 text-gray-600" />
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Users className="w-5 h-5" />
                <span>Community</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <PieChartComponent
            data={dailySchedules[selectedDay].ideal}
            title="Ideal Schedule"
          />
          <PieChartComponent
            data={dailySchedules[selectedDay].actual}
            title="Actual Schedule"
          />
        </div>

        {isScheduleBalanced() ? (
          <div className="p-6 bg-green-100 border-l-4 border-green-500 text-green-700">
            🎉 Great job! Your schedule is balanced today. Here are some
            recommendations:
            <ul className="mt-2 list-disc list-inside">
              {userPreferences.hobbies.flatMap((hobby) =>
                getHobbyRecommendations(hobby).map((rec, index) => (
                  <li key={index}>{rec.message}</li>
                ))
              )}
            </ul>
          </div>
        ) : (
          <Recommendations
            isBalanced={false}
            userHobbies={userPreferences.hobbies}
          />
        )}

        <div className="space-y-4">
          <button
            onClick={() => setShowWeeklyAnalysis(!showWeeklyAnalysis)}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            <BarChart2 className="w-5 h-5" />
            <span>
              {showWeeklyAnalysis
                ? "Hide Weekly Analysis"
                : "Show Weekly Analysis"}
            </span>
          </button>

          {showWeeklyAnalysis && <WeeklyAnalysisComponent data={weeklyData} />}
        </div>
      </main>

      <AIAvatar 
        isOverworked={isOverworked()} 
        onReschedule={handleReschedule} 
      />
    </div>
  );
}

export default App;