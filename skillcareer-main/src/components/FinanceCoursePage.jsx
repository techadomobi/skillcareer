"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming this path is correct
import { Separator } from '@/components/ui/separator'; // Assuming this path is correct
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; // Assuming this path is correct
import { ArrowRight, CheckCircle, Users, BarChart, Award, CalendarDays, UserCheck,
  Zap, Star, Laptop, Clock, ShieldCheck, BookOpen, Globe, Target, UsersRound,
  BrainCircuit, User, PiggyBank, CreditCard, TrendingUp, Landmark, FileText,
  Calculator, PieChart, Receipt, Goal, // Finance related icons
  Mail
} from 'lucide-react';

// --- Configuration & Placeholder Data (Finance Focused) ---
const courseDetails = {
  title: "Financial Literacy & Investment Masterclass",
  tagline: "Gain control of your finances, understand investing principles, and build a secure financial future.",
  duration: "6 Weeks (Part-Time)",
  format: "Live Online Sessions + Practical Exercises",
  level: "Beginner Friendly",
  nextBatch: "June 1, 2025", // Update date
  price: {
    original: "60,000", // Example INR
    discounted: "30,000", // Example INR
    guarantee: "Free Financial Health Check Consultation", // Updated guarantee
  },
  ratings: {
    average: 4.7,
    count: 872,
  },
  instructor: {
    name: "Ananya Desai", // Update instructor
    title: "Certified Financial Planner (CFP®)",
    linkedin: "https://linkedin.com/in/ananyadesai-cfp", // Update link
  },
  enrollLink: "/enroll/finance-masterclass", // Update link - Make sure this route exists or change it
};

const curriculumModules = [
  { icon: PiggyBank, title: "Budgeting & Savings Strategies", description: "Master effective budgeting techniques, track expenses, set realistic savings goals, and build an emergency fund.", weeks: "Week 1" },
  { icon: CreditCard, title: "Understanding Debt & Credit Score", description: "Learn about different types of debt, strategies for debt management, and how credit scores work and impact your finances.", weeks: "Week 2" },
  { icon: TrendingUp, title: "Investment Fundamentals", description: "Introduction to stocks, bonds, mutual funds, ETFs. Understand risk tolerance, diversification, and long-term investing concepts.", weeks: "Week 3-4" },
  { icon: Landmark, title: "Retirement Planning Basics", description: "Explore common retirement accounts (like PPF, NPS, EPF equivalents), estimate retirement needs, and start planning early.", weeks: "Week 5" },
  { icon: ShieldCheck, title: "Insurance & Risk Management", description: "Understand the importance of life, health, and other relevant insurance. Learn how to assess your insurance needs.", weeks: "Week 5" },
  { icon: Receipt, title: "Tax Planning Essentials", description: "Learn basic tax-saving strategies relevant to investments and income under Indian tax laws (Section 80C etc.).", weeks: "Week 6" },
];

const courseHighlights = [
  { icon: Target, text: "Develop a personalized financial action plan" },
  { icon: UserCheck, text: "Live Q&A with a Certified Financial Planner®" },
  { icon: BrainCircuit, text: "Understand complex financial concepts easily" },
  { icon: Calculator, text: "Learn practical calculation methods for financial goals" },
  { icon: CheckCircle, text: "Actionable steps to improve your financial health" },
  { icon: CalendarDays, text: "Lifetime access to course materials & resources" },
  { icon: Goal, text: "Set and track progress towards your financial goals" },
  { icon: Users, text: "Access to a supportive community forum" },
  { icon: Award, text: "SkillCareer Certificate of Financial Literacy" },
];

const conceptsMastered = [
  { name: "Budgeting Frameworks (e.g., 50/30/20)" , icon: PieChart },
  { name: "Compound Interest Calculation", icon: Calculator },
  { name: "Risk Assessment Basics", icon: ShieldCheck },
  { name: "Asset Allocation Principles", icon: PieChart },
  { name: "Retirement Goal Setting", icon: Landmark },
  { name: "Credit Score Factors", icon: CreditCard },
  { name: "Basic Tax Savings (80C etc.)", icon: Receipt },
  { name: "Mutual Fund/ETF Basics", icon: TrendingUp },
];

// Data not used in the current layout, but kept for potential future use
const targetAudience = [
  "Individuals seeking financial control & clarity",
  "Young Professionals starting their careers",
  "Couples managing joint finances",
  "Anyone confused about where to start investing",
  "People planning for major life goals (retirement, home)",
  "Anyone wanting to build long-term wealth",
];

const financialOutcomes = [
  { icon: CheckCircle, outcome: "Improved Budgeting Habits & Increased Savings Rate" },
  { icon: CheckCircle, outcome: "Confidence in Making Basic Investment Decisions" },
  { icon: CheckCircle, outcome: "Reduced Financial Anxiety and Stress" },
  { icon: CheckCircle, outcome: "A Clearer Path Towards Retirement Goals" },
  { icon: CheckCircle, outcome: "Better Understanding & Management of Debt" },
  { icon: CheckCircle, outcome: "Foundation for Long-Term Wealth Building" },
];

const testimonials = [
  { name: "Priya Singh", role: "Software Engineer", company: "Tech Corp", text: "Finally feel in control of my money! The budgeting module was a game-changer. I now save consistently every month." },
  { name: "Rahul Verma", role: "Marketing Manager", company: "Retail Chain", text: "Investing always seemed intimidating. This course broke it down clearly. I've started my first SIP with confidence." },
  { name: "Aisha Khan", role: "Freelancer", company: "Self-Employed", text: "As a freelancer, planning finances was tough. Ananya's guidance helped me set up systems for taxes, savings, and even retirement." },
];
// End of unused data

const faqs = [
  { question: "Is this course suitable if I have zero finance knowledge?", answer: "Absolutely! This masterclass is designed for beginners. We start with the very basics and build up progressively. No prior finance background is needed." },
  { question: "Will I get specific investment recommendations?", answer: "This course focuses on financial education and principles. We teach you *how* to evaluate options, but we do not provide personalized investment advice or recommendations for specific stocks or funds." },
  { question: "What tools are required for the course?", answer: "No special software is needed. We will use basic online calculators and provide spreadsheet templates for budgeting and planning exercises. Access to a computer and internet is sufficient." },
  { question: "How is this different from hiring a financial advisor?", answer: "This course empowers you with knowledge to make informed decisions yourself and understand advice you might receive. A financial advisor provides ongoing personalized advice and management, often for a fee or commission." },
  { question: "Can my spouse/partner join with me?", answer: "We recommend partners enroll individually to maximize participation in exercises and Q&A, but couples often find it beneficial to take the course together to align their financial goals. Contact us for potential group discounts." },
  { question: "Is there a payment plan available?", answer: "Yes, we offer interest-free installment plans. You can typically pay in 2 or 3 monthly installments. Please check the enrollment page for details." },
];

// --- Helper Components (Blue Theme) ---
const CurriculumCard = ({ icon: Icon, title, description, weeks }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200/80 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="flex items-center justify-between gap-4 mb-3">
      <div className="flex-shrink-0 rounded-lg bg-blue-100 p-2.5">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <span className="text-xs font-medium text-blue-700 bg-blue-50 py-1 px-2 rounded-full border border-blue-100">
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

const ConceptItem = ({ icon: Icon, name }) => (
     <li className="flex items-center gap-3 text-sm text-slate-700 bg-white p-3 rounded-md border border-slate-100 shadow-sm hover:shadow transition-shadow">
        <Icon className="h-5 w-5 text-blue-600 flex-shrink-0" />
        <span>{name}</span>
    </li>
);

// OutcomeItem not currently used in the layout, but defined
const OutcomeItem = ({ icon: Icon, outcome }) => (
    <div className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <Icon className="h-5 w-5 text-blue-500 flex-shrink-0" />
        <span className="text-slate-700 font-medium text-sm">{outcome}</span>
    </div>
);

// TestimonialCard not currently used in the layout, but defined
const TestimonialCard = ({ name, role, company, text }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200/90 p-6 relative transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-slate-300">
    <div className="absolute -top-3 left-5 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
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

// --- Main Component (Blue Theme) ---
export default function FinanceCoursePageNoTabsImagesBlue() { // Renamed component

  // Define a placeholder link for the FAQ contact button if needed
  const contactSupportLink = "/contact-support"; // Change this to your actual contact page URL

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50/60 via-white to-white pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* BADGES AREA */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide border border-blue-200/80">
                Early Bird Offer: 50% OFF
              </span>
              <span className="flex items-center gap-1.5 text-xs text-yellow-700 font-medium bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200/80">
                <RatingStars rating={courseDetails.ratings.average} />
                <span className="font-semibold">{courseDetails.ratings.average}</span>
                ({courseDetails.ratings.count} reviews)
              </span>
               <span className="flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200/80">
                  <User className="h-4 w-4" />
                  <span>{courseDetails.level}</span>
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
              <div className="flex items-center gap-1.5"> <CalendarDays className="h-4 w-4 text-blue-500" /> {courseDetails.duration} </div>
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <Laptop className="h-4 w-4 text-blue-500" /> {courseDetails.format} </div>
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <BarChart className="h-4 w-4 text-blue-500" /> {courseDetails.level} </div>
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
                {/* --- CORRECT asChild Usage --- */}
                <Button size="lg" asChild className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-8 py-3.5 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                  {/* Single Direct Child: <Link> */}
                  <Link href='/join-course-today'>
                    Register for Masterclass
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                  </Link>
                </Button>
                 {/* --- END CORRECT asChild Usage --- */}
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
                <p className="font-medium text-sm text-slate-900">Led by <Link href={courseDetails.instructor.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{courseDetails.instructor.name}</Link></p>
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
                  {/* --- CORRECT asChild Usage --- */}
                 <Button size="sm" asChild className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium shadow transition-all duration-200">
                     {/* Single Direct Child: <Link> */}
                     <Link href='/join-course-today'>
                        Enroll Now
                     </Link>
                 </Button>
                  {/* --- END CORRECT asChild Usage --- */}
             </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-20 bg-slate-50/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">

          {/* Section 1: Curriculum */}
          <div>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Masterclass Curriculum</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {curriculumModules.map((module) => (
                    <CurriculumCard key={module.title} {...module} />
                ))}
             </div>
          </div>

          <Separator className="my-8 md:my-12 bg-slate-200/80"/> {/* Increased margin for better separation */}

          {/* Section 3: Highlights & Concepts/Tools */}
          <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Why This Masterclass?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12"> {/* Increased gap */}
                  <div className="lg:col-span-2 space-y-5">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Benefits & Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {courseHighlights.map((highlight) => (
                          <HighlightItem key={highlight.text} icon={highlight.icon} text={highlight.text} />
                        ))}
                      </div>
                  </div>
                   <div className="lg:col-span-1 space-y-5 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm"> {/* Added background/padding */}
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Concepts & Tools You'll Understand</h3>
                       <ul className="space-y-2.5"> {/* Increased spacing */}
                          {conceptsMastered.map((concept) => (
                              <ConceptItem key={concept.name} icon={concept.icon} name={concept.name} />
                          ))}
                       </ul>
                       <p className="text-xs text-slate-500 italic pt-2">Focus on practical understanding and application.</p>
                   </div>
              </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-8 md:py-6 bg-white border-t border-slate-100">
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
            <div className="mt-2 text-center">
                <p className="text-sm text-slate-500 mb-3">Can't find your answer?</p>

              
              
                
                 <Button variant="outline" size="sm" asChild className="rounded-lg border-slate-400 text-slate-700 hover:bg-slate-100">
                    <Link href='/contact'>
                       <span className="flex items-center justify-center">
                           <Mail className="mr-2 h-4 w-4" />
                           Contact Our Support Team
                       </span>
                    </Link>
                 </Button>
                 

            </div>
        </div>
      </section> */}

      {/* Final Enrollment CTA */}
      <section className="py-12 md:py-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden relative"> {/* Increased padding */}
         {/* Updated SVG Background Pattern with Blue colors */}
         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2080%2080%22%20width%3D%2280%22%20height%3D%2280%22%20preserveAspectRatio%3D%22none%22%3E%3Cpath%20d%3D%22M0%200h80v80H0z%22%20fill%3D%22%232563EB%22%2F%3E%3Cpath%20d%3D%22M10%200h1v80h-1z%22%20fill%3D%22%231D4ED8%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M20%200h1v80h-1z%22%20fill%3D%22%231D4ED8%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M30%200h1v80h-1z%22%20fill%3D%22%231D4ED8%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M40%200h1v80h-1z%22%20fill%3D%22%231D4ED8%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M50%200h1v80h-1z%22%20fill%3D%22%231D4ED8%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M60%200h1v80h-1z%22%20fill%3D%22%231D4ED8%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M70%200h1v80h-1z%22%20fill%3D%22%231D4ED8%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2010h80v1H0z%22%20fill%3D%22%231D4ED8%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2020h80v1H0z%22%20fill%3D%22%231D4ED8%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2030h80v1H0z%22%20fill%3D%22%231D4ED8%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2040h80v1H0z%22%20fill%3D%22%231D4ED8%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2050h80v1H0z%22%20fill%3D%22%231D4ED8%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2060h80v1H0z%22%20fill%3D%22%231D4ED8%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M0%2070h80v1H0z%22%20fill%3D%22%231D4ED8%22%20fill-opacity%3D%22.1%22%2F%3E%3C%2Fsvg%3E')] opacity-[0.07]"></div> {/* Slightly increased opacity */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center"> {/* Increased max-width */}
             <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
                Take Control of Your Financial Future
             </h2>
             <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
                 Register for the Financial Literacy Masterclass today. Invest in your knowledge and secure your tomorrow. Limited seats available!
             </p>
            <div className="inline-block transition-transform duration-200 hover:scale-105">
                {/* --- CORRECT asChild Usage --- */}
                 <Button size="xl" variant="secondary" asChild className="rounded-xl bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 text-lg font-semibold shadow-xl transform transition-all duration-200 border-2 border-white/30 group">
                    {/* Single Direct Child: <Link> */}
                     <Link href={courseDetails.enrollLink}>
                         Register For ₹{courseDetails.price.discounted} Now
                         <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                     </Link>
                 </Button>
                 {/* --- END CORRECT asChild Usage --- */}
            </div>
            <p className="text-xs text-blue-200 mt-4">{courseDetails.price.guarantee}</p>
        </div>
      </section>

    </div>
  );
}