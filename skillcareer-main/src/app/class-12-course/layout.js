// app/class-12-course/layout.js
import React from "react"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("class-12-course")

export default function Class12CourseLayout({ children }) {
  return <main>{children}</main>
}

