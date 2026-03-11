// app/basic-computer-course/layout.js
import React from 'react';
import { buildCourseMetadata } from "@/lib/course-seo";


export const metadata = buildCourseMetadata("basic-computer-course");


export default function BasicComputerCourseLayout({ children }) {
  return (
    <>
    
      <main>{children}</main>

    
    </>
  );
}
