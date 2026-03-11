
import ContactUsEnhanced from "@/components/ContactUs"
import CoursesPageContent from "@/components/CoursesPageContent"
import DigitalMarketingCoursePage from "@/components/DigitalMarketingCoursePage"
import Footer from "@/components/Footer"
import Header from "@/components/header"
import WebDevelopmentCoursePageEnhanced from "@/components/WebDevelopmentCoursePageFull"
import WebDevelopmentCoursePageNoTabsImages from "@/components/WebDevelopmentCoursePageNoTabsImages"
import YouTubeSeoGrowth from "@/components/YouTubeSeoGrowth"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("youtube-seo-growth-course")

export default function YouTubeSeoGrowthCoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="youtube-seo-growth-course" />
      <Header />
      <main className="flex-1">
       <YouTubeSeoGrowth/>
      </main>
       <Footer /> 
    </div>
  )
}

