// app/courses/layout.js
import React from 'react';

// SEO Metadata for the /courses route (course listing/overview page)
// This will set the <title> and <meta> tags in the <head> of the HTML
export const metadata = {
  // Consider adding your Institution Name for branding
  title: "Explore Our Courses | Professional Training Programs",
  description: "Browse our wide range of professional courses in Digital Marketing, Data Science, Web Development, Design, Finance, and more. Find the right program to advance your skills and career.",
  keywords: [
    "Courses",
    "Training Programs",
    "Course Catalog",
    "List of Courses",
    "Professional Courses",
    "Certification Courses",
    "Online Courses",
    "Offline Courses",
    "Skill Development",
    "Career Training",
    // Add your specific course categories like:
    "IT Courses",
    "Marketing Courses",
    "Design Courses",
    "Finance Courses",
    "Development Courses",
    // Add your institution name, e.g., "SkillCircle Courses"
    "Best Training Institute",
    "Learn New Skills"
  ],
  // Optional: Add Open Graph or other specific meta tags here if needed
  // openGraph: {
  //   title: 'Explore Our Courses | Professional Training Programs',
  //   description: 'Browse our wide range of professional courses...',
  //   images: ['...'], // Maybe an image representing diversity of courses
  // },
};


export default function CoursesLayout({ children }) {
  return (
    <>
      {/* You could add a specific header for the Courses section */}
      {/* e.g., <CoursesPageHeader /> */}

      {/* The actual page content (list of courses, categories, etc.) will be rendered here */}
      <main>{children}</main>

      {/* You could add a specific footer relevant to course browsing */}
    </>
  );
}