
import Footer from "@/components/Footer"
import Header from "@/components/header"
import TrainingPageContent from "@/components/TrainingsPageContent"
import CourseStructuredData from "@/components/CourseStructuredData"
import { buildCourseMetadata } from "@/lib/course-seo"

export const metadata = buildCourseMetadata("job-training-course")

export default function JobTrainingCoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CourseStructuredData slug="job-training-course" />
      <Header />
      <main className="flex-1">
        <TrainingPageContent/>
      </main>
       <Footer /> 
    </div>
  )
}

