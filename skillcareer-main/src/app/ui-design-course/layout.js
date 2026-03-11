
import React from 'react';
import { buildCourseMetadata } from "@/lib/course-seo";

export const metadata = buildCourseMetadata("ui-design-course");


export default function UIDesignCourseLayout({ children }) {
  return (
    <>
      
      <main>{children}</main>

    </>
  );
}
