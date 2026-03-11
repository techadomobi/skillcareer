// components/Hero.jsx
"use client";

import { useEffect, useRef, useState } from "react"; // <-- Import useState
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Star,
  PlayCircle,
  ListChecks,
  UserCircle2,
  Check,
  Radio,
} from "lucide-react";
import Link from "next/link";


const VIDEO_THUMBNAIL_PATH = "/skill.jpg";
const STUDENT_AVATAR_PATHS = ["/skill.jpg", "/stu.jpg", "/stu-1.jpeg", "/stu-2.webp"];
const DEFAULT_AVATAR_FALLBACK = "/default-avatar.png";


const animatedWords = [
  "Skill Career",
    "Digital Marketing",
    "Web Development",
    "Accounting",
    "Finance",
    "Computer Skills",
    "Android Dev",
];
const ANIMATION_INTERVAL = 2500; // milliseconds

// --- Helper Components ---
const FeatureItem = ({ icon: Icon, text }) => (
  <div className="flex items-start gap-2">
    <Icon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
    <span className="text-sm sm:text-base text-gray-700">{text}</span>
  </div>
);

const ModuleItem = ({ name, done, active }) => {
  let IconComponent;
  let iconColor = "text-gray-400";
  let textColor = "text-gray-700 hover:text-gray-900";
  let bgColor = "hover:bg-gray-100/50";
  let fontWeight = "font-medium";

  if (done) {
    IconComponent = CheckCircle;
    iconColor = "text-green-500";
    textColor = "text-gray-500 line-through";
    bgColor = "";
  } else if (active) {
    IconComponent = Radio;
    iconColor = "text-blue-500";
    textColor = "text-blue-800";
    bgColor = "bg-blue-100/70";
    fontWeight = "font-semibold";
  } else {
    IconComponent = () => <div className="h-3.5 w-3.5 border-[1.5px] border-gray-400 rounded-full flex-shrink-0 mt-px"></div>;
  }

  return (
    <div
      className={`flex items-center gap-2.5 p-2 rounded-md transition-colors duration-150 ${bgColor}`}
    >
     
      <div className="flex items-center justify-center h-4 w-4">
         <IconComponent className={`h-full w-full flex-shrink-0 ${iconColor} ${active ? 'animate-pulse' : ''}`} />
      </div>
      <span className={`text-xs truncate ${fontWeight} ${textColor}`}>
        {name}
      </span>
    </div>
  );
};

// --- Main Hero Component ---
export default function Hero() {
  const containerRef = useRef(null);
  const tiltingCardRef = useRef(null);
  // State for animated word index
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Effect for tilting card animation
  useEffect(() => {
    const container = containerRef.current;
    const card = tiltingCardRef.current;
    if (!container || !card) return;

    let animationFrameId = null;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        
        const isInside = e.clientX >= rect.left && e.clientX <= rect.right &&
                         e.clientY >= rect.top && e.clientY <= rect.bottom;

        if (!isInside) {
          
          return;
        }

        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transition = 'transform 0.05s ease-out';
        card.style.transform = `perspective(1200px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(20px) scale(1.02)`;
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(animationFrameId);
      card.style.transition = 'transform 0.3s ease-out';
      card.style.transform = `perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)`;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      // Reset style explicitly on cleanup
      if (card) {
        card.style.transition = 'none'; // Prevent transition on unmount
        card.style.transform = `perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)`;
      }
    };
  }, []); 
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, ANIMATION_INTERVAL);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array, runs once on mount

  const features = [
    "Flexible learning schedule",
    "World-class expert instructors",
    "Personalized job placement support",
    "Industry-recognized certificates",
  ];

  const modules = [
    { name: "Introduction to Web Dev", done: true },
    { name: "HTML & CSS Essentials", done: true },
    { name: "JavaScript Fundamentals", active: true },
    { name: "React Framework", done: false },
    { name: "Backend Basics", done: false },
    { name: "Final Project", done: false },
  ];

  return (
    <>
      {/* Add inline styles for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* New Keyframes for word animation */
        @keyframes slide-fade-in-out {
           0% { opacity: 0; transform: translateY(10px); } /* Start below and faded out */
          20% { opacity: 1; transform: translateY(0); }  /* Fade in and slide up */
          80% { opacity: 1; transform: translateY(0); }  /* Hold */
          100% { opacity: 0; transform: translateY(-10px); } /* Fade out and slide up */
        }

        /* Apply animation via a class */
        .word-animate {
          display: inline-block; /* Needed for transform */
          /* Match interval + small overlap for fade */
          animation: slide-fade-in-out ${ANIMATION_INTERVAL / 1000}s ease-in-out infinite;
        }

         /* Alternative simple fade - uncomment if slide is too much */
         /*
         @keyframes fade-in-out {
           0% { opacity: 0; }
           20% { opacity: 1; }
           80% { opacity: 1; }
           100% { opacity: 0; }
         }
         .word-animate-fade {
           display: inline-block;
           animation: fade-in-out ${ANIMATION_INTERVAL / 1000}s ease-in-out infinite;
         }
         */
      `}</style>

      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-100 pt-4  px-12 sm:px-0 lg:px-10 pb-8 relative overflow-hidden">
        {/* Animated Blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-0"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 -z-0"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 -z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center">

            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-2">
              <div className="space-y-6">
                {/* Pill */}
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-sm font-medium text-blue-700 shadow-md hover:shadow-lg transition-shadow">
                  <span className="h-2 w-2 rounded-full bg-blue-500 mr-2.5 animate-pulse"></span>
                  New courses available
                </div>
                {/* Headline with Animated Word */}
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl">
                  Unlock Your Potential with{" "} {/* Added space */}
                  {/* Animated word container */}
                  <span className="text-blue-600 relative inline w-[14ch] text-left"> {/* Adjust w-[14ch] based on longest word */}
                     {/* Apply key and animation class */}
                      <span key={currentWordIndex} className="word-animate">
                           {animatedWords[currentWordIndex]}
                      </span>
                   </span>
                </h1>
                {/* Description */}
                <p className="max-w-[600px] text-lg text-gray-600 sm:text-lg">
                  Advance your career with industry-leading courses taught by expert instructors. Join thousands of successful graduates worldwide.
                </p>
                {/* Buttons */}
                 <div className="flex flex-col sm:flex-row gap-4 pt-2">
                   <Link href="/join-course-today" className="w-full sm:w-auto">
                   <Button
                     size="lg"
                     className="rounded-lg px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 text-base font-semibold shadow-lg hover:shadow-blue-500/30 transition group"
                   >
                     Get Started Today
                     <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1.5 duration-200" />
                   </Button>
                   </Link>
                   <Link href="/courses" className="w-full sm:w-auto">
                   <Button
                     size="lg"
                     variant="outline"
                     className="rounded-lg px-8 py-4 border-gray-300 bg-white text-gray-800 hover:bg-gray-50/80 hover:border-gray-400 text-base font-semibold shadow-sm hover:shadow-md transition"
                   >
                     Explore Courses
                   </Button>
                   </Link>
                 </div>
              </div>

              {/* Social Proof & Features Section */}
              <div className="space-y-2 pt-2">
                {/* Social Proof */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2.5">
                    {STUDENT_AVATAR_PATHS.slice(0, 4).map((src, i) => (
                      <div
                        key={i}
                        className="inline-block h-11 w-11 rounded-full border-2 border-white bg-gray-200 overflow-hidden ring-2 ring-white dark:ring-gray-800 shadow-sm"
                      >
                        <Image
                          src={src}
                          alt={`Student ${i + 1}`}
                          width={44}
                          height={44}
                          className="h-full w-full object-cover"
                          onError={(e) => { e.currentTarget.src = DEFAULT_AVATAR_FALLBACK; }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-base text-gray-600">
                    <span className="font-semibold text-gray-800">4,000+</span> students enrolled this month
                  </div>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {features.map((item, i) => (
                    <FeatureItem key={i} icon={CheckCircle} text={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced UI Mockup (Tilting Card) */}
              <div className="relative flex justify-center items-center">
          {/* Megaphone Icon */}
          <div className="absolute -top-4  right-10 z-10">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 bg-purple-200 rounded-full opacity-50"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-purple-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative z-10">
            <Image src="/header-img1.png" alt="Marketing Expert" width={450} height={450} className="rounded-2xl" />

            {/* Analytics Card */}
            <div className="absolute -bottom-10 right-0 bg-white shadow-lg rounded-xl p-3 flex items-center space-x-3">
              <div>
                <div className="text-lg font-bold text-gray-800">40</div>
                <div className="text-xs text-orange-500">Start Learning Today!</div>
              </div>
              <div className="w-20 h-12 bg-white rounded p-1">
                <div className="w-full h-full bg-gray-100 rounded relative">
                  <div className="absolute inset-0 p-1">
                    <div className="w-full h-2 bg-gray-200 rounded-full mb-1">
                      <div className="h-full w-3/4 bg-purple-400 rounded-full"></div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full mb-1">
                      <div className="h-full w-1/2 bg-pink-400 rounded-full"></div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-full w-2/3 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}