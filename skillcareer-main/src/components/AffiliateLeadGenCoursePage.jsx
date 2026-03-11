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
    Link2, Handshake, DollarSign, Filter, Funnel, // Affiliate/Lead Gen Icons
    Share2, Megaphone, TrendingUp, Search, FileText, Briefcase, // Marketing/Growth Icons + Briefcase
    BarChart3
} from 'lucide-react';

// --- Utility function ---
const cn = (...classes) => classes.filter(Boolean).join(" ");

// --- Configuration & Placeholder Data (Affiliate/Lead Gen Focused) ---
const courseDetails = {
  title: "Mastering Lead Generation & Affiliate Marketing",
  tagline: "Build predictable revenue streams. Learn to attract high-quality leads and leverage affiliate partnerships for sustainable growth.",
  duration: "6 Weeks (Part-Time)",
  format: "On-Demand Video + Live Q&A + Community",
  level: "Intermediate",
  nextEnrollment: "Open Now (Self-Paced)",
  price: {
    original: "45,000",
    discounted: "25,000",
    guarantee: "Includes Lead Scoring Template Pack",
  },
  ratings: {
    average: 4.8,
    count: 1340,
  },
  instructor: {
    name: "Aditya Verma",
    title: "Growth Marketing Strategist & Performance Expert",
    linkedin: "https://linkedin.com/in/adityaverma-growth",
    imageUrl: null
  },
  enrollLink: "/enroll/lead-affiliate-mastery",
};

// Select key highlights specifically for the hero section
const heroHighlights = [
    { icon: Target, text: "Generate consistent, high-quality leads" },
    { icon: DollarSign, text: "Build profitable affiliate revenue streams" },
    { icon: Funnel, text: "Master lead nurturing and conversion funnels" },
    // { icon: Link2, text: "Find and partner with the right affiliates" }, // Maybe keep it to 3 for space
];

// --- Other Data Arrays (courseHighlights, curriculumModules, etc.) remain the same as before ---
// Full list of highlights for the dedicated section later
const courseHighlights = [
  { icon: Target, text: "Generate consistent, high-quality leads" },
  { icon: DollarSign, text: "Build profitable affiliate revenue streams" },
  { icon: Funnel, text: "Master lead nurturing and conversion funnels" },
  { icon: Link2, text: "Find and partner with the right affiliates" },
  { icon: BarChart, text: "Track performance and optimize for ROI" },
  { icon: BrainCircuit, text: "Develop a data-driven growth mindset" },
];
const curriculumModules = [
  { icon: Funnel, title: "Lead Generation Fundamentals", description: "Understanding lead types, buyer personas, lead magnets, landing page optimization basics.", weeks: "Module 1" },
  { icon: Search, title: "Traffic Generation Strategies", description: "SEO basics for lead gen, Content Marketing, Paid Search (PPC) for leads, Social Media lead ads.", weeks: "Module 2" },
  { icon: Mail, title: "Lead Nurturing & Conversion", description: "Email marketing automation, lead scoring models, CRM basics, sales funnel optimization.", weeks: "Module 3" },
  { icon: Link2, title: "Affiliate Marketing Principles", description: "Choosing profitable niches, finding affiliate programs (networks vs direct), commission structures.", weeks: "Module 4" },
  { icon: Handshake, title: "Building Affiliate Relationships", description: "Outreach strategies, negotiating deals, managing publisher relationships, compliance.", weeks: "Module 5" },
  { icon: TrendingUp, title: "Tracking, Analytics & Scaling", description: "Affiliate tracking software, analyzing campaign performance (EPC, CR), scaling successful strategies.", weeks: "Module 6" },
];
const toolsCovered = [
  { name: "Email Marketing Platforms (Concepts)", icon: Mail },
  { name: "CRM Software (Concepts)", icon: Users },
  { name: "Affiliate Networks (e.g., CJ, ShareASale)", icon: Handshake },
//   { name: "Landing Page Builders (Concepts)", icon: FileText },
  { name: "Analytics & Tracking Tools", icon: BarChart3 },
];
const targetAudience = [
  "Digital Marketers",
  "Entrepreneurs & Business Owners",
  "Content Creators & Bloggers",
  "Sales Professionals",
  "Marketing Managers",
  "Anyone seeking scalable revenue streams",
];
const learningOutcomes = [
  { icon: CheckCircle, title: "Generate Quality Leads", description: "Implement strategies to attract relevant prospects consistently." },
  { icon: CheckCircle, title: "Build Affiliate Programs", description: "Find, recruit, and manage successful affiliate partnerships." },
  { icon: CheckCircle, title: "Optimize Conversion Funnels", description: "Nurture leads effectively and improve conversion rates." },
  { icon: CheckCircle, title: "Master Tracking & Analytics", description: "Measure campaign performance accurately to drive ROI." },
  { icon: CheckCircle, title: "Develop Growth Blueprints", description: "Create scalable plans for lead gen and affiliate marketing." },
  { icon: CheckCircle, title: "Utilize Key Marketing Tech", description: "Understand the role of essential tools in the ecosystem." },
];
const testimonials = [
    { name: "Riya Sharma", role: "Marketing Manager", company: "SaaS Startup", text: "The lead scoring module alone was worth the price! We've significantly improved our sales team's efficiency." },
    { name: "Ankit Desai", role: "Blogger & Content Creator", company: "", text: "I finally understand how to approach affiliate marketing strategically. My earnings have doubled since implementing Aditya's techniques." },
    { name: "Pooja Nair", role: "Small Business Owner", company: "Local Boutique", text: "Learning how to generate leads online consistently has been a game-changer for my local business. The practical steps were easy to follow." },
];
const faqs = [
  { question: "Is this course suitable for beginners with no marketing experience?", answer: "While we cover fundamentals, having a basic understanding of digital marketing concepts will be beneficial. It's ideal for those with some online presence or basic marketing knowledge looking to specialize." },
  { question: "Do I need specific tools or software?", answer: "We'll discuss various tools (CRMs, email marketing platforms, affiliate networks, tracking software). Many have free trials or free tiers you can use to learn. The core concepts are tool-agnostic." },
  { question: "How much time commitment is needed per week?", answer: "Since it includes on-demand content, you can pace yourself. We recommend dedicating 5-8 hours per week to effectively absorb the material and participate in Q&A/community." },
  { question: "Is there a focus on specific industries?", answer: "The principles taught are applicable across most industries (B2B, B2C, e-commerce, info products, etc.). Examples will cover a diverse range." },
  { question: "How long do I have access to the course?", answer: "You get lifetime access to the on-demand video modules and course materials, including future updates." },
  { question: "What makes this course different?", answer: "We combine both lead generation and affiliate marketing into one cohesive strategy, focusing on practical application, data analysis, and sustainable growth, taught by an experienced growth strategist." },
];
// --- Helper Components (Remain the same as previous 'Amazon Style' version) ---

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

const ToolItem = ({ icon: Icon, name }) => (
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

// --- Main Component (Affiliate/Lead Gen Content, Amazon UI Style) ---
export default function AffiliateLeadGenAmazonStylePage() {

  const contactSupportLink = "/contact-support";

  return (
    <div className="bg-slate-50 overflow-hidden">

      {/* 1. Hero Section - Split Layout MODIFIED RIGHT COLUMN */}
      <section className="bg-gradient-to-b from-white to-slate-50 pt-16 pb-12 lg:pt-12 lg:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Growth Focused Strategies
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 sm:text-5xl lg:text-6xl mb-4">
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
                <Button size="lg" asChild className="w-full sm:w-auto rounded-lg bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 group">
                  <Link href='/join-course-today'>
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                  </Link>
                </Button>
                 <div className="text-center sm:text-left">
                    <p className="text-xs text-slate-500 mb-0.5">Enrollment</p>
                    <p className="font-semibold text-slate-700">{courseDetails.nextEnrollment}</p>
                 </div>
              </div>
            </div>

            {/* Right Column: MORE ENRICHED CONTENT */}
            <div className="hidden lg:block bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6"> {/* Increased space-y */}
                {/* Key Outcomes Block */}
                <div>
                    <h3 className="text-md font-semibold text-slate-700 mb-3 flex items-center gap-2">
                         <CheckCircle className="w-5 h-5 text-green-600" />
                         <span>Key Outcomes:</span>
                    </h3>
                    <ul className="space-y-2 pl-1">
                        {heroHighlights.map((highlight, index) => (
                             <li key={index} className="flex items-start gap-2.5">
                                <highlight.icon className="h-4 w-4 text-orange-600 flex-shrink-0 mt-1" />
                                <span className="text-sm text-slate-600">{highlight.text}</span>
                            </li>
                        ))}
                    </ul>
                 </div>

                 <Separator className="bg-slate-200/60"/>

                 {/* Who is this for Block */}
                <div>
                    <h3 className="text-md font-semibold text-slate-700 mb-2 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span>Ideal For:</span>
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Marketers, entrepreneurs, bloggers, and sales pros aiming to build scalable lead generation and affiliate systems. ({courseDetails.level} level).
                    </p>
                </div>

                 {/* <Separator className="bg-slate-200/60"/> */}

                 {/* Instructor Snippet Block */}
                 <div>
                    <h3 className="text-md font-semibold text-slate-700 mb-2 flex items-center gap-2">
                         <UserIcon className="w-5 h-5 text-orange-600" />
                         <span>Expert Instructor:</span>
                    </h3>
                     <p className="text-sm text-slate-600 leading-relaxed">
                        Learn from <strong className='font-medium text-slate-700'>{courseDetails.instructor.name}</strong>, {courseDetails.instructor.title.split('&')[0].trim()}. {/* Shortened title */}
                    </p>
                 </div>

                 <div className="pt-1 text-center">
                    <Link href="#curriculum" className="text-sm text-blue-600 hover:underline font-medium inline-flex items-center gap-1">
                        Explore Full Curriculum <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
            {/* End Right Column */}

          </div>
        </div>
      </section>

      {/* --- Rest of the sections (2 to 9) remain unchanged --- */}
      {/* Ensure they correctly use the updated data arrays */}

      {/* 2. Key Highlights Section */}
      <section className="py-16 lg:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Why Master Lead & Affiliate Strategies?</h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Unlock scalable growth channels for your business or clients.</p>
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
                <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">A module-by-module breakdown of your learning path.</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-blue-600">What You&apos;ll Achieve</h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Gain practical skills to drive measurable results.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningOutcomes.map((outcome) => (
              <OutcomeCard key={outcome.title} icon={outcome.icon} title={outcome.title} description={outcome.description}/>
            ))}
          </div>
        </div>
      </section>

       {/* 5. Tools & Instructor Section */}
        <section className="py-16 lg:py-12 bg-slate-50">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-3 gap-12 items-start">
                {/* Tools Covered */}
                 <div className="lg:col-span-1">
                      <h3 className="text-2xl font-semibold text-slate-800 mb-6">Key Concepts & Tools</h3>
                       <ul className="space-y-3">
                          {toolsCovered.map((tool) => (
                              <ToolItem key={tool.name} icon={tool.icon} name={tool.name} />
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
                                Aditya has helped numerous businesses scale their revenue through innovative lead generation funnels and strategic affiliate partnerships. Learn from his real-world experience and data-driven approach.
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
      <section className="py-16 lg:py-20 bg-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold tracking-tight text-slate-900">Success Stories</h2>
                 <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Hear from marketers and entrepreneurs who got results.</p>
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
                <h2 className="text-3xl font-bold tracking-tight text-blue-600 mb-4">Invest in Your Growth</h2>
                <p className="text-lg text-slate-600 mb-8">Get lifetime access, community support, and actionable strategies.</p>
                 <div className="inline-block bg-white p-6 rounded-lg border border-slate-200 shadow mb-6">
                     <PriceDisplay original={courseDetails.price.original} discounted={courseDetails.price.discounted} />
                     <p className="text-sm text-green-600 mt-2 font-medium">{courseDetails.price.guarantee}</p>
                 </div>
                
            </div>
        </section>

      {/* 8. FAQ Section */}
      {/* <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
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
       <section className="py-12 bg-gradient-to-r from-indigo-500 to-indigo-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Build Your Growth Engine?</h2>
            <p className="text-orange-100 mb-6 max-w-xl mx-auto">Stop guessing and start implementing proven lead and affiliate strategies.</p>
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