
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Assuming you use shadcn/ui Select
import { Clock, BarChart3, Search, ListFilter, IndianRupee } from 'lucide-react'; // Added IndianRupee icon
import { courseCatalog } from '@/lib/course-catalog';

const allCoursesData = courseCatalog.map((course) => ({
  id: course.slug,
  title: course.title,
  category: course.category,
  level: course.level,
  duration: course.duration,
  description: course.description,
  imageSrc: course.image,
  href: `/${course.slug}`,
  tags: course.tags || course.keywords,
  price: course.price,
  discountedPrice: course.discountedPrice,
}));

const DEFAULT_COURSE_IMAGE = "/default-course-image.png"; // Fallback image

// --- Helper Components ---

// Helper function to calculate discount percentage
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  if (!originalPrice || originalPrice <= 0 || discountedPrice >= originalPrice) {
    return 0; // No discount or invalid input
  }
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
};


const CourseCard = ({ course }) => {
  const discountPercentage = calculateDiscountPercentage(course.price, course.discountedPrice);

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full group"> {/* Added group class */}
      {/* Image Section */}
      <Link
        href={course.href}
        className="aspect-video overflow-hidden relative block"
      >
        <Image
          src={course.imageSrc || DEFAULT_COURSE_IMAGE}
          alt={`Thumbnail for ${course.title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105" // Uses group-hover from parent
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => { e.currentTarget.src = DEFAULT_COURSE_IMAGE; }}
        />
        {/* Category Badge */}
        {course.category && (
          <span className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm border border-slate-200/50 z-10">
            {course.category}
          </span>
        )}

        {/* Discount Badge - Only show if there's a discount */}
        {discountPercentage > 0 && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm z-10">
            {discountPercentage}% OFF
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <Link href={course.href}>
          <h3 className="mb-2 text-base font-semibold leading-snug text-slate-900 hover:text-blue-600 transition-colors line-clamp-2"> {/* Added line-clamp */}
            {course.title}
          </h3>
        </Link>
        <p className="mb-4 text-sm text-slate-600 flex-grow line-clamp-3"> {/* Increased line-clamp */}
          {course.description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 mb-4 border-t border-slate-200/60 pt-3">
          {course.level && (
            <div className="flex items-center gap-1.5">
              <BarChart3 className="h-3.5 w-3.5 text-slate-400" />
              <span>{course.level}</span>
            </div>
          )}
          {course.duration && (
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              <span>{course.duration}</span>
            </div>
          )}
        </div>

        {/* Tags (Optional) */}
        {course.tags && course.tags.length > 0 && (
           <div className="mb-4">
              <div className="flex flex-wrap gap-1.5">
                  {course.tags.slice(0, 3).map(tag => ( // Show max 3 tags
                      <span key={tag} className="inline-block bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded">
                          {tag}
                      </span>
                  ))}
              </div>
           </div>
        )}

        {/* Price Section */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3"> {/* Use baseline alignment */}
            <div className="flex items-center font-bold text-lg text-slate-900">
              <IndianRupee className="h-4 w-4 mr-0.5" />
              {/* Check if discountedPrice exists before formatting */}
              {course.discountedPrice ? course.discountedPrice.toLocaleString('en-IN') : 'N/A'}
            </div>
            {/* Check if original price exists and is greater */}
            {course.price && course.discountedPrice && course.price > course.discountedPrice && (
              <div className="text-sm text-slate-500 line-through flex items-center">
                <IndianRupee className="h-3 w-3 mr-0.5" />
                {course.price.toLocaleString('en-IN')}
              </div>
            )}
          </div>

          {/* Buy Now / View Details Button */}
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
            size="sm"
            asChild // Use asChild to make the Button act like the Link
          >
            <Link href={course.href}>
              Join Now {/* Changed Text */}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};


// --- Main Courses Page Component ---
export default function CoursesPageContent() {
  const [allCourses, setAllCourses] = useState(allCoursesData); // Use fetched data in real app
  const [filteredCourses, setFilteredCourses] = useState(allCoursesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to 'All'

  // Extract unique categories for the filter dropdown, sorted alphabetically
  const categories = ['All', ...Array.from(new Set(allCourses.map(course => course.category))).sort()];

  // Effect to filter courses when search term or category changes
  useEffect(() => {
    let currentCourses = [...allCourses];

    // Filter by search term (case-insensitive search in title, description, tags)
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      currentCourses = currentCourses.filter(course =>
        course.title.toLowerCase().includes(lowerSearchTerm) ||
        course.description.toLowerCase().includes(lowerSearchTerm) ||
        (course.tags && course.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm)))
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      currentCourses = currentCourses.filter(course => course.category === selectedCategory);
    }

    setFilteredCourses(currentCourses);
  }, [searchTerm, selectedCategory, allCourses]);

  // Handlers for filter changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Page Header/Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-white pt-8 pb-8 md:pt-12 md:pb-10 text-center border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl">
             Explore Skill Courses Online and Offline {/* Updated Title */}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-600 sm:text-lg">
            Find the perfect course to achieve your learning goals and advance your career.
          </p>
        </div>
      </section>

      {/* 2. Filters Section */}
      <section className="sticky top-16 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200/80 py-4">
        {/* Adjust top- value based on your header height */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search Input */}
            <div className="relative flex-grow sm:max-w-xs lg:max-w-sm">
              <Input
                type="search"
                placeholder="Search courses (e.g., Python, SEO)" // More helpful placeholder
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 h-10 bg-white border-slate-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm" // Added shadow
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            {/* Category Select */}
            <div className="flex items-center gap-2">
                <ListFilter className="h-5 w-5 text-slate-500 sm:hidden" /> {/* Icon for mobile */}
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-full sm:w-[180px] lg:w-[200px] h-10 bg-white border-slate-300 shadow-sm"> {/* Added shadow */}
                    <SelectValue placeholder="Filter by category..." />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category} {/* Display category name */}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Courses Grid Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
              {/* Use the updated CourseCard */}
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            // Improved No Results Message
            <div className="text-center py-16 px-6 bg-white rounded-lg shadow-md border border-slate-200 max-w-lg mx-auto">
               <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <h3 className="mt-2 text-lg font-semibold text-slate-800">No Courses Found</h3>
              <p className="mt-1 text-sm text-slate-500">
                 Your search for "{searchTerm}" {selectedCategory !== 'All' ? `in "${selectedCategory}"` : ''} did not match any courses. Try different keywords or broaden your filter.
              </p>
            </div>
          )}

          {/* Optional: Pagination could be added here if course list becomes very long */}

        </div>
      </section>
    </div>
  );
}
