
import ContactUsEnhanced from "@/components/ContactUs"
import CoursesPageContent from "@/components/CoursesPageContent"
import DigitalMarketingCoursePage from "@/components/DigitalMarketingCoursePage"
import FinanceCoursePageNoTabsImages from "@/components/FinanceCoursePage"
import Footer from "@/components/Footer"
import Header from "@/components/header"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("finance-course")

export default function FinanceCoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="finance-course" />
      <Header />
      <main className="flex-1">
      <FinanceCoursePageNoTabsImages/>
      </main>
       <Footer /> 
    </div>
  )
}

