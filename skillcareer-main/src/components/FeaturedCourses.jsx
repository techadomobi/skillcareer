// components/FeaturedCourses.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // For linking cards/buttons
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Clock } from 'lucide-react'; // Example icons

// --- Configuration ---
// Replace with your actual course data and image paths
const featuredCourses = [
  {
    id: 'dm01',
    title: "Digital Marketing Masterclass",
    description: "Learn SEO, SEM, content marketing, and social media strategies to grow your brand.",
    imageSrc: "/marketing.png",
    category: "Digital Marketing",
    rating: 4.9,
    duration: "16 Weeks",
    href: "/digital-marketing-course",
  },
  {
    id: 'wd01',
    title: "Full Stack Web Development",
    description: "Master front-end and back-end technologies to build complete web applications.",
    imageSrc: "/full-stack.jpg",
    category: "Web Development",
    rating: 4.8,
    duration: "12 Weeks",
    href: "/full-stack-development-course",
  },
  {
    id: 'da01',
    title: "Data Analytics with Python & SQL",
    description: "Transform raw data into actionable insights using Python and SQL.",
    imageSrc: "/data.jpg",
    category: "Data Science",
    rating: 4.7,
    duration: "14 Weeks",
    href: "/data-analytics-course",
  },
  {
    id: "c10",
    title: "Class 10 Board Preparation",
    description: "Concept clarity, practice, and exam strategy for Class 10 CBSE/State boards.",
    imageSrc: "/stu.jpg",
    category: "School",
    rating: 4.7,
    duration: "24 Weeks",
    href: "/class-10-course",
  },
  {
    id: "c12",
    title: "Class 12 Board Preparation",
    description: "Subject-wise planning, doubt support, and guidance for Class 12 board exams.",
    imageSrc: "/stu-1.jpeg",
    category: "School",
    rating: 4.7,
    duration: "24 Weeks",
    href: "/class-12-course",
  },
  // Add more featured courses if needed (e.g., up to 3 or 4 usually looks good)
];

const DEFAULT_COURSE_IMAGE = "/skill.jpg"; // Fallback image in /public

// --- Course Card Component ---
const CourseCard = ({ course }) => (
  <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200/90 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg h-full group">
    {/* Image Area */}
    <Link href={course.href} className="block aspect-[16/9] overflow-hidden relative">
      <Image
        src={course.imageSrc || DEFAULT_COURSE_IMAGE}
        alt={`Thumbnail for ${course.title}`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Optimize image loading
        onError={(e) => { e.currentTarget.src = DEFAULT_COURSE_IMAGE; }}
      />
      {/* Optional: Category Badge */}
      {course.category && (
        <span className="absolute top-3 left-3 bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
          {course.category}
        </span>
      )}
    </Link>

    {/* Content Area */}
    <div className="flex flex-1 flex-col p-4 sm:p-5">
      <h3 className="mb-2 text-lg font-semibold leading-snug text-gray-900">
        <Link href={course.href} className="hover:text-blue-600 transition-colors">
          {course.title}
        </Link>
      </h3>
      <p className="mb-4 text-sm text-gray-600 flex-grow line-clamp-3"> {/* Allow description to grow, limit lines */}
        {course.description}
      </p>

      {/* Meta Info (Rating, Duration) */}
      <div className="flex items-center justify-between text-xs text-gray-500 mb-4 border-t border-gray-200/80 pt-3 mt-auto"> {/* Push meta/button to bottom */}
        {course.rating && (
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
            <span className="font-medium text-gray-700">{course.rating}</span>
          </div>
        )}
        {course.duration && (
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{course.duration}</span>
          </div>
        )}
      </div>

      {/* Action Button */}
      <Link href={course.href} passHref legacyBehavior>
        <Button variant="outline" size="sm" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
            View Details
            <ArrowRight className="ml-1.5 h-4 w-4" />
        </Button>
      </Link>
    </div>
  </div>
);

// --- Main FeaturedCourses Component ---
export default function FeaturedCourses() {
  return (
    <section className="py-6 md:py-6 lg:py-6 bg-white"> {/* Simple white background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-600 sm:text-4xl">
            Explore Our Popular Courses
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Kickstart or advance your career with courses designed for real-world impact, taught by industry experts.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* "View All" Button */}
        <div className="mt-16 text-center">
          <Link href="/courses" passHref legacyBehavior>
              <Button
                size="lg" // Make this button slightly larger
                variant="default" // Use the primary variant
                className="rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-blue-700 group"
              >
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" />
              </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
