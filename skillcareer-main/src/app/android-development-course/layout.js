
import React from 'react';
import { buildCourseMetadata } from "@/lib/course-seo";


export const metadata = buildCourseMetadata("android-development-course");


export default function AndroidAppDevelopmentCourseLayout({ children }) {
  return (
    <>
      
      <main>{children}</main>

   
    </>
  );
}
