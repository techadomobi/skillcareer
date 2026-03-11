"use client"

import { buildCourseJsonLd } from "@/lib/course-seo"

export default function CourseStructuredData({ slug }) {
  const data = buildCourseJsonLd(slug)
  if (!data) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
