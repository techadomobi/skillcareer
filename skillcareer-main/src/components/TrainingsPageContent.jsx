// components/TrainingPageContentEnhanced.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator'; // Although not used in the final layout, keep if you might add separators later
import { ArrowRight, Check, Laptop, Users, Target, Award, CalendarDays, Code, MessageCircleQuestion, Zap, BrainCircuit, UsersRound } from 'lucide-react';

// --- Configuration ---
// Example training programs - Replace with actual data and add image paths if using next/image
const featuredPrograms = [
  {
    title: "Immersive Web Development Bootcamp",
    description: "Comprehensive full-stack training designed to launch your developer career in weeks.",
    duration: "12 Weeks Full-Time",
    format: "Live Online / In-Person",
    keySkills: ["React", "Node.js", "SQL", "TypeScript", "Cloud Basics"],
    href: "/training/web-dev-bootcamp",
    imagePlaceholderColor: "bg-blue-100", // For visual distinction if not using images
  },
  {
    title: "Data Science & AI Accelerator",
    description: "Master Python, machine learning, and data storytelling in this intensive program.",
    duration: "16 Weeks Part-Time",
    format: "Live Online",
    keySkills: ["Python", "SQL", "ML", "TensorFlow", "Visualization"],
    href: "/training/data-science-accelerator",
    imagePlaceholderColor: "bg-green-100",
  },
  {
    title: "Corporate Upskilling: Cloud Solutions",
    description: "Custom training to empower your teams with essential cloud platform skills (AWS, Azure, GCP).",
    duration: "Custom Duration",
    format: "On-site / Live Online",
    keySkills: ["AWS Certified", "Azure Fundamentals", "DevOps", "Security"],
    href: "/training/corporate-cloud",
    imagePlaceholderColor: "bg-purple-100",
  },
];

// Key benefits with more descriptive text
const trainingBenefits = [
  { icon: BrainCircuit, title: "Project-Centric Learning", text: "Build real-world projects, solidifying skills through practical application." },
  { icon: UsersRound, title: "Expert Mentorship", text: "Receive personalized guidance and feedback from industry veterans." },
  { icon: Target, title: "Career Services Integrated", text: "From resume workshops to interview prep, we support your job search." },
  { icon: Award, title: "Industry-Validated Skills", text: "Learn the exact technologies and methodologies employers demand." },
  { icon: Laptop, title: "Flexible Learning Options", text: "Choose between full-time, part-time, online, or in-person formats." },
  { icon: Zap, title: "Portfolio Development", text: "Graduate with a portfolio of projects to showcase your abilities." },
];

// --- Helper Components ---

// Enhanced Training Program Card
const ProgramCard = ({ program }) => (
  <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full group">
    {/* Image Placeholder Area - Replace with <Image /> if you have images */}
    <div className={`aspect-[16/9] w-full ${program.imagePlaceholderColor || 'bg-slate-100'} flex items-center justify-center`}>
       <Laptop className="h-12 w-12 text-slate-400 opacity-50" />
    </div>

    {/* Content Area */}
    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <h3 className="mb-2 text-lg font-semibold leading-snug text-slate-900 group-hover:text-blue-600 transition-colors">
        <Link href={program.href} className="focus:outline-none">
          {/* Extend link hitbox */}
          <span className="absolute inset-0" aria-hidden="true"></span>
          {program.title}
        </Link>
      </h3>
      <p className="mb-4 text-sm text-slate-600 flex-grow line-clamp-3">
        {program.description}
      </p>

      {/* Meta Info (Duration, Format) */}
      <div className="space-y-2 text-xs text-slate-500 mb-4 border-t border-slate-200/80 pt-4 mt-auto">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-3.5 w-3.5 flex-shrink-0 text-slate-400" />
          <span>{program.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <Laptop className="h-3.5 w-3.5 flex-shrink-0 text-slate-400" />
          <span>{program.format}</span>
        </div>
      </div>

      {/* Key Skills */}
       {program.keySkills && (
         <div className="mb-5">
            <h4 className="text-[11px] font-medium text-slate-500 mb-2 uppercase tracking-wider">Key Skills:</h4>
            <div className="flex flex-wrap gap-1.5">
                {program.keySkills.map(skill => (
                    <span key={skill} className="inline-block bg-slate-100 text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        {skill}
                    </span>
                ))}
            </div>
         </div>
      )}

      {/* Action Link (Styled as part of the card, hit box handled by parent link) */}
      <div className="text-sm font-semibold text-blue-600 group-hover:underline flex items-center">
        Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </div>
);


// Enhanced Benefit Card
const BenefitCard = ({ icon: Icon, title, text }) => (
    <div className="bg-white p-6 rounded-lg border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300">
        <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-100 p-3">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-base font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-sm text-slate-600">{text}</p>
    </div>
);


// Enhanced Process Step with Connecting Line
const ProcessStep = ({ title, description, step, isLast }) => (
  <div className="relative pb-10 pl-12 group"> {/* Padding left for icon/line */}
    {/* Step Number/Icon */}
    <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white ring-4 ring-white group-hover:bg-blue-700 transition-colors">
      {step}
    </div>
    {/* Connecting Line (Hide on last item) */}
    {!isLast && (
        <div className="absolute left-[17px] top-10 h-[calc(100%-2.5rem)] w-0.5 bg-slate-200 group-hover:bg-slate-300 transition-colors" aria-hidden="true"></div>
    )}
    <h4 className="text-md font-semibold text-slate-800 mb-1.5">{title}</h4>
    <p className="text-sm text-slate-600">{description}</p>
  </div>
);

// --- Main Training Page Component (Enhanced) ---
export default function TrainingPageContentEnhanced() {
  // Define steps data here for the ProcessStep component
  const steps = [
      { step: "1", icon: Check, title: "Apply & Consult", description: "Share your goals and let our advisors help find the right fit." },
      { step: "2", icon: Laptop, title: "Immersive Learning", description: "Engage with expert instructors, hands-on labs, and collaborative real-world projects." },
      { step: "3", icon: Code, title: "Portfolio Development", description: "Build a robust portfolio showcasing your skills and readiness for the job market." },
      { step: "4", icon: Target, title: "Career Launchpad", description: "Leverage career services for resume optimization, interview practice, and job placement support." },
  ];

  return (
    <div className="bg-white"> {/* Base background */}

      {/* 1. Hero Section - Enhanced Background & Spacing */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50 py-12 md:py-12 lg:py-12 text-center">
        {/* Subtle background shapes (optional) */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100/30 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-purple-100/30 rounded-full filter blur-3xl opacity-60 animate-pulse animation-delay-2000"></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <span className="inline-block bg-white border border-blue-200/80 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 shadow-sm">
             Skill Development Programs
           </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Transform Your Career in Tech
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg leading-relaxed text-slate-600">
            Our immersive training programs provide the hands-on skills, expert guidance, and career support you need to succeed.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
             <Button size="xl" className="rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-200 group">
                Explore Website
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
            </Button>
             <Button size="xl" variant="outline" className="rounded-lg border-slate-300 bg-white/80 backdrop-blur-sm px-8 py-4 text-base font-semibold text-slate-800 shadow-sm hover:bg-white hover:border-slate-400 transform hover:-translate-y-0.5 transition-all duration-200">
                Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Key Benefits Section - Using Cards */}
      <section className="py-8 md:py-8 lg:py-8 bg-slate-50 border-y border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    The <span className="text-blue-600">SkillCareer</span> Advantage
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                    More than just courses – a comprehensive ecosystem for career growth.
                </p>
            </div>
            {/* Using BenefitCard */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {trainingBenefits.map((benefit) => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
        </div>
      </section>

       {/* 3. How It Works Section - Enhanced Styling */}
       <section className="py-12 md:py-12 lg:py-12 bg-white">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                   <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                       Your Streamlined Path to Success
                   </h2>
                   <p className="mt-4 text-lg text-slate-600">
                       From application to job offer, we guide you every step of the way.
                   </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 max-w-5xl mx-auto">
                   {steps.map((step, index) => (
                       <ProcessStep
                           key={step.step}
                           {...step}
                           isLast={index === steps.length - 1} 
                       />
                   ))}
               </div>
           </div>
       </section>


      {/* 4. Featured Programs Section - Enhanced Cards */}
      <section className="py-8 md:py-12 lg:py-12 bg-slate-50 border-y border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Explore Our Training Programs
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Find the perfect program to match your career goals and learning style.
            </p>
          </div>
        
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.title} program={program} />
            ))}
          </div>
        
        </div>
      </section>

      {/* 5. Final CTA Section - Enhanced Visuals */}
      <section className="relative overflow-hidden py-12 md:py-12 lg:py-12 bg-gradient-to-r from-blue-400 to-indigo-400 text-center text-white">
           {/* Background pattern (optional) */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")'}}></div>
           <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-3xl">
             <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
               Ready to Invest in Your Future?
             </h2>
             <p className="text-lg text-blue-100 mb-10">
               Our admissions advisors are ready to answer your questions and help you choose the right path. Let's start the conversation today.
             </p>
             <Button
    asChild // Use asChild to render the anchor tag with button styles
    size="xl"
    variant="secondary"
    className="rounded-lg bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 group"
 >
    {/* The anchor tag provides the call functionality */}
    <a href="tel:+917055275529" aria-label="Call advisor at +91 70552 75529">
        <MessageCircleQuestion className="mr-2 h-6 w-6" /> Talk to an Advisor
    </a>
</Button>           </div>
       </section>

    </div> // Close base background div
  );
}