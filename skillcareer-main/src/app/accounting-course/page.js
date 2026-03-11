
import AccountingCoursePageNoTabsImages from "@/components/AccountingCoursePage"
import ContactUsEnhanced from "@/components/ContactUs"
import CoursesPageContent from "@/components/CoursesPageContent"
import DigitalMarketingCoursePage from "@/components/DigitalMarketingCoursePage"
import Footer from "@/components/Footer"
import Header from "@/components/header"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("accounting-course")

export default function AccountingCoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="accounting-course" />
      <Header />
      <main className="flex-1">
        <AccountingCoursePageNoTabsImages/>
      </main>
       <Footer /> 
    </div>
  )
}

