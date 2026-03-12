"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

const defaultCurriculum = (title) => ([
  { icon: BookOpen, title: `Core ${title} Concepts`, description: "Build strong fundamentals with structured learning and guided practice.", weeks: "Module 1" },
  { icon: Target, title: "Applied Skills", description: "Translate concepts into real-world tasks and assignments.", weeks: "Module 2" },
  { icon: Laptop, title: "Tools & Workflow", description: "Hands-on exposure to tools, frameworks, and industry workflows.", weeks: "Module 3" },
  { icon: LineChart, title: "Projects & Case Studies", description: "Work on projects that mirror real business or job scenarios.", weeks: "Module 4" },
  { icon: Users, title: "Mentor Feedback", description: "Weekly reviews, doubt clearing, and structured guidance.", weeks: "Module 5" },
  { icon: Award, title: "Capstone & Certification", description: "Complete a final project and receive your certificate.", weeks: "Module 6" },
]);

const defaultHighlights = [
  { icon: CheckCircle, text: "Structured learning path with clear milestones" },
  { icon: UsersRound, text: "Small batches for better mentor attention" },
  { icon: ShieldCheck, text: "Job-ready skills and interview guidance" },
  { icon: CalendarDays, text: "Flexible weekday and weekend schedules" },
  { icon: Target, text: "Hands-on assignments and practice tasks" },
  { icon: Globe, text: "Career guidance for Delhi/NCR opportunities" },
  { icon: Award, text: "Industry-recognized certificate" },
  { icon: BarChart, text: "Progress tracking and feedback reports" },
];

const defaultAudience = (title) => ([
  `Beginners looking to start in ${title}`,
  "Students and recent graduates",
  "Working professionals upskilling",
  "Career switchers exploring new roles",
  "Entrepreneurs building practical skills",
]);

const defaultOutcomes = (title) => ([
  `${title} foundation and practical confidence`,
  "Portfolio-ready projects and assignments",
  "Interview preparation and job readiness",
  "Improved productivity and tool fluency",
  "Clear next steps for advanced learning",
]);

const defaultFaqs = (title) => ([
  { question: `Is this ${title} course beginner friendly?`, answer: "Yes, the program starts from fundamentals and builds step by step." },
  { question: "Are projects included?", answer: "Yes, every module includes hands-on assignments and a final capstone." },
  { question: "Do you provide certificates?", answer: "Yes, a SkillCareer completion certificate is provided." },
  { question: "Is placement support included?", answer: "We offer interview guidance and share relevant opportunities." },
  { question: "Can I attend weekend batches?", answer: "Yes, weekend and weekday options are available." },
  { question: "Do I need a laptop?", answer: "A laptop is recommended for practice, but lab support is available in select batches." },
]);

const ToolBadge = ({ name }) => (
  <span className="inline-block bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-md border border-slate-200/80">
    {name}
  </span>
);

const HighlightItem = ({ icon: Icon, text }) => (
  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 mt-1 text-blue-500">
      <CheckCircle className="h-5 w-5" />
    </div>
    <span className="text-sm font-medium text-slate-700">{text}</span>
  </div>
);

const CurriculumCard = ({ icon: Icon, title, description, weeks }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 hover:border-blue-300">
    <div className="flex items-center justify-between gap-4 mb-4">
      <div className="flex-shrink-0 rounded-lg p-3 shadow-sm bg-blue-50">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <span className="text-xs font-semibold py-1 px-3 rounded-md border bg-blue-50 text-blue-700 border-blue-100">
        {weeks}
      </span>
    </div>
    <h4 className="text-md font-semibold text-slate-900 mb-2">{title}</h4>
    <p className="text-sm text-slate-600 flex-grow leading-relaxed">{description}</p>
  </div>
);

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

  const curriculum = defaultCurriculum(title);
  const highlights = defaultHighlights;
  const audience = defaultAudience(title);
  const outcomes = defaultOutcomes(title);
  const faqs = defaultFaqs(title);
  const tools = keywords.length > 0 ? keywords.slice(0, 8) : ["Industry Tools", "Real Projects", "Templates", "Workbooks"];

  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Highlights", href: "#highlights" },
    { label: "Tools", href: "#tools" },
    { label: "Outcomes", href: "#outcomes" },
    { label: "FAQs", href: "#faqs" },
    { label: "Enroll", href: "#enroll" },
  ];

  return (
    <div className="bg-white overflow-hidden">
      <CourseStructuredData slug={slug} />

      <section className="relative bg-gradient-to-b from-blue-50/60 via-white to-white pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5">
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide border border-blue-200/80">
                Career-Focused Program
              </span>
              <span className="flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200/80">
                <Award className="h-4 w-4" />
                <span>SkillCareer Certificate</span>
              </span>
              <span className="flex items-center gap-1.5 bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-200/80">
                <UsersRound className="h-4 w-4" />
                <span>Delhi/NCR Focused Batches</span>
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-5">
              {title}
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 mb-6 max-w-3xl mx-auto">
              {description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500 mb-8">
              <div className="flex items-center gap-1.5"> <CalendarDays className="h-4 w-4 text-blue-500" /> {duration} </div>
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <Laptop className="h-4 w-4 text-blue-500" /> {category} </div>
              <div className="text-slate-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5"> <BarChart className="h-4 w-4 text-blue-500" /> {level} </div>
            </div>
            {discountedPrice ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-blue-600">₹{discountedPrice.toLocaleString()}</span>
                  {price && price !== discountedPrice && (
                    <span className="text-lg text-slate-400 line-through">₹{price.toLocaleString()}</span>
                  )}
                </div>
                <div className="flex items-center text-xs font-medium text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-200/70">
                  <ShieldCheck className="h-4 w-4 mr-1.5" />
                  Flexible installment options
                </div>
              </div>
            ) : null}
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
              <Button size="lg" asChild className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 px-8 py-3.5 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="#enroll">Enroll in Course</Link>
              </Button>
              <Button variant="outline" asChild className="rounded-xl px-6 py-3 text-base font-semibold">
                <Link href="/contact">Talk to Admissions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-30 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 py-4">
            {navItems.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" asChild className="text-sm font-medium">
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-slate-50/70" id="overview">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Course Overview</h2>
              <p className="text-slate-600 leading-relaxed">
                This {title} program is designed to move you from fundamentals to confident execution with a practical, industry-aligned curriculum.
                Every module blends concept clarity with real assignments so you can show proof of skill on day one.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you are starting out, upskilling, or changing careers, the course structure is designed to keep you consistent with mentor feedback,
                clear milestones, and a final capstone that demonstrates your capability to employers or clients.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-blue-600">{duration.split(" ")[0]}</div>
                  <div className="text-sm text-slate-600">Weeks Duration</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-green-600">{curriculum.length}+</div>
                  <div className="text-sm text-slate-600">Learning Modules</div>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-slate-900">Why SkillCareer in Delhi/NCR</h3>
              <p className="text-slate-600 leading-relaxed">
                Our batches are aligned with the practical standards you expect from leading institutes in Delhi. The focus is on job-ready outcomes,
                real projects, and career guidance tailored to local hiring needs.
              </p>
              <div className="space-y-3">
                {audience.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-slate-200">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-white" id="curriculum">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-10">Course Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((module) => (
              <CurriculumCard key={module.title} {...module} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-slate-50/70" id="highlights">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-10">Program Highlights</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((highlight) => (
              <HighlightItem key={highlight.text} icon={highlight.icon} text={highlight.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-white" id="tools">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-10">Tools & Concepts Covered</h2>
          <div className="max-w-4xl mx-auto flex flex-wrap gap-2 justify-center">
            {tools.map((tool) => (
              <ToolBadge key={tool} name={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-slate-50/70" id="outcomes">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-10">Career Outcomes</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {outcomes.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-white" id="faqs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
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
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white" id="enroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
            Ready to Start {title}?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Enroll now to secure your seat. Get structured learning, mentor feedback, and a certificate that helps you stand out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg">
              <Link href="/enroll-now">Enroll Now</Link>
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
      </section>
    </div>
  );
}
