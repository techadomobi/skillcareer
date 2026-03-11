// app/english-speaking-course/layout.js
import React from 'react';
import { buildCourseMetadata } from "@/lib/course-seo";

// SEO Metadata for the /english-speaking-course route and its children
// This will set the <title> and <meta> tags in the <head> of the HTML
export const metadata = buildCourseMetadata("english-speaking-course");


export default function EnglishSpeakingCourseLayout({ children }) {
  return (
    <>
      {/* You could add a specific sub-navigation or header here if needed */}
      {/* e.g., <EnglishSpeakingCourseHeader /> */}

      {/* The actual page content will be rendered here */}
      <main>{children}</main>

      {/* You could add a specific sub-footer here if needed */}
    </>
  );
}
