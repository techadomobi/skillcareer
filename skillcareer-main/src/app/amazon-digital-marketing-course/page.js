import Footer from "@/components/Footer"
import Header from "@/components/header"
import UnifiedCoursePage from "@/components/UnifiedCoursePage"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("amazon-digital-marketing-course")

export default function CoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <UnifiedCoursePage slug="amazon-digital-marketing-course" />
      </main>
      <Footer />
    </div>
  )
}