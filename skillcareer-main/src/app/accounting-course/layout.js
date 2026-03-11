
import React from 'react';
import { buildCourseMetadata } from "@/lib/course-seo";

export const metadata = buildCourseMetadata("accounting-course");


export default function AccountingCourseLayout({ children }) {
  return (
    <>
   
      <main>{children}</main>

   
    </>
  );
}
