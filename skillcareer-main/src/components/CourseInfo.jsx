import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Check, Megaphone, Code, Handshake, Award, ChevronRight, ChevronLeft } from "lucide-react";

export function CourseInfo() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderIntervalRef = useRef(null);

  const courses = [
    {
      icon: Megaphone,
      title: "Digital Marketing Master",
      description: "Become a sought-after marketer. Master SEO, SEM, Social Media, Content & more.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "Build modern web applications. Learn front-end (React, Next.js) & back-end (Node.js, Databases).",
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Handshake,
      title: "Affiliate Marketing Expert",
      description: "Learn to build passive income streams by promoting products and earning commissions.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const benefits = [
    "Industry-Relevant Curriculum",
    "Hands-On Projects & Case Studies",
    "Expert Instructors with Real-World Experience",
    "Dedicated Placement Assistance",
    "Online & Offline Flexible Learning Modes",
  ];

  // Check if screen is mobile size on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical mobile breakpoint
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Setup automatic slider for mobile
  useEffect(() => {
    if (isMobile) {
      sliderIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
      }, 3000); // Change slide every 3 seconds
    }
    
    return () => {
      if (sliderIntervalRef.current) {
        clearInterval(sliderIntervalRef.current);
      }
    };
  }, [isMobile, courses.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Reset the timer when manually changing slides
    if (sliderIntervalRef.current) {
      clearInterval(sliderIntervalRef.current);
      sliderIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
  };

  const nextSlide = () => {
    goToSlide(currentSlide === courses.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? courses.length - 1 : currentSlide - 1);
  };

  return (
    <div className="space-y-6">
      {/* Headline with animated gradient text */}
      <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900">
        Launch Your{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient">
          High-Growth Career
        </span>{" "}
        With Our Expert-Led Courses
      </h1>

      {/* Job Guarantee Banner - Enhanced with animation */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white p-5 rounded-lg shadow-lg flex items-center gap-4 group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Award className="w-10 h-10 flex-shrink-0 relative z-10 animate-pulse" />
        <div className="relative z-10">
          <h3 className="font-bold text-xl">100% Job Guarantee*</h3>
          <p className="text-sm text-blue-100">Get hired or receive a full refund on your course fee</p>
        </div>
      </div>

      {/* Sub-headline */}
      {/* <p className="text-lg text-gray-600 leading-relaxed">
        Choose your path and gain the in-demand skills needed to succeed. Learn from India&apos;s favourite institute.
      </p> */}

      {/* Course Highlights Section */}
      <div className="space-y-5 pt-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="w-8 h-1 bg-blue-600 rounded-full mr-3"></span>
          Our Core Programs
        </h2>
        
        {/* Mobile Slider View */}
        {isMobile ? (
          <div className="relative">
            {/* <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full p-5 rounded-lg border border-gray-200 bg-white shadow-sm"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full ${course.bgColor} flex items-center justify-center mr-3 mt-1`}
                      >
                        <course.icon className={`w-6 h-6 ${course.iconColor}`} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base text-gray-900">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                        <div className="mt-2 text-blue-600 text-sm font-medium flex items-center">
                          Learn more <ChevronRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
            
           
            {/* <button 
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button> */}
            {/* <button 
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button> */}
            
            {/* Pagination Dots */}
            {/* <div className="flex justify-center mt-4 space-x-2">
              {courses.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div> */}
          </div>
        ) : (
          // Desktop View - Original Layout
          <>
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-5 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 hover:translate-x-1 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full ${course.bgColor} flex items-center justify-center mr-3 mt-1 group-hover:scale-110 transition-transform duration-300`}
                >
                  <course.icon className={`w-6 h-6 ${course.iconColor}`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-600 text-sm font-medium flex items-center">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}