
import Footer from "@/components/Footer"
import Header from "@/components/header"
import EnhancedCoursePage from "@/components/EnhancedCoursePage"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("digital-marketing-course")

export default function DigitalMarketingCoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="digital-marketing-course" />
      <Header />
      <main className="flex-1">
        <EnhancedCoursePage courseType="digitalMarketing" />
      </main>
      <Footer />
    </div>
  )
}

