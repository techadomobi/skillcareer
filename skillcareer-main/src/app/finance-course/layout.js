
import React from 'react';
import { buildCourseMetadata } from "@/lib/course-seo";

export const metadata = buildCourseMetadata("finance-course");


export default function FinanceCourseLayout({ children }) {
  return (
    <>
    
      <main>{children}</main>

      
    </>
  );
}
