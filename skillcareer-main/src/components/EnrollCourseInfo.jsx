"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IndianRupee, CheckCircle, CalendarDays, BarChart3 } from "lucide-react";

const DEFAULT_IMAGE = "/skill.jpg";

export default function EnrollCourseInfo({ course }) {
  const title = course?.title || "Course Enrollment";
  const description =
    course?.description ||
    "Share your details to get batch timings, fees, and a counselor callback.";
  const duration = course?.duration || "Flexible";
  const level = course?.level || "Beginner";
  const category = course?.category || "SkillCareer";

  const price = Number.isFinite(course?.price) ? course.price : null;
  const discountedPrice = Number.isFinite(course?.discountedPrice)
    ? course.discountedPrice
    : price;

  const benefits = [
    "Personalized counseling on course fit",
    "Batch timing options (weekday/weekend)",
    "Fee details and discount eligibility",
    "Doubt support and learning plan",
    "Certificate guidance and next steps",
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <div className="content-rise inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 border border-slate-200 shadow-sm wow-sheen course-pill">
          <CheckCircle className="h-4 w-4 text-emerald-600" />
          Admissions support within 24 hours
        </div>
        <div className="content-rise inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 border border-slate-200 shadow-sm wow-sheen course-pill">
          <CheckCircle className="h-4 w-4 text-blue-600" />
          Free counseling call
        </div>
        <div className="content-rise inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 border border-slate-200 shadow-sm wow-sheen course-pill">
          <CheckCircle className="h-4 w-4 text-indigo-600" />
          Limited seats
        </div>
      </div>

      <h1 className="content-rise text-3xl lg:text-4xl font-extrabold leading-tight text-slate-900">
        Enroll for{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          {title}
        </span>
      </h1>
      <p className="content-rise text-base text-slate-600 leading-relaxed max-w-xl" style={{ animationDelay: "80ms" }}>
        {description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="content-rise rounded-2xl border border-slate-200 bg-white/90 p-4 course-surface course-float">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2 flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-blue-600" />
            Duration
          </div>
          <div className="text-lg font-semibold text-slate-900">{duration}</div>
        </div>
        <div className="content-rise rounded-2xl border border-slate-200 bg-white/90 p-4 course-surface course-float" style={{ animationDelay: "120ms" }}>
          <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-blue-600" />
            Level
          </div>
          <div className="text-lg font-semibold text-slate-900">{level}</div>
        </div>
        <div className="content-rise rounded-2xl border border-slate-200 bg-white/90 p-4 course-surface course-float" style={{ animationDelay: "180ms" }}>
          <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Category</div>
          <div className="text-lg font-semibold text-slate-900">{category}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4">
        <div className="content-rise wow-border wow-sheen course-surface course-float glow-card relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" style={{ animationDelay: "200ms" }}>
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={course?.image || DEFAULT_IMAGE}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            {discountedPrice ? (
              <div className="absolute left-4 bottom-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm">
                <span className="inline-flex items-center">
                  <IndianRupee className="h-4 w-4 mr-1" />
                  {Number(discountedPrice).toLocaleString("en-IN")}
                </span>
                {price && price !== discountedPrice ? (
                  <span className="ml-2 text-xs text-slate-500 line-through">
                    INR {Number(price).toLocaleString("en-IN")}
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        <div className="content-rise rounded-2xl border border-slate-200 bg-white/90 p-5 course-surface course-float" style={{ animationDelay: "240ms" }}>
          <div className="text-sm font-semibold text-slate-900 mb-3">What you get</div>
          <ul className="space-y-2 text-sm text-slate-700">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Button asChild className="rounded-xl bg-blue-600 hover:bg-blue-700 animate-pulse-cta">
              <Link href="/courses">Browse all courses</Link>
            </Button>
            <Button variant="outline" asChild className="rounded-xl">
              <Link href="/contact">Talk to admissions</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
