// components/WhyChooseUs.jsx
"use client";

import React from 'react';
import { Award, Briefcase, Clock, Users, Zap } from 'lucide-react'; // Example icons

// Define the features/benefits to highlight
const features = [
  {
    icon: Award,
    title: "Expert Instructors",
    description: "Learn from seasoned industry professionals with proven track records and real-world experience.",
    iconBgColor: "bg-blue-100",
    iconTextColor: "text-blue-600",
  },
  {
    icon: Briefcase,
    title: "Career-Focused Curriculum",
    description: "Our courses are meticulously designed to equip you with the job-ready skills demanded by employers.",
    iconBgColor: "bg-green-100",
    iconTextColor: "text-green-600",
  },
  {
    icon: Clock,
    title: "Flexible Learning Platform",
    description: "Access course materials and lectures anytime, anywhere, and learn at a pace that fits your life.",
    iconBgColor: "bg-purple-100",
    iconTextColor: "text-purple-600",
  },
  {
    icon: Users, // Or MessageSquare
    title: "Supportive Community",
    description: "Connect with fellow learners, mentors, and alumni for support, networking, and collaboration.",
    iconBgColor: "bg-yellow-100",
    iconTextColor: "text-yellow-600",
  },
];

// Define the Card component structure
const FeatureCard = ({ icon: Icon, title, description, iconBgColor, iconTextColor }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200/90 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-start text-left h-full"> {/* Ensure full height for alignment */}
    <div className={`mb-4 p-3 rounded-full ${iconBgColor}`}>
      <Icon className={`h-6 w-6 ${iconTextColor}`} />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
  </div>
);


export default function WhyChooseUs() {
  return (
    <section className="py-6 md:py-12 lg:py-12 bg-gradient-to-b from-white via-gray-50/50 to-white"> {/* Alternating background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose <span className="text-blue-600">SkillCareer</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide more than just courses. We offer a path to career success with benefits designed for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBgColor={feature.iconBgColor}
              iconTextColor={feature.iconTextColor}
            />
          ))}
        </div>

        {/* Optional: Add a CTA Button */}
        <div className="mt-16 text-center">
           <button
             className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 group"
            >
               Explore Our Courses
               <Zap className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
            </button>
        </div>

      </div>
    </section>
  );
}