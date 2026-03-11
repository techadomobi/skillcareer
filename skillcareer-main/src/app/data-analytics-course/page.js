
import Footer from "@/components/Footer"
import Header from "@/components/header"
import EnhancedCoursePage from "@/components/EnhancedCoursePage"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("data-analytics-course")

export default function DataAnalyticsCoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="data-analytics-course" />
      <Header />
      <main className="flex-1">
        <EnhancedCoursePage courseType="dataAnalytics" />
      </main>
      <Footer />
    </div>
  )
}

