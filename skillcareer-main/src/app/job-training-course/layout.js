// app/job-training/layout.js
import React from 'react';
import { buildCourseMetadata } from "@/lib/course-seo";

// SEO Metadata for the /job-training route and its children
// This will set the <title> and <meta> tags in the <head> of the HTML
export const metadata = buildCourseMetadata("job-training-course");


export default function JobTrainingLayout({ children }) {
  return (
    <>
      {/* You could add a specific header for Job Training pages */}
      {/* e.g., <JobTrainingHeader /> */}

      {/* The actual page content (overview, list of programs, etc.) will be rendered here */}
      <main>{children}</main>

      {/* You could add a specific footer related to career services */}
      {/* e.g., <CareerSupportFooter /> */}
    </>
  );
}
