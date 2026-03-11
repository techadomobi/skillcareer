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
    BrainCircuit, User as UserIcon, 
    Megaphone, ShoppingCart, Store, Search, TrendingUp, 
    Settings, FileText, BarChart3, Filter, 
    Lightbulb, Mail, ChevronDown 
    
} from 'lucide-react';

// --- Utility function ---
const cn = (...classes) => classes.filter(Boolean).join(" ");

// --- Configuration & Placeholder Data (Amazon Marketing Focused) ---
const courseDetails = {
  title: "Amazon Marketplace Mastery: Ads & SEO",
  tagline: "Dominate Amazon with data-driven strategies. Master PPC advertising, optimize listings for organic rank, and accelerate your sales velocity.",
  duration: "6 Weeks Intensive",
  format: "Live Workshops, Case Studies & Ad Campaign Simulation",
  level: "Intermediate (Basic Amazon Seller/Marketing knowledge recommended)",
  nextBatch: "September 1, 2025", // Update date
  price: {
    original: "65,000", // Example INR
    discounted: "40,000", // Example INR
    guarantee: "Includes Amazon Ad Spend Strategy Template",
  },
  ratings: {
    average: 4.7,
    count: 915,
  },
  instructor: {
    name: "Priya Kapoor",
    title: "Ex-Amazon Sr. Marketing Manager & E-commerce Consultant",
    linkedin: "https://linkedin.com/in/priyakapoor-amazonexpert", // Update link
    imageUrl: null // Set to null or path like "/path/to/priya-kapoor.jpg"
  },
  enrollLink: "/enroll/amazon-marketing-mastery", // Update link
};

// Select a few key highlights specifically for the hero section
const heroHighlights = [
    { icon: Target, text: "Optimize Ads for lower ACoS & higher ROI" },
    { icon: TrendingUp, text: "Increase organic ranking with proven SEO" },
    { icon: CheckCircle, text: "Develop profitable PPC campaign structures" },
    { icon: BarChart3, text: "Master data analysis for informed decisions" }
];

// Full list of highlights for the dedicated section later
const courseHighlights = [
  { icon: Target, text: "Optimize Amazon Ads for lower ACoS & higher ROI" },
  { icon: TrendingUp, text: "Increase organic ranking through advanced SEO" },
  { icon: CheckCircle, text: "Develop profitable PPC campaign structures" },
  { icon: BarChart3, text: "Master data analysis for informed decisions" },
  { icon: Store, text: "Build a strong brand presence on Amazon" },
  { icon: Users, text: "Learn strategies used by top Amazon sellers" },
];

const curriculumModules = [
  { icon: Search, title: "Amazon SEO & Listing Optimization", description: "Keyword research mastery, optimizing titles/bullets/descriptions, A+ Content strategies, backend search terms.", weeks: "Week 1" },
  { icon: Megaphone, title: "Amazon PPC Fundamentals (Sponsored Products)", description: "Campaign structures, match types, keyword targeting, negative keywords, basic bid management.", weeks: "Week 2" },
  { icon: TrendingUp, title: "Advanced PPC & Sponsored Brands", description: "Sponsored Brands/Display ads, advanced bidding strategies (portfolio bids, rules), scaling campaigns.", weeks: "Week 3" },
  { icon: BarChart3, title: "Amazon Analytics & Reporting", description: "Understanding Seller Central reports, Advertising Console analytics, identifying key metrics (ACoS, TACOS).", weeks: "Week 4" },
  { icon: Store, title: "Brand Building on Amazon", description: "Creating Brand Stores, leveraging posts, managing customer reviews and questions effectively.", weeks: "Week 5" },
  { icon: Filter, title: "Strategy, Budgeting & Scaling", description: "Developing a holistic marketing strategy, budget allocation, launch strategies, scaling internationally.", weeks: "Week 6" },
];

const toolsCovered = [
  { name: "Amazon Seller Central", icon: Settings },
  { name: "Amazon Advertising Console", icon: Megaphone },
//   { name: "Amazon Brand Analytics", icon: BarChart3 },
  { name: "Keyword Research Tools (Concepts)", icon: Search },
  { name: "Listing Optimization Techniques", icon: FileText },
];

const targetAudience = [
  "Current Amazon Sellers",
  "E-commerce Marketing Managers",
  "Digital Marketing Professionals",
  "Brand Owners & Entrepreneurs",
  "Agency Account Managers (Amazon Ads)",
];

const learningOutcomes = [
  { icon: CheckCircle, title: "Launch & Manage Profitable PPC", description: "Confidently run Sponsored Products, Brands, and Display campaigns." },
  { icon: CheckCircle, title: "Rank Products Organically", description: "Implement effective SEO strategies to improve search visibility." },
  { icon: CheckCircle, title: "Analyze Performance Data", description: "Interpret key metrics to optimize campaigns and listings." },
  { icon: CheckCircle, title: "Optimize Product Listings", description: "Craft compelling copy and utilize A+ content to increase conversion." },
  { icon: CheckCircle, title: "Develop Growth Strategies", description: "Create actionable plans for scaling your Amazon business." },
  { icon: CheckCircle, title: "Master Amazon Tools", description: "Navigate Seller Central and the Advertising Console effectively." },
];

const testimonials = [
    { name: "Seller One", role: "Electronics Seller", company: "", text: "My ACoS dropped significantly after implementing the PPC structures taught in this course. Highly recommend!" },
    { name: "Brand Manager Two", role: "Brand Manager", company: "Home Goods Co.", text: "The listing optimization and A+ content strategies directly led to a noticeable increase in our conversion rate." },
    { name: "Agency Owner Three", role: "Agency Owner", company: "Ecom Agency", text: "Priya's insights into Amazon's algorithm and reporting are invaluable for managing client accounts effectively." },
];

const faqs = [
  { question: "Do I need an active Amazon Seller account?", answer: "While highly recommended for practical application, it's not strictly mandatory to follow the course content. We will use simulations and case studies. However, implementing strategies requires an account." },
  { question: "Is prior digital marketing experience required?", answer: "Basic familiarity with digital marketing concepts (PPC, SEO) is helpful but not essential. Understanding the basics of selling online is recommended. This course focuses specifically on the Amazon ecosystem." },
  { question: "Will this course cover international marketplaces?", answer: "The core principles apply globally, but the primary focus and examples will be based on major marketplaces like Amazon.com (US). We discuss considerations for international expansion." },
  { question: "How much ad budget do I need to practice?", answer: "You can learn the concepts without spending. For practice, even a small budget ($10-20/day) on a real account can provide valuable learning data, but it's not a course requirement." },
  { question: "Does this cover FBA (Fulfillment by Amazon)?", answer: "While FBA is crucial for sellers, this course focuses specifically on the marketing, advertising, and optimization aspects, not the operational logistics of FBA." },
  { question: "What kind of support is available?", answer: "You'll have access to live Q&A during workshops, a dedicated community forum for questions, and feedback opportunities on assignments/simulations." },
];

// --- Helper Components 

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
       <Icon className="h-5 w-5 text-blue-600 flex-shrink-0" /> {/* Blue for tools */}
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
    {/* Quote Icon SVG */}
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
  <div className="flex items-baseline gap-2">
    <span className="text-3xl font-bold text-slate-800">₹{discounted}</span>
    <span className="text-lg text-slate-400 line-through">₹{original}</span>
  </div>
);

const RatingStars = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < Math.round(rating) ? 'text-orange-400 fill-orange-400' : 'text-slate-300'}`} />
    ))}
  </div>
);

// --- Main Component (Amazon Marketing - No Framer Motion) ---
export default function AmazonMarketingCoursePage() {

  const contactSupportLink = "/contact-support"; // Define your contact page URL

  return (
    <div className="bg-slate-50 overflow-hidden"> {/* Light grey background */}

      {/* 1. Hero Section - Split Layout ENRICHED RIGHT COLUMN */}
      <section className="bg-gradient-to-b from-white to-slate-50 pt-16 pb-12 lg:pt-8 lg:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Amazon Seller & Marketer Focused
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 sm:text-5xl lg:text-6xl mb-4">
                {courseDetails.title}
              </h1>
              <p className="text-lg text-slate-600 mb-6 max-w-xl mx-auto lg:mx-0">
                {courseDetails.tagline}
              </p>
              {/* Ratings & Key Info */}
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
              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto rounded-lg bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 group">
                  <Link href='/join-course-today'>
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                  </Link>
                </Button>
                 <div className="text-center sm:text-left">
                    <p className="text-xs text-slate-500 mb-0.5">Next batch starts</p>
                    <p className="font-semibold text-slate-700">{courseDetails.nextBatch}</p>
                 </div>
              </div>
            </div>

            {/* Right Column: ENRICHED CONTENT */}
            <div className="hidden lg:block bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-5">
                <div>
                    <h3 className="text-md font-semibold text-slate-700 mb-2 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span>Who is this for?</span>
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Ideal for current Amazon sellers, e-commerce managers, brand owners, and digital marketers looking to specialize in the Amazon platform.
                    </p>
                </div>

                 <Separator className="bg-slate-200/60"/> {/* Separator */}

                <div>
                    <h3 className="text-md font-semibold text-slate-700 mb-3 flex items-center gap-2">
                         <CheckCircle className="w-5 h-5 text-green-600" />
                         <span>Key Outcomes You Can Expect:</span>
                    </h3>
                    <ul className="space-y-2.5 pl-1">
                        {heroHighlights.map((highlight, index) => (
                             <li key={index} className="flex items-start gap-2.5">
                                <highlight.icon className="h-4 w-4 text-orange-600 flex-shrink-0 mt-1" />
                                <span className="text-sm text-slate-600">{highlight.text}</span>
                            </li>
                        ))}
                    </ul>
                 </div>

                 <Separator className="bg-slate-200/60"/> {/* Separator */}

                 <div>
                    <h3 className="text-md font-semibold text-slate-700 mb-2 flex items-center gap-2">
                         <Laptop className="w-5 h-5 text-indigo-600" />
                         <span>Learning Format</span>
                    </h3>
                     <p className="text-sm text-slate-600 leading-relaxed">
                        Engage in <strong className='font-medium text-slate-700'>{courseDetails.duration}</strong> of {courseDetails.format.toLowerCase()} designed for practical application and real-world results.
                    </p>
                 </div>

                 <div className="pt-2 text-center">
                    <Link href="/course" className="text-sm text-blue-600 hover:underline font-medium inline-flex items-center gap-1">
                        Explore Full Curriculum <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
            {/* End Right Column */}

          </div>
        </div>
      </section>

      {/* 2. Key Highlights Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Why Master Amazon Marketing?</h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Gain the essential skills to thrive in the world's largest marketplace.</p>
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
                <h2 className="text-3xl font-bold tracking-tight text-blue-600">Course Curriculum</h2>
                <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">A week-by-week breakdown of your learning journey.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {curriculumModules.map((module) => (
                    <CurriculumCard key={module.title} icon={module.icon} title={module.title} description={module.description} weeks={module.weeks} />
                ))}
             </div>
         </div>
      </section>

      {/* 4. Learning Outcomes Section */}
       <section className="py-16 lg:py-6 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">What You'll Achieve</h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Transform your Amazon knowledge into tangible results.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningOutcomes.map((outcome) => (
              <OutcomeCard key={outcome.title} icon={outcome.icon} title={outcome.title} description={outcome.description}/>
            ))}
          </div>
        </div>
      </section>

       {/* 5. Tools & Instructor Section */}
        <section className="py-16 lg:py-8 bg-slate-50">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-3 gap-12 items-start">
                {/* Tools Covered */}
                 <div className="lg:col-span-1">
                      <h3 className="text-2xl font-semibold text-slate-800 mb-6">Tools & Platforms</h3>
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
                        {/* Instructor Image */}
                        <div className="flex-shrink-0">
                             {courseDetails.instructor.imageUrl ? (
                                <img src={courseDetails.instructor.imageUrl} alt={courseDetails.instructor.name} className="h-24 w-24 rounded-full object-cover border-4 border-orange-100 shadow-sm"/>
                             ) : (
                                <div className="h-24 w-24 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                                    <UserIcon className="h-12 w-12" /> {/* Use UserIcon alias */}
                                </div>
                             )}
                         </div>
                         {/* Instructor Details */}
                         <div>
                            <h4 className="text-xl font-bold text-slate-900">{courseDetails.instructor.name}</h4>
                            <p className="text-sm font-medium text-orange-600 mb-2">{courseDetails.instructor.title}</p>
                            <p className="text-sm text-slate-600 mb-3">
                                Priya brings over a decade of experience managing multi-million dollar ad campaigns and driving growth for top brands on Amazon. Learn the strategies directly from an industry insider.
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
      <section className="py-16 lg:py-6 bg-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold tracking-tight text-slate-900">Success Stories from Sellers</h2>
                 <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Hear how this course impacted businesses like yours.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {testimonials.map((testimonial) => (
                     <TestimonialCard key={testimonial.name} name={testimonial.name} role={testimonial.role} company={testimonial.company} text={testimonial.text}/>
                 ))}
             </div>
         </div>
      </section>

      {/* 7. Pricing Section */}
        <section className="py-8 lg:py-4 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Invest in Your Amazon Growth</h2>
                <p className="text-lg text-slate-600 mb-8">Get lifetime access to course materials, live workshops, community support, and expert guidance.</p>
                 <div className="inline-block bg-white p-6 rounded-lg border border-slate-200 shadow mb-6">
                     <PriceDisplay original={courseDetails.price.original} discounted={courseDetails.price.discounted} />
                     <p className="text-sm text-green-600 mt-2 font-medium">{courseDetails.price.guarantee}</p>
                 </div>
                 {/* <div>
                     <Button size="lg" asChild className="rounded-lg bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 group">
                        <Link href={courseDetails.enrollLink}>
                            Enroll Today & Save
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                        </Link>
                    </Button>
                 </div> */}
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

      {/* 9. Final CTA (Simpler Version) */}
       <section className="py-12 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Dominate Amazon?</h2>
            <p className="text-orange-100 mb-6 max-w-xl mx-auto">Stop guessing and start implementing proven strategies. Enroll now!</p>
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