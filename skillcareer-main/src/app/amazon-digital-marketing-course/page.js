

import AmazonMarketingCoursePage from "@/components/AmazonMarketingCoursePage"
import Footer from "@/components/Footer"
import Header from "@/components/header"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("amazon-digital-marketing-course")

export default function AmazonDigitalMarketingCoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="amazon-digital-marketing-course" />
      <Header />
      <main className="flex-1">
        
        <AmazonMarketingCoursePage/>
      </main>
       <Footer /> 
    </div>
  )
}

