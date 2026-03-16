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
      <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 border border-slate-200">
        <CheckCircle className="h-4 w-4 text-emerald-600" />
        Admissions support within 24 hours
      </div>

      <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight text-slate-900">
        Enroll for{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          {title}
        </span>
      </h1>
      <p className="text-base text-slate-600 leading-relaxed max-w-xl">
        {description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-xl border border-slate-200 bg-white/80 p-4">
          <div className="text-xs text-slate-500 mb-1 flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-blue-600" />
            Duration
          </div>
          <div className="font-semibold text-slate-900">{duration}</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white/80 p-4">
          <div className="text-xs text-slate-500 mb-1 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-blue-600" />
            Level
          </div>
          <div className="font-semibold text-slate-900">{level}</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white/80 p-4">
          <div className="text-xs text-slate-500 mb-1">Category</div>
          <div className="font-semibold text-slate-900">{category}</div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={course?.image || DEFAULT_IMAGE}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="p-5">
          {discountedPrice ? (
            <div className="flex flex-wrap items-baseline gap-3 mb-3">
              <div className="inline-flex items-center text-2xl font-extrabold text-slate-900">
                <IndianRupee className="h-5 w-5 mr-0.5 text-slate-900" />
                {Number(discountedPrice).toLocaleString("en-IN")}
              </div>
              {price && price !== discountedPrice ? (
                <div className="text-sm text-slate-500 line-through">
                  INR {Number(price).toLocaleString("en-IN")}
                </div>
              ) : null}
            </div>
          ) : null}

          <ul className="space-y-2 text-sm text-slate-700">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Button asChild className="rounded-xl bg-blue-600 hover:bg-blue-700">
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

