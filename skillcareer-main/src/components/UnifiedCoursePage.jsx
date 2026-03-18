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
  IndianRupee,
  Laptop,
  LineChart,
  ShieldCheck,
  Sparkles,
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

const defaultHighlights = (title) =>
  title === "Digital Marketing Masterclass"
    ? [
        { icon: CheckCircle, text: "Complete digital marketing strategy from SEO to paid ads" },
        { icon: UsersRound, text: "Hands-on campaigns with real platforms and budgets" },
        { icon: ShieldCheck, text: "Google Ads, Facebook Ads, and analytics certifications" },
        { icon: CalendarDays, text: "Weekend and weekday batches for working professionals" },
        { icon: Target, text: "Live projects with Delhi/NCR businesses and startups" },
        { icon: Globe, text: "Industry expert mentors with 5+ years experience" },
        { icon: Award, text: "Portfolio of 6+ live campaigns and case studies" },
        { icon: BarChart, text: "Performance tracking and optimization workshops" },
      ]
    : [
        { icon: CheckCircle, text: "Structured learning path with clear milestones" },
        { icon: UsersRound, text: "Small batches for better mentor attention" },
        { icon: ShieldCheck, text: "Job-ready skills and interview guidance" },
        { icon: CalendarDays, text: "Flexible weekday and weekend schedules" },
        { icon: Target, text: "Hands-on assignments and practice tasks" },
        { icon: Globe, text: "Career guidance for Delhi/NCR opportunities" },
        { icon: Award, text: "Industry-recognized certificate" },
        { icon: BarChart, text: "Progress tracking and feedback reports" },
      ];

const defaultAudience = (title) =>
  title === "Digital Marketing Masterclass"
    ? [
        "Beginners looking to start a career in digital marketing",
        "Marketing professionals wanting to upgrade their skills",
        "Business owners and entrepreneurs",
        "Sales professionals transitioning to marketing",
        "Recent graduates seeking digital marketing roles",
        "Working professionals from any field looking for career change",
        "Content creators wanting to monetize their skills",
        "Small business owners wanting to grow online",
      ]
    : [
        `Beginners looking to start in ${title}`,
        "Students and recent graduates",
        "Working professionals upskilling",
        "Career switchers exploring new roles",
        "Entrepreneurs building practical skills",
      ];

const defaultOutcomes = (title) =>
  title === "Digital Marketing Masterclass"
    ? [
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
      ]
    : [
        `${title} foundation and practical confidence`,
        "Portfolio-ready projects and assignments",
        "Interview preparation and job readiness",
        "Improved productivity and tool fluency",
        "Clear next steps for advanced learning",
      ];

const defaultFaqs = (title) => {
  if (title === "Digital Marketing Masterclass") {
    return [
      { question: "Is this digital marketing course beginner friendly?", answer: "Yes, the program starts from fundamentals and builds step by step with hands-on practice." },
      { question: "Do I need any prior marketing experience?", answer: "No prior experience is required. We start with basics and gradually build your skills." },
      { question: "Are Google Ads and Facebook Ads certifications included?", answer: "Yes, we provide preparation and guidance for Google Ads, Facebook Ads, and Google Analytics certifications." },
      { question: "Will I get hands-on experience with real campaigns?", answer: "Yes, every module includes practical assignments and we work on live projects with Delhi/NCR businesses." },
      { question: "Can I attend weekend batches while working?", answer: "Yes, we offer both weekday and weekend batches designed for working professionals." },
      { question: "Do I need a laptop for the course?", answer: "A laptop is recommended for practice, but we provide lab access in select batches for hands-on sessions." },
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
  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-300">
    <Sparkles className="h-3.5 w-3.5 text-cyan-600" />
    {name}
  </span>
);

const HighlightItem = ({ icon: Icon, text }) => (
  <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg">
    <div className="flex items-start gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white">
        {Icon ? <Icon className="h-5 w-5" /> : <CheckCircle className="h-5 w-5" />}
      </div>
      <span className="text-sm font-medium leading-relaxed text-slate-700">{text}</span>
    </div>
  </div>
);

const CurriculumCard = ({ icon: Icon, title, description, weeks }) => (
  <div className="h-full rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-xl">
    <div className="mb-5 flex items-center justify-between gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
        {weeks}
      </span>
    </div>
    <h4 className="text-lg font-semibold text-slate-950">{title}</h4>
    <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
  </div>
);

const StepCard = ({ step, title, description }) => (
  <div className="relative h-full rounded-[28px] border border-slate-200/80 bg-white/85 p-6 pt-10 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg">
    <div className="absolute left-6 top-0 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 to-blue-700 text-sm font-bold text-white">
      {step}
    </div>
    <h4 className="text-lg font-semibold text-slate-950">{title}</h4>
    <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
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
  const tools =
    title === "Digital Marketing Masterclass"
      ? ["Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Google Analytics", "SEO Tools", "Email Marketing Platforms", "Social Media Management", "Content Marketing Tools", "E-commerce Platforms", "Influencer Marketing", "Mobile Marketing"]
      : keywords.length > 0
        ? keywords.slice(0, 8)
        : ["Industry Tools", "Real Projects", "Templates", "Workbooks"];

  const journeySteps =
    title === "Digital Marketing Masterclass"
      ? [
          { title: "Research & Strategy", description: "Build a complete marketing foundation: positioning, audience, competitor research, and channel planning." },
          { title: "Execution Across Channels", description: "Run SEO, paid ads, social, and email with hands-on assignments and mentor feedback every week." },
          { title: "Analytics & Optimization", description: "Track KPIs, interpret data, and optimize creatives, keywords, landing pages, and budgets for ROI." },
          { title: "Capstone & Portfolio", description: "Ship a portfolio-ready project with case study and interview guidance to help you get hired." },
        ]
      : [
          { title: "Learn Fundamentals", description: "Start from basics with clear concepts, guided demos, and structured practice." },
          { title: "Hands-on Practice", description: "Apply learning through tasks, assignments, and small projects with feedback." },
          { title: "Build Projects", description: "Create real-world projects that prove your skill and improve confidence." },
          { title: "Get Career Support", description: "Get interview guidance, next-step roadmap, and a completion certificate." },
        ];

  const [activeSection, setActiveSection] = React.useState(COURSE_NAV_ITEMS[0].href);

  React.useEffect(() => {
    const hrefById = new Map(COURSE_NAV_ITEMS.map((item) => [item.href.replace("#", ""), item.href]));
    const targets = COURSE_NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(Boolean);
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        const href = visible?.target?.id ? hrefById.get(visible.target.id) : null;
        if (href) setActiveSection(href);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.35, 0.55] }
    );
    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const logos = [
    { src: "/amazon-logo.png", alt: "Amazon" },
    { src: "/google.png", alt: "Google" },
    { src: "/Flipkart.png", alt: "Flipkart" },
    { src: "/myntra.jpeg", alt: "Myntra" },
    { src: "/meesho.png", alt: "Meesho" },
    { src: "/phonepe.jpg", alt: "PhonePe" },
    { src: "/PAYTM.NS_BIG.png", alt: "Paytm" },
    { src: "/jio.webp", alt: "Jio" },
    { src: "/blinkit_logo_web.webp", alt: "Blinkit" },
  ];

  return (
    <div className="overflow-hidden bg-[#f5f7fb]">
      <CourseStructuredData slug={slug} />

      <section className="relative overflow-hidden border-b border-slate-900/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_24%),radial-gradient(circle_at_80%_10%,_rgba(79,70,229,0.22),_transparent_24%),linear-gradient(135deg,#020617_0%,#0f172a_42%,#172554_100%)] pb-16 pt-16 text-white lg:pb-20 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.22)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="pointer-events-none absolute -left-16 top-12 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal as="div" variant="slideRight" className="text-center lg:text-left">
              <div className="mb-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" />
                  SkillCareer Programs
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-100 backdrop-blur">
                  <Award className="h-4 w-4 text-amber-300" />
                  Certificate included
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-100 backdrop-blur">
                  <UsersRound className="h-4 w-4 text-emerald-300" />
                  Small batch mentoring
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-200 lg:mx-0">{description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { value: duration, label: "Program Duration" },
                  { value: `${curriculum.length}+`, label: "Learning Modules" },
                  { value: `${tools.length}+`, label: "Tools Covered" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/10 px-5 py-5 text-left backdrop-blur">
                    <div className="text-2xl font-black text-white">{item.value}</div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-200 lg:justify-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2"><CalendarDays className="h-4 w-4 text-cyan-300" />{duration}</div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2"><Laptop className="h-4 w-4 text-cyan-300" />{category}</div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2"><BarChart className="h-4 w-4 text-cyan-300" />{level}</div>
              </div>

              {discountedPrice ? (
                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                  <div className="flex items-end gap-3">
                    <div className="flex items-center text-3xl font-black text-white"><IndianRupee className="mr-1 h-6 w-6" />{discountedPrice.toLocaleString("en-IN")}</div>
                    {price && price !== discountedPrice ? (
                      <div className="mb-1 flex items-center text-sm text-slate-300 line-through"><IndianRupee className="mr-0.5 h-3.5 w-3.5" />{price.toLocaleString("en-IN")}</div>
                    ) : null}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-100">
                    <ShieldCheck className="h-4 w-4" />
                    Flexible installment options
                  </div>
                </div>
              ) : null}

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <Button size="lg" asChild className="h-12 rounded-full bg-white px-7 text-base font-semibold text-slate-950 hover:bg-slate-100">
                  <Link href={enrollHref}>Enroll Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="h-12 rounded-full border-white/25 bg-white/5 px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
                  <Link href="/contact">Talk to Admissions</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal as="div" variant="slideLeft" delay={120}>
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/8 backdrop-blur">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={imageSrc} alt={title} fill className="object-cover transition duration-700 hover:scale-[1.04]" sizes="(max-width: 1024px) 100vw, 40vw" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                </div>
                <div className="space-y-5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Enrollment Snapshot</p>
                      <h3 className="mt-2 text-2xl font-bold text-white">Admission open for the next batch</h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">Limited seats</span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-200">Secure fee details, batch timings, and counselor support in one guided admission flow.</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Mentor-led", value: "Live" },
                      { label: "Mode", value: "Online + Offline" },
                      { label: "Support", value: "Career" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3">
                        <div className="text-sm font-bold text-white">{item.value}</div>
                        <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="h-11 rounded-full bg-white text-slate-950 hover:bg-slate-100"><Link href={enrollHref}>Apply for Admission</Link></Button>
                    <Button variant="outline" asChild className="h-11 rounded-full border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"><Link href="/courses">View all courses</Link></Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl py-10 lg:py-12">
            <div className="mb-7 flex items-center justify-center gap-3 text-center">
              <span className="h-px w-10 bg-slate-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Trusted by brands and startups</p>
              <span className="h-px w-10 bg-slate-200" />
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
              <div className="flex w-max gap-10 px-6 py-6 motion-reduce:animate-none animate-scroll-left">
                {logos.concat(logos).map((logo, idx) => (
                  <div key={`${logo.alt}-${idx}`} className="flex h-12 w-28 items-center justify-center">
                    <Image src={logo.src} alt={logo.alt} width={140} height={40} className="max-h-10 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 py-4">
            {COURSE_NAV_ITEMS.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" asChild className={["rounded-full px-4 text-sm font-semibold transition", activeSection === item.href ? "bg-slate-950 text-white hover:bg-slate-900" : "border border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-100"].join(" ")}>
                <a href={item.href} onClick={(e) => { e.preventDefault(); const target = document.querySelector(item.href); if (target) target.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
                  {item.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" className="scroll-mt-28 bg-[#f5f7fb] py-16 lg:py-20" id="overview">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div>
                <p className="section-kicker mb-3">Overview</p>
                <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Course Overview</h2>
              </div>
              <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-base leading-relaxed text-slate-600">This {title} program is designed to move you from fundamentals to confident execution with a practical, industry-aligned curriculum. Every module blends concept clarity with real assignments so you can show proof of skill on day one.</p>
                <p className="mt-4 text-base leading-relaxed text-slate-600">Whether you are starting out, upskilling, or changing careers, the course structure is designed to keep you consistent with mentor feedback, clear milestones, and a final capstone that demonstrates your capability to employers or clients.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-5 shadow-sm">
                  <div className="text-3xl font-black text-slate-950">{duration.split(" ")[0]}</div>
                  <div className="mt-2 text-sm font-medium text-slate-600">Weeks Duration</div>
                </div>
                <div className="rounded-[28px] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-5 shadow-sm">
                  <div className="text-3xl font-black text-slate-950">{curriculum.length}+</div>
                  <div className="mt-2 text-sm font-medium text-slate-600">Learning Modules</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="section-kicker mb-3">Local Advantage</p>
                <h3 className="text-3xl font-black tracking-tight text-slate-950">Why SkillCareer in Delhi/NCR</h3>
              </div>
              <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-base leading-relaxed text-slate-600">Our batches are aligned with the practical standards you expect from leading institutes in Delhi. The focus is on job-ready outcomes, real projects, and career guidance tailored to local hiring needs.</p>
                <div className="mt-6 space-y-3">
                  {audience.map((item, index) => (
                    <Reveal key={item} delay={index * 60} className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white">
                      <CheckCircle className="h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="scroll-mt-28 bg-white py-16 lg:py-20" id="curriculum">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="section-kicker mb-3">Curriculum</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Course Curriculum</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {curriculum.map((module, index) => (
              <Reveal key={module.title} delay={index * 80} className="h-full">
                <CurriculumCard {...module} />
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="scroll-mt-28 bg-[linear-gradient(180deg,#f5f7fb_0%,#eef4ff_100%)] py-16 lg:py-20" id="journey">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="section-kicker mb-3">How It Works</p>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Your Learning Journey</h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600">A structured path from fundamentals to real outcomes, designed like modern training programs used by top institutes.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {journeySteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 90} className="h-full">
                  <StepCard step={index + 1} title={step.title} description={step.description} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="scroll-mt-28 bg-[#f5f7fb] py-16 lg:py-20" id="highlights">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="section-kicker mb-3">Highlights</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Program Highlights</h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
            {highlights.map((highlight, index) => (
              <Reveal key={highlight.text} delay={index * 60}>
                <HighlightItem icon={highlight.icon} text={highlight.text} />
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="scroll-mt-28 bg-white py-16 lg:py-20" id="tools">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="section-kicker mb-3">Tools</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Tools and Concepts Covered</h2>
          </div>
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Reveal key={tool} delay={Math.min(index * 40, 400)} className="inline-flex">
                <ToolBadge name={tool} />
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="scroll-mt-28 bg-[#f5f7fb] py-16 lg:py-20" id="outcomes">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="section-kicker mb-3">Outcomes</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Career Outcomes</h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {outcomes.map((item, index) => (
              <Reveal key={item} delay={index * 55} className="flex items-center gap-3 rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-lg">
                <CheckCircle className="h-5 w-5 shrink-0 text-emerald-500" />
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal as="section" className="scroll-mt-28 bg-white py-16 lg:py-20" id="faqs">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="section-kicker mb-3">FAQs</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`} className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50/80 px-1 shadow-sm data-[state=open]:bg-white">
                <AccordionTrigger className="px-5 py-4 text-left font-semibold text-slate-800 hover:no-underline data-[state=open]:text-cyan-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pt-1 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="pt-8 text-center">
            <p className="mb-4 text-sm text-slate-500">Need more details?</p>
            <Button variant="outline" asChild className="rounded-full">
              <Link href="/contact">Contact Admissions Team</Link>
            </Button>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="scroll-mt-28 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_26%),linear-gradient(135deg,#0f172a_0%,#172554_100%)] py-16 text-white" id="enroll">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-white/5 px-6 py-10 backdrop-blur md:px-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Enrollment</p>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">Ready to Start {title}?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">Enroll now to secure your seat. Get structured learning, mentor feedback, and a certificate that helps you stand out.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="h-12 rounded-full bg-white px-8 text-base font-semibold text-slate-950 hover:bg-slate-100">
                <Link href={enrollHref}>Enroll Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-12 rounded-full border-white/20 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
                <Link href="/courses">Browse All Courses</Link>
              </Button>
            </div>
            <p className="mt-5 text-sm text-slate-300">Career guidance | Project-based learning | Delhi/NCR-focused batches</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
