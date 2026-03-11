

import Footer from "@/components/Footer"
import Header from "@/components/header"
import UIDesignCoursePage from "@/components/UIDesignCoursePage"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("ui-design-course")

export default function UIDesignCoursePageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="ui-design-course" />
      <Header />
      <main className="flex-1">
       <UIDesignCoursePage/>
      </main>
       <Footer /> 
    </div>
  )
}

