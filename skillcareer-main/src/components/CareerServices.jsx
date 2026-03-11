// components/CareerServices.jsx
"use client";

import React from 'react';
import { Button } from '@/components/ui/button'; // Optional
import { Briefcase, FileText, Users, MessageSquare, TrendingUp, Target, Zap, BarChart, Building } from 'lucide-react'; // Added more relevant icons

// --- Configuration ---
// Replace with your actual data or realistic placeholders
const careerStats = [
  {
    icon: BarChart, // Represents placement rate/success
    value: "85%+",
    label: "Placement Rate",
    description: "Successfully placed within 6 months of graduation.",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    iconColor: "text-blue-600",
  },
  {
    icon: Building, // Represents companies/partners
    value: "250+",
    label: "Hiring Partners",
    description: "Connected with leading companies seeking tech talent.",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-700",
    iconColor: "text-green-600",
  },
  {
    icon: TrendingUp, // Represents career growth
    value: "Dedicated",
    label: "Career Coaching",
    description: "Personalized guidance to navigate your career path.",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
    iconColor: "text-purple-600",
  },
];

// Define the specific career services offered
const services = [
  {
    icon: FileText,
    title: "Resume & Portfolio Review",
    description: "Craft compelling application materials that stand out to recruiters.",
  },
  {
    icon: MessageSquare,
    title: "Mock Interviews",
    description: "Practice and refine your technical & behavioral interview skills.",
  },
  {
    icon: Briefcase,
    title: "Exclusive Job Board",
    description: "Access curated job openings specifically for SkillCareer graduates.",
  },
  {
    icon: Users,
    title: "Alumni Network Access",
    description: "Connect with peers and industry professionals for support and opportunities.",
  },
   {
    icon: Target,
    title: "Personalized Strategy",
    description: "Develop a targeted job search plan tailored to your goals.",
  },
   {
    icon: Zap, // Representing 'activation' or 'kickstart'
    title: "Career Kickstart Workshops",
    description: "Gain practical insights on salary negotiation, branding, and more.",
  },
];

// --- Helper: Stat Card ---
const StatCard = ({ stat }) => (
    <div className={`relative overflow-hidden rounded-xl border ${stat.borderColor} ${stat.bgColor} p-6 shadow-sm`}>
        {/* Optional: subtle background pattern or shape */}
        {/* <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/30 rounded-full opacity-50"></div> */}
        <div className="flex flex-col items-start gap-3 relative z-10">
            <stat.icon className={`h-8 w-8 ${stat.iconColor}`} />
            <div className="text-3xl font-bold ${stat.textColor} leading-none">{stat.value}</div>
            <div className="text-sm font-semibold text-gray-800">{stat.label}</div>
            <div className="text-xs text-gray-600">{stat.description}</div>
        </div>
    </div>
);


// --- Helper: Service Card ---
const ServiceCard = ({ service }) => (
  <div className="flex flex-col items-start gap-3 rounded-lg border border-gray-200/80 bg-white p-5 transition-shadow hover:shadow-md h-full">
    <div className="rounded-md bg-gray-100 p-2">
        <service.icon className="h-6 w-6 text-blue-600" />
    </div>
    <h4 className="text-base font-semibold text-gray-900">{service.title}</h4>
    <p className="text-sm text-gray-600 flex-grow">{service.description}</p> {/* flex-grow helps align bottom edges if needed */}
  </div>
);

// --- Main CareerServices Component ---
export default function CareerServices() {
  return (
    <section className="py-16 md:py-8 lg:py-8 bg-gradient-to-b from-white via-blue-50/30 to-white"> {/* Subtle gradient background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
           <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
             Career Acceleration
           </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-600 sm:text-4xl">
            Launch Your Tech Career with Confidence
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Beyond skills, we equip you with the tools, connections, and guidance needed to land your dream job and thrive.
          </p>
        </div>

        {/* Highlight Stats Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:mb-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {careerStats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
            ))}
        </div>

        {/* Detailed Services Grid */}
        <div className="text-center mb-10">
             <h3 className="text-2xl font-semibold text-green-500">Our Comprehensive Support Includes:</h3>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Optional: CTA Button */}
         <div className="mt-16 text-center">
            <Button size="lg" className="rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-blue-700 group">
                Learn About Career Outcomes
                <TrendingUp className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
            </Button>
         </div>
      </div>
    </section>
  );
}