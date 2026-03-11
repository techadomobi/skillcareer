// components/CareerTrainingFocus.jsx
import React from 'react';
import { Target, FolderKanban, LifeBuoy, BrainCircuit } from 'lucide-react';

const features = [
  {
    icon: BrainCircuit,
    title: "Hands-On Skill Development",
    description: "Engage in practical labs, exercises, and simulations designed to build job-ready technical skills.",
  },
  {
    icon: FolderKanban,
    title: "Real-World Project Portfolio",
    description: "Apply your knowledge by building portfolio-worthy projects that showcase your abilities to potential employers.",
  },
  {
    icon: Target,
    title: "Industry-Aligned Curriculum",
    description: "Learn the latest tools, techniques, and best practices demanded by top companies in your chosen field.",
  },
  {
    icon: LifeBuoy,
    title: "Expert Mentorship & Guidance",
    description: "Receive support from experienced instructors and mentors to navigate challenges and accelerate your learning.",
  },
];

const CareerTrainingFocus = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with improved typography and spacing */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-800 sm:text-5xl">
            <span className="inline-block pb-2 border-b-4 border-blue-500">Focused Training</span>
            <span className="block mt-2">for Career Success</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            We bridge the gap between learning and employment with training designed for real-world results.
          </p>
        </div>
        
        {/* Features Grid with improved cards */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-t-4 border-blue-500 overflow-hidden group"
            >
              {/* Background pattern for subtle visual interest */}
              <div className="absolute inset-0 "></div>
              
              {/* Icon with improved styling */}
              <div className="relative mb-6 flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 shadow-md group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              
              {/* Text content */}
              <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Added CTA button */}
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium text-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center space-x-2">
            <span>Start Your Career Journey</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerTrainingFocus;