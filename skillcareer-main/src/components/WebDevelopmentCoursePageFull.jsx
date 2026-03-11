// components/WebDevelopmentCoursePageEnhanced.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Users, BarChart, Search, Mail,
  Award, CalendarDays, UserCheck, Zap, Star, Laptop, Clock, ShieldCheck,
  BookOpen, Globe, PenTool, Target, UsersRound, BrainCircuit, User,
  Code, Database, Server, GitBranch, Component, Terminal, Rocket, MonitorSmartphone, Layers // Added Layers for visual separation concept
} from 'lucide-react';

// --- Configuration & Placeholder Data (Web Development Focus) ---
const courseDetails = {
  title: "Ultimate Full-Stack Web Development Bootcamp", // Added "Ultimate"
  tagline: "Go from beginner to job-ready developer. Master frontend (React), backend (Node.js), databases, and deployment.", // More direct tagline
  duration: "14 Weeks (Project-Driven)", // Slightly longer duration example
  format: "Hybrid: Live Online & In-Person Options", // Updated format example
  level: "Beginner to Advanced",
  nextBatch: "May 1st, 2025", // Updated Example
  price: {
    original: "85,000",
    discounted: "42,500", // Updated Example Prices
    guarantee: "Free Demo Class Available",
  },
  ratings: {
    average: 4.9,
    count: 1150, // Updated Example Count
  },
  instructor: {
    name: "Anjali Sharma", // Slightly changed name example
    title: "Principal Software Engineer & Mentor", // Updated title example
    bio: "Anjali has 12+ years building scalable web apps for top tech firms (Ex-Microsoft, Amazon). Passionate about mentoring the next generation of developers.",
    linkedin: "https://linkedin.com/in/anjalisharmadev", // Updated Example Link
  },
  enrollLink: "/join-course-today", // Use your actual enrollment link
};

// Curriculum with clearer Frontend/Backend distinction
const curriculumModules = [
  { icon: Code, title: "Foundation: HTML, CSS & Git", description: "Semantic HTML, advanced CSS (Flexbox, Grid), responsive design principles, essential Git commands.", weeks: "Week 1-2", phase: "Frontend" },
  { icon: MonitorSmartphone, title: "Core JavaScript & DOM", description: "ES6+, async programming, browser APIs, manipulating the DOM, debugging techniques.", weeks: "Week 3-4", phase: "Frontend" },
  { icon: Component, title: "React Ecosystem Mastery", description: "Deep dive into React Hooks, state management (Context/Redux), routing, testing (RTL).", weeks: "Week 5-7", phase: "Frontend" },
  { icon: Server, title: "Backend with Node.js & Express", description: "Building robust APIs, middleware patterns, authentication (JWT), error handling.", weeks: "Week 8-10", phase: "Backend" },
  { icon: Database, title: "Databases: SQL & NoSQL", description: "Relational (PostgreSQL) & NoSQL (MongoDB) databases, data modeling, ORMs/ODMs (Prisma/Mongoose).", weeks: "Week 11-12", phase: "Backend" },
  { icon: Rocket, title: "Deployment & Cloud Essentials", description: "CI/CD pipelines, deploying to Vercel/AWS, Docker basics, server management concepts.", weeks: "Week 13-14", phase: "Full-Stack" },
];

const courseHighlights = [
  { icon: Layers, text: "True Full-Stack: Frontend + Backend Mastery" }, // Emphasis
  { icon: Zap, text: "Build & Deploy 6+ Portfolio Projects" }, // Increased count
  { icon: UserCheck, text: "Live Interactive Coding Sessions" },
  { icon: BrainCircuit, text: "Learn from Top Industry Engineers" },
  { icon: Users, text: "Dedicated Career Services & Mock Interviews" }, // More specific
  { icon: Code, text: "Master React, Node.js, SQL, NoSQL" },
  { icon: CalendarDays, text: "Lifetime Access & Community Membership" }, // Added community
  { icon: Target, text: "Personalized Feedback & Code Reviews" },
  { icon: Award, text: "100% Job Guarantee Program*" },
  { icon: UsersRound, text: "1000+ Strong Hiring Partner Network" }, // Updated number example
  { icon: ShieldCheck, text: "Industry-Recognized Certification" },
];

const toolsMastered = [
  { name: "HTML5 / CSS3" }, { name: "JavaScript (ESNext)" }, { name: "React / Next.js" },
  { name: "Node.js / Express" }, { name: "REST APIs" }, { name: "SQL (PostgreSQL)" },
  { name: "NoSQL (MongoDB)" }, { name: "Git / GitHub" }, { name: "Docker Basics" },
  { name: "AWS / Vercel" }, { name: "VS Code" }, { name: "Testing (Jest/RTL)" },
];

const targetAudience = [
  "Complete Beginners aspiring to be Developers",
  "Career Switchers entering the tech field",
  "Students/Graduates needing practical skills",
  "Designers aiming to implement their UIs",
  "Anyone passionate about building for the web",
  "Entrepreneurs building their product",
];

// Testimonials & FAQs remain structurally similar, update content if needed
const testimonials = [ /* ... (Keep previous or update) ... */ ];
const faqs = [ /* ... (Keep previous or update) ... */ ];

// --- Helper Components (Enhanced Styles) ---

const CurriculumCard = ({ icon: Icon, title, description, weeks, phase }) => {
  const phaseColor = phase === 'Frontend' ? 'text-cyan-600 bg-cyan-50 border-cyan-100' :
                     phase === 'Backend' ? 'text-indigo-600 bg-indigo-50 border-indigo-100' :
                     'text-purple-600 bg-purple-50 border-purple-100'; // Full-Stack phase
  const iconBgColor = phase === 'Frontend' ? 'bg-gradient-to-br from-cyan-100 to-blue-100' :
                      phase === 'Backend' ? 'bg-gradient-to-br from-indigo-100 to-purple-100' :
                      'bg-gradient-to-br from-purple-100 to-pink-100';
  const iconTextColor = phase === 'Frontend' ? 'text-cyan-700' :
                        phase === 'Backend' ? 'text-indigo-700' :
                        'text-purple-700';

  return(
    <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 hover:border-blue-300">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className={`flex-shrink-0 rounded-lg p-3 shadow-sm ${iconBgColor}`}>
          <Icon className={`h-6 w-6 ${iconTextColor}`} />
        </div>
        <span className={`text-xs font-semibold py-1 px-3 rounded-md border ${phaseColor}`}>
          {weeks}
        </span>
      </div>
      <h4 className="text-md font-semibold text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-600 flex-grow leading-relaxed">{description}</p>
    </div>
  );
};

const HighlightItem = ({ icon: Icon, text }) => (
  // Cleaner highlight item
  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 mt-1 text-blue-500">
      <CheckCircle className="h-5 w-5" />
    </div>
    <span className="text-sm font-medium text-slate-700">{text}</span>
  </div>
);

const ToolBadge = ({ name }) => (
  // Simple, clean badge for tools
  <span className="inline-block bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-md border border-slate-200/80">
    {name}
  </span>
);

const TestimonialCard = ({ name, role, company, text }) => ( /* Keep previous enhanced version or adjust slightly */
 <div className="bg-white rounded-xl shadow-md border border-slate-200/90 p-6 relative transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-blue-300">
     <div className="absolute -top-3 left-5 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-white">
           <path fill="currentColor" d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.685.48-2.205.427-.58 1.16-.94 2.196-1.09v-2.3c-1.326.19-2.4.695-3.224 1.517-.824.822-1.302 1.785-1.434 2.89-.085.72-.073 1.386.035 2.01.124.71.304 1.327.54 1.853.284.616.662 1.108 1.137 1.477.534.417 1.084.63 1.66.63.624 0 1.17-.21 1.64-.628.57-.506.855-1.177.855-2.013zm9.76 0c0-.88-.23-1.618-.69-2.217-.326-.41-.77-.68-1.327-.81-.56-.13-1.08-.14-1.54-.03-.16-.94.09-1.68.48-2.2.42-.58 1.15-.94 2.19-1.09v-2.3c-1.33.18-2.4.69-3.23 1.52-.82.82-1.3 1.79-1.43 2.89-.09.72-.08 1.39.03 2.01.12.71.3 1.33.54 1.85.28.61.66 1.11 1.13 1.47.53.42 1.08.63 1.66.63.62 0 1.17-.21 1.64-.63.57-.5.85-1.17.85-2.01z"/>
        </svg>
     </div>
     <p className="text-slate-600 text-sm leading-relaxed mb-5 mt-4">{text}</p>
     <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
       {/* Simple Avatar */}
       <div className="h-9 w-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm font-semibold">
           {name.charAt(0)}
       </div>
       <div>
         <p className="font-semibold text-slate-800 text-sm">{name}</p>
         <p className="text-xs text-slate-500">{role}, {company}</p>
       </div>
     </div>
   </div>
);

const PriceDisplay = ({ original, discounted }) => (
  <div className="flex items-baseline gap-2">
    <span className="text-3xl font-bold text-blue-600">₹{discounted}</span>
    <span className="text-lg text-slate-400 line-through">₹{original}</span>
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
export default function WebDevelopmentCoursePageEnhanced() { // Renamed Component

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section - Enhanced Background & Typography */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 pb-12 lg:pt-24 lg:pb-20 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233b82f6%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M0%2038.59l2.83-2.83%201.41%201.41L1.41%2040H0v-1.41zM0%201.4l2.83%202.83%201.41-1.41L1.41%200H0v1.41zM38.59%2040l-2.83-2.83%201.41-1.41L40%2038.59V40h-1.41zM40%201.41l-2.83%202.83-1.41-1.41L38.59%200H40v1.41zM20%2018.6l-2.83-2.83%201.41-1.41L20%2017.17l2.83-2.83%201.41%201.41L21.41%2020l2.83%202.83-1.41%201.41L20%2022.83l-2.83%202.83-1.41-1.41L18.59%2020l-2.83-2.83%201.41-1.41L20%2017.17z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badges Area */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
               {/* Reordered and styled badges */}
              <span className="flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-md border border-green-200/80">
                  <Award className="h-4 w-4" /> Job Guarantee*
              </span>
               <span className="flex items-center gap-1.5 bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1.5 rounded-md border border-indigo-200/80">
                  <UsersRound className="h-4 w-4" /> 1000+ Hiring Partners
              </span>
              <span className="flex items-center gap-1.5 text-xs text-yellow-700 font-medium bg-yellow-50 px-2.5 py-1 rounded-md border border-yellow-200/80">
                <RatingStars rating={courseDetails.ratings.average} />
                <span className="font-semibold ml-1">{courseDetails.ratings.average}</span>
                ({courseDetails.ratings.count} reviews)
              </span>
            </div>
            {/* End Badges Area */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
              {courseDetails.title}
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 mb-8 max-w-2xl mx-auto">
              {courseDetails.tagline}
            </p>
            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500 mb-10">
              {/* Added icons and slightly bolder text */}
              <div className="flex items-center gap-1.5 font-medium"> <CalendarDays className="h-4 w-4 text-blue-500" /> {courseDetails.duration} </div>
              <div className="text-slate-300 hidden sm:block">•</div>
              <div className="flex items-center gap-1.5 font-medium"> <Laptop className="h-4 w-4 text-blue-500" /> {courseDetails.format} </div>
              <div className="text-slate-300 hidden sm:block">•</div>
              <div className="flex items-center gap-1.5 font-medium"> <BarChart className="h-4 w-4 text-blue-500" /> {courseDetails.level} </div>
            </div>
            {/* Price & Guarantee */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-10">
              <PriceDisplay original={courseDetails.price.original} discounted={courseDetails.price.discounted} />
              <div className="flex items-center text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1.5 rounded-md border border-blue-200/70">
                <ShieldCheck className="h-4 w-4 mr-1.5" />
                {courseDetails.price.guarantee}
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
              <div className="flex-shrink-0 transition-transform duration-200 hover:scale-[1.03]">
                <Button size="xl" asChild className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 px-10 py-4 text-base font-semibold shadow-lg hover:shadow-blue-500/40 transition-all duration-300 group">
                  <Link href={courseDetails.enrollLink} className="flex items-center">
                    Enroll & Get 50% OFF {/* Updated Text */}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                  </Link>
                </Button>
              </div>
              {/* Next Batch Info Box */}
              <div className="text-center sm:text-left bg-white border border-slate-200/80 rounded-lg px-5 py-3 flex flex-col justify-center shadow-sm">
                <p className="text-xs text-slate-500 mb-0.5">Next Batch Starts</p>
                <p className="font-semibold text-slate-700">{courseDetails.nextBatch}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Quick Preview - Subtle visual tweaks */}
      <section className="border-b border-slate-200/80 bg-white sticky top-0 z-20 shadow-sm">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
           <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
             <div className="flex items-center gap-3">
               {/* Use Instructor Image if available, else fallback */}
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
                   {/* Example: Replace with <Image src={instructor.imageUrl} ... /> */}
                   <User className="h-6 w-6 text-slate-500" />
                </div>
               <div>
                 <p className="font-semibold text-sm text-slate-900">Taught by <Link href={courseDetails.instructor.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{courseDetails.instructor.name}</Link></p>
                 <p className="text-xs text-slate-500">{courseDetails.instructor.title}</p>
               </div>
             </div>
             {/* Ratings (always visible) */}
             <div className="hidden md:flex items-center gap-4">
               <div className="flex items-center gap-1 text-sm">
                 <RatingStars rating={courseDetails.ratings.average} />
                 <span className="font-medium text-slate-700 ml-1">{courseDetails.ratings.average}</span>
                 <span className="text-slate-500">({courseDetails.ratings.count} reviews)</span>
               </div>
             </div>
              {/* Enroll Button - Smaller on mobile, consistent */}
              <div className="ml-auto sm:ml-0 flex-shrink-0">
                  <Button size="sm" asChild className="rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200">
                      <Link href={courseDetails.enrollLink}>
                          Enroll Now
                      </Link>
                  </Button>
              </div>
           </div>
         </div>
      </section>

      {/* Main Content Area - Use slightly off-white bg */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24"> {/* Increased spacing */}

          {/* Section 1: Curriculum */}
          <div>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10 md:mb-12 text-center">Your Full-Stack Learning Path</h2> {/* Title change */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap */}
                {curriculumModules.map((module) => (
                    <CurriculumCard key={module.title} {...module} />
                ))}
             </div>
          </div>

          {/* Section 2: Highlights & Tools */}
          <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10 md:mb-12 text-center">Bootcamp Features & Tech Stack</h2> {/* Title change */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12"> {/* Changed grid layout */}
                  <div className="lg:col-span-3 space-y-6"> {/* Increased space */}
                      <h3 className="text-xl font-semibold text-slate-800 mb-5">Key Program Benefits</h3> {/* Title change */}
                      {/* Using simpler checkmark list for highlights */}
                      <ul className="space-y-3">
                        {courseHighlights.map((highlight) => (
                          <li key={highlight.text} className="flex items-start gap-3">
                             <highlight.icon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                             <span className="text-sm text-slate-700 font-medium">{highlight.text}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-slate-500 italic pt-2">*Job guarantee program details available upon request and subject to eligibility criteria.</p>
                  </div>
                   <div className="lg:col-span-2 space-y-6">
                      <h3 className="text-xl font-semibold text-slate-800 mb-5">Tools You'll Master</h3>
                       {/* Using Badge component for tools */}
                       <div className="flex flex-wrap gap-2">
                           {toolsMastered.map((tool) => (
                               <ToolBadge key={tool.name} name={tool.name} />
                           ))}
                       </div>
                       <p className="text-sm text-slate-600 pt-2">Gain hands-on experience with the complete modern web development toolkit.</p>
                   </div>
              </div>
          </div>

          {/* Section 3: Target Audience */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10 md:mb-12 text-center">Is This Bootcamp For You?</h2> {/* Title change */}
            <div className="max-w-5xl mx-auto"> {/* Slightly wider container */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {targetAudience.map((target) => (
                     // Enhanced Audience Card
                     <div key={target} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex items-center gap-4 transition-shadow hover:shadow-md">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <UserCheck className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-slate-700 font-medium text-sm">{target}</span>
                     </div>
                    ))}
                 </div>
                  {/* Enhanced Summary Box */}
                  <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8 md:p-10 text-center shadow-xl">
                     <h4 className="font-bold mb-3 text-xl md:text-2xl">Become a Confident Full-Stack Developer</h4>
                     <p className="max-w-2xl mx-auto text-blue-100 leading-relaxed">
                         No matter your background, if you're driven to learn and build, this comprehensive program provides the structured path, expert guidance, and career support you need to succeed.
                     </p>
                  </div>
              </div>
          </div>

           {/* Optional: Separator */}
           {/* <Separator className="my-16 md:my-24 bg-slate-200"/> */}

          {/* Section 4: Careers & Testimonials (Keep these commented if not needed now) */}
          {/* ... Add refined Testimonials (3-col grid?), Career Table, FAQs ... */}


        </div>
      </section>

      {/* Final Enrollment CTA - Consistent styling */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-500 text-white overflow-hidden relative">
         {/* More subtle pattern */}
         <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%3E%3Cpath%20d%3D%22M0%2038.59l2.83-2.83%201.41%201.41L1.41%2040H0v-1.41zM0%201.4l2.83%202.83%201.41-1.41L1.41%200H0v1.41zM38.59%2040l-2.83-2.83%201.41-1.41L40%2038.59V40h-1.41zM40%201.41l-2.83%202.83-1.41-1.41L38.59%200H40v1.41zM20%2018.6l-2.83-2.83%201.41-1.41L20%2017.17l2.83-2.83%201.41%201.41L21.41%2020l2.83%202.83-1.41%201.41L20%2022.83l-2.83%202.83-1.41-1.41L18.59%2020l-2.83-2.83%201.41-1.41L20%2017.17z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10 text-center">
             <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5 text-white">
                Ready to Launch Your Web Dev Career?
             </h2>
             <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                 Invest in your future. Join the next Full-Stack Bootcamp cohort and gain the skills employers are looking for. Limited seats available!
             </p>
            <div className="inline-block transition-transform duration-200 hover:scale-105">
                 <Button size="xl" variant="default" asChild className="rounded-lg bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 text-base font-semibold shadow-lg transform transition-all duration-200 border border-transparent group">
                     <Link href={courseDetails.enrollLink}>
                         Enroll Now & Save ₹{parseInt(courseDetails.price.original.replace(/,/g,'')) - parseInt(courseDetails.price.discounted.replace(/,/g,''))}
                         <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                     </Link>
                 </Button>
            </div>
            <p className="text-xs text-slate-100 mt-4">{courseDetails.price.guarantee}</p>
        </div>
      </section>

    </div>
  );
}