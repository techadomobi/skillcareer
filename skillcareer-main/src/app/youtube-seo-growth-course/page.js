import Footer from "@/components/Footer"
import Header from "@/components/header"
import UnifiedCoursePage from "@/components/UnifiedCoursePage"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("youtube-seo-growth-course")

export default function CoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <UnifiedCoursePage slug="youtube-seo-growth-course" />
      </main>
      <Footer />
    </div>
  )
}