// components/HowItWorks.jsx
import React from 'react';
import { Search, Laptop, FolderKanban, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Explore & Enroll",
    description: "Browse our courses, find the perfect fit for your goals, and easily enroll online.",
  },
  {
    id: 2,
    icon: Laptop,
    title: "Learn & Master Skills",
    description: "Dive into expert-led video lessons, hands-on exercises, and interactive assignments at your own pace.",
  },
  {
    id: 3,
    icon: FolderKanban,
    title: "Build Your Portfolio",
    description: "Apply your knowledge by working on real-world projects to showcase your skills to employers.",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Launch Your Career",
    description: "Utilize our career services, placement assistance, and partner network to land your dream job.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-12 md:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Your Path to <span className="text-blue-600">Success</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600">
            Follow these simple steps to transform your skills and career with SkillCareer.
          </p>
          <div className="mt-8 w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Steps Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 -z-10"
               style={{ width: '70%', margin: '0 auto' }}>
          </div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col items-center group">
                {/* Step Number Badge */}
                <span className="absolute -top-10 font-bold text-5xl text-blue-100 z-0">
                  {step.id}
                </span>
                
                {/* Icon Container */}
                <div className="relative z-10 mb-6 flex items-center justify-center h-20 w-20 rounded-full bg-white border-4 border-blue-500 shadow-xl 
                            group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                  <step.icon className="h-9 w-9 text-blue-600 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>
                
                {/* Content Container */}
                <div className="text-center px-4 py-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-20 text-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;