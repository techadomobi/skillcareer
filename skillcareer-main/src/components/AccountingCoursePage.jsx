
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Users, BarChart, Award, CalendarDays, UserCheck,
  Zap, Star, Laptop, Clock, ShieldCheck, BookOpen, Globe, Target, UsersRound,
  BrainCircuit, User, PiggyBank, CreditCard, TrendingUp, Landmark, FileText,
  Calculator, PieChart, Receipt, Goal, Scale, 
  Mail, Building 
} from 'lucide-react';

// --- Configuration & Placeholder Data (Accounting Focused) ---
const courseDetails = {
  title: "Professional Accounting & Taxation Master Course",
  tagline: "Master Accounting Principles, Tally ERP, GST Compliance, and Financial Reporting for a successful career.",
  duration: "10 Weeks (Part-Time)",
  format: "Live Online + Offline Practical Sessions",
  level: "Beginner to Professional",
  nextBatch: "July 10, 2025", // Update date
  price: {
    original: "75,000", // Example INR
    discounted: "37,500", // Example INR
    guarantee: "Includes Free Tally Practice Software", // Updated guarantee
  },
  ratings: {
    average: 4.8,
    count: 1150,
  },
  instructor: {
    name: "Rajesh Kumar", // Update instructor
    title: "Chartered Accountant (CA) & Tally Expert",
    linkedin: "https://linkedin.com/in/rajeshkumar-ca", // Update link
  },
  enrollLink: "/enroll/accounting-taxation", // Update link
};

const curriculumModules = [
  { icon: Scale, title: "Accounting Fundamentals", description: "Master the core principles: double-entry system, accounting equation, journal entries, ledger posting, and trial balance preparation.", weeks: "Week 1-2" },
  { icon: FileText, title: "Financial Statement Preparation", description: "Learn to prepare key financial statements: Trading Account, Profit & Loss Account, and Balance Sheet accurately.", weeks: "Week 3" },
  { icon: Laptop, title: "Tally ERP 9 / Prime Mastery", description: "Hands-on training from company creation, voucher entries, inventory management to generating essential reports in Tally.", weeks: "Week 4-6" },
  { icon: Receipt, title: "GST Concepts & Compliance", description: "Understand GST laws, registration, input tax credit (ITC), return filing (GSTR-1, GSTR-3B), and E-Way Bill generation.", weeks: "Week 7-8" },
  { icon: Landmark, title: "Income Tax Basics & TDS", description: "Introduction to income tax slabs, heads of income, basic deductions, and understanding Tax Deducted at Source (TDS) concepts.", weeks: "Week 9" },
  { icon: Building, title: "Advanced Topics & Reporting", description: "Bank reconciliation statements (BRS), finalization of accounts, MIS reporting, and introduction to auditing concepts.", weeks: "Week 10" },
];

const courseHighlights = [
  { icon: Laptop, text: "Become proficient in Tally ERP / Prime Software" },
  { icon: Receipt, text: "Gain practical skills in GST filing & compliance" },
  { icon: UserCheck, text: "Learn from a practicing Chartered Accountant" },
  { icon: FileText, text: "Master preparation of key financial statements" },
  { icon: CheckCircle, text: "Develop job-ready accounting & taxation skills" },
  { icon: CalendarDays, text: "Lifetime access to recorded sessions & study material" },
  { icon: Zap, text: "Hands-on case studies and practical assignments" },
  { icon: Users, text: "Dedicated forum for doubt clearing & support" },
  { icon: Award, text: "SkillCareer Professional Accounting Certificate" },
];

const skillsGained = [
  { name: "Double-Entry Bookkeeping", icon: Scale },
  { name: "Financial Statement Analysis (Basic)", icon: BarChart },
  { name: "Tally ERP / Prime Operations", icon: Laptop },
  { name: "GST Return Filing Concepts", icon: Receipt },
  { name: "TDS Compliance Understanding", icon: FileText },
  { name: "Bank Reconciliation (BRS)", icon: Landmark },
  { name: "Payroll Processing Basics (Tally)", icon: Users },
  { name: "Inventory Management (Tally)", icon: Building },
];

const targetAudience = [
  "B.Com, M.Com, MBA Finance Students & Graduates",
  "Aspiring Accountants & Tax Professionals",
  "Small Business Owners managing their own books",
  "Individuals seeking jobs in Accounting/Finance roles",
  "Anyone needing practical Tally & GST skills",
  "Career changers moving into finance/accounts",
];

const careerOutcomes = [
  { icon: CheckCircle, outcome: "Qualify for roles like Accounts Executive, Tally Operator" },
  { icon: CheckCircle, outcome: "Ability to independently manage small business accounts" },
  { icon: CheckCircle, outcome: "Proficiency in GST filing and compliance tasks" },
  { icon: CheckCircle, outcome: "Strong foundation for advanced accounting or CA/CMA studies" },
  { icon: CheckCircle, outcome: "Skills for roles like Junior Accountant, Tax Assistant" },
  { icon: CheckCircle, outcome: "Confidence in using Tally ERP for business operations" },
];

const testimonials = [
  { name: "Amit Patel", role: "B.Com Graduate", company: "Seeking Job", text: "This course gave me the practical Tally and GST skills my degree lacked. Feel much more confident for interviews now!" },
  { name: "Sunita Sharma", role: "Small Business Owner", company: "Craft Store", text: "Managing my business accounts was a headache. Rajesh sir explained everything clearly. Now I handle my GST and Tally myself." },
  { name: "Vikram Singh", role: "Accounts Assistant", company: "Trading Co.", text: "Needed to upgrade my Tally skills. The hands-on sessions were excellent. Learned advanced features I use daily at work." },
];

const faqs = [
  { question: "Is prior accounting knowledge required?", answer: "No, this course starts from the absolute basics of accounting principles, making it suitable for beginners and those from non-commerce backgrounds." },
  { question: "Which version of Tally is taught?", answer: "We primarily focus on Tally Prime, the latest version, but also cover key concepts applicable to Tally ERP 9, ensuring you're comfortable with both." },
  { question: "Do I need to purchase Tally software?", answer: "We provide access to a practice environment or Tally Educational version for learning purposes during the course duration, included in the fee." },
  { question: "What are the job prospects after this course?", answer: "Graduates can apply for roles like Accounts Executive, Junior Accountant, Tally Operator, GST Assistant, and other entry-to-mid level positions in accounts departments of various industries." },
  { question: "How practical is the training?", answer: "The course is highly practical with numerous hands-on exercises, case studies, and assignments focusing on real-world accounting scenarios using Tally and covering GST compliance." },
  { question: "Is there support for doubt clearing?", answer: "Yes, we have live Q&A sessions during classes and a dedicated online forum where you can post questions and interact with the instructor and peers." },
];

// --- Helper Components ---
const CurriculumCard = ({ icon: Icon, title, description, weeks }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200/80 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="flex items-center justify-between gap-4 mb-3">
      <div className="flex-shrink-0 rounded-lg bg-sky-100 p-2.5">
        <Icon className="h-5 w-5 text-sky-600" />
      </div>
      <span className="text-xs font-medium text-sky-700 bg-sky-50 py-1 px-2 rounded-full border border-sky-100">
        {weeks}
      </span>
    </div>
    <h4 className="text-base font-semibold text-slate-800 mb-2">{title}</h4>
    <p className="text-sm text-slate-600 flex-grow">{description}</p>
  </div>
);   



const HighlightItem = ({ icon: Icon, text }) => (
  <div className="flex items-start sm:items-center gap-3 bg-slate-50 px-4 py-3 rounded-lg border border-slate-200/70 transition-transform duration-200 hover:translate-x-1 group">
    <Icon className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5 sm:mt-0 transition-colors group-hover:text-sky-700" />
    <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-800">{text}</span>
  </div>
);

const SkillItem = ({ icon: Icon, name }) => (
     <li className="flex items-center gap-3 text-sm text-slate-700 bg-white p-3 rounded-md border border-slate-100 shadow-sm hover:shadow transition-shadow">
        <Icon className="h-5 w-5 text-sky-600 flex-shrink-0" />
        <span>{name}</span>
    </li>
);

const OutcomeItem = ({ icon: Icon, outcome }) => (
    <div className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <Icon className="h-5 w-5 text-green-500 flex-shrink-0" />
        <span className="text-slate-700 font-medium text-sm">{outcome}</span>
    </div>
);


const TestimonialCard = ({ name, role, company, text }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200/90 p-6 relative transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-slate-300">
    <div className="absolute -top-3 left-5 w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
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
    <span className="text-3xl font-bold text-sky-600">₹{discounted}</span>
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
export default function AccountingCoursePageNoTabsImages() {

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-sky-50/60 via-white to-white pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* BADGES AREA */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5">
              <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide border border-sky-200/80">
                50% OFF - Limited Seats
              </span>
              <span className="flex items-center gap-1.5 text-xs text-yellow-700 font-medium bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200/80">
                <RatingStars rating={courseDetails.ratings.average} />
                <span className="font-semibold">{courseDetails.ratings.average}</span>
                ({courseDetails.ratings.count} reviews)
              </span>
               <span className="flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200/80">
                  <Laptop className="h-4 w-4" />
                  <span>Tally Prime Focused</span>
              </span>
            </div>
            {/* Title, Tagline etc. */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-5">
              {courseDetails.title}
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 mb-6 max-w-2xl mx-auto">
              {courseDetails.tagline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500 mb-8">
              <div className="flex items-center gap-1.5"> <CalendarDays className="h-4 w-4 text-sky-500" /> {courseDetails.duration} </div>
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <Laptop className="h-4 w-4 text-sky-500" /> {courseDetails.format} </div>
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <BarChart className="h-4 w-4 text-sky-500" /> {courseDetails.level} </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-8">
              <PriceDisplay original={courseDetails.price.original} discounted={courseDetails.price.discounted} />
              <div className="flex items-center text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200/70">
                <CheckCircle className="h-4 w-4 mr-1.5" />
                {courseDetails.price.guarantee}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
              <div className="flex-shrink-0 transition-transform duration-200 hover:scale-[1.03]">
                <Button size="lg" asChild className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white hover:from-sky-700 hover:to-blue-700 px-8 py-3.5 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Link href='/join-course-today'>
                    Enroll in Course
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
                <p className="font-medium text-sm text-slate-900">Taught by <Link href={courseDetails.instructor.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">{courseDetails.instructor.name}</Link></p>
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
                 <Button size="sm" asChild className="rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-sm font-medium shadow transition-all duration-200">
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
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Course Curriculum</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {curriculumModules.map((module) => (
                    <CurriculumCard key={module.title} {...module} />
                ))}
             </div>
          </div>

          <Separator className="my-2 md:my-2 bg-slate-200/80"/>

          {/* Section 3: Highlights & Skills */}
          <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Why Choose This Course?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-5">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Benefits & Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {courseHighlights.map((highlight) => (
                          <HighlightItem key={highlight.text} icon={highlight.icon} text={highlight.text} />
                        ))}
                      </div>
                  </div>
                   <div className="lg:col-span-1 space-y-5">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Skills You Will Gain</h3>
                       <ul className="space-y-2">
                          {skillsGained.map((skill) => (
                              <SkillItem key={skill.name} icon={skill.icon} name={skill.name} />
                          ))}
                       </ul>
                       <p className="text-xs text-slate-500 italic">Focus on practical, job-ready competencies.</p>
                   </div>
              </div>
          </div>

          <Separator className="my-2 md:my-2 bg-slate-200/80"/>

           {/* Section: Career Outcomes */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Career Outcomes</h2>
            <div className="max-w-4xl mx-auto">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {careerOutcomes.map((item) => (
                        <OutcomeItem key={item.outcome} icon={item.icon} outcome={item.outcome} />
                    ))}
                 </div>
            </div>
          </div>

          {/* <Separator className="my-2 md:my-2 bg-slate-200/80"/> */}

          {/* Section 4: Target Audience */}
          {/* <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-2 text-center">Who Is This Course For?</h2>
            <div className="max-w-4xl mx-auto">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {targetAudience.map((target) => (
                     <div key={target} className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium text-sm">{target}</span>
                     </div>
                    ))}
                 </div>
                  <div className="mt-10 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-100 text-center shadow-inner">
                     <h4 className="font-semibold text-sky-800 mb-3 text-lg">Become a Job-Ready Accountant</h4>
                     <p className="text-slate-700 max-w-xl mx-auto text-sm leading-relaxed">
                        Gain the essential theoretical knowledge and practical software skills required to excel in today's accounting and taxation job market.
                     </p>
                  </div>
              </div>
          </div> */}

           {/* <Separator className="my-2 md:my-2 bg-slate-200/80"/> */}

          {/* Section 5: Testimonials (Commented Out) */}
          {/*
          <div> ... </div>
          */}

        </div>
      </section>

      {/* FAQ Section (Uncommented) */}
      {/* <section className="py-12 md:py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
                <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                Have Questions?
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
                    <AccordionTrigger className="px-6 py-4 text-left font-medium text-slate-800 hover:no-underline hover:bg-slate-100/50 transition-colors data-[state=open]:text-sky-700">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 text-slate-600 pt-1 text-sm leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
            <div className="mt-10 text-center">
                <p className="text-sm text-slate-500 mb-3">Can&apos;t find your answer?</p>
              
                <Button variant="outline" size="sm" className="rounded-lg border-slate-400 text-slate-700 hover:bg-slate-100">
                   
                    <span className="flex items-center justify-center">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Our Admissions Team
                    </span>
                </Button>
               
            </div>
        </div>
      </section> */}


      {/* Final Enrollment CTA */}
      <section className="py-4 md:py-8 bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800 text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2080%2080%22%20width%3D%2280%22%20height%3D%2280%22%20preserveAspectRatio%3D%22none%22%3E%3Cpath%20d%3D%22M0%200h80v80H0z%22%20fill%3D%22%230369a1%22%2F%3E%3Cpath%20d%3D%22M10%200h1v80h-1z%22%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M20%200h1v80h-1z%22%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M30%200h1v80h-1z%22%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M40%200h1v80h-1z%22%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M50%200h1v80h-1z%22%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M60%200h1v80h-1z%22%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M70%200h1v80h-1z%22%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2010h80v1H0z%22%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2020h80v1H0z%22%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2030h80v1H0z%22%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2040h80v1H0z%22%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2050h80v1H0z%22%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2060h80v1H0z%22%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2070h80v1H0z%22%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%22.1%22%2F%3E%3C%2Fsvg%3E')] opacity-[0.05]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10 text-center">
             <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
                Launch Your Accounting Career
             </h2>
             <p className="text-lg text-sky-100 mb-8 max-w-xl mx-auto">
                 Enroll today to secure your spot and the early bird discount. Get the practical skills employers are looking for.
             </p>
            <div className="inline-block transition-transform duration-200 hover:scale-105">
                 <Button size="xl" variant="secondary" asChild className="rounded-xl bg-white text-sky-700 hover:bg-sky-50 px-10 py-4 text-lg font-semibold shadow-xl transform transition-all duration-200 border-2 border-white/30 group">
                     <Link href='/join-course-today'>
                         Enroll For ₹{courseDetails.price.discounted} Now
                         <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                     </Link>
                 </Button>
            </div>
            <p className="text-xs text-sky-200 mt-4">{courseDetails.price.guarantee}</p>
        </div>
      </section>

    </div>
  );
}