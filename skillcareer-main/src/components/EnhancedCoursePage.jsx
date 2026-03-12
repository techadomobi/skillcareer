"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CourseStructuredData from '@/components/CourseStructuredData';
import { ArrowRight, CheckCircle, Users, BarChart, Search, Mail, Megaphone,
  Award, CalendarDays, UserCheck, Zap, Star, Laptop, Clock, ShieldCheck,
  BookOpen, Globe, PenTool, Target, UsersRound, BrainCircuit, User,
  Code, Database, Server, GitBranch, Component, Terminal, Rocket, MonitorSmartphone, Layers,
  IndianRupee, CreditCard, Smartphone, Users as UsersIcon, Calendar, ShieldCheck as ShieldCheckIcon,
  FileText, Video, FileSpreadsheet, Sigma, LineChart, Presentation, Lightbulb, TrendingUp
} from 'lucide-react';
import CoursePaymentForm from './CoursePaymentForm';

// --- Course Configuration ---
const courseConfig = {
  digitalMarketing: {
    id: 'dm01',
    title: "Digital Marketing Masterclass",
    tagline: "Master SEO, SEM, Social Media, Content Marketing, Email Marketing, and Analytics to drive growth and generate leads.",
    duration: "16 Weeks (Part-Time)",
    format: "Live Online Sessions + Offline Classes",
    level: "Beginner to Advanced",
    nextBatch: "April 15, 2025",
    price: {
      original: 90000,
      discounted: 45000,
      guarantee: "100% Free Demo Class",
    },
    ratings: {
      average: 4.8,
      count: 1243,
    },
    instructor: {
      name: "Rohit Sharma",
      title: "Senior Digital Marketing Strategist",
      bio: "10+ years of experience in digital marketing with expertise in SEO, SEM, and social media strategies.",
      linkedin: "https://linkedin.com/in/rohitsharma",
    },
    curriculum: [
      { icon: Search, title: "SEO Fundamentals", description: "Master keyword research, on-page optimization, technical SEO, and link building strategies.", weeks: "Week 1-3" },
      { icon: Megaphone, title: "Social Media Marketing", description: "Learn Facebook, Instagram, LinkedIn, and Twitter marketing with advanced targeting techniques.", weeks: "Week 4-6" },
      { icon: BarChart, title: "PPC & SEM (Google Ads)", description: "Master Google Ads, Bing Ads, and advanced bidding strategies for maximum ROI.", weeks: "Week 7-9" },
      { icon: Mail, title: "Email Marketing & Automation", description: "Build effective email campaigns, automation workflows, and lead nurturing sequences.", weeks: "Week 10-11" },
      { icon: UsersIcon, title: "Content Marketing Strategy", description: "Create compelling content, develop content calendars, and implement distribution strategies.", weeks: "Week 12-14" },
      { icon: Award, title: "Analytics & Reporting", description: "Master Google Analytics, data interpretation, and create actionable business reports.", weeks: "Week 15-16" },
    ],
    highlights: [
      { icon: BrainCircuit, text: "Build a strong foundation in core digital marketing principles" },
      { icon: Zap, text: "Hands-on projects simulating real campaigns & assignments" },
      { icon: UserCheck, text: "Live Q&A sessions with expert instructors" },
      { icon: BrainCircuit, text: "Learn from Experienced Tech Industry Professionals" },
      { icon: Award, text: "100% Job Guarantee*" },
      { icon: UsersRound, text: "Proven Placement: 100+ Students Hired" },
      { icon: CheckCircle, text: "Practical skills using industry-standard tools" },
      { icon: CalendarDays, text: "Lifetime access to course materials and recordings" },
      { icon: Target, text: "Personalized feedback on all major projects" },
      { icon: Globe, text: "Global networking opportunities" },
      { icon: ShieldCheckIcon, text: "SkillCareer Certificate of Completion" },
      { icon: Users, text: "Access to a private student community forum" },
    ],
    tools: [
      { name: "Google Analytics" }, { name: "Google Ads" }, { name: "SEMrush" },
      { name: "Mailchimp" }, { name: "Ahrefs" }, { name: "Hootsuite" },
      { name: "Canva" }, { name: "Meta Business Suite" }, { name: "Google Search Console" },
    ],
    audience: [
      "Aspiring Digital Marketers & Freshers",
      "Marketing Professionals seeking to upskill",
      "Business Owners & Entrepreneurs",
      "Students & Recent Graduates",
      "Anyone looking to understand online marketing & lead generation",
    ],
    outcomes: [
      { role: "Digital Marketing Executive", salary: "₹5,50,000 - ₹7,50,000" },
      { role: "Social Media Specialist", salary: "₹5,00,000 - ₹7,0,000" },
      { role: "SEO Executive", salary: "₹4,50,000 - ₹6,50,000" },
      { role: "Content Marketing Executive", salary: "₹6,00,000 - ₹8,50,000" },
      { role: "PPC Executive", salary: "₹5,00,000 - ₹7,50,000" },
    ],
    testimonials: [
      { name: "Alex Johnson", role: "Marketing Director", company: "TechStart Inc.", text: "This course transformed our marketing approach completely. ROI increased by 187% within 3 months of implementing the strategies taught." },
      { name: "Maya Patel", role: "E-commerce Entrepreneur", company: "StyleHub", text: "As a solo entrepreneur, I needed practical skills fast. This masterclass delivered exactly that - I'm now managing all my marketing channels confidently." },
      { name: "David Kim", role: "Career Changer", company: "Former Accountant", text: "From complete beginner to landing a digital marketing job in 3 months. The projects in this course made my portfolio stand out to employers." },
    ],
    faqs: [
      { question: "Is this course suitable for absolute beginners?", answer: "Yes! We start with the fundamentals and progressively build up your skills. No prior marketing experience is required, making it ideal for freshers and career changers." },
      { question: "What tools will I learn to use?", answer: "You'll get hands-on experience with foundational tools like Google Analytics, Google Ads, popular social media platforms, and email marketing software concepts applicable to tools like Mailchimp." },
      { question: "Is there any career support after the course?", answer: "Yes, this course includes access to our standard career services, including resume tips and general job search guidance relevant to entry-level digital marketing roles." },
      { question: "What are the terms for the 100% Job Guarantee?", answer: "The Job Guarantee requires successful course completion, active participation in career services, meeting specific project standards, and proactive job searching in designated locations. Full terms and conditions apply and will be provided upon enrollment." },
      { question: "How long will I have access to the course materials?", answer: "You get lifetime access to all recorded sessions, notes, and supplementary materials provided during the course." },
      { question: "What if I can't attend the live sessions?", answer: "All sessions are recorded and made available within 24 hours. You can also submit questions in advance that will be addressed during the live sessions." },
      { question: "Is there a payment plan available?", answer: "Yes, we offer interest-free installment plans. You can pay in 3 monthly installments with no additional fees." },
    ],
  },
  webDevelopment: {
    id: 'wd01',
    title: "Full Stack Web Development Bootcamp",
    tagline: "Go from beginner to job-ready developer. Master frontend (React), backend (Node.js), databases, and deployment.",
    duration: "14 Weeks (Project-Driven)",
    format: "Hybrid: Live Online & In-Person Options",
    level: "Beginner to Advanced",
    nextBatch: "May 1st, 2025",
    price: {
      original: 85000,
      discounted: 42500,
      guarantee: "Free Demo Class Available",
    },
    ratings: {
      average: 4.9,
      count: 1150,
    },
    instructor: {
      name: "Anjali Sharma",
      title: "Principal Software Engineer & Mentor",
      bio: "12+ years building scalable web apps for top tech firms (Ex-Microsoft, Amazon). Passionate about mentoring the next generation of developers.",
      linkedin: "https://linkedin.com/in/anjalisharmadev",
    },
    curriculum: [
      { icon: Code, title: "Foundation: HTML, CSS & Git", description: "Semantic HTML, advanced CSS (Flexbox, Grid), responsive design principles, essential Git commands.", weeks: "Week 1-2" },
      { icon: MonitorSmartphone, title: "Core JavaScript & DOM", description: "ES6+, async programming, browser APIs, manipulating the DOM, debugging techniques.", weeks: "Week 3-4" },
      { icon: Component, title: "React Ecosystem Mastery", description: "Deep dive into React Hooks, state management (Context/Redux), routing, testing (RTL).", weeks: "Week 5-7" },
      { icon: Server, title: "Backend with Node.js & Express", description: "Building robust APIs, middleware patterns, authentication (JWT), error handling.", weeks: "Week 8-10" },
      { icon: Database, title: "Databases: SQL & NoSQL", description: "Relational (PostgreSQL) & NoSQL (MongoDB) databases, data modeling, ORMs/ODMs (Prisma/Mongoose).", weeks: "Week 11-12" },
      { icon: Rocket, title: "Deployment & Cloud Essentials", description: "CI/CD pipelines, deploying to Vercel/AWS, Docker basics, server management concepts.", weeks: "Week 13-14" },
    ],
    highlights: [
      { icon: Layers, text: "True Full-Stack: Frontend + Backend Mastery" },
      { icon: Zap, text: "Build & Deploy 6+ Portfolio Projects" },
      { icon: UserCheck, text: "Live Interactive Coding Sessions" },
      { icon: BrainCircuit, text: "Learn from Top Industry Engineers" },
      { icon: Users, text: "Dedicated Career Services & Mock Interviews" },
      { icon: Code, text: "Master React, Node.js, SQL, NoSQL" },
      { icon: CalendarDays, text: "Lifetime Access & Community Membership" },
      { icon: Target, text: "Personalized Feedback & Code Reviews" },
      { icon: Award, text: "100% Job Guarantee Program*" },
      { icon: UsersRound, text: "1000+ Strong Hiring Partner Network" },
      { icon: ShieldCheckIcon, text: "Industry-Recognized Certification" },
    ],
    tools: [
      { name: "HTML5 / CSS3" }, { name: "JavaScript (ESNext)" }, { name: "React / Next.js" },
      { name: "Node.js / Express" }, { name: "REST APIs" }, { name: "SQL (PostgreSQL)" },
      { name: "NoSQL (MongoDB)" }, { name: "Git / GitHub" }, { name: "Docker Basics" },
      { name: "AWS / Vercel" }, { name: "VS Code" }, { name: "Testing (Jest/RTL)" },
    ],
    audience: [
      "Complete Beginners aspiring to be Developers",
      "Career Switchers entering the tech field",
      "Students/Graduates needing practical skills",
      "Designers aiming to implement their UIs",
      "Anyone passionate about building for the web",
      "Entrepreneurs building their product",
    ],
    outcomes: [
      { role: "Frontend Developer", salary: "₹6,00,000 - ₹12,00,000" },
      { role: "Backend Developer", salary: "₹7,00,000 - ₹14,00,000" },
      { role: "Full Stack Developer", salary: "₹8,00,000 - ₹16,00,000" },
      { role: "React Developer", salary: "₹6,50,000 - ₹13,00,000" },
      { role: "Node.js Developer", salary: "₹7,00,000 - ₹14,00,000" },
    ],
    testimonials: [
      { name: "Aisha Khan", role: "Frontend Developer", company: "TechCorp", text: "The React module was exceptional. I went from knowing basic HTML to building complex, interactive applications. The instructors were always available to help." },
      { name: "Vikram Patel", role: "Backend Developer", company: "StartupXYZ", text: "The Node.js and database sections gave me the confidence to build scalable APIs. I landed my first developer job within 2 months of completing the course." },
      { name: "Priya Singh", role: "Full Stack Developer", company: "E-commerce Giant", text: "This bootcamp completely transformed my career. The project-based learning approach made all the difference. Highly recommended!" },
    ],
    faqs: [
      { question: "Do I need any programming experience?", answer: "No! This course is designed for complete beginners. We start with the basics and build up your skills progressively." },
      { question: "What will I build during the course?", answer: "You'll build 6+ real-world projects including an e-commerce site, a social media app, a task management system, and more. These projects will form your portfolio." },
      { question: "How much time should I dedicate weekly?", answer: "We recommend 15-20 hours per week including live sessions, assignments, and project work for optimal learning." },
      { question: "Is the job guarantee program available?", answer: "Yes! Our job guarantee program includes resume building, mock interviews, and direct connections with our hiring partners. Terms and conditions apply." },
      { question: "Can I work while taking this course?", answer: "Absolutely! Our flexible schedule with recorded sessions allows you to learn at your own pace while balancing other commitments." },
      { question: "What support is available during the course?", answer: "You'll have access to 24/7 community support, weekly Q&A sessions, code reviews, and direct instructor assistance." },
      { question: "Are there any hidden costs?", answer: "No hidden costs! All tools and software used in the course are free or provided through our partnerships." },
    ],
  },
  dataAnalytics: {
    id: 'da01',
    title: "Data Analytics Pro Bootcamp (Python & SQL)",
    tagline: "Master data collection, cleaning, analysis, visualization, and interpretation using Python, SQL, and industry-standard tools.",
    duration: "14 Weeks (Comprehensive)",
    format: "Live Online Sessions + Project Work",
    level: "Beginner to Intermediate",
    nextBatch: "June 15th, 2025",
    price: {
      original: 75000,
      discounted: 38000,
      guarantee: "100% Free Demo Class",
    },
    ratings: {
      average: 4.8,
      count: 720,
    },
    instructor: {
      name: "Rohit Gupta",
      title: "Senior Data Scientist",
      bio: "9+ years of experience driving business decisions with data insights at leading e-commerce and fintech companies. Passionate about making data accessible.",
      linkedin: "https://linkedin.com/in/rohitguptadata",
    },
    curriculum: [
      { icon: Code, title: "Python for Data Science Fundamentals", description: "Core Python programming, data types, control flow, functions, and essential libraries (NumPy).", weeks: "Week 1-3" },
      { icon: FileSpreadsheet, title: "Data Manipulation with Pandas", description: "DataFrames, data cleaning, wrangling, merging, grouping, and time series analysis.", weeks: "Week 4-5" },
      { icon: Database, title: "SQL for Data Analysis", description: "Database fundamentals, querying data (SELECT, JOIN, GROUP BY), subqueries, window functions.", weeks: "Week 6-7" },
      { icon: LineChart, title: "Data Visualization Techniques", description: "Creating insightful charts using Matplotlib & Seaborn, principles of effective visualization.", weeks: "Week 8-9" },
      { icon: Sigma, title: "Statistical Analysis Foundations", description: "Descriptive statistics, probability basics, hypothesis testing, A/B testing concepts.", weeks: "Week 10-11" },
      { icon: Presentation, title: "Analytics Projects & Reporting", description: "End-to-end data analysis projects, interpreting results, data storytelling, dashboard basics.", weeks: "Week 12-14" },
    ],
    highlights: [
      { icon: Zap, text: "Analyze real-world datasets & case studies" },
      { icon: UserCheck, text: "Live interactive sessions with Q&A" },
      { icon: BrainCircuit, text: "Learn from Experienced Data Scientists" },
      { icon: Users, text: "Dedicated community forum & peer support" },
      { icon: Code, text: "Master Python, Pandas, SQL & Visualization" },
      { icon: CalendarDays, text: "Lifetime access to course materials & recordings" },
      { icon: Lightbulb, text: "Develop data intuition & problem-solving skills" },
      { icon: Target, text: "Personalized project feedback & guidance" },
      { icon: Award, text: "100% Placement Assistance*" },
      { icon: UsersRound, text: "Connect with our Industry Network" },
      { icon: ShieldCheckIcon, text: "SkillCareer Certificate of Completion" },
    ],
    tools: [
      { name: "Python (Core)" }, { name: "Pandas & NumPy" }, { name: "SQL (PostgreSQL/MySQL)" },
      { name: "Matplotlib & Seaborn" }, { name: "Jupyter Notebook / VS Code" }, { name: "Git & GitHub Basics" },
      { name: "Excel for Data Analysis" }, { name: "Tableau / Power BI (Intro)" },
    ],
    audience: [
      "Aspiring Data Analysts / Scientists",
      "Business Analysts seeking technical skills",
      "Marketing & Finance Professionals",
      "Recent Graduates (Any Stream)",
      "Anyone wanting to leverage data",
      "Career Changers entering tech/data",
    ],
    outcomes: [
      { role: "Data Analyst", salary: "₹5,00,000 - ₹9,00,000" },
      { role: "Business Intelligence Analyst", salary: "₹6,00,000 - ₹11,00,000" },
      { role: "Junior Data Scientist", salary: "₹7,00,000 - ₹13,00,000" },
      { role: "Marketing Analyst", salary: "₹5,50,000 - ₹10,00,000" },
      { role: "Financial Analyst (Quant Focus)", salary: "₹6,50,000 - ₹12,00,000" },
    ],
    testimonials: [
      { name: "Aisha Khan", role: "Data Analyst", company: "E-commerce Giant", text: "The practical approach using Python and SQL was exactly what I needed. I learned how to extract meaningful insights from raw data and present them effectively. Landed a great analyst role!" },
      { name: "Vikram Patel", role: "Marketing Specialist", company: "Digital Agency", text: "This course empowered me to finally understand and utilize our campaign data. The visualization module dramatically improved my reporting skills. Highly recommended for marketers." },
      { name: "Priya Singh", role: "BI Developer", company: "Logistics Firm", text: "Coming from a non-technical background, I found the course well-structured and the instructors very supportive. The SQL sections were particularly valuable for my current role." },
    ],
    faqs: [
      { question: "Do I need a background in programming or statistics?", answer: "No prior programming experience is required! We start Python from scratch. Basic familiarity with high school level math concepts is helpful but advanced statistics knowledge is not mandatory; we cover the necessary foundations." },
      { question: "Which tools and languages will I learn?", answer: "You'll gain proficiency in Python (including key libraries like Pandas and NumPy for data manipulation, Matplotlib and Seaborn for visualization), SQL for database querying, and common tools like Jupyter Notebooks and Git." },
      { question: "What kind of projects are included?", answer: "You'll work on projects involving data cleaning and preparation, exploratory data analysis (EDA), statistical analysis, data visualization, and creating reports/dashboards using real-world inspired datasets from various industries." },
      { question: "Is this course theoretical or practical?", answer: "It's highly practical! While we cover necessary theories, the focus is on hands-on application through coding exercises, assignments, case studies, and capstone projects designed to build job-ready skills." },
      { question: "How does the Placement Assistance work?", answer: "Our career services team provides resume building workshops, mock interviews, portfolio reviews, and connects eligible graduates with relevant job openings through our network of hiring partners. Success depends on student performance and active participation." },
      { question: "What if I miss a live session?", answer: "All live sessions are recorded and made available on our learning platform, usually within 24 hours. You get lifetime access, allowing you to review concepts or catch up anytime." },
      { question: "Are there flexible payment options?", answer: "Yes, we offer EMI and installment options to make the course financially accessible. Please reach out to our admissions counselors for specific details and eligibility." },
    ],
  },
};

// --- Helper Components ---
const CurriculumCard = ({ icon: Icon, title, description, weeks, phase }) => {
  const phaseColor = phase === 'Frontend' ? 'text-cyan-600 bg-cyan-50 border-cyan-100' :
                     phase === 'Backend' ? 'text-indigo-600 bg-indigo-50 border-indigo-100' :
                     'text-purple-600 bg-purple-50 border-purple-100';
  const iconBgColor = phase === 'Frontend' ? 'bg-gradient-to-br from-cyan-100 to-blue-100' :
                      phase === 'Backend' ? 'bg-gradient-to-br from-indigo-100 to-purple-100' :
                      'bg-gradient-to-br from-purple-100 to-pink-100';
  const iconTextColor = phase === 'Frontend' ? 'text-cyan-700' :
                        phase === 'Backend' ? 'text-indigo-700' :
                        'text-purple-700';

  return(
    <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 hover:border-blue-300">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className={`flex-shrink-0 rounded-lg p-3 shadow-sm ${iconBgColor}`}>
          <Icon className={`h-6 w-6 ${iconTextColor}`} />
        </div>
        <span className={`text-xs font-semibold py-1 px-3 rounded-md border ${phaseColor}`}>
          {weeks}
        </span>
      </div>
      <h4 className="text-md font-semibold text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-600 flex-grow leading-relaxed">{description}</p>
    </div>
  );
};

const HighlightItem = ({ icon: Icon, text }) => (
  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 mt-1 text-blue-500">
      <CheckCircle className="h-5 w-5" />
    </div>
    <span className="text-sm font-medium text-slate-700">{text}</span>
  </div>
);

const ToolBadge = ({ name }) => (
  <span className="inline-block bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-md border border-slate-200/80">
    {name}
  </span>
);

const TestimonialCard = ({ name, role, company, text }) => (
  <div className="bg-white rounded-xl shadow-md border border-slate-200/90 p-6 relative transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-blue-300">
     <div className="absolute -top-3 left-5 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-white">
           <path fill="currentColor" d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.685.48-2.205.427-.58 1.16-.94 2.196-1.09v-2.3c-1.326.19-2.4.695-3.224 1.517-.824.822-1.302 1.785-1.434 2.89-.085.72-.073 1.386.035 2.01.124.71.304 1.327.54 1.853.284.616.662 1.108 1.137 1.477.534.417 1.084.63 1.66.63.624 0 1.17-.21 1.64-.628.57-.506.855-1.177.855-2.013zm9.76 0c0-.88-.23-1.618-.69-2.217-.326-.41-.77-.68-1.327-.81-.56-.13-1.08-.14-1.54-.03-.16-.94.09-1.68.48-2.2.42-.58 1.15-.94 2.19-1.09v-2.3c-1.33.18-2.4.69-3.23 1.52-.82.82-1.3 1.79-1.43 2.89-.09.72-.08 1.39.03 2.01.12.71.3 1.33.54 1.85.28.61.66 1.11 1.13 1.47.53.42 1.08.63 1.66.63.62 0 1.17-.21 1.64-.63.57-.5.85-1.17.85-2.01z"/>
        </svg>
     </div>
     <p className="text-slate-600 text-sm leading-relaxed mb-5 mt-4">{text}</p>
     <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
       <div className="h-9 w-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm font-semibold">
           {name.charAt(0)}
       </div>
       <div>
         <p className="font-semibold text-slate-800 text-sm">{name}</p>
         <p className="text-xs text-slate-500">{role}, {company}</p>
       </div>
     </div>
   </div>
);

const PriceDisplay = ({ original, discounted }) => (
  <div className="flex items-baseline gap-2">
    <span className="text-3xl font-bold text-blue-600">₹{discounted.toLocaleString()}</span>
    {original && discounted !== original && (
        <span className="text-lg text-slate-400 line-through">₹{original.toLocaleString()}</span>
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
export default function EnhancedCoursePage({ courseType = 'digitalMarketing' }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showPayment, setShowPayment] = useState(false);
  const [enrollmentSuccess, setEnrollmentSuccess] = useState(false);
  const [enrollmentData, setEnrollmentData] = useState(null);

  const course = courseConfig[courseType] || courseConfig.digitalMarketing;
  const courseSlugMap = {
    digitalMarketing: "digital-marketing-course",
    webDevelopment: "full-stack-development-course",
    dataAnalytics: "data-analytics-course",
  };
  const courseSlug = courseSlugMap[courseType] || "digital-marketing-course";

  const calculateDiscountPercentage = () => {
    if (!course.price.original || course.price.original <= 0 || course.price.discounted >= course.price.original) {
      return 0;
    }
    return Math.round(((course.price.original - course.price.discounted) / course.price.original) * 100);
  };

  const handleEnrollmentSuccess = (data) => {
    setEnrollmentData(data);
    setEnrollmentSuccess(true);
    setShowPayment(false);
  };

  const handleEnrollClick = () => {
    setShowPayment(true);
    setActiveTab('enrollment');
  };

  if (enrollmentSuccess) {
    return (
        <div className="bg-white overflow-hidden">
          <CourseStructuredData slug={courseSlug} />
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <ShieldCheckIcon className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">🎉 Enrollment Successful!</h1>
              <p className="text-gray-600 mb-6">Congratulations! You have successfully enrolled in {course.title}</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Enrollment Details:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <div><span className="font-medium">Name:</span> {enrollmentData.name}</div>
                  <div><span className="font-medium">Email:</span> {enrollmentData.email}</div>
                  <div><span className="font-medium">Course:</span> {enrollmentData.courseTitle}</div>
                  <div><span className="font-medium">Amount:</span> ₹{enrollmentData.amount.toLocaleString()}</div>
                  <div><span className="font-medium">Payment ID:</span> {enrollmentData.paymentId}</div>
                  <div><span className="font-medium">Batch:</span> {enrollmentData.batchPreference}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/">Return to Homepage</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/courses">Browse More Courses</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
      <div className="bg-white overflow-hidden">
        <CourseStructuredData slug={courseSlug} />
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50/60 via-white to-white pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badges Area */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5">
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide border border-blue-200/80">
                {calculateDiscountPercentage()}% OFF - Limited Time
              </span>
              <span className="flex items-center gap-1.5 text-xs text-yellow-700 font-medium bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200/80">
                <RatingStars rating={course.ratings.average} />
                <span className="font-semibold">{course.ratings.average}</span>
                ({course.ratings.count} reviews)
              </span>
              <span className="flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200/80">
                  <Award className="h-4 w-4" />
                  <span className="font-bold">Job Guarantee*</span>
              </span>
              <span className="flex items-center gap-1.5 bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-200/80">
                  <UsersRound className="h-4 w-4" />
                  <span className="font-bold">100+ Placements</span>
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-5">
              {course.title}
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 mb-6 max-w-2xl mx-auto">
              {course.tagline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500 mb-8">
              <div className="flex items-center gap-1.5"> <CalendarDays className="h-4 w-4 text-blue-500" /> {course.duration} </div>
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <Laptop className="h-4 w-4 text-blue-500" /> {course.format} </div>
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <BarChart className="h-4 w-4 text-blue-500" /> {course.level} </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-8">
              <PriceDisplay original={course.price.original} discounted={course.price.discounted} />
              <div className="flex items-center text-xs font-medium text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-200/70">
                <ShieldCheckIcon className="h-4 w-4 mr-1.5" />
                {course.price.guarantee}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
              <div className="flex-shrink-0 transition-transform duration-200 hover:scale-[1.03]">
                <Button size="lg" onClick={handleEnrollClick} className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 px-8 py-3.5 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Enroll Now & Save {calculateDiscountPercentage()}%
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
                </Button>
              </div>
              <div className="text-center sm:text-left bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-2 flex flex-col justify-center">
                <p className="text-xs text-slate-500 mb-0.5">Next batch starts</p>
                <p className="font-semibold text-slate-700">{course.nextBatch}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-30 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 py-4">
            <Button
              variant={activeTab === 'overview' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('overview')}
              className="text-sm font-medium"
            >
              Overview
            </Button>
            <Button
              variant={activeTab === 'curriculum' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('curriculum')}
              className="text-sm font-medium"
            >
              Curriculum
            </Button>
            <Button
              variant={activeTab === 'highlights' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('highlights')}
              className="text-sm font-medium"
            >
              Features
            </Button>
            <Button
              variant={activeTab === 'instructor' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('instructor')}
              className="text-sm font-medium"
            >
              Instructor
            </Button>
            <Button
              variant={activeTab === 'testimonials' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('testimonials')}
              className="text-sm font-medium"
            >
              Reviews
            </Button>
            <Button
              variant={activeTab === 'faqs' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('faqs')}
              className="text-sm font-medium"
            >
              FAQs
            </Button>
            <Button
              variant={activeTab === 'enrollment' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('enrollment')}
              className="text-sm font-medium"
            >
              Enrollment
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-20 bg-slate-50/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">Course Overview</h2>
                  <div className="space-y-4 text-slate-600">
                    <p className="text-lg leading-relaxed">
                      This comprehensive {courseType === 'digitalMarketing' ? 'digital marketing' : 
                      courseType === 'webDevelopment' ? 'web development' : 'data analytics'} program is designed to take you from beginner to job-ready professional in just {course.duration.split(' ')[0]} weeks.
                    </p>
                    <p className="leading-relaxed">
                      Through hands-on projects, real-world case studies, and expert guidance, you'll gain the practical skills and confidence needed to succeed in today's competitive job market.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-2xl font-bold text-blue-600">{course.duration.split(' ')[0]}</div>
                      <div className="text-sm text-slate-600">Weeks Duration</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-2xl font-bold text-green-600">{course.highlights.length}+</div>
                      <div className="text-sm text-slate-600">Learning Modules</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-900">Who Should Enroll?</h3>
                  <div className="space-y-3">
                    {course.audience.map((audience, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-slate-200">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{audience}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Curriculum Tab */}
          {activeTab === 'curriculum' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center">Course Curriculum</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {course.curriculum.map((module) => (
                    <CurriculumCard key={module.title} {...module} />
                ))}
              </div>
            </div>
          )}

          {/* Highlights Tab */}
          {activeTab === 'highlights' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center">Course Features & Tools</h2>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                  <div className="lg:col-span-3 space-y-6">
                      <h3 className="text-xl font-semibold text-slate-800 mb-5">Key Program Benefits</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {course.highlights.map((highlight) => (
                          <HighlightItem key={highlight.text} icon={highlight.icon} text={highlight.text} />
                        ))}
                      </div>
                      <p className="text-xs text-slate-500 italic pt-2">*Job guarantee program details available upon request and subject to eligibility criteria.</p>
                  </div>
                   <div className="lg:col-span-2 space-y-6">
                      <h3 className="text-xl font-semibold text-slate-800 mb-5">Tools & Technologies</h3>
                       <div className="flex flex-wrap gap-2">
                           {course.tools.map((tool) => (
                               <ToolBadge key={tool.name} name={tool.name} />
                           ))}
                       </div>
                       <p className="text-sm text-slate-600 pt-2">Gain hands-on experience with the complete modern {courseType === 'digitalMarketing' ? 'digital marketing' : 
                      courseType === 'webDevelopment' ? 'web development' : 'data analytics'} toolkit.</p>
                   </div>
              </div>
            </div>
          )}

          {/* Instructor Tab */}
          {activeTab === 'instructor' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center">Meet Your Instructor</h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {course.instructor.name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{course.instructor.name}</h3>
                      <p className="text-blue-600 font-semibold mb-4">{course.instructor.title}</p>
                      <p className="text-slate-600 leading-relaxed mb-4">{course.instructor.bio}</p>
                      <div className="flex flex-wrap gap-4">
                        <Button variant="outline" asChild>
                          <a href={course.instructor.linkedin} target="_blank" rel="noopener noreferrer">
                            View LinkedIn Profile
                          </a>
                        </Button>
                        <div className="text-sm text-slate-500">
                          ⭐ {course.ratings.average}/5 ({course.ratings.count} reviews)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center">Student Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {course.testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} {...testimonial} />
                ))}
              </div>
              
              <div className="text-center pt-8">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/join-course-today">Join Our Success Stories</Link>
                </Button>
              </div>
            </div>
          )}

          {/* FAQs Tab */}
          {activeTab === 'faqs' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center">Frequently Asked Questions</h2>
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {course.faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm data-[state=open]:bg-blue-50 data-[state=open]:shadow-md transition-all"
                    >
                        <AccordionTrigger className="px-6 py-4 text-left font-medium text-slate-800 hover:no-underline hover:bg-slate-50 transition-colors data-[state=open]:text-blue-700">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5 text-slate-600 pt-1 text-sm leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
                
                <div className="text-center pt-8">
                  <p className="text-sm text-slate-500 mb-4">Still have questions?</p>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Contact Admissions Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Enrollment Tab */}
          {activeTab === 'enrollment' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center">Enroll in {course.title}</h2>
              {showPayment ? (
                <CoursePaymentForm course={course} onSuccess={handleEnrollmentSuccess} />
              ) : (
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-4">Course Summary</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between border-b pb-2">
                            <span className="text-slate-600">Course Fee:</span>
                            <span className="font-medium">₹{course.price.original.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between border-b pb-2 text-green-600">
                            <span className="text-slate-600">Discount ({calculateDiscountPercentage()}%):</span>
                            <span className="font-medium">-₹{(course.price.original - course.price.discounted).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between border-t pt-2 font-semibold text-lg">
                            <span>Total Payable:</span>
                            <span className="text-blue-600">₹{course.price.discounted.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <div className="mt-6 space-y-3">
                          <h4 className="font-semibold text-slate-800">What's Included:</h4>
                          <ul className="space-y-2 text-slate-600">
                            <li>✓ Complete Course Access</li>
                            <li>✓ Live Sessions</li>
                            <li>✓ Study Materials</li>
                            <li>✓ Certificate</li>
                            <li>✓ Job Assistance</li>
                            <li>✓ Lifetime Access</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                          <h4 className="font-semibold text-blue-900 mb-2">Next Steps:</h4>
                          <ol className="text-sm text-blue-800 space-y-2">
                            <li>1. Click "Complete Enrollment" below</li>
                            <li>2. Fill in your details</li>
                            <li>3. Choose payment method</li>
                            <li>4. Confirm enrollment</li>
                            <li>5. Receive confirmation email</li>
                          </ol>
                        </div>
                        
                        <div className="space-y-4">
                          <Button 
                            size="lg" 
                            onClick={handleEnrollClick}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
                          >
                            <CreditCard className="mr-2 h-5 w-5" />
                            Complete Enrollment - ₹{course.price.discounted.toLocaleString()}
                          </Button>
                          
                          <div className="text-center text-sm text-slate-500">
                            Secure payment • 100% Job Guarantee • Lifetime Access
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
              Invest in your future. Join the next {course.title} cohort and gain the skills employers are looking for. Limited seats available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleEnrollClick}
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg"
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Enroll Now - Save ₹{(course.price.original - course.price.discounted).toLocaleString()}
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="border-white text-white hover:bg-white hover:text-blue-700"
            >
              <Link href="/courses">Browse All Courses</Link>
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">100% Free Demo Class Available • Job Guarantee Program</p>
        </div>
      </section>

    </div>
  );
}
