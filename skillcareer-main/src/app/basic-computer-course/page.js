
import AndroidDevelopmentCoursePage from "@/components/AndroidDevelopmentCoursePage"
import BasicComputerCoursePage from "@/components/BasicComputerCoursePage"
import Footer from "@/components/Footer"
import Header from "@/components/header"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("basic-computer-course")

export default function BasicComputerCoursePageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="basic-computer-course" />
      <Header />
      <main className="flex-1">
        <BasicComputerCoursePage/>
      </main>
       <Footer /> 
    </div>
  )
}

