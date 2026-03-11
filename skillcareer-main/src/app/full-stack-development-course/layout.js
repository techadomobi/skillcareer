
import React from 'react';
import { buildCourseMetadata } from "@/lib/course-seo";


export const metadata = buildCourseMetadata("full-stack-development-course");

export default function FullStackDevelopmentCourseLayout({ children }) {
  return (
    <>
   
      <main>{children}</main>

     
    </>
  );
}

