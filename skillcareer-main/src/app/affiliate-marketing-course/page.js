

import AffiliateLeadGenCoursePage from "@/components/AffiliateLeadGenCoursePage"
import AmazonMarketingCoursePage from "@/components/AmazonMarketingCoursePage"
import Footer from "@/components/Footer"
import Header from "@/components/header"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("affiliate-marketing-course")

export default function AffiliateMarketingCoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="affiliate-marketing-course" />
      <Header />
      <main className="flex-1">
        
        <AffiliateLeadGenCoursePage/>
      </main>
       <Footer /> 
    </div>
  )
}

