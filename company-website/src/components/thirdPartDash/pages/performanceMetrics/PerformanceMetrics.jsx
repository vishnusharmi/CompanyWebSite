import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Star, Calendar } from "lucide-react";
import BarGraphs from "./BarGraphs";

// Custom Card Components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`mb-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const PerformanceMetrics = () => {
  const [timeRange, setTimeRange] = useState("month");
  const [feedbackCategoryFilter, setFeedbackCategoryFilter] = useState("all");

  // Sample data remains the same
  const completionData = [
    { status: "Completed", value: 65 },
    { status: "In Progress", value: 20 },
    { status: "Delayed", value: 15 },
  ];

  const recentFeedback = [
    {
      id: 1,
      task: "Website Redesign",
      rating: 5,
      comment: "Excellent work, delivered ahead of schedule",
      date: "2025-02-10",
      efficiency: 98,
      category: "Positive",
    },
    {
      id: 2,
      task: "API Integration",
      rating: 4,
      comment: "Good work, met all requirements",
      date: "2025-02-08",
      efficiency: 95,
      category: "Neutral",
    },
    {
      id: 3,
      task: "Database Optimization",
      rating: 5,
      comment: "Outstanding performance and communication",
      date: "2025-02-05",
      efficiency: 97,
      category: "Positive",
    },
  ];

  const COLORS = ["#3b82f6", "#fbbf24", "#ef4444"];

  const renderRatingStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  const filteredFeedback =
    feedbackCategoryFilter === "all"
      ? recentFeedback
      : recentFeedback.filter(
          (feedback) => feedback.category === feedbackCategoryFilter
        );

  return (
    <div className="max-h-[1000px] overflow-y-scroll ">
      <div className=" bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <h1 className="text-2xl font-bold text-gray-900">
                Performance Metrics
              </h1>
              <div className="flex space-x-2">
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    timeRange === "month"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setTimeRange("month")}
                >
                  Monthly
                </button>
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    timeRange === "week"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setTimeRange("week")}
                >
                  Weekly
                </button>
              </div>
            </div>
          </div>

          {/* Task Completion Chart */}
          <div className="mb-10">
            <Card>
              <CardHeader>
                <CardTitle>Task Completion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={completionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {completionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="flex justify-center items-center space-x-6 mt-6">
                    {completionData.map((entry, index) => (
                      <div key={entry.status} className="flex items-center">
                        <div
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: COLORS[index] }}
                        />
                        <span className="text-sm text-gray-600">
                          {entry.status}: {entry.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <BarGraphs />
          </div>
          {/* Feedback Filters */}
          <div className="mb-6 mt-10">
            <div className="flex flex-wrap gap-2">
              {["all", "Positive", "Neutral", "Negative"].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    feedbackCategoryFilter === category
                      ? "bg-blue-100 text-blue-800"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setFeedbackCategoryFilter(category)}
                >
                  {category === "all" ? "All Feedback" : `${category} Feedback`}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Feedback */}
          <Card className="mb-50">
            <CardHeader>
              <CardTitle>Recent Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredFeedback.map((feedback) => (
                  <div
                    key={feedback.id}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-gray-900">
                          {feedback.task}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {feedback.comment}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {renderRatingStars(feedback.rating)}
                        </div>
                        <span className="text-sm text-gray-500">
                          {feedback.rating}/5
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 space-y-2 sm:space-y-0">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(feedback.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600">
                          Efficiency: {feedback.efficiency}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
