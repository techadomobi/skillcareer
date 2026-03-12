import Footer from "@/components/Footer"
import Header from "@/components/header"
import UnifiedCoursePage from "@/components/UnifiedCoursePage"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("full-stack-development-course")

export default function CoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <UnifiedCoursePage slug="full-stack-development-course" />
      </main>
      <Footer />
    </div>
  )
}