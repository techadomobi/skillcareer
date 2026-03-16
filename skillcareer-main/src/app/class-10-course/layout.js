// app/class-10-course/layout.js
import React from "react"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("class-10-course")

export default function Class10CourseLayout({ children }) {
  return <main>{children}</main>
}

