// app/enroll/layout.js  (or app/join/layout.js, app/apply/layout.js etc.)
import React from 'react';

// SEO Metadata for the course enrollment/application page
// This will set the <title> and <meta> tags in the <head> of the HTML
export const metadata = {
  // Consider adding your Institution Name here for branding
  title: "Enroll Now | Secure Your Spot in Our Courses Today",
  description: "Ready to start your learning journey? Apply online or enroll today for courses in Digital Marketing, Data Science, Web Development, Design, and more. Take the next step in your career.",
  keywords: [
    "Enroll Now",
    "Apply for Course",
    "Join Course",
    "Course Registration",
    "Admission Form",
    "Sign Up for Course",
    "Secure Your Spot",
    "Start Learning Today",
    // Add your Institution Name here, e.g., "SkillCircle Admission"
    "Professional Courses",
    "Certification Programs",
    "Online Courses Application",
    "Offline Courses Application",
    "Training Institute Enrollment",
    "Career Courses Enrollment",
    "Skill Development Courses"
  ],
  // Optional: Add Open Graph or other specific meta tags here if needed
  // openGraph: {
  //   title: 'Enroll Now | Secure Your Spot Today',
  //   description: 'Apply online for industry-leading courses...',
  //   images: ['...'], // Maybe an image related to applying or success
  // },
};


// Choose a name that reflects the route, e.g., EnrollLayout
export default function EnrollLayout({ children }) {
  return (
    <>
      {/* You could add a specific header for the enrollment process */}
      {/* e.g., <EnrollmentHeader /> */}

      {/* The actual page content (e.g., the form) will be rendered here */}
      <main>{children}</main>

      {/* You could add a specific footer for the enrollment section */}
    </>
  );
}