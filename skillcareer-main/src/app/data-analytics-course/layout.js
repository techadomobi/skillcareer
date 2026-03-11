
import React from 'react';
import { buildCourseMetadata } from "@/lib/course-seo";


export const metadata = buildCourseMetadata("data-analytics-course");


export default function DataAnalyticsCourseLayout({ children }) {
  return (
    <>
    
      <main>{children}</main>


    </>
  );
}
