
import AdvancedComputerCourse from "@/components/AdvancedComputerCourse"
import Footer from "@/components/Footer"
import Header from "@/components/header"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("advance-computer-course")

export default function AdvanceComputerCoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="advance-computer-course" />
      <Header />
      <main className="flex-1">
        <AdvancedComputerCourse/>
        
      </main>
       <Footer /> 
    </div>
  )
}

