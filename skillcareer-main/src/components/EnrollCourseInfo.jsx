"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart3, CalendarDays, CheckCircle, IndianRupee, Sparkles } from "lucide-react";

const DEFAULT_IMAGE = "/skill.jpg";

export default function EnrollCourseInfo({ course }) {
  const title = course?.title || "Course Enrollment";
  const description = course?.description || "Share your details to get batch timings, fees, and a counselor callback.";
  const duration = course?.duration || "Flexible";
  const level = course?.level || "Beginner";
  const category = course?.category || "SkillCareer";

  const price = Number.isFinite(course?.price) ? course.price : null;
  const discountedPrice = Number.isFinite(course?.discountedPrice) ? course.discountedPrice : price;

  const benefits = [
    "Personalized counseling on the right batch and course fit",
    "Fee details with discount or installment clarity",
    "Mentor support, course plan, and onboarding guidance",
    "Certificate and career support overview before joining",
  ];

  return (
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 shadow-sm backdrop-blur">
        <Sparkles className="h-3.5 w-3.5" />
        Course enrollment
      </div>

      <div className="space-y-4">
        <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 lg:text-5xl">
          Enroll for {title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-600">{description}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-[26px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <CalendarDays className="h-4 w-4 text-cyan-700" />
            Duration
          </div>
          <div className="text-lg font-bold text-slate-950">{duration}</div>
        </div>
        <div className="rounded-[26px] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <BarChart3 className="h-4 w-4 text-indigo-700" />
            Level
          </div>
          <div className="text-lg font-bold text-slate-950">{level}</div>
        </div>
        <div className="rounded-[26px] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-4 shadow-sm">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Category</div>
          <div className="text-lg font-bold text-slate-950">{category}</div>
        </div>
      </div>

      {/* Course Image at Top with Gradient Overlay and Pricing */}
      <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[16/10] w-full">
          <Image src={course?.image || DEFAULT_IMAGE} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
          {discountedPrice ? (
            <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white backdrop-blur">
              <span className="inline-flex items-center text-lg font-bold">
                <IndianRupee className="mr-1 h-4 w-4" />
                {Number(discountedPrice).toLocaleString("en-IN")}
              </span>
              {price && price !== discountedPrice ? (
                <span className="ml-2 text-xs text-slate-200 line-through">INR {Number(price).toLocaleString("en-IN")}</span>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      {/* ContactForm Content Area - What happens next */}
      <div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">What happens next</div>
        <ul className="mt-4 space-y-3 text-sm text-slate-700">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-col gap-3">
          <Button asChild className="h-11 rounded-full bg-slate-950 text-white hover:bg-cyan-700">
            <Link href="/courses">Browse all courses</Link>
          </Button>
          <Button variant="outline" asChild className="h-11 rounded-full">
            <Link href="/contact">Talk to admissions</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
