// components/KeyStats.jsx
import React from 'react';
import { TrendingUp, Briefcase, Users, GraduationCap, CheckCircle } from 'lucide-react'; // Example icons

const stats = [
  {
    icon: GraduationCap,
    value: "95%",
    label: "Placement Success Rate",
    description: "Successfully placed among leading companies."
  },
  {
    icon: TrendingUp,
    value: "50%+", // Or specific average like "₹8 LPA"
    label: "Average Salary Hike",
    description: "Achieved by graduates after course completion."
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Students Trained",
    description: "Empowered through our diverse course offerings."
  },
  {
    icon: Briefcase,
    value: "1000+",
    label: "Hiring Partners",
    description: "Companies actively recruiting our talent pool."
  },
];

const KeyStats = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50/50 via-white to-blue-50/50 py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
           <h2 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
             Proven Results by the Numbers
           </h2>
           <p className="mt-4 text-lg leading-8 text-gray-600">
             Our commitment to quality training translates into tangible career success for our learners.
           </p>
         </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-blue-300">
              <div className="mb-3 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 mx-auto">
                 <stat.icon className="h-5 w-5" aria-hidden="true" />
               </div>
              <div className="text-4xl font-bold text-blue-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-800 mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-gray-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyStats;