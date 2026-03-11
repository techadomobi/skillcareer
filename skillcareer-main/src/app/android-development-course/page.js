
import AndroidDevelopmentCoursePage from "@/components/AndroidDevelopmentCoursePage"
import Footer from "@/components/Footer"
import Header from "@/components/header"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("android-development-course")

export default function AndroidDevelopmentCoursePageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="android-development-course" />
      <Header />
      <main className="flex-1">
        <AndroidDevelopmentCoursePage/>
      </main>
       <Footer /> 
    </div>
  )
}

