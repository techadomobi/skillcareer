// components/JobTrainingLight.jsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Award, Users, TrendingUp, CheckCircle, Zap } from 'lucide-react';

const JobTrainingLight = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counterValues, setCounterValues] = useState({
    placements: 0,
    partners: 0,
    salary: 0,
    success: 0
  });
  const sectionRef = useRef(null); // Ref for intersection observer

  // --- Configuration ---
  const finalValues = {
    placements: 5000,
    partners: 120,
    salary: 45, // Percentage
    success: 94 // Percentage
  };
  const counterDuration = 2000; // ms
  const counterSteps = 60;

  // --- Intersection observer ---
  useEffect(() => {
    const currentSection = sectionRef.current; // Capture ref value
    if (!currentSection) return; // Exit if ref not attached yet

    const observer = new IntersectionObserver((entries) => {
      // Check if the entry is intersecting and visibility hasn't been set yet
      if (entries[0].isIntersecting && !isVisible) {
        setIsVisible(true);
        // Only start counters once visible
        startCounters();
        observer.unobserve(currentSection); // Stop observing once visible
      }
    }, { threshold: 0.15 }); // Trigger when 15% is visible

    observer.observe(currentSection);

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]); // Rerun observer setup only if isVisible changes (shouldn't really, but good practice)

  // --- Animated counter effect ---
  const startCounters = () => {
    const stepTime = counterDuration / counterSteps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / counterSteps, 1); // Ensure progress doesn't exceed 1

      setCounterValues({
        placements: Math.floor(finalValues.placements * progress),
        partners: Math.floor(finalValues.partners * progress),
        salary: Math.floor(finalValues.salary * progress),
        success: Math.floor(finalValues.success * progress)
      });

      if (currentStep >= counterSteps) {
        // Ensure final values are exact
        setCounterValues(finalValues);
        clearInterval(interval);
      }
    }, stepTime);
  };

  return (
    <section
      ref={sectionRef}
      id="job-training-section-light"
      className="py-6 md:py-8 bg-gradient-to-b from-blue-50 via-white to-gray-50 text-slate-800 overflow-hidden border-t-4 border-blue-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 mb-10 md:mb-20 ${isVisible ? 'fade-in-start' : 'opacity-0'}`}>
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            {/* Use unique animation class */}
            <div className={isVisible ? 'slide-in-left-start' : 'opacity-0'}>
              {/* Adjusted pill styling */}
              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
                CAREER TRANSFORMATION
              </span>
              {/* Adjusted text sizes for mobile responsiveness */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-slate-900">
                From <span className="text-blue-600">Training</span> to <span className="text-indigo-600">Employment</span>
              </h2>
              {/* Adjusted text sizes and responsiveness */}
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Our job-focused training program guarantees to transform your skills and prepare you for in-demand careers with our placement assistance.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-6 mt-6 md:mt-8">
                {/* Mobile responsive buttons */}
                <button className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                  Secure Your Career
                </button>
                <button className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm md:text-base font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  Explore Tracks
                </button>
              </div>
            </div>
          </div>

          {/* Right side illustration - Light Theme Adjustment */}
          {/* Use unique animation class */}
          <div className={`w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0 ${isVisible ? 'slide-in-right-start' : 'opacity-0'}`}>
            <div className="career-progress-pyramid-light w-full max-w-sm md:max-w-md lg:max-w-lg">
              {/* Level Styling Adjusted */}
              <div className="pyramid-level-light level-1-light">
                <span className="level-text-light">Skill Development</span>
                <div className="pyramid-icon-light"><Zap size={18} className="w-4 h-4 md:w-5 md:h-5" /></div>
              </div>
              <div className="pyramid-level-light level-2-light">
                <span className="level-text-light">Industry Projects</span>
                <div className="pyramid-icon-light"><Award size={18} className="w-4 h-4 md:w-5 md:h-5" /></div>
              </div>
              <div className="pyramid-level-light level-3-light">
                <span className="level-text-light">Interview Preparation</span>
                <div className="pyramid-icon-light"><Users size={18} className="w-4 h-4 md:w-5 md:h-5" /></div>
              </div>
              <div className="pyramid-level-light level-4-light">
                <span className="level-text-light highlight">Job Placement</span>
                <div className="pyramid-icon-light highlight"><Briefcase size={18} className="w-4 h-4 md:w-5 md:h-5" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for animations and responsiveness */}
      <style jsx>{`
        /* Animations */
        .fade-in-start { animation: fadeIn 1s ease forwards; }
        .slide-in-left-start { animation: slideInLeft 1s ease forwards .1s; opacity: 0; } /* Added delay */
        .slide-in-right-start { animation: slideInRight 1s ease forwards .1s; opacity: 0; } /* Added delay */
        .scale-in-start { animation: scaleIn 0.8s ease forwards; }
        .bounce-in-start { animation: bounceIn 1s ease forwards; }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.5); }
          60% { opacity: 1; transform: scale(1.05); }
          80% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }

        /* Stats cards - Light with improved responsiveness */
        .stat-card-light {
          background: white;
          border-radius: 12px;
          padding: 1rem 1rem 1.25rem;
          text-align: center;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }

        @media (min-width: 768px) {
          .stat-card-light {
            padding: 1.5rem;
          }
        }

        .stat-card-light:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.07);
        }

        .stat-icon-light {
          background: #ebf8ff;
          color: #3b82f6;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.75rem;
          border: 2px solid #bee3f8;
        }

        @media (min-width: 768px) {
          .stat-icon-light {
            width: 50px;
            height: 50px;
            margin-bottom: 1rem;
          }
        }

        .stat-number-light {
          font-size: 1.75rem;
          font-weight: bold;
          margin-bottom: 0.25rem;
          color: #2563eb;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .stat-number-light {
            font-size: 2.25rem;
          }
        }

        .stat-label-light {
          color: #475569;
          font-size: 0.8rem;
          font-weight: 500;
        }

        @media (min-width: 768px) {
          .stat-label-light {
            font-size: 0.9rem;
          }
        }

        /* Process cards - Light with improved responsiveness */
        .process-card-light {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1.5rem 1rem;
          position: relative;
          border: 1px solid #e2e8f0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.03), 0 1px 2px -1px rgb(0 0 0 / 0.03);
          height: 100%;
        }

        @media (min-width: 768px) {
          .process-card-light {
            padding: 2rem 1.5rem;
          }
        }

        .process-card-light:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05);
        }

        .process-step-light {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 32px;
          height: 32px;
          background: #3b82f6;
          color: white;
          border: 3px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.9rem;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }

        @media (min-width: 768px) {
          .process-step-light {
            top: -18px;
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }
        }

        /* Career Progress Pyramid - Light with improved responsiveness */
        .career-progress-pyramid-light {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          width: 100%;
        }

        @media (min-width: 768px) {
          .career-progress-pyramid-light {
            gap: 8px;
          }
        }

        .pyramid-level-light {
          background: white;
          border: 1px solid #cbd5e1;
          padding: 0.6rem 0.75rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        }

        @media (min-width: 768px) {
          .pyramid-level-light {
            padding: 0.75rem 1rem;
          }
        }

        .pyramid-level-light:hover {
          background: #f1f5f9;
          transform: scale(1.03);
          border-color: #94a3b8;
        }

        .level-1-light { width: 100%; }
        .level-2-light { width: 93%; }
        .level-3-light { width: 86%; }
        .level-4-light {
          width: 80%;
          background: #3b82f6;
          border-color: #2563eb;
          box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
        }

        @media (min-width: 768px) {
          .level-2-light { width: 90%; }
          .level-3-light { width: 80%; }
          .level-4-light { width: 70%; }
        }

        .level-4-light:hover {
           background: #2563eb;
        }

        .pyramid-icon-light {
          background: #e0f2fe;
          color: #0284c7;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .pyramid-icon-light {
            width: 36px;
            height: 36px;
          }
        }

        .pyramid-icon-light.highlight {
           background: white;
           color: #3b82f6;
        }

        .level-text-light {
          font-weight: 500;
          font-size: 0.8rem;
          color: #334155;
        }

        @media (min-width: 768px) {
          .level-text-light {
            font-size: 0.9rem;
          }
        }

        .level-text-light.highlight {
          color: white;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};

export default JobTrainingLight;