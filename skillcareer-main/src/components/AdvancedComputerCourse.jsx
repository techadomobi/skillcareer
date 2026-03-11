"use client";

import React from 'react';
import Link from 'next/link';
// Make sure these paths match your project structure
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    ArrowRight, CheckCircle, Users, BarChart, Award, CalendarDays, UserCheck,
    Star, Laptop, Clock, ShieldCheck, BookOpen, Globe, Target, UsersRound,
    BrainCircuit, User, // General icons
    FileSpreadsheet, Database, ChartBar, LayoutDashboard, FileBar, Table, PieChart, // Data analysis icons
    Layers, Workflow, Puzzle, // More tech icons
    Mail, ChevronDown // Utility icons
} from 'lucide-react';

// --- Utility function (if not globally available) ---
const cn = (...classes) => classes.filter(Boolean).join(" ");

// --- Configuration & Placeholder Data (Advanced Data Analytics Course Focused - Blue Theme) ---
const courseDetails = {
  title: "Advanced Excel & Power BI Mastery",
  tagline: "Master advanced data analysis, visualization techniques, and build powerful business intelligence dashboards.",
  duration: "8 Weeks (Intensive)",
  format: "Live Lectures, Hands-on Labs & Capstone Project",
  level: "Intermediate to Advanced",
  nextBatch: "August 1, 2025", // Update date
  price: {
    original: "45,000", // Example INR
    discounted: "29,999", // Example INR
    guarantee: "Includes Premium Templates & Dashboard Portfolio", // Updated guarantee
  },
  ratings: {
    average: 4.8,
    count: 645,
  },
  instructor: {
    name: "Priya Sharma", // Update instructor
    title: "Data Analytics Expert & Microsoft Certified Trainer",
    linkedin: "https://linkedin.com/in/priyasharma-analytics", // Update link
    // Optional: Add an image URL if you have one
    // imageUrl: "/path/to/priya-sharma.jpg"
  },
  enrollLink: "/enroll/advanced-excel-powerbi", // Update link (make sure this route exists)
};

const curriculumModules = [
  { icon: FileSpreadsheet, title: "Advanced Excel Formulas & Functions", description: "Master complex functions like XLOOKUP, INDEX MATCH, array formulas, and data modeling techniques.", weeks: "Week 1" },
  { icon: Table, title: "Excel Power Tools & Automation", description: "Power Query, PowerPivot, macros, VBA basics, and automating repetitive tasks with advanced techniques.", weeks: "Week 2" },
  { icon: Workflow, title: "Data Analysis & Statistical Methods", description: "Advanced statistical analysis, forecasting, regression analysis, and what-if scenarios for business insights.", weeks: "Week 3" },
  { icon: ChartBar, title: "Power BI Fundamentals", description: "Data modeling, DAX basics, creating relationships, and building your first interactive dashboards.", weeks: "Week 4" },
  { icon: LayoutDashboard, title: "Advanced Power BI Techniques", description: "Complex DAX formulas, advanced visualizations, custom visuals, and drill-through capabilities.", weeks: "Week 5" },
  { icon: PieChart, title: "Dashboard Design & Storytelling", description: "Information design principles, creating narrative visualizations, and effective presentation of insights.", weeks: "Week 6" },
  { icon: Puzzle, title: "Capstone Project & Portfolio Building", description: "Build real-world dashboards and analytics solutions for your professional portfolio.", weeks: "Week 7" },
  { icon: ChartBar, title: "Portfolio project Finishing Enhancement", description: "Build real-world dashboards and analytics solutions for your professional portfolio project Finishing Enhancement.", weeks: "Week 8" },
];

const courseHighlights = [
  { icon: CheckCircle, text: "Create advanced, interactive dashboards" },
  { icon: BrainCircuit, text: "Master complex Excel formulas and functions" },
  { icon: ChartBar, text: "Build professional-grade Power BI reports" },
  { icon: FileSpreadsheet, text: "Automate repetitive tasks with macros and VBA" },
  { icon: UserCheck, text: "Mentorship from Microsoft-certified expert" },
  { icon: Workflow, text: "Learn data modeling and transformation techniques" },
  { icon: CalendarDays, text: "Access to premium templates and resources" },
  { icon: Award, text: "Certificate in Advanced Data Analytics" },
];

const toolsCovered = [
  { name: "Microsoft Excel (Advanced)", icon: FileSpreadsheet },
  { name: "Power BI Desktop & Service", icon: ChartBar },
  { name: "Power Query & Power Pivot", icon: Table },
  { name: "Excel VBA & Macros", icon: Workflow },
//   { name: "DAX Formulas", icon: Database },
  { name: "Data Visualization Tools", icon: PieChart },
];

const targetAudience = [
  "Professionals in business, finance, or operations",
  "Data analysts looking to upskill",
  "Excel users ready to move beyond basics",
  "Business intelligence specialists",
  "Anyone working with data and reports",
];

const learningOutcomes = [
  { icon: CheckCircle, outcome: "Create complex, automated Excel models" },
  { icon: CheckCircle, outcome: "Build interactive Power BI dashboards" },
  { icon: CheckCircle, outcome: "Perform advanced data analysis and transformation" },
  { icon: CheckCircle, outcome: "Write powerful DAX formulas and queries" },
  { icon: CheckCircle, outcome: "Design visually compelling data stories" },
  { icon: CheckCircle, outcome: "Automate workflows with VBA and macros" },
];

const testimonials = [
  { name: "Rahul Gupta", role: "Financial Analyst", company: "Global Finance Corp", text: "This course completely transformed how I work with data. The advanced Excel techniques alone saved me hours each week on reporting." },
  { name: "Meera Patel", role: "Business Intelligence Analyst", company: "Retail Solutions", text: "Priya's insights into Power BI development are exceptional. I built dashboards that impressed executives and showcased our department's value." },
  { name: "Sanjeev Kumar", role: "Operations Manager", company: "Manufacturing Inc", text: "Learning automation with VBA and advanced Excel functions helped me eliminate manual processes. This course paid for itself within a month." },
];

const faqs = [
  { question: "What are the prerequisites for this course?", answer: "Basic familiarity with Excel (knowing common functions like SUM, AVERAGE, IF statements). No prior Power BI experience is needed, but understanding of basic data concepts is helpful." },
  { question: "Do I need to have Microsoft Office or Power BI installed?", answer: "Yes, you will need Microsoft Excel (2016 or newer recommended) and Power BI Desktop (free download). We'll provide installation instructions before the course begins." },
  { question: "Will this course help me with Microsoft certifications?", answer: "While not specifically designed as a certification prep course, the content aligns well with Microsoft's DA-100 (Analyzing Data with Power BI) and advanced Excel certifications." },
  { question: "How heavy is the workload?", answer: "This course requires approximately 8-10 hours/week for lectures, labs, and the capstone project. The more you practice, the more proficient you'll become." },
  { question: "What kind of projects will we build?", answer: "The capstone project involves creating a comprehensive dashboard solution for a real-world business scenario (e.g., sales analytics, financial reporting, KPI tracking) that showcases all the advanced techniques learned." },
  { question: "Is there career support?", answer: "The course includes portfolio development guidance, tips for showcasing your data skills on LinkedIn, and best practices for demonstrating your new capabilities to employers." },
];

// --- Reusable Components with Blue Theme ---

const CurriculumCard = ({ icon: Icon, title, description, weeks }) => (
  <div
    className="bg-white p-6 rounded-xl border border-slate-200/80 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
  >
    <div className="flex items-center justify-between gap-4 mb-3">
      <div className="flex-shrink-0 rounded-lg bg-blue-100 p-2.5"> {/* Changed from cyan */}
        <Icon className="h-5 w-5 text-blue-600" /> {/* Changed from cyan */}
      </div>
      <span className="text-xs font-medium text-blue-700 bg-blue-50 py-1 px-2 rounded-full border border-blue-100"> {/* Changed from cyan */}
        {weeks}
      </span>
    </div>
    <h4 className="text-base font-semibold text-slate-800 mb-2">{title}</h4>
    <p className="text-sm text-slate-600 flex-grow">{description}</p>
  </div>
);

const HighlightItem = ({ icon: Icon, text }) => (
  <div className="flex items-start sm:items-center gap-3 bg-slate-50/80 px-4 py-3 rounded-lg border border-slate-200/70 transition-transform duration-200 hover:translate-x-1 group">
    <Icon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0 transition-colors group-hover:text-blue-700" /> {/* Changed from sky */}
    <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-800">{text}</span>
  </div>
);

const ToolItem = ({ icon: Icon, name }) => (
     <li className="flex items-center gap-3 text-sm text-slate-700 bg-white p-3 rounded-md border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <Icon className="h-5 w-5 text-blue-600 flex-shrink-0" /> {/* Changed from cyan */}
        <span>{name}</span>
    </li>
);

const OutcomeItem = ({ icon: Icon, outcome }) => (
    <div
      className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
    >
        {/* Keep CheckCircle green for positive connotation */}
        <Icon className="h-5 w-5 text-green-500 flex-shrink-0" />
        <span className="text-slate-700 font-medium text-sm">{outcome}</span>
    </div>
);


const TestimonialCard = ({ name, role, company, text }) => (
  <div
    className="bg-white rounded-xl shadow-sm border border-slate-200/90 p-6 relative transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-slate-300"
  >
    {/* Changed gradient to blues/indigos */}
    <div className="absolute -top-3 left-5 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
        <UserCheck className="text-white h-4 w-4"/>
    </div>
    <p className="text-slate-600 text-sm leading-relaxed mb-5 mt-4 italic">"{text}"</p>
    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
       {/* Changed placeholder colors to blue */}
       <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm flex-shrink-0">
        {name.charAt(0)} {/* Initial */}
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
    {/* Changed price color to blue */}
    <span className="text-3xl font-bold text-blue-600">₹{discounted}</span>
    <span className="text-lg text-slate-400 line-through">₹{original}</span>
  </div>
);

const RatingStars = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      // Keep stars yellow
      <Star key={i} className={`h-4 w-4 ${i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
    ))}
  </div>
);

// --- Main Component (Advanced Data Analytics Course - Blue Theme) ---
export default function AdvancedDataAnalyticsCourseBlue() {

  const contactSupportLink = "/contact-support"; // Define your contact page URL

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section - Blue Theme */}
      <section className="relative bg-gradient-to-b from-blue-50/60 via-white to-white pt-16 pb-12 lg:pt-24 lg:pb-16 overflow-hidden"> {/* Changed gradient */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badges - Blue Theme */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide border border-blue-200/80"> {/* Changed from cyan */}
                Hands-On Learning
              </span>
              {/* Keep rating stars yellow */}
              <span className="flex items-center gap-1.5 text-xs text-yellow-700 font-medium bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200/80">
                <RatingStars rating={courseDetails.ratings.average} />
                <span className="font-semibold">{courseDetails.ratings.average}</span>
                ({courseDetails.ratings.count} reviews)
              </span>
               {/* Changed level badge to blue */}
               <span className="flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200/80">
                  <ShieldCheck className="h-4 w-4" />
                  <span>{courseDetails.level}</span>
              </span>
            </div>
            {/* Title & Tagline - Blue Gradient */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700"> {/* Changed gradient */}
              {courseDetails.title}
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 mb-6 max-w-3xl mx-auto">
              {courseDetails.tagline}
            </p>
            {/* Course Details - Blue Icons */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500 mb-8">
              <div className="flex items-center gap-1.5"> <CalendarDays className="h-4 w-4 text-blue-500" /> {courseDetails.duration} </div> {/* Changed icon color */}
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <Laptop className="h-4 w-4 text-blue-500" /> {courseDetails.format} </div> {/* Changed icon color */}
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <BarChart className="h-4 w-4 text-blue-500" /> {courseDetails.level} </div> {/* Changed icon color */}
            </div>
            {/* Price & Guarantee - Blue Theme */}
             <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-8">
              <PriceDisplay original={courseDetails.price.original} discounted={courseDetails.price.discounted} />
              {/* Changed guarantee badge to blue, kept checkmark green */}
              <div className="flex items-center text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200/70">
                <CheckCircle className="h-4 w-4 mr-1.5 text-green-500" /> {/* Kept check green */}
                {courseDetails.price.guarantee}
              </div>
            </div>
            {/* CTA Buttons - Blue Gradient */}
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
              <div className="flex-shrink-0 transition-transform duration-200 hover:scale-[1.03]">
                {/* Changed button gradient */}
                <Button size="lg" asChild className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 px-8 py-3.5 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Link href="/join-course-today"> {/* Ensure this link is correct */}
                    Apply for Excel & Power BI Course
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

      {/* Sticky Instructor Bar - Blue Theme */}
      <section className="border-b border-slate-200/80 bg-white sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Instructor Info - Blue Theme */}
            <div className="flex items-center gap-3">
              {courseDetails.instructor.imageUrl ? (
                 <img src={courseDetails.instructor.imageUrl} alt={courseDetails.instructor.name} className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"/>
              ) : (
                 /* Changed placeholder background and icon color */
                 <div className="h-10 w-10 rounded-full bg-blue-100 border-2 border-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-blue-500" />
                 </div>
              )}
              <div>
                {/* Changed link color */}
                <p className="font-medium text-sm text-slate-900">Led by <Link href={courseDetails.instructor.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{courseDetails.instructor.name}</Link></p>
                <p className="text-xs text-slate-500">{courseDetails.instructor.title}</p>
              </div>
            </div>
            {/* Ratings - Kept stars yellow */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm">
                <RatingStars rating={courseDetails.ratings.average} />
                <span className="font-medium text-slate-700 ml-1">{courseDetails.ratings.average}</span>
                <span className="text-slate-500">({courseDetails.ratings.count} reviews)</span>
              </div>
            </div>
            {/* Sticky CTA - Blue Button */}
             <div className="block sm:hidden lg:block ml-auto sm:ml-0 flex-shrink-0">
                 {/* Changed button color */}
                 <Button size="sm" asChild className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium shadow transition-all duration-200">
                     <Link href='/join-course-today'> {/* Ensure this link is correct */}
                        Apply Now
                     </Link>
                 </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Main Content Area - Blue Theme */}
      <section className="py-16 lg:py-20 bg-slate-50/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">

          {/* Curriculum Section - Uses Blue CurriculumCard */}
          <div>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Course Curriculum</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:grid-cols-4">
                {curriculumModules.map((module) => (
                    <CurriculumCard key={module.title} {...module} />
                ))}
             </div>
          </div>

          {/* Highlights & Tools Section (Commented out - would use Blue HighlightItem/ToolItem if active) */}
          {/* ... */}

           {/* Learning Outcomes Section - Uses Green checkmarks in OutcomeItem */}
           <div>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Expected Outcomes</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {learningOutcomes.map((outcome) => (
                    <OutcomeItem key={outcome.outcome} icon={outcome.icon} outcome={outcome.outcome} />
                ))}
             </div>
          </div>

           {/* Target Audience Section (Commented out - would use blue badges if active) */}
           {/* ... */}

          {/* Testimonials Section - Uses Blue TestimonialCard */}
          {/* (Keep commented out or uncomment as needed) */}
          <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 md:mb-10 text-center">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testimonials.map((testimonial) => (
                      <TestimonialCard key={testimonial.name} {...testimonial} />
                  ))}
              </div>
          </div>

        </div>
      </section>

      {/* Final Enrollment CTA - Blue Gradient */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-600 text-white overflow-hidden relative"> {/* Changed gradient */}
         {/* Optional subtle pattern - Changed fill color to a blue */}
         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2080%2080%22%20width%3D%2280%22%20height%3D%2280%22%3E%3Cpath%20fill%3D%22%231e3a8a%22%20fill-opacity%3D%220.4%22%20d%3D%22M0%200h40v40H0zM40%2040h40v40H40z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] opacity-10"></div> {/* Changed fill color */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
             <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
                Transform Your Data Analysis Skills
             </h2>
             {/* Changed text color */}
             <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
                 Apply now for the Advanced Excel & Power BI course and become the data expert your organization needs.
             </p>
            <div className="inline-block transition-transform duration-200 hover:scale-105">
                 {/* Changed secondary button text/hover colors */}
                 <Button size="xl" variant="secondary" asChild className="rounded-xl bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 text-lg font-semibold shadow-xl transform transition-all duration-200 border-2 border-white/30 group">
                     <Link href={courseDetails.enrollLink}>
                         Apply Now - ₹{courseDetails.price.discounted}
                         <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                     </Link>
                 </Button>
            </div>
             {/* Changed text color */}
            <p className="text-xs text-blue-200 mt-4">{courseDetails.price.guarantee}</p>
        </div>
      </section>

    </div>
  );
}