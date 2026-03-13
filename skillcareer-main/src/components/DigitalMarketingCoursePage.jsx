// components/DigitalMarketingCoursePageNoTabsImages.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Users, BarChart, Search, Mail, Megaphone,
  Award, CalendarDays, UserCheck, Zap, Star, Laptop, Clock, ShieldCheck,
  BookOpen, Globe, PenTool, Target, UsersRound, BrainCircuit, User,
  Share2, Palette, ShoppingCart, Radar, BadgeDollarSign
} from 'lucide-react';

// --- Configuration & Placeholder Data (User's data + Enhanced Content) ---
const courseDetails = {
  title: "Complete Digital Marketing Masterclass",
  tagline: "Master SEO, SEM, Social Media, Content Marketing, Email Marketing, and Analytics to drive growth and generate leads.", // Enhanced tagline
  duration: "8 Weeks (Part-Time)",
  format: "Live Online Sessions + Offline Classes", // User's update
  level: "Beginner to Intermediate",
  nextBatch: "April 15, 2025", // User's update
  price: {
    original: "90,000", // User's update (INR)
    discounted: "45,000", // User's update (INR)
    guarantee: "100% Free Demo Class", // User's update
  },
  ratings: {
    average: 4.8, // User's update
    count: 1243, // User's update
  },
  instructor: {
    name: "Rohit Sharma", // User's update
    title: "Senior Digital Marketing Strategist", // User's update
    // Bio removed as per user's last code example
    linkedin: "https://linkedin.com/in/rohitsharma", // Example updated link
  },
  enrollLink: "/enroll/digital-marketing", // User's update
};

// --- Enhanced Curriculum Content ---
const curriculumModules = [
  {
    icon: Search,
    title: "SEO Fundamentals",
    description: "Master the basics of SEO, including keyword research, effective on-page and off-page optimization techniques, and technical SEO fundamentals to improve search visibility.", // Enhanced
    weeks: "Week 1"
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Develop effective social media strategies, create engaging content, leverage key platforms (Facebook, Instagram, LinkedIn), and understand audience engagement for brand building.", // Enhanced
    weeks: "Week 2-3"
  },
  {
    icon: BarChart,
    title: "PPC & SEM (Google Ads)",
    description: "Learn the fundamentals of Google Ads for paid advertising, including search/display campaigns, effective bidding strategies, compelling ad copywriting, targeting, and conversion tracking.", // Enhanced
    weeks: "Week 4"
  },
  {
    icon: Mail,
    title: "Email Marketing & Lead Nurturing", // Title adjusted
    description: "Understand list building strategies, audience segmentation, creating effective email campaigns for lead nurturing, introduction to automation workflows, and analyzing results.", // Enhanced
    weeks: "Week 5"
  },
  {
    icon: Users, // Could use PenTool too
    title: "Content Marketing Fundamentals", // Title adjusted
    description: "Master content planning, creation of valuable blog posts and articles, various content formats, distribution strategies across channels, SEO integration, and measuring content performance.", // Enhanced
    weeks: "Week 6-7"
  },
  {
    icon: Award, // Could use BarChart too
    title: "Web Analytics & Reporting", // Title adjusted
    description: "Set up and navigate Google Analytics, track key website metrics and traffic sources, understand user behavior, build insightful reports, and interpret data for actionable insights.", // Enhanced
    weeks: "Week 8"
  },
];

// --- Enhanced Highlights (incorporating user's additions) ---
const courseHighlights = [
  { icon: BrainCircuit, text: "Build a strong foundation in core digital marketing principles" }, // Added from previous step
  { icon: Zap, text: "Hands-on projects simulating real campaigns & assignments" }, // Slightly enhanced
  { icon: UserCheck, text: "Live Q&A sessions with expert instructors" },
  { icon: BrainCircuit, text: "Learn from Experienced Tech Industry Professionals" }, // User's addition
  { icon: Award, text: "100% Job Guarantee*" }, // User's addition
  { icon: UsersRound, text: "Proven Placement: 100+ Students Hired" }, // User's addition
  { icon: CheckCircle, text: "Practical skills using industry-standard tools" },
  { icon: CalendarDays, text: "Lifetime access to course materials and recordings" },
  { icon: Target, text: "Personalized feedback on all major projects" },
  { icon: Globe, text: "Global networking opportunities" },
  { icon: ShieldCheck, text: "SkillCareer Certificate of Completion" }, // User's addition (Icon changed by user)
  { icon: Users, text: "Access to a private student community forum" }, // Moved down slightly
];

const toolsMastered = [
  { name: "Google Analytics" },
  { name: "Google Ads" },
  { name: "SEMrush" },
  { name: "Mailchimp" },
  { name: "Ahrefs" },
  { name: "Hootsuite" },
];

const marketingExpertise = [
  {
    icon: Share2,
    title: "Affiliate Marketing",
    description: "Connect with the right publishers and affiliate channels to acquire, activate, and retain ideal customers."
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Differentiate your brand with the right positioning, messaging, and customer recognition strategies."
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Drive traffic and sales with proven marketing tactics that turn visitors into buyers."
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Identify prospects, convert them into leads, and improve retention with consistent nurturing."
  },
  {
    icon: Radar,
    title: "Programmatic Media Buying",
    description: "Use automated media buying to reach precise audiences across a wide range of digital placements."
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Improve visibility with optimized content, keywords, and technical structure for organic growth."
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing (SMM)",
    description: "Grow your brand on social platforms with engaging content and loyal communities."
  },
  {
    icon: BadgeDollarSign,
    title: "Expert in Paid Ads",
    description: "Maximize ROI with targeted paid campaigns across search and social channels."
  },
];

// --- Enhanced Target Audience ---
const targetAudience = [
  "Aspiring Digital Marketers & Freshers", // Added Freshers
  "Marketing Professionals seeking to upskill",
  "Business Owners & Entrepreneurs",
  "Students & Recent Graduates",
  "Anyone looking to understand online marketing & lead generation", // Enhanced
];

// --- Updated Career Outcomes (using user's INR format) ---
const careerOutcomes = [
  { role: "Digital Marketing Executive", salary: "₹5,50,000 - ₹7,50,000" }, // Adjusted role, kept INR
  { role: "Social Media Specialist", salary: "₹5,00,000 - ₹7,00,000" }, // Adjusted role, kept INR
  { role: "SEO Executive", salary: "₹4,50,000 - ₹6,50,000" }, // Adjusted role, kept INR
  { role: "Content Marketing Executive", salary: "₹6,00,000 - ₹8,50,000" }, // Adjusted role, kept INR
  { role: "PPC Executive", salary: "₹5,00,000 - ₹7,50,000" }, // Adjusted role, kept INR
];

const testimonials = [
  // User's testimonials remain unchanged
  { name: "Alex Johnson", role: "Marketing Director", company: "TechStart Inc.", text: "This course transformed our marketing approach completely. ROI increased by 187% within 3 months of implementing the strategies taught." },
  { name: "Maya Patel", role: "E-commerce Entrepreneur", company: "StyleHub", text: "As a solo entrepreneur, I needed practical skills fast. This masterclass delivered exactly that - I'm now managing all my marketing channels confidently." },
  { name: "David Kim", role: "Career Changer", company: "Former Accountant", text: "From complete beginner to landing a digital marketing job in 3 months. The projects in this course made my portfolio stand out to employers." },
];

// --- Enhanced FAQs (incorporating user's addition) ---
const faqs = [
  { question: "Is this course suitable for absolute beginners?", answer: "Yes! We start with the fundamentals and progressively build up your skills. No prior marketing experience is required, making it ideal for freshers and career changers." }, // Enhanced
  { question: "What tools will I learn to use?", answer: "You'll get hands-on experience with foundational tools like Google Analytics, Google Ads, popular social media platforms, and email marketing software concepts applicable to tools like Mailchimp." }, // Slightly adjusted
  { question: "Is there any career support after the course?", answer: "Yes, this course includes access to our standard career services, including resume tips and general job search guidance relevant to entry-level digital marketing roles." }, // Adjusted focus
  { question: "What are the terms for the 100% Job Guarantee?", answer: "The Job Guarantee requires successful course completion, active participation in career services, meeting specific project standards, and proactive job searching in designated locations. Full terms and conditions apply and will be provided upon enrollment." }, // User's addition (Kept)
  { question: "How long will I have access to the course materials?", answer: "You get lifetime access to all recorded sessions, notes, and supplementary materials provided during the course." },
  { question: "What if I can't attend the live sessions?", answer: "All sessions are recorded and made available within 24 hours. You can also submit questions in advance that will be addressed during the live sessions." }, // User's version
  { question: "Is there a payment plan available?", answer: "Yes, we offer interest-free installment plans. You can pay in 3 monthly installments with no additional fees." }, // User's version
];

// --- Helper Components (Unchanged from user's last code) ---
const CurriculumCard = ({ icon: Icon, title, description, weeks }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200/80 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="flex items-center justify-between gap-4 mb-3">
      <div className="flex-shrink-0 rounded-lg bg-blue-100 p-2.5">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <span className="text-xs font-medium text-blue-600 bg-blue-50 py-1 px-2 rounded-full border border-blue-100">
        {weeks}
      </span>
    </div>
    <h4 className="text-base font-semibold text-slate-800 mb-2">{title}</h4>
    <p className="text-sm text-slate-600 flex-grow">{description}</p>
  </div>
);

const HighlightItem = ({ icon: Icon, text }) => (
  // User's version with items-start for small screens
  <div className="flex items-start sm:items-center gap-3 bg-slate-50 px-4 py-3 rounded-lg border border-slate-200/70 transition-transform duration-200 hover:translate-x-1 group">
    <Icon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0 transition-colors group-hover:text-blue-700" />
    <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-800">{text}</span>
  </div>
);

const TestimonialCard = ({ name, role, company, text }) => (
  // User's version
  <div className="bg-white rounded-xl shadow-sm border border-slate-200/90 p-6 relative transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-slate-300">
    <div className="absolute -top-3 left-5 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-white">
        <path fill="currentColor" d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.685.48-2.205.427-.58 1.16-.94 2.196-1.09v-2.3c-1.326.19-2.4.695-3.224 1.517-.824.822-1.302 1.785-1.434 2.89-.085.72-.073 1.386.035 2.01.124.71.304 1.327.54 1.853.284.616.662 1.108 1.137 1.477.534.417 1.084.63 1.66.63.624 0 1.17-.21 1.64-.628.57-.506.855-1.177.855-2.013zm9.76 0c0-.88-.23-1.618-.69-2.217-.326-.41-.77-.68-1.327-.81-.56-.13-1.08-.14-1.54-.03-.16-.94.09-1.68.48-2.2.42-.58 1.15-.94 2.19-1.09v-2.3c-1.33.18-2.4.69-3.23 1.52-.82.82-1.3 1.79-1.43 2.89-.09.72-.08 1.39.03 2.01.12.71.3 1.33.54 1.85.28.61.66 1.11 1.13 1.47.53.42 1.08.63 1.66.63.62 0 1.17-.21 1.64-.63.57-.5.85-1.17.85-2.01z"/>
      </svg>
    </div>
    <p className="text-slate-600 text-sm leading-relaxed mb-5 mt-4">{text}</p>
    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
      <div>
        <p className="font-medium text-slate-800 text-sm">{name}</p>
        <p className="text-xs text-slate-500">{role}, {company}</p>
      </div>
    </div>
  </div>
);

const PriceDisplay = ({ original, discounted }) => (
  // User's version with INR symbol
  <div className="flex items-baseline gap-2">
    <span className="text-3xl font-bold text-blue-600">₹{discounted}</span>
    <span className="text-lg text-slate-400 line-through">₹{original}</span>
  </div>
);

const RatingStars = ({ rating }) => (
  // User's version
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
    ))}
  </div>
);

const MarketingExpertiseCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="flex items-start gap-4 mb-4">
      <div className="h-10 w-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center">
        <Icon className="h-5 w-5 text-orange-600" />
      </div>
      <div className="flex-1">
        <div className="h-0.5 w-10 bg-orange-400 rounded-full mb-3"></div>
        <h4 className="text-sm font-semibold tracking-wide text-slate-900 uppercase">{title}</h4>
      </div>
    </div>
    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
  </div>
);

// --- Main Component (Using User's UI structure) ---
export default function DigitalMarketingCoursePageNoTabsImages() {

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section (User's structure) */}
      <section className="relative bg-gradient-to-b from-blue-50/60 via-white to-white pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* User centered title block */}
          <div className="max-w-6xl mx-auto text-center">
            {/* BADGES AREA - User's modified layout */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5">
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide border border-blue-200/80">
                50% OFF - Limited Time
              </span>
              <span className="flex items-center gap-1.5 text-xs text-yellow-700 font-medium bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200/80">
                <RatingStars rating={courseDetails.ratings.average} />
                <span className="font-semibold">{courseDetails.ratings.average}</span>
                ({courseDetails.ratings.count} reviews)
              </span>
              {/* User's added badges */}
              <span className="flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200/80">
                  <Award className="h-4 w-4" />
                  <span className="font-bold">100% Job Guarantee*</span>
              </span>
              <span className="flex items-center gap-1.5 bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-200/80">
                  <UsersRound className="h-4 w-4" />
                  <span className="font-bold">100+ Placements</span>
              </span>
            </div>
            {/* Title, Tagline etc. (User's structure) */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-5">
              {courseDetails.title}
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 mb-6 max-w-2xl mx-auto">
              {courseDetails.tagline} {/* Enhanced tagline applied */}
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
              <div className="flex items-center text-xs font-medium text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-200/70">
                <ShieldCheck className="h-4 w-4 mr-1.5" />
                {courseDetails.price.guarantee}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
              <div className="flex-shrink-0 transition-transform duration-200 hover:scale-[1.03]">
                <Button size="lg" asChild className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 px-8 py-3.5 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Link href='/join-course-today' className="flex items-center">
                    Enroll Now & Save 50%
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

      {/* Instructor Quick Preview (User's sticky bar) */}
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

      {/* Main Content Area (User's structure with commented sections) */}
      <section className="py-16 lg:py-20 bg-slate-50/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">

          {/* Section 1: Curriculum */}
          <div>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Course Curriculum</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {curriculumModules.map((module) => (
                    <CurriculumCard key={module.title} {...module} /> // Enhanced descriptions applied
                ))}
             </div>
          </div>

          <Separator className="my-2 md:my-2 bg-slate-200/80"/> {/* User's separator style */}

          {/* Section 2: Marketing Expertise */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Marketing Expertise You Will Master</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketingExpertise.map((item) => (
                <MarketingExpertiseCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          <Separator className="my-2 md:my-2 bg-slate-200/80"/> {/* User's separator style */}

          {/* Section 3: Highlights & Tools */}
          <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">What Sets This Course Apart</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-5">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Benefits & Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {courseHighlights.map((highlight) => ( // Enhanced highlights applied
                          <HighlightItem key={highlight.text} icon={highlight.icon} text={highlight.text} />
                        ))}
                      </div>
                      <p className="text-xs text-slate-500 italic mt-2">*Job guarantee subject to terms and conditions. Please see FAQ.</p> {/* User's addition */}
                  </div>
                   <div className="lg:col-span-1 space-y-5">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Tools Covered</h3>
                       <ul className="space-y-2">
                          {toolsMastered.map((tool) => (
                              <li key={tool.name} className="flex items-center gap-2 text-sm text-slate-700 bg-white p-3 rounded-md border border-slate-100 shadow-sm">
                                  <PenTool className="h-4 w-4 text-blue-500 flex-shrink-0" />
                                  <span>{tool.name}</span>
                              </li>
                          ))}
                       </ul>
                       <p className="text-xs text-slate-500 italic">Gain practical experience with industry-standard platforms.</p>
                   </div>
              </div>
          </div>

          <Separator className="my-2 md:my-2 bg-slate-200/80"/> {/* User's separator style */}

          {/* Section 4: Target Audience */}
          <div>
            {/* User's slightly reduced margin-bottom */}
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-2 text-center">Is This Course Right For You?</h2>
            <div className="max-w-4xl mx-auto">
                 {/* User's reduced gap and added hover effect */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {targetAudience.map((target) => ( // Enhanced audience applied
                     <div key={target} className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        {/* User's reduced text size */}
                        <span className="text-slate-700 font-medium text-sm">{target}</span>
                     </div>
                    ))}
                 </div>
                  {/* User's shadow-inner and text size/leading changes */}
                  <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 text-center shadow-inner">
                     <h4 className="font-semibold text-blue-800 mb-3 text-lg">Your Transformation Awaits</h4>
                     <p className="text-slate-700 max-w-xl mx-auto text-sm leading-relaxed">
                        By the end of this masterclass, you&apos;ll possess the confidence and practical skills to manage comprehensive digital marketing campaigns, analyze performance effectively, and drive significant business growth online.
                     </p>
                  </div>
              </div>
          </div>

           <Separator className="my-2 md:my-2 bg-slate-200/80"/> {/* User's separator style */}

          {/* Section 5: Careers & Testimonials (COMMENTED OUT by User - Kept Commented) */}
          {/*
          <div>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 md:mb-16 text-center">Career Paths & Success Stories</h2>
              <div className="max-w-5xl mx-auto space-y-12 lg:space-y-16">

                  <div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Potential Career Paths</h3>
                      <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-slate-200">
                          <table className="min-w-full">
                              <thead className="bg-slate-50">

                                  <tr><th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Role</th><th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Avg. Salary (INR Est.)</th><th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Demand</th></tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200">
                                  {careerOutcomes.map((career) => (

                                      <tr key={career.role} className="hover:bg-slate-50/70 transition-colors"><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-800">{career.role}</td><td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{career.salary}</td><td className="px-6 py-4 whitespace-nowrap"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">High</span></td></tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>
                      <p className="text-xs text-slate-500 mt-3 text-center">*Salary ranges are estimates and vary based on location, experience, and company.</p>
                  </div>


                   <div>
                       <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Hear From Our Graduates</h3>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {testimonials.map((testimonial) => (
                              <TestimonialCard key={testimonial.name} {...testimonial} />
                          ))}
                      </div>
                  </div>
              </div>
          </div>
          */}

        </div>
      </section>

      {/* FAQ Section (COMMENTED OUT by User - Kept Commented) */}
      {/*
      <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                Have Questions?
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Frequently Asked Questions
                </h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => ( // Enhanced FAQs applied
                <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-slate-50/80 border border-slate-200/80 rounded-xl overflow-hidden shadow-sm data-[state=open]:bg-white data-[state=open]:shadow-md transition-all"
                >
                    <AccordionTrigger className="px-6 py-4 text-left font-medium text-slate-800 hover:no-underline hover:bg-slate-100/50 transition-colors data-[state=open]:text-blue-700">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 text-slate-600 pt-1 text-sm leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
            <div className="mt-10 text-center">
                <p className="text-sm text-slate-500 mb-3">Can't find your answer?</p>
                <Button variant="outline" size="sm" className="rounded-lg border-slate-400 text-slate-700 hover:bg-slate-100">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Our Support Team
                </Button>
            </div>
        </div>
      </section>
      */}

      {/* Final Enrollment CTA (User's structure with reduced padding) */}
      <section className="py-4 md:py-8 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2080%2080%22%20width%3D%2280%22%20height%3D%2280%22%20preserveAspectRatio%3D%22none%22%3E%3Cpath%20d%3D%22M0%200h80v80H0z%22%20fill%3D%22%231e40af%22%2F%3E%3Cpath%20d%3D%22M10%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M20%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M30%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M40%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M50%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M60%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M70%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2010h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2020h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2030h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2040h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2050h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2060h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2070h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3C%2Fsvg%3E')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10 text-center">
             <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
                Start Your Digital Marketing Journey Today
             </h2>
             <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
                 Enroll now to lock in your <span className="font-bold text-yellow-300">50% discount</span> and gain the skills to elevate your career or business. Limited seats available!
             </p>
            <div className="inline-block transition-transform duration-200 hover:scale-105">
                 <Button size="xl" variant="secondary" asChild className="rounded-xl bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 text-lg font-semibold shadow-xl transform transition-all duration-200 border-2 border-white/30 group">
                     <Link href={courseDetails.enrollLink}>
                         Enroll For ₹{courseDetails.price.discounted} Now {/* User's INR price */}
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
