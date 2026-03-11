

import Footer from "@/components/Footer"
import Header from "@/components/header"
import WebDevelopmentCoursePageNoTabsImages from "@/components/WebDevelopmentCoursePageNoTabsImages"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("web-development-course")

export default function WebDevelopmentCoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="web-development-course" />
      <Header />
      <main className="flex-1">
        <WebDevelopmentCoursePageNoTabsImages/>
      </main>
       <Footer /> 
    </div>
  )
}

