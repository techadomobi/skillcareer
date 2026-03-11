// components/BasicComputerCoursePage.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Users, BarChart, Mail, Award, CalendarDays, UserCheck, Star, Laptop, Clock, ShieldCheck, BookOpen, Target, User,
  // --- Basic Computer Skills Icons ---
  Monitor,      // Operating System / Desktop
  Folder,       // File Management
  Globe,        // Internet Browsing
  AtSign,       // Email
  FileText,     // Word Processing
  Table,        // Spreadsheets
  Presentation, // Presentations
  Lock,         // Security Basics
  Printer,      // Basic Hardware
  MousePointerClick // Basic Interaction
} from 'lucide-react';

// --- Configuration & Placeholder Data (Basic Computer Focus) ---
const courseDetails = {
  title: "Essential Computer Skills for Everyone",
  tagline: "Gain confidence using computers for everyday tasks, work, and staying connected. Perfect for absolute beginners!",
  duration: "4 Weeks (Part-Time)",
  format: "Flexible Online Learning + Optional Q&A",
  level: "Absolute Beginner",
  nextBatch: "Starts Every Monday!", // Rolling admission example
  price: {
    original: "8,999",
    discounted: "4,999", // Example Price
    guarantee: "Certificate of Completion", // Focus on completion
  },
  ratings: {
    average: 4.7, // Example Rating
    count: 450,  // Example Count
  },
  instructor: {
    name: "Rajesh Kumar", // Example Instructor
    title: "IT Trainer & Digital Literacy Advocate",
    bio: "Rajesh has helped hundreds of individuals overcome tech anxiety and master essential computer skills with patience and clear instruction.",
    // No LinkedIn needed usually for basic course instructors
  },
  enrollLink: "/enroll/basic-computer", // Example Link
};

const curriculumModules = [
  { icon: Monitor, title: "Understanding Your Computer & OS", description: "Navigating Windows/Mac desktop, basic settings, understanding hardware components (mouse, keyboard).", weeks: "Week 1" },
  { icon: Folder, title: "File & Folder Management", description: "Creating, saving, organizing, copying, moving, and deleting files and folders effectively.", weeks: "Week 1" },
  { icon: Globe, title: "Internet Browsing & Safety", description: "Using web browsers (Chrome/Edge), searching online, understanding URLs, basic online safety tips.", weeks: "Week 2" },
  { icon: AtSign, title: "Email Essentials", description: "Setting up and using email (Gmail/Outlook), composing, sending, receiving, managing contacts.", weeks: "Week 2" },
  { icon: FileText, title: "Word Processing Basics", description: "Creating documents (MS Word/Google Docs), text formatting, saving, printing basics.", weeks: "Week 3" },
  { icon: Table, title: "Spreadsheet Fundamentals", description: "Introduction to spreadsheets (MS Excel/Google Sheets), basic data entry, simple formulas.", weeks: "Week 4" },
  // Optional additions: Presentation Basics, Printer Setup, etc.
];

const courseHighlights = [
  { icon: MousePointerClick, text: "Become confident using a computer" },
  { icon: CheckCircle, text: "Master essential everyday digital tasks" },
  { icon: UserCheck, text: "Easy-to-follow video lessons" },
  { icon: Users, text: "Supportive learning community forum" },
  { icon: Laptop, text: "Learn core functions of popular software" },
  { icon: CalendarDays, text: "Flexible learning, study anytime" },
  { icon: Lock, text: "Understand basic online security" },
  { icon: ShieldCheck, text: "Gain essential digital literacy skills" },
];

const toolsMastered = [
  // Focus on concepts/software suites
  { name: "Windows or macOS Basics" },
  { name: "Web Browsers (Chrome/Edge)" },
  { name: "Email Clients (Gmail/Outlook)" },
  { name: "Microsoft Word / Google Docs" },
  { name: "Microsoft Excel / Google Sheets" },
  { name: "File Explorer / Finder" },
  { name: "Basic Internet Search" },
];

const targetAudience = [
  "Absolute Computer Beginners",
  "Senior Citizens new to tech",
  "Job Seekers needing foundational skills",
  "Parents wanting to help children",
  "Anyone feeling 'left behind' digitally",
  "Small Business Owners needing basics",
];

// Career outcomes are less direct, focus on enablement
const careerEnablement = [
  "Improved confidence in using technology.",
  "Ability to perform basic digital tasks for work or personal use.",
  "Foundation for learning more advanced computer skills.",
  "Better communication through email and online tools.",
  "Enhanced ability to search for information online.",
  "Increased digital literacy for navigating the modern world."
];

const testimonials = [
   {
    name: "Sunita Agarwal",
    role: "Homemaker",
    text: "I was always scared of computers, but this course made it so simple! Now I can easily email my family and browse recipes online. Thank you!",
  },
  {
    name: "Mohan Singh",
    role: "Retired Govt. Employee",
    text: "Very clear instructions. I finally understand how to organize my photos and use basic Excel for my finances. Felt very patient.",
  },
  {
    name: "Aisha Begum",
    role: "Small Shop Owner",
    text: "Needed basic skills for my business. This course was perfect – learned email, basic documents, and how to search online safely.",
  },
];

const faqs = [
  { question: "Do I need my own computer?", answer: "Yes, you will need access to a computer (Windows or Mac) and a stable internet connection to follow along with the lessons and practice." },
  { question: "Is this course suitable if I've *never* used a computer?", answer: "Absolutely! This course is specifically designed for complete beginners with zero prior experience. We start from the very basics." },
  { question: "Which software do you teach (Microsoft or Google)?", answer: "We cover the fundamental concepts applicable to both! We demonstrate using popular examples like Microsoft Word/Excel and Google Docs/Sheets where appropriate, focusing on the core skills." },
  { question: "How long do I have access to the course?", answer: "You get lifetime access to the course materials, including any future updates, so you can learn at your own pace and revisit lessons anytime." },
  { question: "Is there support if I get stuck?", answer: "Yes, you'll have access to a community forum where you can ask questions and interact with instructors and fellow learners." },
  { question: "What can I do after completing this course?", answer: "You'll have the foundational skills and confidence to use computers for daily tasks, basic work requirements, online communication, and be well-prepared to take more advanced courses if you wish." },
];

// --- Helper Components (Simplified Styles) ---

const CurriculumCard = ({ icon: Icon, title, description, weeks }) => (
  // Simple card style
  <div className="bg-white p-5 rounded-lg border border-slate-200 flex flex-col h-full transition-shadow duration-300 hover:shadow-md">
    <div className="flex items-center gap-3 mb-3">
      {/* Simple icon background */}
      <div className="flex-shrink-0 rounded-md bg-blue-100 p-2">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <h4 className="text-sm font-semibold text-slate-800 flex-grow">{title}</h4>
      <span className="text-xs font-medium text-slate-500 bg-slate-100 py-0.5 px-2 rounded">
        {weeks}
      </span>
    </div>
    <p className="text-xs text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const HighlightItem = ({ icon: Icon, text }) => (
  // Simple list item style
  <div className="flex items-center gap-3 p-3 bg-blue-50/60 rounded-md border border-blue-100">
    <Icon className="h-5 w-5 text-blue-600 flex-shrink-0" />
    <span className="text-sm font-medium text-slate-700">{text}</span>
  </div>
);

const ToolListItem = ({ name }) => (
    <li className="flex items-center gap-2 text-sm text-slate-700">
       {/* Using simple check */}
       <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
       <span>{name}</span>
    </li>
);

const TestimonialCard = ({ name, role, text }) => ( // Simplified args
  // Simple testimonial card
  <div className="bg-white rounded-lg shadow-sm border border-slate-200/90 p-6 text-center h-full flex flex-col">
    {/* Quote Icon */}
    <svg className="mx-auto h-6 w-6 text-blue-300 mb-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.685.48-2.205.427-.58 1.16-.94 2.196-1.09v-2.3c-1.326.19-2.4.695-3.224 1.517-.824.822-1.302 1.785-1.434 2.89-.085.72-.073 1.386.035 2.01.124.71.304 1.327.54 1.853.284.616.662 1.108 1.137 1.477.534.417 1.084.63 1.66.63.624 0 1.17-.21 1.64-.628.57-.506.855-1.177.855-2.013zm9.76 0c0-.88-.23-1.618-.69-2.217-.326-.41-.77-.68-1.327-.81-.56-.13-1.08-.14-1.54-.03-.16-.94.09-1.68.48-2.2.42-.58 1.15-.94 2.19-1.09v-2.3c-1.33.18-2.4.69-3.23 1.52-.82.82-1.3 1.79-1.43 2.89-.09.72-.08 1.39.03 2.01.12.71.3 1.33.54 1.85.28.61.66 1.11 1.13 1.47.53.42 1.08.63 1.66.63.62 0 1.17-.21 1.64-.63.57-.5.85-1.17.85-2.01z"/>
    </svg>
    <blockquote className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow italic">
      "{text}"
    </blockquote>
    <footer className="mt-auto pt-4 border-t border-slate-100">
        <p className="font-semibold text-slate-800 text-sm">{name}</p>
        {role && <p className="text-xs text-slate-500">{role}</p>}
    </footer>
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
export default function BasicComputerCoursePage() {

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section - Clean & Simple */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badges Area */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-md border border-blue-200/80">
                 Beginner Friendly
              </span>
              <span className="flex items-center gap-1.5 text-xs text-yellow-700 font-medium bg-yellow-50 px-2.5 py-1 rounded-md border border-yellow-200/80">
                <RatingStars rating={courseDetails.ratings.average} />
                <span className="font-semibold ml-1">{courseDetails.ratings.average}</span>
                ({courseDetails.ratings.count} reviews)
              </span>
              <span className="flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-md border border-green-200/80">
                  <CheckCircle className="h-4 w-4" />
                  Essential Digital Skills
              </span>
            </div>
            {/* End Badges Area */}
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-5">
              {courseDetails.title}
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 mb-6 max-w-2xl mx-auto">
              {courseDetails.tagline}
            </p>
            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500 mb-8">
              <div className="flex items-center gap-1.5"> <CalendarDays className="h-4 w-4 text-blue-500" /> {courseDetails.duration} </div>
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <Laptop className="h-4 w-4 text-blue-500" /> {courseDetails.format} </div>
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <BarChart className="h-4 w-4 text-blue-500" /> {courseDetails.level} </div>
            </div>
             {/* Price & Guarantee */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-8">
              <PriceDisplay original={courseDetails.price.original} discounted={courseDetails.price.discounted} />
              <div className="flex items-center text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1.5 rounded-md border border-blue-200/70">
                <Award className="h-4 w-4 mr-1.5" />
                {courseDetails.price.guarantee}
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
              <div className="flex-shrink-0 transition-transform duration-200 hover:scale-[1.03]">
                <Button size="lg" asChild className="w-full sm:w-auto rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 group">
                  <Link href={courseDetails.enrollLink} className="flex items-center">
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                  </Link>
                </Button>
              </div>
               {/* Next Batch Info Box */}
              <div className="text-center sm:text-left bg-slate-100 border border-slate-200/80 rounded-lg px-4 py-2 flex flex-col justify-center">
                <p className="text-xs text-slate-500 mb-0.5">Start Learning</p>
                <p className="font-semibold text-slate-700">{courseDetails.nextBatch}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Quick Preview - Simplified */}
      <section className="border-b border-slate-200/80 bg-white sticky top-0 z-20 shadow-sm">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
           <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
             <div className="flex items-center gap-3">
                {/* Simple Avatar */}
                <div className="h-9 w-9 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center flex-shrink-0">
                   <User className="h-5 w-5 text-slate-500" />
                </div>
               <div>
                 <p className="font-medium text-sm text-slate-900">Instructor: {courseDetails.instructor.name}</p>
                 <p className="text-xs text-slate-500">{courseDetails.instructor.title}</p>
               </div>
             </div>
             {/* Removed ratings/enroll from sticky bar for simplicity */}
           </div>
         </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">

          {/* Section 1: Curriculum */}
          <div>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">What You Will Learn</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {curriculumModules.map((module) => (
                    <CurriculumCard key={module.title} {...module} />
                ))}
             </div>
          </div>

          {/* Section 2: Highlights & Tools */}
          <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Course Benefits & Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Takeaways</h3>
                      {courseHighlights.map((highlight) => (
                          <HighlightItem key={highlight.text} icon={highlight.icon} text={highlight.text} />
                      ))}
                  </div>
                   <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Software & Concepts Covered</h3>
                       <ul className="space-y-2.5 bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                           {toolsMastered.map((tool) => (
                               <ToolListItem key={tool.name} name={tool.name} />
                           ))}
                       </ul>
                       <p className="text-xs text-slate-500 italic pt-1">Focus on fundamental operations applicable across common software.</p>
                   </div>
              </div>
          </div>

        


          {/* FAQ Section (Simplified Accordion) */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Common Questions</h2>
            <div className="max-w-6xl mx-auto">
                 <Accordion type="single" collapsible className="w-full space-y-3">
                     {faqs.map((faq, index) => (
                     <AccordionItem
                         key={index}
                         value={`item-${index}`}
                         className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs data-[state=open]:shadow-md transition-shadow"
                     >
                         <AccordionTrigger className="px-5 py-3 text-left font-medium text-slate-800 text-sm hover:no-underline hover:bg-slate-50 transition-colors data-[state=open]:text-blue-700 data-[state=open]:bg-blue-50/50">
                           {faq.question}
                         </AccordionTrigger>
                         <AccordionContent className="px-5 pb-4 text-slate-600 pt-1 text-sm leading-relaxed">
                           {faq.answer}
                         </AccordionContent>
                     </AccordionItem>
                     ))}
                 </Accordion>
                 <div className="mt-8 text-center">
                     <p className="text-sm text-slate-500 mb-2">Have more questions?</p>
                     <Link href="/contact" className="text-blue-600 hover:underline font-medium text-sm">
                       Contact Us
                     </Link>
                 </div>
             </div>
          </section>

        </div>
      </section>

      {/* Final Enrollment CTA - Simple & Clear */}
      <section className="py-16 md:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Start Learning Today!
             </h2>
             <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
                 Gain essential computer skills and confidence. Enroll now at a special price.
             </p>
            <div className="inline-block transition-transform duration-200 hover:scale-105">
                 <Button size="lg" variant="secondary" asChild className="rounded-lg bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 text-base font-semibold shadow-md transform transition-all duration-200 group">
                     <Link href='/join-course-today'>
                         Enroll For ₹{courseDetails.price.discounted}
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