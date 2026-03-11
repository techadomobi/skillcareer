"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    ArrowRight, CheckCircle, Users, BarChart, Award, CalendarDays, UserCheck,
    Zap, Star, Laptop, Clock, ShieldCheck, BookOpen, Globe, Target, UsersRound,
    BrainCircuit, User, 
    Palette, Figma, Sketch, Framer, PenTool, 
    LayoutGrid, Smartphone, Monitor, 
    Lightbulb, UsersThree, MessageSquare, Mail, ChevronDown, 
    PiIcon
} from 'lucide-react';

// --- Utility function (if not globally available) ---
const cn = (...classes) => classes.filter(Boolean).join(" ");


const courseDetails = {
  title: "UI Design Mastery: From Fundamentals to Figma",
  tagline: "Learn the principles of user interface design and master industry-standard tools like Figma to create stunning, user-friendly digital products.",
  duration: "8 Weeks (Part-Time)",
  format: "Live Online Workshops + Portfolio Projects",
  level: "Beginner to Intermediate",
  nextBatch: "July 15, 2025", 
  price: {
    original: "75,000", 
    discounted: "37,500", 
    guarantee: "Portfolio Review Session Included", 
  },
  ratings: {
    average: 4.8,
    count: 1154,
  },
  instructor: {
    name: "Rohan Sharma", 
    title: "Senior Product Designer @ Creative Solutions",
    linkedin: "https://linkedin.com/in/rohansharma-designer", 
    // Optional: Add an image URL
    // imageUrl: "/path/to/rohan-sharma.jpg"
  },
  enrollLink: "/enroll/ui-design-mastery", // Update link
};

const curriculumModules = [
  { icon: Palette, title: "UI Design Fundamentals", description: "Core principles, visual hierarchy, color theory, typography, layout design, and usability heuristics.", weeks: "Week 1-2" },
  { icon: Figma, title: "Mastering Figma: Basics to Advanced", description: "Interface overview, frames, shapes, components, auto layout, prototyping, collaboration, and plugins.", weeks: "Week 3-4" },
  { icon: LayoutGrid, title: "Designing User Interfaces", description: "Wireframing, creating high-fidelity mockups for web and mobile, design systems basics, and style guides.", weeks: "Week 5" },
  { icon: Smartphone, title: "Prototyping & Interaction Design", description: "Building interactive prototypes, microinteractions, user flows, and preparing designs for handoff.", weeks: "Week 6" },
  { icon: PenTool, title: "Portfolio Building & Career Prep", description: "Creating compelling case studies, building your design portfolio, resume tips, and interview preparation.", weeks: "Week 7" },
  { icon: PenTool, title: "Portfolio Building Enhancement", description: "Creating compelling case studies, building your design portfolio and enhanching it, resume tips, and interview preparation.", weeks: "Week 8" },

];

const courseHighlights = [
  { icon: CheckCircle, text: "Build a job-ready UI design portfolio" },
  { icon: Figma, text: "Hands-on mastery of Figma & design tools" },
  { icon: BrainCircuit, text: "Understand core UI design principles deeply" },
  { icon: UserCheck, text: "Live feedback sessions with the instructor" },
  { icon: LayoutGrid, text: "Design interfaces for web and mobile apps" },
  { icon: CalendarDays, text: "Lifetime access to course materials & updates" },
//   { icon: UsersThree, text: "Join a vibrant community of aspiring designers" },
  { icon: Award, text: "Certificate of UI Design Proficiency" },
];

const toolsCovered = [
  { name: "Figma", icon: Figma },
  { name: "FigJam (Basics)", icon: Lightbulb }, 
  { name: "Prototyping Tools", icon: Smartphone },
  { name: "Design System Concepts", icon: LayoutGrid },
  // Add Sketch, Adobe XD etc. if covered
];

const targetAudience = [
  "Aspiring UI/UX Designers",
  "Graphic Designers transitioning to UI",
  "Web Developers wanting design skills",
  "Product Managers seeking design understanding",
  "Anyone passionate about creating digital interfaces",
  "Career changers entering the tech industry",
];

const learningOutcomes = [
  { icon: CheckCircle, outcome: "Create professional UI designs using Figma" },
  { icon: CheckCircle, outcome: "Apply design principles effectively" },
  { icon: CheckCircle, outcome: "Build interactive prototypes" },
  { icon: CheckCircle, outcome: "Develop a strong design portfolio" },
  { icon: CheckCircle, outcome: "Understand design handoff processes" },
  { icon: CheckCircle, outcome: "Collaborate using design tools" },
];

const testimonials = [
  { name: "Sneha Patel", role: "Junior UI Designer", company: "Startup Hub", text: "This course gave me the confidence and skills to land my first UI design job! The Figma lessons were incredibly thorough." },
  { name: "Amit Kumar", role: "Frontend Developer", company: "Tech Innovations", text: "As a developer, understanding UI principles has made me so much better at my job. Rohan explains complex topics clearly." },
  { name: "Priya Reddy", role: "Graphic Designer", company: "Freelancer", text: "I wanted to move into digital design, and this course was the perfect launchpad. The portfolio project was invaluable." },
];

const faqs = [
  { question: "Is this course beginner-friendly?", answer: "Yes! We start with the absolute fundamentals of UI design and Figma. No prior design experience is required, although familiarity with computers is essential." },
  { question: "What software do I need?", answer: "The primary tool we use is Figma, which has a generous free plan sufficient for the course. We'll guide you on setup. Access to a computer (Mac or Windows) and a stable internet connection is necessary." },
  { question: "Will I get a job after this course?", answer: "We provide comprehensive training, portfolio guidance, and career prep to make you job-ready. While we cannot guarantee job placement, many graduates have successfully transitioned into UI design roles." },
  { question: "How are the live sessions conducted?", answer: "Live sessions are conducted via video conferencing (e.g., Zoom) featuring interactive workshops, Q&A, and design reviews. Recordings are provided if you miss a session." },
  { question: "Is there support outside of live sessions?", answer: "Yes, you'll have access to a dedicated community forum (e.g., Discord or Slack) to ask questions, share work, and interact with peers and the instructor throughout the week." },
  { question: "Do I get a certificate?", answer: "Yes, upon successful completion of the course requirements, including portfolio projects, you will receive a Certificate of UI Design Proficiency." },
];


// --- Helper Components 
const CurriculumCard = ({ icon: Icon, title, description, weeks }) => (
  <div
    className="bg-white p-6 rounded-xl border border-slate-200/80 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
  >
    <div className="flex items-center justify-between gap-4 mb-3">
      <div className="flex-shrink-0 rounded-lg bg-indigo-100 p-2.5">
        <Icon className="h-5 w-5 text-indigo-600" />
      </div>
      <span className="text-xs font-medium text-indigo-700 bg-indigo-50 py-1 px-2 rounded-full border border-indigo-100">
        {weeks}
      </span>
    </div>
    <h4 className="text-base font-semibold text-slate-800 mb-2">{title}</h4>
    <p className="text-sm text-slate-600 flex-grow">{description}</p>
  </div>
);

const HighlightItem = ({ icon: Icon, text }) => (
  <div className="flex items-start sm:items-center gap-3 bg-slate-50/80 px-4 py-3 rounded-lg border border-slate-200/70 transition-transform duration-200 hover:translate-x-1 group">
    <PiIcon className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5 sm:mt-0 transition-colors group-hover:text-indigo-700" />
    <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-800">{text}</span>
  </div>
);

const ToolItem = ({ icon: Icon, name }) => (
     <li className="flex items-center gap-3 text-sm text-slate-700 bg-white p-3 rounded-md border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <Icon className="h-5 w-5 text-indigo-600 flex-shrink-0" />
        <span>{name}</span>
    </li>
);

const OutcomeItem = ({ icon: Icon, outcome }) => (
    <div
      className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
    >
        <Icon className="h-5 w-5 text-green-500 flex-shrink-0" />
        <span className="text-slate-700 font-medium text-sm">{outcome}</span>
    </div>
);


const TestimonialCard = ({ name, role, company, text }) => (
  <div
    className="bg-white rounded-xl shadow-sm border border-slate-200/90 p-6 relative transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-slate-300"
  >
    <div className="absolute -top-3 left-5 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
        <MessageSquare className="text-white h-4 w-4"/>
    </div>
    <p className="text-slate-600 text-sm leading-relaxed mb-5 mt-4 italic">"{text}"</p>
    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
      {/* Placeholder for image */}
       <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-medium text-sm flex-shrink-0">
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
    <span className="text-3xl font-bold text-indigo-600">₹{discounted}</span>
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

// --- Main Component 
export default function UIDesignCoursePage() {

  
  const contactSupportLink = "/contact-support"; 

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50/60 via-white to-white pt-16 pb-12 lg:pt-12 lg:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* BADGES AREA */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
              <span className="bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide border border-indigo-200/80">
                Early Bird Offer: 50% OFF
              </span>
              <span className="flex items-center gap-1.5 text-xs text-yellow-700 font-medium bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200/80">
                <RatingStars rating={courseDetails.ratings.average} />
                <span className="font-semibold">{courseDetails.ratings.average}</span>
                ({courseDetails.ratings.count} reviews)
              </span>
               <span className="flex items-center gap-1.5 bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-purple-200/80">
                  <User className="h-4 w-4" />
                  <span>{courseDetails.level}</span>
              </span>
            </div>
            {/* Title, Tagline etc. */}
            <h1
              className="text-4xl font-extrabold tracking-tight  sm:text-5xl lg:text-6xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600"
            >
              {courseDetails.title}
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 mb-6 max-w-3xl mx-auto">
              {courseDetails.tagline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500 mb-8">
              <div className="flex items-center gap-1.5"> <CalendarDays className="h-4 w-4 text-indigo-500" /> {courseDetails.duration} </div>
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <Laptop className="h-4 w-4 text-indigo-500" /> {courseDetails.format} </div>
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <BarChart className="h-4 w-4 text-indigo-500" /> {courseDetails.level} </div>
            </div>
             <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-8">
              <PriceDisplay original={courseDetails.price.original} discounted={courseDetails.price.discounted} />
              <div className="flex items-center text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200/70">
                <CheckCircle className="h-4 w-4 mr-1.5" />
                {courseDetails.price.guarantee}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
              <div className="flex-shrink-0 transition-transform duration-200 hover:scale-[1.03]">
                <Button size="lg" asChild className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-purple-700 px-8 py-3.5 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Link href='/join-course-today'>
                    Enroll in Masterclass
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

      {/* Sticky Instructor Bar */}
      <section className="border-b border-slate-200/80 bg-white sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              {courseDetails.instructor.imageUrl ? (
                 <img src={courseDetails.instructor.imageUrl} alt={courseDetails.instructor.name} className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"/>
              ) : (
                 <div className="h-10 w-10 rounded-full bg-indigo-100 border-2 border-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-indigo-500" />
                 </div>
              )}
              <div>
                <p className="font-medium text-sm text-slate-900">Led by <Link href={courseDetails.instructor.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">{courseDetails.instructor.name}</Link></p>
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
                 <Button size="sm" asChild className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm font-medium shadow transition-all duration-200">
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

          {/* Section: Curriculum */}
          <div>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Course Curriculum</h2>
             <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
             >
                {curriculumModules.map((module) => (
                    <CurriculumCard key={module.title} {...module} />
                ))}
             </div>
          </div>

          

          {/* Section: Highlights & Tools */}
          {/* <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">What You'll Master</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
                  <div className="lg:col-span-2 space-y-5">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Benefits & Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {courseHighlights.map((highlight) => (
                          <HighlightItem key={highlight.text} icon={highlight.icon} text={highlight.text} />
                        ))}
                      </div>
                  </div>
                   <div className="lg:col-span-1 space-y-5 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Tools You'll Use</h3>
                       <ul className="space-y-2.5">
                          {toolsCovered.map((tool) => (
                              <ToolItem key={tool.name} icon={tool.icon} name={tool.name} />
                          ))}
                       </ul>
                       <p className="text-xs text-slate-500 italic pt-2">Focus on industry-standard software.</p>
                   </div>
              </div>
          </div> */}

        

           {/* Section: Learning Outcomes */}
           <div>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Your Transformation</h2>
             <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
             >
                {learningOutcomes.map((outcome) => (
                    <OutcomeItem key={outcome.outcome} icon={outcome.icon} outcome={outcome.outcome} />
                ))}
             </div>
          </div>

          
           <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-800 mb-6">Who is this Masterclass For?</h2>
              <div className="flex flex-wrap justify-center gap-2">
                  {targetAudience.map((audience, index) => (
                      <span key={index} className="text-sm bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full border border-indigo-100">
                          {audience}
                      </span>
                  ))}
              </div>
          </div>


           <Separator className="my-8 md:my-12 bg-slate-200/80"/>

       
          <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Success Stories</h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                  {testimonials.map((testimonial) => (
                      <TestimonialCard key={testimonial.name} {...testimonial} />
                  ))}
              </div>
          </div>

        </div>
      </section>


      {/* FAQ Section */}
      {/* <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
                <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                Have Questions?
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Frequently Asked Questions
                </h2>
            </div>
            <div className="w-full space-y-4">
                <Accordion type="single" collapsible>
                    {faqs.map((faq, index) => (
                    <div key={index}> 
                        <AccordionItem
                            value={`item-${index}`}
                            className="bg-slate-50/80 border border-slate-200/80 rounded-xl overflow-hidden shadow-sm data-[state=open]:bg-white data-[state=open]:shadow-md transition-all"
                        >
                            <AccordionTrigger className="px-6 py-4 text-left font-medium text-slate-800 hover:no-underline hover:bg-slate-100/50 transition-colors data-[state=open]:text-indigo-700">
                            {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-5 text-slate-600 pt-1 text-sm leading-relaxed">
                            {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </div>
                    ))}
                </Accordion>
            </div>
            <div className="mt-10 text-center">
                <p className="text-sm text-slate-500 mb-3">Can&apos;t find your answer?</p>
                <Button variant="outline" size="sm" asChild className="rounded-lg border-slate-400 text-slate-700 hover:bg-slate-100 hover:text-indigo-600 hover:border-indigo-300">
                   <Link href={contactSupportLink}>
                       <span className="flex items-center justify-center">
                           <Mail className="mr-2 h-4 w-4" />
                           Contact Support
                       </span>
                   </Link>
                </Button>
            </div>
        </div>
      </section> */}

      {/* Final Enrollment CTA */}
      <section className="py-8 md:py-8 bg-gradient-to-br from-indigo-500 via-blue-500 to-indigo-600 text-white overflow-hidden relative">
         {/* Optional pattern overlay */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08)_0%,_transparent_50%)] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
             <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
                Ready to Become a UI Design Pro?
             </h2>
             <p className="text-lg text-indigo-100 mb-8 max-w-xl mx-auto">
                 Enroll in the UI Design Mastery course today and start building the interfaces of tomorrow. Limited spots available for the next batch!
             </p>
            <div className="inline-block transition-transform duration-200 hover:scale-105">
                 <Button size="xl" variant="secondary" asChild className="rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 px-10 py-4 text-lg font-semibold shadow-xl transform transition-all duration-200 border-2 border-white/30 group">
                 <Link href='/join-course-today'>
                         Enroll Now for ₹{courseDetails.price.discounted}
                         <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                     </Link>
                 </Button>
            </div>
            <p className="text-xs text-indigo-200 mt-4">{courseDetails.price.guarantee}</p>
        </div>
      </section>

    </div>
  );
}