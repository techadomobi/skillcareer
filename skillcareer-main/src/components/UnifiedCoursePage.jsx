"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import CourseStructuredData from "@/components/CourseStructuredData";
import { getCourseBySlug } from "@/lib/course-catalog";
import {
  Award,
  BarChart,
  BookOpen,
  CalendarDays,
  CheckCircle,
  Globe,
  Laptop,
  LineChart,
  PenTool,
  ShieldCheck,
  Target,
  Users,
  UsersRound,
} from "lucide-react";

const defaultCurriculum = (title) => {
  if (title === "Digital Marketing Masterclass") {
    return [
      { icon: BookOpen, title: "SEO & Content Strategy", description: "Master keyword research, on-page optimization, content planning, and technical SEO for organic growth.", weeks: "Weeks 1-3" },
      { icon: Target, title: "Paid Advertising (SEM/PPC)", description: "Learn Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and campaign optimization strategies.", weeks: "Weeks 4-6" },
      { icon: Laptop, title: "Social Media Marketing", description: "Build strategies for Facebook, Instagram, LinkedIn, Twitter, YouTube, and emerging platforms.", weeks: "Weeks 7-9" },
      { icon: LineChart, title: "Email Marketing & Automation", description: "Create effective email campaigns, automation workflows, and lead nurturing sequences.", weeks: "Weeks 10-11" },
      { icon: Users, title: "Analytics & Performance", description: "Master Google Analytics, data interpretation, KPIs, and ROI measurement across channels.", weeks: "Weeks 12-13" },
      { icon: Award, title: "Advanced Strategies & Capstone", description: "E-commerce marketing, influencer marketing, mobile marketing, and comprehensive final project.", weeks: "Weeks 14-16" },
    ];
  }
  return [
    { icon: BookOpen, title: `Core ${title} Concepts`, description: "Build strong fundamentals with structured learning and guided practice.", weeks: "Module 1" },
    { icon: Target, title: "Applied Skills", description: "Translate concepts into real-world tasks and assignments.", weeks: "Module 2" },
    { icon: Laptop, title: "Tools & Workflow", description: "Hands-on exposure to tools, frameworks, and industry workflows.", weeks: "Module 3" },
    { icon: LineChart, title: "Projects & Case Studies", description: "Work on projects that mirror real business or job scenarios.", weeks: "Module 4" },
    { icon: Users, title: "Mentor Feedback", description: "Weekly reviews, doubt clearing, and structured guidance.", weeks: "Module 5" },
    { icon: Award, title: "Capstone & Certification", description: "Complete a final project and receive your certificate.", weeks: "Module 6" },
  ];
};

const defaultHighlights = (title) => {
  if (title === "Digital Marketing Masterclass") {
    return [
      { icon: CheckCircle, text: "Complete digital marketing strategy from SEO to paid ads" },
      { icon: UsersRound, text: "Hands-on campaigns with real platforms and budgets" },
      { icon: ShieldCheck, text: "Google Ads, Facebook Ads, and analytics certifications" },
      { icon: CalendarDays, text: "Weekend and weekday batches for working professionals" },
      { icon: Target, text: "Live projects with Delhi/NCR businesses and startups" },
      { icon: Globe, text: "Industry expert mentors with 5+ years experience" },
      { icon: Award, text: "Portfolio of 6+ live campaigns and case studies" },
      { icon: BarChart, text: "Performance tracking and optimization workshops" },
    ];
  }
  return [
    { icon: CheckCircle, text: "Structured learning path with clear milestones" },
    { icon: UsersRound, text: "Small batches for better mentor attention" },
    { icon: ShieldCheck, text: "Job-ready skills and interview guidance" },
    { icon: CalendarDays, text: "Flexible weekday and weekend schedules" },
    { icon: Target, text: "Hands-on assignments and practice tasks" },
    { icon: Globe, text: "Career guidance for Delhi/NCR opportunities" },
    { icon: Award, text: "Industry-recognized certificate" },
    { icon: BarChart, text: "Progress tracking and feedback reports" },
  ];
};

const defaultAudience = (title) => {
  if (title === "Digital Marketing Masterclass") {
    return [
      "Beginners looking to start a career in digital marketing",
      "Marketing professionals wanting to upgrade their skills",
      "Business owners and entrepreneurs",
      "Sales professionals transitioning to marketing",
      "Recent graduates seeking digital marketing roles",
      "Working professionals from any field looking for career change",
      "Content creators wanting to monetize their skills",
      "Small business owners wanting to grow online",
    ];
  }
  return [
    `Beginners looking to start in ${title}`,
    "Students and recent graduates",
    "Working professionals upskilling",
    "Career switchers exploring new roles",
    "Entrepreneurs building practical skills",
  ];
};

const defaultOutcomes = (title) => {
  if (title === "Digital Marketing Masterclass") {
    return [
      "Complete digital marketing strategy and execution skills",
      "Hands-on experience with Google Ads, Facebook Ads, and analytics tools",
      "Portfolio of 6+ live campaigns and case studies",
      "Certification in Google Ads, Facebook Ads, and Google Analytics",
      "Job-ready skills for digital marketing roles in Delhi/NCR",
      "Understanding of SEO, content marketing, email marketing, and social media",
      "Ability to create and optimize marketing campaigns across multiple channels",
      "Skills in data analysis and performance optimization",
      "Knowledge of e-commerce marketing and conversion optimization",
      "Understanding of influencer marketing and mobile marketing strategies",
    ];
  }
  return [
    `${title} foundation and practical confidence`,
    "Portfolio-ready projects and assignments",
    "Interview preparation and job readiness",
    "Improved productivity and tool fluency",
    "Clear next steps for advanced learning",
  ];
};

const defaultFaqs = (title) => {
  if (title === "Digital Marketing Masterclass") {
    return [
      { question: "Is this digital marketing course beginner friendly?", answer: "Yes, the program starts from fundamentals and builds step by step with hands-on practice." },
      { question: "Do I need any prior marketing experience?", answer: "No prior experience is required. We start with basics and gradually build your skills." },
      { question: "Are Google Ads and Facebook Ads certifications included?", answer: "Yes, we provide preparation and guidance for Google Ads, Facebook Ads, and Google Analytics certifications." },
      { question: "Will I get hands-on experience with real campaigns?", answer: "Yes, every module includes practical assignments and we work on live projects with Delhi/NCR businesses." },
      { question: "Can I attend weekend batches while working?", answer: "Yes, we offer both weekday and weekend batches designed for working professionals." },
      { question: "Do I need a laptop for the course?", answer: "A laptop is recommended for practice, but we provide lab access in select batches for hands-on sessions." },
      { question: "What kind of job roles can I apply for after this course?", answer: "You'll be ready for roles like Digital Marketing Executive, SEO Specialist, Social Media Manager, PPC Analyst, and Marketing Coordinator." },
      { question: "Do you provide placement assistance?", answer: "Yes, we offer interview preparation, resume building, and share relevant job opportunities in Delhi/NCR." },
      { question: "Will I get a portfolio of work?", answer: "Yes, you'll complete 6+ live campaigns and case studies that form a strong portfolio for job applications." },
      { question: "What makes this course different from others?", answer: "Our course combines practical skills with real business projects, industry certifications, and Delhi/NCR focused career guidance." },
    ];
  }
  if (title === "Class 10 Board Preparation") {
    return [
      { question: "Which boards does this Class 10 program support?", answer: "The study plan is aligned for CBSE and most State boards, with focus on concept clarity and exam practice." },
      { question: "Which subjects are covered in Class 10?", answer: "Typically: Maths, Science, English, and Social Science. We share a subject-wise schedule during onboarding." },
      { question: "How are classes conducted?", answer: "We offer structured teaching, weekly practice, and doubt-solving. Batch options can include online and offline depending on availability." },
      { question: "Do you provide notes, worksheets, and sample papers?", answer: "Yes. You get chapter-wise notes, worksheets, and board-pattern practice sets for revision." },
      { question: "Are mock tests included?", answer: "Yes. Regular tests and mock exams are conducted with feedback so students improve scores steadily." },
      { question: "How do you help with time management and exam strategy?", answer: "We teach paper-solving strategy, revision planning, and mistake analysis to improve speed and accuracy." },
      { question: "Can parents get progress updates?", answer: "Yes. We provide periodic progress updates and guidance on how to support study routines at home." },
      { question: "Is a demo class available?", answer: "Yes. You can book a demo session and talk to the counselor for batch timings and subject availability." },
    ];
  }
  if (title === "Class 12 Board Preparation") {
    return [
      { question: "Which streams are supported for Class 12?", answer: "We support major streams including Science, Commerce, and Arts. Subject availability depends on the batch." },
      { question: "Is this program aligned for CBSE/State board exams?", answer: "Yes. The program focuses on board patterns, previous year questions, and structured revision." },
      { question: "Do you help with practicals and internal assessments?", answer: "Yes. Guidance is provided for practical files, viva preparation, and internal assessment requirements where applicable." },
      { question: "Are previous year papers and mock tests included?", answer: "Yes. Students get PYQs, chapter tests, and full-length mocks with performance review." },
      { question: "How is doubt solving handled?", answer: "Dedicated doubt sessions are included so students can clear concepts quickly and stay consistent." },
      { question: "Can I join if I am starting late in the session?", answer: "Yes. We help you catch up with a recovery plan and extra practice based on your weak areas." },
      { question: "Do you provide career guidance after 12th?", answer: "Yes. We share guidance on common pathways and entrance prep direction based on the student's goals." },
      { question: "Is a demo class available?", answer: "Yes. Book a demo to confirm stream, subjects, batch timings, and format (online/offline)." },
    ];
  }
  return [
    { question: `Is this ${title} course beginner friendly?`, answer: "Yes, the program starts from fundamentals and builds step by step." },
    { question: "Are projects included?", answer: "Yes, every module includes hands-on assignments and a final capstone." },
    { question: "Do you provide certificates?", answer: "Yes, a SkillCareer completion certificate is provided." },
    { question: "Is placement support included?", answer: "We offer interview guidance and share relevant opportunities." },
    { question: "Can I attend weekend batches?", answer: "Yes, weekend and weekday options are available." },
    { question: "Do I need a laptop?", answer: "A laptop is recommended for practice, but lab support is available in select batches." },
  ];
};

const ToolBadge = ({ name }) => (
  <span className="wow-sheen course-pill inline-flex items-center gap-1.5 bg-white/70 backdrop-blur text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
    {name}
  </span>
);

const HighlightItem = ({ icon: Icon, text }) => (
  <div className="wow-sheen course-surface course-float group flex items-start gap-3 rounded-xl border border-transparent hover:border-slate-200 hover:bg-white/70 px-3 py-2 transition">
    <div className="flex-shrink-0 mt-1 text-blue-600">
      {Icon ? <Icon className="h-5 w-5" /> : <CheckCircle className="h-5 w-5" />}
    </div>
    <span className="text-sm font-medium text-slate-700">{text}</span>
  </div>
);

const CurriculumCard = ({ icon: Icon, title, description, weeks }) => (
  <div className="wow-border wow-sheen course-surface course-float group bg-white p-6 rounded-2xl border border-slate-200 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-blue-300">
    <div className="flex items-center justify-between gap-4 mb-4">
      <div className="flex-shrink-0 rounded-xl p-3 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/70">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <span className="text-xs font-semibold py-1 px-3 rounded-md border bg-blue-50 text-blue-700 border-blue-100">
        {weeks}
      </span>
    </div>
    <h4 className="text-md font-semibold text-slate-900 mb-2">{title}</h4>
    <p className="text-sm text-slate-600 flex-grow leading-relaxed">{description}</p>
    <div className="mt-5 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition" />
  </div>
);

const StepCard = ({ step, title, description }) => (
  <div className="wow-border relative h-full overflow-visible rounded-2xl">
    <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1.5 text-xs font-bold tracking-wide text-white shadow-md">
      Step {step}
    </div>
    <div className="wow-sheen course-surface course-float relative z-10 h-full rounded-2xl border border-slate-200 bg-white p-6 pt-8 shadow-sm transition hover:shadow-lg">
      <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  </div>
);

const COURSE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Journey", href: "#journey" },
  { label: "Highlights", href: "#highlights" },
  { label: "Tools", href: "#tools" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "FAQs", href: "#faqs" },
  { label: "Enroll", href: "#enroll" },
];

export default function UnifiedCoursePage({ slug }) {
  const course = getCourseBySlug(slug);

  const title = course?.title || "Professional Course";
  const description = course?.description || "Build practical skills with a career-focused curriculum.";
  const duration = course?.duration || "8 Weeks";
  const level = course?.level || "Beginner";
  const category = course?.category || "Professional Training";
  const price = course?.price || 0;
  const discountedPrice = course?.discountedPrice || price;
  const keywords = course?.keywords || [];
  const imageSrc = course?.image || "/skill.jpg";
  const enrollHref = `/enroll/${slug}`;

  const curriculum = defaultCurriculum(title);
  const highlights = defaultHighlights(title);
  const audience = defaultAudience(title);
  const outcomes = defaultOutcomes(title);
  const faqs = defaultFaqs(title);
  const tools = (title === "Digital Marketing Masterclass") 
    ? [
        "Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Google Analytics", 
        "SEO Tools", "Email Marketing Platforms", "Social Media Management", 
        "Content Marketing Tools", "E-commerce Platforms", "Influencer Marketing", "Mobile Marketing"
      ]
    : (keywords.length > 0 ? keywords.slice(0, 8) : ["Industry Tools", "Real Projects", "Templates", "Workbooks"]);

  const navItems = COURSE_NAV_ITEMS;

  const journeySteps =
    title === "Digital Marketing Masterclass"
      ? [
          {
            title: "Research & Strategy",
            description: "Build a complete marketing foundation: positioning, audience, competitor research, and channel planning.",
          },
          {
            title: "Execution Across Channels",
            description: "Run SEO, paid ads, social, and email with hands-on assignments and mentor feedback every week.",
          },
          {
            title: "Analytics & Optimization",
            description: "Track KPIs, interpret data, and optimize creatives, keywords, landing pages, and budgets for ROI.",
          },
          {
            title: "Capstone & Portfolio",
            description: "Ship a portfolio-ready project with case study + interview guidance to help you get hired.",
          },
        ]
      : [
          {
            title: "Learn Fundamentals",
            description: "Start from basics with clear concepts, guided demos, and structured practice.",
          },
          {
            title: "Hands-on Practice",
            description: "Apply learning through tasks, assignments, and small projects with feedback.",
          },
          {
            title: "Build Projects",
            description: "Create real-world projects that prove your skill and improve confidence.",
          },
          {
            title: "Get Career Support",
            description: "Get interview guidance, next-step roadmap, and a completion certificate.",
          },
        ];

  const [activeSection, setActiveSection] = React.useState(navItems[0]?.href || "#overview");

  React.useEffect(() => {
    const hrefById = new Map(navItems.map((item) => [item.href.replace("#", ""), item.href]));
    const targets = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));

        const top = visible[0];
        const id = top?.target?.id;
        const href = id ? hrefById.get(id) : null;
        if (href) setActiveSection(href);
      },
      {
        root: null,
        rootMargin: "-25% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <CourseStructuredData slug={slug} />

      <section className="relative bg-gradient-to-br from-slate-950 via-slate-950 to-indigo-950 pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.22)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(1000px_500px_at_20%_0%,rgba(59,130,246,0.35),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(900px_500px_at_85%_20%,rgba(99,102,241,0.30),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0">
          <div className="wow-blob wow-blob-1" />
          <div className="wow-blob wow-blob-2" />
          <div className="wow-blob wow-blob-3" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            <Reveal as="div" variant="slideRight" className="lg:col-span-7 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-5">
              <span
                className="content-rise bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide border border-white/15 backdrop-blur"
                style={{ animationDelay: "80ms" }}
              >
                Career-Focused Program
              </span>
              <span
                className="content-rise flex items-center gap-1.5 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 backdrop-blur"
                style={{ animationDelay: "160ms" }}
              >
                <Award className="h-4 w-4" />
                <span>SkillCareer Certificate</span>
              </span>
              <span
                className="content-rise flex items-center gap-1.5 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 backdrop-blur"
                style={{ animationDelay: "240ms" }}
              >
                <UsersRound className="h-4 w-4" />
                <span>Delhi/NCR Focused Batches</span>
              </span>
            </div>
            <div className="mb-6 flex flex-col items-center lg:items-start gap-3">
              <span className="adomobi-kicker">SkillCareer Programs</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-5">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-slate-200/90 mb-6 max-w-3xl mx-auto">
              {description}
            </p>
            <div className="stat-grid grid-cols-1 sm:grid-cols-3 mb-7">
              {[
                { value: duration, label: "Program Duration" },
                { value: `${curriculum.length}+`, label: "Learning Modules" },
                { value: `${tools.length}+`, label: "Tools & Concepts" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="stat-tile content-rise"
                  style={{ animationDelay: `${180 + index * 90}ms` }}
                >
                  <div className="text-2xl font-bold text-white">{item.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/80 mt-2">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-200/80 mb-8">
              <div className="flex items-center gap-1.5"> <CalendarDays className="h-4 w-4 text-blue-300" /> {duration} </div>
              <div className="text-white/20 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <Laptop className="h-4 w-4 text-blue-300" /> {category} </div>
              <div className="text-white/20 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <BarChart className="h-4 w-4 text-blue-300" /> {level} </div>
            </div>
            {discountedPrice ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">₹{discountedPrice.toLocaleString()}</span>
                  {price && price !== discountedPrice && (
                    <span className="text-lg text-slate-300/70 line-through">₹{price.toLocaleString()}</span>
                  )}
                </div>
                <div className="flex items-center text-xs font-semibold text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/15 backdrop-blur">
                  <ShieldCheck className="h-4 w-4 mr-1.5 text-emerald-300" />
                  Flexible installment options
                </div>
              </div>
            ) : null}
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
              <Button size="lg" asChild className="rounded-xl bg-white text-slate-950 hover:bg-slate-100 px-8 py-3.5 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cta-pulse">
                <Link href={enrollHref}>Enroll Now</Link>
              </Button>
              <Button variant="outline" asChild className="rounded-xl px-6 py-3 text-base font-semibold border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/contact">Talk to Admissions</Link>
              </Button>
            </div>
            </Reveal>

            <Reveal as="div" variant="slideLeft" delay={120} className="lg:col-span-5">
              <div className="wow-border wow-sheen relative rounded-3xl border border-white/10 bg-white/5 shadow-sm overflow-hidden backdrop-blur">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-blue-400/25 blur-2xl motion-safe:animate-pulse motion-reduce:animate-none animate-floaty" />
                <div className="absolute -bottom-14 -left-14 h-44 w-44 rounded-full bg-indigo-400/25 blur-2xl motion-safe:animate-pulse motion-reduce:animate-none animate-floaty-slow" />
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
                <div className="relative p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-white">Enroll in this program</div>
                    <div className="text-xs font-medium text-slate-200/70">Limited seats</div>
                  </div>
                  {discountedPrice ? (
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-white">₹{discountedPrice.toLocaleString()}</span>
                      {price && price !== discountedPrice ? (
                        <span className="text-sm text-slate-200/60 line-through">₹{price.toLocaleString()}</span>
                      ) : null}
                    </div>
                  ) : null}
                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <Button asChild className="rounded-xl bg-white text-slate-950 hover:bg-slate-100">
                      <Link href={enrollHref}>Apply for Admission</Link>
                    </Button>
                    <Button variant="outline" asChild className="rounded-xl border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                      <Link href="/courses">View all courses</Link>
                    </Button>
                  </div>
                  <p className="mt-3 text-xs text-slate-200/70">
                    You will get fee details, batch timings, and counselor support.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-10 lg:py-12 max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-center mb-7">
              <span className="h-px w-10 bg-slate-200" />
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
                Trusted by brands & startups
              </p>
              <span className="h-px w-10 bg-slate-200" />
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent" />

              <div className="flex gap-10 py-6 px-6 w-max animate-scroll-left motion-reduce:animate-none">
                {[
                  { src: "/amazon-logo.png", alt: "Amazon" },
                  { src: "/google.png", alt: "Google" },
                  { src: "/Flipkart.png", alt: "Flipkart" },
                  { src: "/myntra.jpeg", alt: "Myntra" },
                  { src: "/meesho.png", alt: "Meesho" },
                  { src: "/phonepe.jpg", alt: "PhonePe" },
                  { src: "/PAYTM.NS_BIG.png", alt: "Paytm" },
                  { src: "/jio.webp", alt: "Jio" },
                  { src: "/blinkit_logo_web.webp", alt: "Blinkit" },
                ]
                  .concat([
                    { src: "/amazon-logo.png", alt: "Amazon" },
                    { src: "/google.png", alt: "Google" },
                    { src: "/Flipkart.png", alt: "Flipkart" },
                    { src: "/myntra.jpeg", alt: "Myntra" },
                    { src: "/meesho.png", alt: "Meesho" },
                    { src: "/phonepe.jpg", alt: "PhonePe" },
                    { src: "/PAYTM.NS_BIG.png", alt: "Paytm" },
                    { src: "/jio.webp", alt: "Jio" },
                    { src: "/blinkit_logo_web.webp", alt: "Blinkit" },
                  ])
                  .map((logo, idx) => (
                    <div key={`${logo.alt}-${idx}`} className="flex items-center justify-center h-10 w-28">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={140}
                        height={40}
                        className="max-h-10 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-30 bg-white/80 backdrop-blur border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 py-4">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                asChild
                className={[
                  "text-sm font-semibold rounded-full transition",
                  activeSection === item.href ? "bg-blue-50 text-blue-700 hover:bg-blue-100" : "text-slate-600 hover:bg-slate-100",
                ].join(" ")}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  {item.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" className="scroll-mt-28 py-14 lg:py-18 bg-slate-50/70" id="overview">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              <div>
                <p className="section-kicker mb-3">Overview</p>
                <h2 className="section-title text-3xl font-bold tracking-tight text-slate-900">Course Overview</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                This {title} program is designed to move you from fundamentals to confident execution with a practical, industry-aligned curriculum.
                Every module blends concept clarity with real assignments so you can show proof of skill on day one.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you are starting out, upskilling, or changing careers, the course structure is designed to keep you consistent with mentor feedback,
                clear milestones, and a final capstone that demonstrates your capability to employers or clients.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="wow-border wow-sheen course-surface course-float bg-white p-4 rounded-lg border border-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="text-2xl font-bold text-blue-600">{duration.split(" ")[0]}</div>
                  <div className="text-sm text-slate-600">Weeks Duration</div>
                </div>
                <div className="wow-border wow-sheen course-surface course-float bg-white p-4 rounded-lg border border-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="text-2xl font-bold text-green-600">{curriculum.length}+</div>
                  <div className="text-sm text-slate-600">Learning Modules</div>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <p className="section-kicker mb-2">Local Advantage</p>
                <h3 className="text-xl font-semibold text-slate-900">Why SkillCareer in Delhi/NCR</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Our batches are aligned with the practical standards you expect from leading institutes in Delhi. The focus is on job-ready outcomes,
                real projects, and career guidance tailored to local hiring needs.
              </p>
              <div className="space-y-3">
                {audience.map((item, index) => (
                  <Reveal
                    key={item}
                    delay={index * 60}
                    className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="scroll-mt-28 py-14 lg:py-18 bg-white" id="curriculum">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-kicker mb-3">Curriculum</p>
            <h2 className="section-title text-3xl font-bold tracking-tight text-slate-900">Course Curriculum</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((module, index) => (
              <Reveal key={module.title} delay={index * 80} className="h-full">
                <CurriculumCard {...module} />
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="scroll-mt-28 pt-14 pb-10 lg:pt-16 lg:pb-12 bg-slate-50/70" id="journey">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="section-kicker mb-3">How It Works</p>
              <h2 className="section-title text-3xl font-bold tracking-tight text-slate-900">Your Learning Journey</h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                A structured path from fundamentals to real outcomes, designed like modern training programs used by top institutes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {journeySteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 90} className="h-full">
                  <StepCard step={index + 1} title={step.title} description={step.description} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="scroll-mt-28 py-14 lg:py-18 bg-slate-50/70" id="highlights">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-kicker mb-3">Highlights</p>
            <h2 className="section-title text-3xl font-bold tracking-tight text-slate-900">Program Highlights</h2>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((highlight, index) => (
              <Reveal key={highlight.text} delay={index * 60}>
                <HighlightItem icon={highlight.icon} text={highlight.text} />
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="scroll-mt-28 py-14 lg:py-18 bg-white" id="tools">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-kicker mb-3">Tools</p>
            <h2 className="section-title text-3xl font-bold tracking-tight text-slate-900">Tools & Concepts Covered</h2>
          </div>
            <div className="max-w-4xl mx-auto flex flex-wrap gap-2 justify-center">
              {tools.map((tool, index) => (
              <Reveal key={tool} delay={Math.min(index * 40, 400)} className="inline-flex">
                <ToolBadge name={tool} />
              </Reveal>
            ))}
            </div>
        </div>
      </Reveal>

      <Reveal as="section" className="scroll-mt-28 py-14 lg:py-18 bg-slate-50/70" id="outcomes">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-kicker mb-3">Outcomes</p>
            <h2 className="section-title text-3xl font-bold tracking-tight text-slate-900">Career Outcomes</h2>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {outcomes.map((item, index) => (
              <Reveal
                key={item}
                delay={index * 55}
                className="course-surface course-float flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium text-sm">{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="scroll-mt-28 py-14 lg:py-18 bg-white" id="faqs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-10">
            <p className="section-kicker mb-3">FAQs</p>
            <h2 className="section-title text-3xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
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
          <div className="text-center pt-8">
            <p className="text-sm text-slate-500 mb-4">Need more details?</p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Admissions Team</Link>
            </Button>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="scroll-mt-28 py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white" id="enroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
            Ready to Start {title}?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Enroll now to secure your seat. Get structured learning, mentor feedback, and a certificate that helps you stand out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg">
              <Link href={enrollHref}>Enroll Now</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white"
            >
              <Link href="/courses">Browse All Courses</Link>
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">Career guidance • Project-based learning • Delhi/NCR-focused batches</p>
        </div>
      </Reveal>
    </div>
  );
}
