"use client";

import React from 'react';
import Link from 'next/link';
// Ensure these paths are correct for your project
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    ArrowRight, CheckCircle, Users, BarChart, Award, CalendarDays, UserCheck,
    Star, Laptop, Clock, ShieldCheck, BookOpen, Globe, Target, UsersRound,
    BrainCircuit, User as UserIcon, // Renamed User
    Mail, ChevronDown, // Utility
    Briefcase, MessagesSquare, Presentation, Mic, // Communication Icons
    Handshake, PenTool, FileText, Lightbulb, Search // Business & Writing Icons
} from 'lucide-react';

// --- Utility function ---
const cn = (...classes) => classes.filter(Boolean).join(" ");

// --- Configuration & Placeholder Data (Business English Focused) ---
const courseDetails = {
  title: "Professional English Communication",
  tagline: "Enhance your workplace communication. Speak and write with clarity, confidence, and impact in professional settings.",
  duration: "8 Weeks (Part-Time)",
  format: "Interactive Online Classes & Practice Sessions",
  level: "Intermediate to Advanced (B1+ CEFR)",
  nextBatch: "October 1, 2025", // Update date
  price: {
    original: "35,000", // Example INR
    discounted: "22,000", // Example INR
    guarantee: "Includes Personalized Fluency Assessment",
  },
  ratings: {
    average: 4.9,
    count: 1520,
  },
  instructor: {
    name: "Dr. Evelyn Reed",
    title: "Corporate Communication Coach & TESOL Certified Trainer",
    linkedin: "https://linkedin.com/in/drevelynreed", // Update link
    imageUrl: null // Set to null or path like "/path/to/evelyn-reed.jpg"
  },
  enrollLink: "/enroll/business-english", // Update link
};

// Select key highlights specifically for the hero section
const heroHighlights = [
    { icon: Mic, text: "Speak confidently in meetings & presentations" },
    { icon: PenTool, text: "Write clear, concise, professional emails" },
    { icon: Handshake, text: "Navigate networking & negotiations effectively" },
    { icon: MessagesSquare, text: "Enhance overall workplace communication skills" },
];

// Full list of highlights for the dedicated section later
const courseHighlights = [
  { icon: Mic, text: "Speak confidently in meetings & presentations" },
  { icon: PenTool, text: "Write clear, concise, professional emails & reports" },
  { icon: Handshake, text: "Improve negotiation & networking skills" },
  { icon: MessagesSquare, text: "Enhance clarity and reduce misunderstandings" },
  { icon: Globe, text: "Understand cross-cultural communication nuances" },
  { icon: BrainCircuit, text: "Boost your professional vocabulary & grammar" },
];

const curriculumModules = [
  { icon: Mail, title: "Professional Writing & Email Etiquette", description: "Structuring emails, formal tone, clarity, conciseness, proofreading techniques.", weeks: "Week 1-2" },
  { icon: Mic, title: "Effective Speaking & Pronunciation", description: "Clarity exercises, intonation, stress patterns, reducing accent interference, active listening.", weeks: "Week 3-4" },
  { icon: Presentation, title: "Meetings & Presentations Mastery", description: "Structuring presentations, engaging delivery, handling Q&A, participating effectively in discussions.", weeks: "Week 5" },
  { icon: Handshake, title: "Negotiation & Persuasion Language", description: "Phrases for negotiation, persuasive language, building consensus, handling disagreements.", weeks: "Week 6" },
  { icon: Users, title: "Networking & Small Talk Skills", description: "Initiating conversations, building rapport, professional introductions, appropriate topics.", weeks: "Week 7" },
  { icon: Globe, title: "Cross-Cultural Communication", description: "Understanding different communication styles, avoiding faux pas, building global connections.", weeks: "Week 8" },
];

// Renamed from toolsCovered
const topicsCovered = [
  { name: "Advanced Business Vocabulary", icon: BookOpen },
  { name: "Complex Grammar Structures", icon: PenTool },
//   { name: "Pronunciation & Intonation", icon: Mic },
  { name: "Formal vs. Informal Language", icon: MessagesSquare },
  { name: "Presentation Delivery Skills", icon: Presentation },
//   { name: "Professional Email Formatting", icon: Mail },
];

const targetAudience = [
  "Working Professionals",
  "Managers & Team Leaders",
  "Job Seekers (Global Roles)",
  "Non-native English Speakers in Business",
  "Students preparing for corporate careers",
  "Anyone aiming for clearer workplace communication",
];

const learningOutcomes = [
  { icon: CheckCircle, title: "Communicate Confidently", description: "Express ideas clearly and persuasively in spoken English." },
  { icon: CheckCircle, title: "Write Professionally", description: "Craft effective emails, reports, and business documents." },
  { icon: CheckCircle, title: "Deliver Impactful Presentations", description: "Structure and present information with confidence and clarity." },
  { icon: CheckCircle, title: "Participate Effectively", description: "Engage actively and appropriately in meetings and discussions." },
  { icon: CheckCircle, title: "Enhance Professional Image", description: "Improve fluency and accuracy to boost credibility." },
  { icon: CheckCircle, title: "Navigate Global Business", description: "Understand cross-cultural nuances in communication." },
];

const testimonials = [
  { name: "Rahul Gupta", role: "Software Development Manager", company: "Tech Solutions Inc.", text: "This course significantly improved my confidence in leading team meetings with international clients. The feedback was invaluable." },
  { name: "Aisha Khan", role: "HR Business Partner", company: "Global Corp", text: "The module on professional writing helped me streamline my email communication and make it much more effective." },
  { name: "Kenichi Tanaka", role: "Project Manager", company: "Manufacturing Co.", text: "As a non-native speaker, the pronunciation and presentation practice sessions were incredibly helpful for my role." },
];

const faqs = [
  { question: "What English level is required for this course?", answer: "This course is designed for learners at an Intermediate (B1 CEFR) level or higher who want to refine their English specifically for professional contexts." },
  { question: "Is the focus on British or American English?", answer: "The course covers standard international business English, incorporating common aspects of both British and American English relevant to global communication. Pronunciation focuses on clear, understandable speech." },
  { question: "How much speaking practice is involved?", answer: "Significant practice is integrated through interactive class activities, role-playing scenarios (meetings, negotiations), presentation practice, and optional speaking partner pairings." },
  { question: "Will I receive personalized feedback?", answer: "Yes, instructors provide feedback during live sessions, on assignments, and through the included personalized fluency assessment." },
  { question: "Do I need any specific materials?", answer: "No specific textbooks are required. All core materials, templates, and resources will be provided digitally via the course platform." },
  { question: "Can my company sponsor my enrollment?", answer: "Yes, we can provide invoices and necessary documentation for corporate sponsorship or reimbursement. Please contact us for details." },
];


// --- Helper Components (ADAPTED TO AMAZON ORANGE UI STYLE) ---

const CurriculumCard = ({ icon: Icon, title, description, weeks }) => (
    <div className="bg-white p-5 rounded-lg border border-slate-200 flex flex-col h-full transition-shadow duration-300 hover:shadow-md">
      <div className="flex items-center justify-between mb-3">
        <div className="p-2 rounded-full bg-orange-100">
          <Icon className="h-5 w-5 text-orange-600" />
        </div>
        <span className="text-xs font-medium text-orange-700 bg-orange-50 py-1 px-2.5 rounded-full border border-orange-100">
          {weeks}
        </span>
      </div>
      <h4 className="text-md font-semibold text-slate-800 mb-2">{title}</h4>
      <p className="text-sm text-slate-600 flex-grow">{description}</p>
    </div>
);

const ContentHighlightItem = ({ icon: Icon, text }) => (
  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-md border border-slate-100">
    <Icon className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
    <span className="text-sm font-medium text-slate-700">{text}</span>
  </div>
);

// Renamed from ToolItem to TopicItem for relevance
const TopicItem = ({ icon: Icon, name }) => (
    <li className="flex items-center gap-3 text-sm text-slate-700 bg-white p-2.5 rounded-md border border-slate-200/70 shadow-sm">
       <Icon className="h-5 w-5 text-blue-600 flex-shrink-0" />
       <span>{name}</span>
   </li>
);

const OutcomeCard = ({ icon: Icon, title, description }) => (
    <div className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-lg border border-slate-200 shadow-sm text-center h-full flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:border-slate-300">
         <div className="p-3 rounded-full bg-green-100 mb-3">
             <Icon className="h-6 w-6 text-green-600" />
         </div>
        <h4 className="text-md font-semibold text-slate-800 mb-1">{title}</h4>
        <p className="text-sm text-slate-600 flex-grow">{description}</p>
    </div>
);

const TestimonialCard = ({ name, role, company, text }) => (
  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 h-full flex flex-col">
    <svg className="w-8 h-8 text-orange-400 mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
    <p className="text-slate-600 text-sm italic leading-relaxed mb-4 flex-grow">"{text}"</p>
    <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
       <div className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-medium text-xs flex-shrink-0">
        {name.charAt(0)}
       </div>
      <div>
        <p className="font-semibold text-slate-800 text-sm">{name}</p>
        <p className="text-xs text-slate-500">{role}{company ? `, ${company}` : ''}</p>
      </div>
    </div>
  </div>
);

const PriceDisplay = ({ original, discounted }) => (
  <div className="flex items-baseline justify-center gap-2">
    <span className="text-3xl font-bold text-slate-800">₹{discounted}</span>
    {original && (
       <span className="text-lg text-slate-400 line-through">₹{original}</span>
    )}
  </div>
);

const RatingStars = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < Math.round(rating) ? 'text-orange-400 fill-orange-400' : 'text-slate-300'}`} />
    ))}
  </div>
);

// --- Main Component 
export default function BusinessEnglishCoursePage() {

  const contactSupportLink = "/contact-support";

  return (
    <div className="bg-slate-50 overflow-hidden">

      {/* 1. Hero Section - Split Layout */}
      <section className="bg-gradient-to-b from-white to-slate-50 pt-16 pb-12 lg:pt-12 lg:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Professional Communication Skills
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-blue-700 sm:text-4xl lg:text-5xl mb-4">
                {courseDetails.title}
              </h1>
              <p className="text-lg text-slate-600 mb-6 max-w-xl mx-auto lg:mx-0">
                {courseDetails.tagline}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-5 gap-y-2 text-sm text-slate-500 mb-8">
                 <div className="flex items-center gap-1.5">
                    <RatingStars rating={courseDetails.ratings.average} />
                    <span>{courseDetails.ratings.average} ({courseDetails.ratings.count} reviews)</span>
                 </div>
                 <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-orange-500" /> {courseDetails.duration}
                 </div>
                 <div className="flex items-center gap-1.5">
                    <Laptop className="h-4 w-4 text-orange-500" /> {courseDetails.format}
                 </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 group">
                  <Link href="/join-course-today">
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                  </Link>
                </Button>
                 <div className="text-center sm:text-left">
                    <p className="text-xs text-slate-500 mb-0.5">Next Batch Starts</p>
                    <p className="font-semibold text-slate-700">{courseDetails.nextBatch}</p>
                 </div>
              </div>
            </div>

            {/* Right Column: Key Highlights Content */}
            <div className="hidden lg:block bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-5">
                 <h3 className="text-lg font-semibold text-slate-800 mb-4">Communicate with Confidence:</h3>
                 <ul className="space-y-3">
                     {heroHighlights.map((highlight, index) => (
                         <li key={index} className="flex items-start gap-3">
                            <highlight.icon className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-600">{highlight.text}</span>
                        </li>
                    ))}
                 </ul>
                  <Separator className="bg-slate-200/60 my-4"/>
                  <div>
                    <h4 className="text-md font-semibold text-slate-700 mb-2 flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-blue-600" />
                         <span>Designed For:</span>
                    </h4>
                     <p className="text-sm text-slate-600 leading-relaxed">
                        Professionals ({courseDetails.level} level) seeking practical English skills for career growth.
                    </p>
                 </div>
                 <div className="pt-1 text-center">
                    <Link href="#curriculum" className="text-sm text-blue-600 hover:underline font-medium inline-flex items-center gap-1">
                        View Course Modules <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
            {/* End Right Column */}

          </div>
        </div>
      </section>

      {/* 2. Key Highlights Section */}
      <section className="py-16 lg:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-blue-700">Unlock Your Professional Potential</h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Master the language skills needed to succeed in today's global workplace.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseHighlights.map((highlight) => (
              <ContentHighlightItem key={highlight.text} icon={highlight.icon} text={highlight.text} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Curriculum Section */}
      <section className="py-16 lg:py-8 bg-slate-50" id="curriculum">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Course Curriculum</h2>
                <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Structured modules covering essential business communication areas.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {curriculumModules.map((module) => (
                    <CurriculumCard key={module.title} icon={module.icon} title={module.title} description={module.description} weeks={module.weeks} />
                ))}
             </div>
         </div>
      </section>

      {/* 4. Learning Outcomes Section */}
       <section className="py-16 lg:py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">What You'll Be Able To Do</h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Gain tangible communication skills applicable immediately.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningOutcomes.map((outcome) => (
              <OutcomeCard key={outcome.title} icon={outcome.icon} title={outcome.title} description={outcome.description}/>
            ))}
          </div>
        </div>
      </section>

       {/* 5. Topics & Instructor Section */}
        <section className="py-16 lg:py-12 bg-slate-50">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-3 gap-12 items-start">
                {/* Topics Covered */}
                 <div className="lg:col-span-1">
                      <h3 className="text-2xl font-semibold text-slate-800 mb-6">Key Topics Covered</h3>
                       <ul className="space-y-3">
                          {topicsCovered.map((topic) => (
                              <TopicItem key={topic.name} icon={topic.icon} name={topic.name} />
                          ))}
                       </ul>
                 </div>

                 {/* Instructor Bio */}
                 <div className="lg:col-span-2 bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
                    <h3 className="text-2xl font-semibold text-slate-800 mb-4">Meet Your Instructor</h3>
                     <div className="flex flex-col sm:flex-row items-center gap-6">
                        {/* Instructor Image Placeholder */}
                        <div className="flex-shrink-0">
                             {courseDetails.instructor.imageUrl ? (
                                <img src={courseDetails.instructor.imageUrl} alt={courseDetails.instructor.name} className="h-24 w-24 rounded-full object-cover border-4 border-orange-100 shadow-sm"/>
                             ) : (
                                <div className="h-24 w-24 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                                    <UserIcon className="h-12 w-12" />
                                </div>
                             )}
                         </div>
                         {/* Instructor Details */}
                         <div>
                            <h4 className="text-xl font-bold text-slate-900">{courseDetails.instructor.name}</h4>
                            <p className="text-sm font-medium text-orange-600 mb-2">{courseDetails.instructor.title}</p>
                            <p className="text-sm text-slate-600 mb-3">
                                Dr. Reed specializes in helping professionals enhance their communication effectiveness in global business environments. With extensive experience and TESOL certification, she provides practical, actionable guidance.
                            </p>
                            <Button variant="outline" size="sm" asChild className="text-blue-600 border-blue-300 hover:bg-blue-50 hover:text-blue-700">
                                <Link href={courseDetails.instructor.linkedin || '#'} target="_blank" rel="noopener noreferrer">
                                    View LinkedIn Profile
                                </Link>
                            </Button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        </section>

      {/* 6. Testimonials Section */}
      <section className="py-16 lg:py-12 bg-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold tracking-tight text-slate-900">Hear From Professionals</h2>
                 <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">See how others have benefited from improving their Business English.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {testimonials.map((testimonial) => (
                     <TestimonialCard key={testimonial.name} name={testimonial.name} role={testimonial.role} company={testimonial.company} text={testimonial.text}/>
                 ))}
             </div>
         </div>
      </section>

      {/* 7. Pricing Section */}

      
        <section className="py-16 lg:py-8 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-blue-700 mb-4">Invest in Your Communication Skills</h2>
                <p className="text-lg text-slate-600 mb-8">Gain lifetime access to materials, personalized feedback, and expert instruction.</p>
                 <div className="inline-block bg-white p-6 rounded-lg border border-slate-200 shadow mb-6">
                     <PriceDisplay original={courseDetails.price.original} discounted={courseDetails.price.discounted} />
                     <p className="text-sm text-green-600 mt-2 font-medium">{courseDetails.price.guarantee}</p>
                 </div>
            
            </div>
        </section>
      

      {/* 8. FAQ Section */}
      {/* <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                Your Questions Answered
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Frequently Asked Questions
                </h2>
            </div>
            <div className="w-full space-y-3">
                <Accordion type="single" collapsible>
                    {faqs.map((faq, index) => (
                       <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-slate-50/70 border border-slate-200/80 rounded-lg overflow-hidden data-[state=open]:bg-white data-[state=open]:shadow"
                       >
                            <AccordionTrigger className="px-5 py-3 text-left text-sm font-semibold text-slate-800 hover:no-underline hover:bg-slate-100/50 transition-colors data-[state=open]:text-orange-700">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="px-5 pb-4 text-slate-600 pt-1 text-sm">
                                {faq.answer}
                            </AccordionContent>
                       </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className="mt-10 text-center">
                <p className="text-sm text-slate-500 mb-3">Still have questions?</p>
                <Button variant="outline" size="sm" asChild className="rounded-md border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-orange-600 hover:border-orange-300">
                   <Link href={contactSupportLink}>
                       <span className="flex items-center justify-center">
                           <Mail className="mr-2 h-4 w-4" />
                           Contact Us
                       </span>
                   </Link>
                </Button>
            </div>
        </div>
      </section> */}

      {/* 9. Final CTA */}
       <section className="py-12 bg-gradient-to-r from-blue-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Communicate Like a Pro?</h2>
            <p className="text-orange-100 mb-6 max-w-xl mx-auto">Elevate your career with enhanced Business English skills. Enroll today!</p>
            <Button size="lg" variant="secondary" asChild className="rounded-lg bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-base font-semibold shadow-lg transition-transform duration-200 hover:scale-105 group">
                <Link href='/join-course-today'>
                    Enroll for ₹{courseDetails.price.discounted}
                     <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                </Link>
            </Button>
        </div>
       </section>

    </div>
  );
}

// // Helper Component needed by the main component
// const ContentHighlightItem = ({ icon: Icon, text }) => (
//   <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-md border border-slate-100">
//     <Icon className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
//     <span className="text-sm font-medium text-slate-700">{text}</span>
//   </div>
// );