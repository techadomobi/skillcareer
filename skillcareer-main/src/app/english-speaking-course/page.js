
import AndroidDevelopmentCoursePage from "@/components/AndroidDevelopmentCoursePage"
import BasicComputerCoursePage from "@/components/BasicComputerCoursePage"
import BusinessEnglishCoursePage from "@/components/BusinessEnglishCoursePage"
import ContactUsEnhanced from "@/components/ContactUs"
import CoursesPageContent from "@/components/CoursesPageContent"
import DataAnalyticsCoursePage from "@/components/DataAnalyticsCoursePage"
import DigitalMarketingCoursePage from "@/components/DigitalMarketingCoursePage"
import Footer from "@/components/Footer"
import Header from "@/components/header"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("english-speaking-course")

export default function EnglishSpeakingCoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="english-speaking-course" />
      <Header />
      <main className="flex-1">
        <BusinessEnglishCoursePage/>
      </main>
       <Footer /> 
    </div>
  )
}

