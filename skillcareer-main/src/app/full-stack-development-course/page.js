
import Footer from "@/components/Footer"
import Header from "@/components/header"
import EnhancedCoursePage from "@/components/EnhancedCoursePage"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("full-stack-development-course")

export default function FullStackDevelopmentCoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="full-stack-development-course" />
      <Header />
      <main className="flex-1">
        <EnhancedCoursePage courseType="webDevelopment" />
      </main>
      <Footer />
    </div>
  )
}

