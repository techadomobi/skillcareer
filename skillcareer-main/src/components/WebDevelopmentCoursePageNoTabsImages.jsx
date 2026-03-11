// components/WebDevelopmentCoursePageNoTabsImages.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Users, BarChart, Search, Mail, // Keep Mail for Contact button
  Award, CalendarDays, UserCheck, Zap, Star, Laptop, Clock, ShieldCheck,
  BookOpen, Globe, PenTool, Target, UsersRound, BrainCircuit, User, // Base Icons
  Code, // Web Dev Specific
  Database, // Web Dev Specific
  Server, // Web Dev Specific
  GitBranch, // Web Dev Specific
  Component, // Web Dev Specific (React/Vue/Angular)
  Terminal, // Web Dev Specific
  Rocket, // Web Dev Specific (Deployment)
  MonitorSmartphone // Web Dev Specific (Responsive)
} from 'lucide-react';

// --- Configuration & Placeholder Data (Web Development Focus) ---
const courseDetails = {
  title: "Full-Stack Web Development Bootcamp",
  tagline: "Master HTML, CSS, JavaScript, React, Node.js, Databases, and Deployment to build modern web applications.",
  duration: "12 Weeks (Intensive)",
  format: "Live Online Sessions + Offline Classes",
  level: "Beginner to Job-Ready",
  nextBatch: "May 1st, 2025",
  price: {
    original: "80,000", // Example Price
    discounted: "40,000", // Example Price
    guarantee: "100% Free Demo Class",
  },
  ratings: {
    average: 4.9, // Example Rating
    count: 985,  // Example Count
  },
  instructor: {
    name: "Anjali Singh", // Example Instructor
    title: "Senior Full-Stack Engineer",
    bio: "Anjali has 12+ years of experience building scalable web applications for top tech companies. Passionate about mentoring aspiring developers. Ex-Microsoft & Amazon.",
    linkedin: "https://linkedin.com/in/anjalisinghdev", // Example Link
  },
  enrollLink: "/enroll/web-development", // Example Link
};

const curriculumModules = [
  { icon: Code, title: "HTML5 & CSS3 Fundamentals", description: "Structure web pages, semantic HTML, modern CSS layouts (Flexbox, Grid), responsive design.", weeks: "Week 1-2" },
  { icon: MonitorSmartphone, title: "JavaScript Programming", description: "Core concepts, DOM manipulation, asynchronous JS (Promises, Async/Await), ES6+ features.", weeks: "Week 3-4" },
  { icon: Component, title: "Frontend Frameworks (React)", description: "Components, state management, hooks, routing, context API, building interactive UIs.", weeks: "Week 5-7" },
  { icon: Server, title: "Backend Development (Node.js & Express)", description: "Building RESTful APIs, server-side logic, middleware, authentication, environment variables.", weeks: "Week 8-9" },
  { icon: Database, title: "Databases & Data Modeling", description: "SQL & NoSQL fundamentals (e.g., PostgreSQL, MongoDB), database design, ORM/ODM.", weeks: "Week 10" },
  { icon: GitBranch, title: "Version Control & Deployment", description: "Git workflows, GitHub collaboration, deploying applications (e.g., Vercel, Netlify, AWS basics).", weeks: "Week 11-12" },
];

const courseHighlights = [
  { icon: Zap, text: "Build 5+ real-world portfolio projects" },
  { icon: UserCheck, text: "Live coding sessions & pair programming" },
  { icon: BrainCircuit, text: "Learn from Experienced Software Engineers" },
  { icon: Users, text: "Dedicated Slack channel & community support" },
  { icon: Code, text: "Master in-demand full-stack technologies" }, // Changed icon
  { icon: CalendarDays, text: "Lifetime access to course materials & recordings" },
  { icon: Rocket, text: "Deploy your own web applications live" }, // Changed icon & text
  { icon: Target, text: "Personalized code reviews & project feedback" }, // Kept icon
  { icon: Award, text: "100% Job Guarantee*" }, // Kept highlight
  { icon: UsersRound, text: "Proven Placement: 100+ Students Hired" }, // Kept highlight
  { icon: ShieldCheck, text: "SkillCareer Certificate of Completion" }, // Kept highlight
];

const toolsMastered = [
  { name: "VS Code" },
  { name: "Git & GitHub" },
  { name: "Node.js & npm/yarn" },
  { name: "React & Next JS" },
  { name: "Express.js" },
  { name: "PostgreSQL / MongoDB" }, // Example DBs
  { name: "Vercel / Netlify" }, // Example Deployment
  { name: "Tailwind CSS (Optional)" }, // Example Optional Tool
];

const targetAudience = [
  "Aspiring Web Developers",
  "Career Changers seeking tech roles",
  "Graduates looking for practical skills",
  "Designers wanting to code",
  "Anyone wanting to build web applications",
  "Entrepreneurs needing to build MVPs",
];

const careerOutcomes = [
  { role: "Frontend Developer", salary: "₹6,00,000 - ₹10,00,000" }, // Example INR
  { role: "Backend Developer", salary: "₹7,00,000 - ₹12,00,000" }, // Example INR
  { role: "Full-Stack Developer", salary: "₹8,00,000 - ₹15,00,000" }, // Example INR
  { role: "React Developer", salary: "₹7,00,000 - ₹13,00,000" }, // Example INR
  { role: "Software Engineer", salary: "₹7,50,000 - ₹16,00,000" }, // Example INR
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Fintech Startup",
    text: "This bootcamp was intense but incredibly rewarding. I went from zero coding knowledge to building complex applications and landed my dream job within a month of graduating!",
  },
  {
    name: "Rahul Verma",
    role: "Freelance Developer",
    company: "Self-Employed",
    text: "The project-based learning approach was fantastic. I built a strong portfolio during the course, which helped me attract high-paying freelance clients immediately.",
  },
  {
    name: "Sneha Reddy",
    role: "Career Changer",
    company: "Former Marketing Manager",
    text: "Switching careers felt daunting, but the instructors and community support were amazing. The job guarantee gave me confidence, and the skills I learned are directly applicable to my new role.",
  },
];

const faqs = [
  { question: "Do I need any prior coding experience?", answer: "No! This bootcamp is designed for beginners. We start with the absolute basics of HTML, CSS, and JavaScript and build up from there." },
  { question: "Which programming languages and frameworks are taught?", answer: "You'll master HTML, CSS, JavaScript (including modern ES6+), React for the frontend, and Node.js with Express for the backend. We also cover SQL and NoSQL database concepts." },
  { question: "What kind of projects will I build?", answer: "You'll build a variety of projects, including a personal portfolio site, interactive web apps, RESTful APIs, and a full-stack MERN (MongoDB, Express, React, Node) or PERN (PostgreSQL, Express, React, Node) application as your capstone project." },
  { question: "Is this course focused more on frontend or backend?", answer: "This is a comprehensive full-stack bootcamp, giving you strong foundations in both frontend (React) and backend (Node.js/Express) development, along with databases and deployment." },
  { question: "How does the 100% Job Guarantee work?", answer: "The Job Guarantee requires successful completion of all modules and projects, active participation in our career services (resume workshops, mock interviews), and dedicated job searching effort in specified tech hubs. Full terms and conditions are provided upon enrollment." }, // Updated Guarantee FAQ
  { question: "What if I miss a live session?", answer: "All live sessions are recorded and uploaded to the learning platform within 24 hours, so you can catch up anytime. You'll also have lifetime access to these recordings." },
  { question: "Are there payment plans available?", answer: "Yes, we offer flexible, interest-free installment options to make the bootcamp accessible. Please contact our admissions team for details." },
];

// --- Helper Components (Reused - No changes needed) ---
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
  <div className="flex items-start sm:items-center gap-3 bg-slate-50 px-4 py-3 rounded-lg border border-slate-200/70 transition-transform duration-200 hover:translate-x-1 group">
    <Icon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0 transition-colors group-hover:text-blue-700" />
    <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-800">{text}</span>
  </div>
);

const TestimonialCard = ({ name, role, company, text }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200/90 p-6 relative transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-slate-300">
    <div className="absolute -top-3 left-5 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
      {/* Using a generic quote icon SVG */}
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
export default function WebDevelopmentCoursePageNoTabsImages() { // Renamed Component

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50/60 via-white to-white pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badges Area */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5">
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide border border-blue-200/80">
                 {/* Modify discount if needed */} Discount Available
              </span>
              <span className="flex items-center gap-1.5 text-xs text-yellow-700 font-medium bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200/80">
                <RatingStars rating={courseDetails.ratings.average} />
                <span className="font-semibold">{courseDetails.ratings.average}</span>
                ({courseDetails.ratings.count} reviews)
              </span>
              <span className="flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200/80">
                  <Award className="h-4 w-4" />
                  <span className="font-bold">100% Job Guarantee*</span>
              </span>
              <span className="flex items-center gap-1.5 bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-200/80">
                  <UsersRound className="h-4 w-4" />
                  <span className="font-bold">100+ Placements</span>
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
              <div className="flex items-center text-xs font-medium text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-200/70">
                <ShieldCheck className="h-4 w-4 mr-1.5" />
                {courseDetails.price.guarantee}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
              <div className="flex-shrink-0 transition-transform duration-200 hover:scale-[1.03]">
                <Button size="lg" asChild className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 px-8 py-3.5 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Link href='/join-course-today' className="flex items-center">
                    Enroll in Bootcamp
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
      <section className="py-16 lg:py-20 bg-slate-50/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">

          {/* Section 1: Curriculum */}
          <div>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Bootcamp Curriculum</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {curriculumModules.map((module) => (
                    <CurriculumCard key={module.title} {...module} />
                ))}
             </div>
          </div>

          <Separator className="my-2 md:my-2 bg-slate-200/80"/>

          {/* Section 2: Highlights & Tools */}
          <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Why Choose This Bootcamp?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-5">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Benefits & Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {courseHighlights.map((highlight) => (
                          <HighlightItem key={highlight.text} icon={highlight.icon} text={highlight.text} />
                        ))}
                      </div>
                      <p className="text-xs text-slate-500 italic mt-2">*Job guarantee subject to terms and conditions. Please see FAQ.</p>
                  </div>
                   <div className="lg:col-span-1 space-y-5">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Technologies You&apos;ll Master</h3>
                       <ul className="space-y-2">
                          {toolsMastered.map((tool) => (
                              <li key={tool.name} className="flex items-center gap-2 text-sm text-slate-700 bg-white p-3 rounded-md border border-slate-100 shadow-sm">
                                  {/* Using Terminal as a generic dev tool icon */}
                                  <Terminal className="h-4 w-4 text-blue-500 flex-shrink-0" />
                                  <span>{tool.name}</span>
                              </li>
                          ))}
                       </ul>
                       <p className="text-xs text-slate-500 italic">Become proficient with industry-standard development tools.</p>
                   </div>
              </div>
          </div>

          <Separator className="my-2 md:my-2 bg-slate-200/80"/>

          {/* Section 3: Target Audience */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-2 text-center">Who Should Enroll?</h2>
            <div className="max-w-4xl mx-auto">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {targetAudience.map((target) => (
                     <div key={target} className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium text-sm">{target}</span>
                     </div>
                    ))}
                 </div>
                  <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 text-center shadow-inner">
                     <h4 className="font-semibold text-blue-800 mb-3 text-lg">Launch Your Tech Career</h4>
                     <p className="text-slate-700 max-w-xl mx-auto text-sm leading-relaxed">
                        Graduate with a robust portfolio, job-ready skills, and the confidence to build and deploy modern web applications, setting you up for success in the tech industry.
                     </p>
                  </div>
              </div>
          </div>

           {/* <Separator className="my-2 md:my-2 bg-slate-200/80"/> */}

          {/* Section 4: Careers & Testimonials */}
          {/* <div>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 md:mb-16 text-center">Career Outcomes & Success Stories</h2>
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
                       <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Hear From Our Alumni</h3>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {testimonials.map((testimonial) => (
                              <TestimonialCard key={testimonial.name} {...testimonial} />
                          ))}
                      </div>
                  </div>
              </div>
          </div> */}

        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                Still Curious?
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Frequently Asked Questions
                </h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
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
                <p className="text-sm text-slate-500 mb-3">More questions?</p>
                <Link href="/contact" className="text-blue-600 hover:underline font-semibold">
                <Button variant="outline" size="sm" className="rounded-lg border-slate-400 text-slate-700 hover:bg-slate-100">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Admissions Team
                </Button>
                </Link>
            </div>
        </div>
      </section> */}

      {/* Final Enrollment CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden relative">
         {/* Background pattern SVG */}
         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2080%2080%22%20width%3D%2280%22%20height%3D%2280%22%20preserveAspectRatio%3D%22none%22%3E%3Cpath%20d%3D%22M0%200h80v80H0z%22%20fill%3D%22%231e40af%22%2F%3E%3Cpath%20d%3D%22M10%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M20%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M30%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M40%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M50%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M60%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M70%200h1v80h-1z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2010h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2020h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2030h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2040h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2050h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2060h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2070h80v1H0z%22%20fill%3D%22%233b82f6%22%20fill-opacity%3D%22.1%22%2F%3E%3C%2Fsvg%3E')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10 text-center">
             <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
                Ready to Build the Future Web?
             </h2>
             <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
                 Join our next cohort and transform into a job-ready Full-Stack Developer. Secure your spot and <span className="font-bold text-yellow-300">exclusive discount</span> today!
             </p>
            <div className="inline-block transition-transform duration-200 hover:scale-105">
                 <Button size="xl" variant="secondary" asChild className="rounded-xl bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 text-lg font-semibold shadow-xl transform transition-all duration-200 border-2 border-white/30 group">
                     <Link href={courseDetails.enrollLink}>
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