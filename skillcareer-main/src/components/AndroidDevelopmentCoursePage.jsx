// components/ReactNativeCoursePage.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Users, BarChart, Search, Mail,
  Award, CalendarDays, UserCheck, Zap, Star, Laptop, Clock, ShieldCheck,
  BookOpen, Globe, PenTool, Target, UsersRound, BrainCircuit, User,
  // --- React Native Specific Icons ---
  Smartphone,   // Core Mobile
  Code,         // JavaScript/TypeScript
  Component,    // React Components
  Layers,       // Layout & Styling
  Navigation,   // Navigation Libraries (use Globe or custom)
  Database,     // Async Storage / Realm / SQLite
  Cloud,        // APIs / Backend Integration
  GitBranch,    // Version Control
  TestTube,     // Testing
  UploadCloud,  // Deployment (App Stores)
  Package,      // Native Modules/Packages
  RefreshCw     // State Management / Hot Reloading
} from 'lucide-react'; // Navigation might need custom import or use Globe

// --- Configuration & Placeholder Data (React Native Focus) ---
const courseDetails = {
  title: "React Native Cross-Platform Bootcamp",
  tagline: "Build beautiful, native-like iOS and Android apps from a single JavaScript/TypeScript codebase using React Native.",
  duration: "15 Weeks (Project-Focused)",
  format: "Live Online + Offline Classes + Capstone",
  level: "Intermediate (JavaScript/React knowledge recommended)",
  nextBatch: "August 1st, 2025", // Example Date
  price: {
    original: "72,000",
    discounted: "48,000",
    guarantee: "Build & Deploy Portfolio Apps",
  },
  ratings: {
    average: 4.9,
    count: 810,
  },
  instructor: {
    name: "Priya Nair", // Example Instructor
    title: "Senior Mobile Engineer",
    bio: "Priya specializes in cross-platform development with 7+ years building apps for startups and enterprises using React Native. Contributor to open-source libraries.",
    linkedin: "https://linkedin.com/in/priyanairmobile", // Example Link
  },
  enrollLink: "/enroll/react-native", // Example Link
};

const curriculumModules = [
  { icon: Code, title: "JavaScript/TypeScript Refresher & ESNext", description: "Modern JS/TS features essential for React Native development, async programming, tooling (Babel, Metro).", weeks: "Week 1-2" },
  { icon: Component, title: "React Native Core Concepts", description: "JSX, Components (Class/Functional), Props, State, Lifecycle/Hooks, Styling (StyleSheet API).", weeks: "Week 3-4" },
  { icon: Layers, title: "Layout, Styling & Navigation", description: "Flexbox layouts, styling components, Stack/Tab/Drawer navigation (React Navigation).", weeks: "Week 5-6" },
  { icon: RefreshCw, title: "State Management", description: "Managing complex application state using Context API, Redux Toolkit, or Zustand.", weeks: "Week 7" },
  { icon: Cloud, title: "Networking & API Integration", description: "Fetching data (Fetch API/Axios), handling API responses, async operations, working with external services.", weeks: "Week 8-9" },
  { icon: Package, title: "Working with Native Modules & Hardware APIs", description: "Accessing device features (Camera, Location, Storage), bridging native code (basics).", weeks: "Week 10-11" },
  { icon: TestTube, title: "Testing & Debugging", description: "Unit/Component testing (Jest, React Testing Library), E2E testing basics, debugging tools (Flipper, Chrome DevTools).", weeks: "Week 12" },
  { icon: UploadCloud, title: "Build, Deployment & Updates", description: "Building for iOS/Android, App Store/Play Store submission process, Over-The-Air (OTA) updates (Expo Updates/Codepush).", weeks: "Week 13-15 + Project" },
];

const courseHighlights = [
  { icon: Smartphone, text: "Build apps for both iOS & Android" },
  { icon: UserCheck, text: "Code reviews on assignments & projects" },
  { icon: BrainCircuit, text: "Deep dive into React Native architecture" },
  { icon: Users, text: "Access to exclusive alumni network" },
  { icon: Code, text: "Master modern JavaScript/TypeScript" },
  { icon: CalendarDays, text: "Lifetime access to course materials" },
  { icon: Package, text: "Learn to integrate native capabilities" },
  { icon: Target, text: "Focus on performance optimization" },
  { icon: Award, text: "Placement support & mock interviews" },
  { icon: UsersRound, text: "Connect with experienced mobile developers" },
  { icon: ShieldCheck, text: "SkillCareer Pro Certificate in React Native" },
];

const toolsMastered = [
  { name: "React Native" },
  { name: "JavaScript / TypeScript" },
  { name: "React & Hooks" },
  { name: "Expo CLI / React Native CLI" },
  { name: "React Navigation" },
  { name: "Redux Toolkit / Zustand" }, // State Management
  { name: "Node.js & npm/yarn" },
  { name: "VS Code" },
  { name: "Git & GitHub" },
  { name: "Jest / RTL" }, // Testing
];

const targetAudience = [
  "React Web Developers wanting Mobile",
  "JavaScript Developers seeking new skills",
  "Aspiring Mobile App Developers",
  "Native Developers exploring cross-platform",
  "Startups needing efficient app development",
  "Anyone wanting to build iOS/Android apps",
];

const careerOutcomes = [
  { role: "React Native Developer", salary: "₹7,00,000 - ₹15,00,000" },
  { role: "Mobile Developer (Cross-Platform)", salary: "₹7,50,000 - ₹16,00,000" },
  { role: "Frontend Developer (Mobile Focus)", salary: "₹6,50,000 - ₹14,00,000" },
  { role: "Software Engineer (React Native)", salary: "₹8,00,000 - ₹17,00,000" },
  { role: "UI Engineer (Mobile)", salary: "₹6,00,000 - ₹12,00,000" },
];

const testimonials = [
  // Add React Native-specific testimonials...
  {
    name: "Rohan Desai",
    role: "Mobile Engineer",
    company: "Travel Tech Company",
    text: "Coming from web development, this course made the transition to mobile seamless. Learning React Native was intuitive, and the projects helped solidify everything. Highly effective!",
  },
  {
    name: "Ananya Sharma",
    role: "Associate Software Engineer",
    company: "Product Startup",
    text: "The focus on both Expo and Bare workflows was great. I feel confident tackling different types of React Native projects now. The debugging sessions were incredibly helpful.",
  },
  {
    name: "Siddharth Rao",
    role: "Full-Stack Developer",
    company: "E-learning Platform",
    text: "Being able to build for both iOS and Android with one codebase is a huge advantage. This bootcamp provided the skills and portfolio pieces needed to land a role requiring React Native.",
  },
];

const faqs = [
  // Add React Native-specific FAQs...
  { question: "Do I need prior React experience?", answer: "Yes, solid understanding of React fundamentals (components, state, props, hooks) is strongly recommended before starting this bootcamp. We build upon existing React knowledge." },
  { question: "Do I need experience with mobile development (iOS/Android)?", answer: "No native mobile development experience (Swift, Kotlin, Java) is required. This course teaches you mobile development using the React Native framework." },
  { question: "What's the difference between Expo and React Native CLI?", answer: "Expo provides a managed workflow with easier setup and deployment, while the React Native CLI (Bare workflow) offers more control and flexibility, especially for integrating custom native modules. We cover both approaches so you understand the trade-offs." },
  { question: "Will I learn to write native code (Swift/Kotlin/Java)?", answer: "The primary focus is on JavaScript/TypeScript and React Native APIs. While we briefly touch upon the concepts of native modules, writing extensive native code is outside the scope of this bootcamp." },
  { question: "Can I build truly native-feeling apps?", answer: "Yes! React Native uses native UI components under the hood, allowing you to build apps with a look, feel, and performance very close to fully native applications." },
  { question: "How much access will I have to instructors?", answer: "You'll have access during live sessions for Q&A, dedicated support hours via chat/forums, and personalized feedback on major projects and assignments." },
  { question: "Are Mac computers required for iOS development?", answer: "To build and test the iOS version of your app locally, you will need a Mac with Xcode installed. You can still develop and test the Android version on Windows or Linux using Android Studio." },
];

// --- Helper Components (Minimal Style Variations) ---

const CurriculumCard = ({ icon: Icon, title, description, weeks }) => (
  // Using a slightly different border/shadow treatment
  <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm flex flex-col h-full transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-1">
    <div className="flex items-center justify-between gap-4 mb-4">
      {/* Gradient icon background */}
      <div className="flex-shrink-0 rounded-lg bg-gradient-to-tr from-blue-100 to-indigo-100 p-3 shadow-inner">
        <Icon className="h-6 w-6 text-blue-700" />
      </div>
      <span className="text-xs font-medium text-indigo-700 bg-indigo-50 py-1 px-2.5 rounded-md border border-indigo-100">
        {weeks}
      </span>
    </div>
    <h4 className="text-base font-semibold text-slate-900 mb-2">{title}</h4>
    <p className="text-sm text-slate-600 flex-grow">{description}</p>
  </div>
);

const HighlightItem = ({ icon: Icon, text }) => (
  // Slightly different padding/background
  <div className="flex items-start gap-3 bg-blue-50/70 p-4 rounded-md border border-blue-100 transition-all duration-200 hover:bg-blue-100 group">
    <Icon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5 transition-colors group-hover:text-blue-700" />
    <span className="text-sm font-medium text-slate-800">{text}</span>
  </div>
);

const TestimonialCard = ({ name, role, company, text }) => (
  // Simple border-left accent
  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 transition-all duration-300 hover:shadow-md relative border-l-4 border-l-blue-500 hover:border-l-blue-600">
     {/* Quote Icon - positioned differently */}
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-blue-200 absolute top-4 right-4 opacity-80">
       <path fill="currentColor" d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.685.48-2.205.427-.58 1.16-.94 2.196-1.09v-2.3c-1.326.19-2.4.695-3.224 1.517-.824.822-1.302 1.785-1.434 2.89-.085.72-.073 1.386.035 2.01.124.71.304 1.327.54 1.853.284.616.662 1.108 1.137 1.477.534.417 1.084.63 1.66.63.624 0 1.17-.21 1.64-.628.57-.506.855-1.177.855-2.013zm9.76 0c0-.88-.23-1.618-.69-2.217-.326-.41-.77-.68-1.327-.81-.56-.13-1.08-.14-1.54-.03-.16-.94.09-1.68.48-2.2.42-.58 1.15-.94 2.19-1.09v-2.3c-1.33.18-2.4.69-3.23 1.52-.82.82-1.3 1.79-1.43 2.89-.09.72-.08 1.39.03 2.01.12.71.3 1.33.54 1.85.28.61.66 1.11 1.13 1.47.53.42 1.08.63 1.66.63.62 0 1.17-.21 1.64-.63.57-.5.85-1.17.85-2.01z"/>
     </svg>
    <p className="text-slate-600 text-sm leading-relaxed mb-5 mt-1">{text}</p>
    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
      {/* Avatar */}
      <div className="h-9 w-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium">
          {name.charAt(0)}
      </div>
      <div>
        <p className="font-medium text-slate-800 text-sm">{name}</p>
        <p className="text-xs text-slate-500">{role}, {company}</p>
      </div>
    </div>
  </div>
);

const PriceDisplay = ({ original, discounted }) => (
  <div className="flex items-baseline gap-2">
    <span className="text-3xl font-bold text-blue-600">₹{discounted}</span>
    {original && discounted !== original && (
        <span className="text-lg text-slate-400 line-through">₹{original}</span>
    )}
  </div>
);

const RatingStars = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
    ))}
  </div>
);

// --- Main Component ---
export default function ReactNativeCoursePage() { // Renamed Component

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50/70 via-white to-white pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
         {/* Subtle background graphic */}
         <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 opacity-10 pointer-events-none">
            <Component size={350} className="text-blue-200" />
         </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badges Area */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide border border-blue-200/80">
                 Cross-Platform Focus
              </span>
              <span className="flex items-center gap-1.5 text-xs text-yellow-700 font-medium bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200/80">
                <RatingStars rating={courseDetails.ratings.average} />
                <span className="font-semibold">{courseDetails.ratings.average}</span>
                ({courseDetails.ratings.count} reviews)
              </span>
               <span className="flex items-center gap-1.5 bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-200/80">
                  <Award className="h-4 w-4" />
                  <span className="font-bold">Career Support Incl.</span> {/* Changed Text */}
               </span>
            </div>
            {/* End Badges Area */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-5">
              {courseDetails.title}
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 mb-6 max-w-2xl mx-auto">
              {courseDetails.tagline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500 mb-8">
              <div className="flex items-center gap-1.5"> <CalendarDays className="h-4 w-4 text-blue-500" /> {courseDetails.duration} </div>
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <Laptop className="h-4 w-4 text-blue-500" /> {courseDetails.format} </div>
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <BarChart className="h-4 w-4 text-blue-500" /> {courseDetails.level} </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-8">
              <PriceDisplay original={courseDetails.price.original} discounted={courseDetails.price.discounted} />
              <div className="flex items-center text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200/70">
                <Smartphone className="h-4 w-4 mr-1.5" />
                {courseDetails.price.guarantee}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
              <div className="flex-shrink-0 transition-transform duration-200 hover:scale-[1.03]">
                <Button size="lg" asChild className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 px-8 py-3.5 text-base font-semibold shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group">
                  <Link href='/join-course-today' className="flex items-center">
                    Enroll in React Native
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                  </Link>
                </Button>
              </div>
              <div className="text-center sm:text-left bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-2 flex flex-col justify-center">
                <p className="text-xs text-slate-500 mb-0.5">Next batch starts</p>
                <p className="font-semibold text-slate-700">{courseDetails.nextBatch}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Quick Preview */}
      <section className="border-b border-slate-200/80 bg-white sticky top-0 z-20 shadow-sm">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
           <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
             <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center flex-shrink-0">
                   <User className="h-6 w-6 text-slate-500" />
                </div>
               <div>
                 <p className="font-medium text-sm text-slate-900">Taught by <Link href={courseDetails.instructor.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{courseDetails.instructor.name}</Link></p>
                 <p className="text-xs text-slate-500">{courseDetails.instructor.title}</p>
               </div>
             </div>
             <div className="hidden md:flex items-center gap-4">
               <div className="flex items-center gap-1 text-sm">
                 <RatingStars rating={courseDetails.ratings.average} />
                 <span className="font-medium text-slate-700 ml-1">{courseDetails.ratings.average}</span>
                 <span className="text-slate-500">({courseDetails.ratings.count} reviews)</span>
               </div>
             </div>
              <div className="block sm:hidden lg:block ml-auto sm:ml-0 flex-shrink-0">
                  <Button size="sm" asChild className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium shadow transition-all duration-200">
                      <Link href='/join-course-today'>
                          Enroll Now
                      </Link>
                  </Button>
              </div>
           </div>
         </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-20 bg-slate-50"> {/* Simple light bg */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">

          {/* Section 1: Curriculum */}
          <div>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10 md:mb-12 text-center">Core Curriculum & Projects</h2> {/* Title change */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Changed to 4 columns */}
                {curriculumModules.map((module) => (
                    <CurriculumCard key={module.title} {...module} />
                ))}
             </div>
          </div>

          <Separator className="my-2 md:my-4 bg-slate-200"/>

          {/* Section 2: Highlights & Tools */}
          <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10 md:mb-12 text-center">Bootcamp Advantages & Tech Stack</h2> {/* Title change */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
                  <div className="lg:col-span-2 space-y-4"> {/* Reduced space */}
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Why Choose React Native Training?</h3> {/* Title change */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"> {/* Reduced gap */}
                        {courseHighlights.map((highlight) => (
                          <HighlightItem key={highlight.text} icon={highlight.icon} text={highlight.text} />
                        ))}
                      </div>
                      <p className="text-xs text-slate-500 italic pt-2">*Career support effectiveness varies based on individual effort and market conditions.</p>
                  </div>
                   <div className="lg:col-span-1 space-y-4">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Tools & Libraries</h3>
                       {/* Different Tool List Styling - simpler list */}
                       <ul className="space-y-2.5">
                           {toolsMastered.map((tool) => (
                               <li key={tool.name} className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                                   <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                                   <span>{tool.name}</span>
                               </li>
                           ))}
                       </ul>
                       <p className="text-xs text-slate-500 italic pt-2">Master the essential React Native ecosystem.</p>
                   </div>
              </div>
          </div>

          <Separator className="my-2 md:my-4 bg-slate-200"/>

          {/* Section 3: Target Audience */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10 md:mb-12 text-center">Who Is This Bootcamp For?</h2> {/* Title change */}
            <div className="max-w-4xl mx-auto">
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* 3 columns */}
                    {targetAudience.map((target) => (
                    
                     <div key={target} className="flex items-center gap-2 bg-white p-4 rounded-md border border-slate-200 shadow-xs">
                        <Target className="h-4 w-4 text-blue-500 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{target}</span>
                     </div>
                    ))}
                 </div>
                  
                  <div className="mt-12 bg-white rounded-lg p-6 border border-blue-200 shadow-md text-center">
                     <h4 className="font-semibold text-blue-700 mb-2 text-lg">Ready to Build Cross-Platform?</h4>
                     <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
                         If you have a foundation in React and want to expand into mobile development efficiently, this bootcamp is your ideal next step.
                     </p>
                  </div>
              </div>
          </div>

          {/* --- SECTIONS BELOW ARE OPTIONAL / COMMENTED OUT --- */}
          {/* Add Testimonials, Careers, FAQ sections here if needed, applying similar stylistic adjustments */}

        </div>
      </section>

      {/* Final Enrollment CTA */}
      <section className="py-12 md:py-12 bg-gradient-to-br from-blue-500 via-blue-500 to-indigo-600 text-white overflow-hidden relative">
         {/* Optional Background pattern */}
         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2080%2080%22%20width%3D%2280%22%20height%3D%2280%22%20preserveAspectRatio%3D%22none%22%3E%3Cpath%20d%3D%22M0%200h80v80H0z%22%20fill%3D%22%231e40af%22%2F%3E%3Cpath%20d%3D%22M10%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M20%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M30%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M40%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M50%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M60%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M70%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2010h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2020h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2030h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2040h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2050h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2060h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2070h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3C%2Fsvg%3E')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10 text-center">
             <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
                Build iOS & Android Apps with React Native
             </h2>
             <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
                 Leverage your React skills to enter the mobile world. Enroll now to master cross-platform development and secure the limited-time discount!
             </p>
            <div className="inline-block transition-transform duration-200 hover:scale-105">
                 <Button size="xl" variant="secondary" asChild className="rounded-xl bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 text-lg font-semibold shadow-xl transform transition-all duration-200 border-2 border-white/30 group">
                     <Link href='/join-course-today' className="flex items-center">
                         Enroll For ₹{courseDetails.price.discounted} Now
                         <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                     </Link>
                 </Button>
            </div>
            <p className="text-xs text-blue-200 mt-4">{courseDetails.price.guarantee}</p>
        </div>
      </section>

    </div>
  );
}