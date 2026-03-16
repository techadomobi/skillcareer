import Header from "@/components/header"
import ClientLogos from "@/components/ClientLogos"
import { LearningSection } from "@/components/LearningSection"
import EnrollCourseInfo from "@/components/EnrollCourseInfo"
import { ContactForm } from "@/components/ContactForm"
import { getCourseBySlug } from "@/lib/course-catalog"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }) {
  const { slug } = await params
  const course = getCourseBySlug(slug)

  if (!course) {
    return {
      title: "Enroll | SkillCareer",
      description:
        "Enroll in SkillCareer courses. Get fee details, batch timings, and a counselor callback.",
    }
  }

  return {
    title: `Enroll for ${course.title} | SkillCareer`,
    description: `Enroll for ${course.title}. Get fee details, batch timings, and a counselor callback.`,
    alternates: { canonical: `https://www.skillcareer.in/enroll/${course.slug}` },
  }
}

export default async function EnrollCoursePage({ params }) {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) notFound()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="bg-gradient-to-br from-blue-50 via-white to-gray-100 pt-8 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

        <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="order-1 animate-fadeIn">
              <EnrollCourseInfo course={course} />
            </div>
            <div className="order-2 lg:sticky lg:top-4 animate-fadeInUp">
              <ContactForm courseTitle={course.title} />
            </div>
          </div>
        </div>
      </div>

      <ClientLogos />
      <LearningSection />
    </div>
  )
}

