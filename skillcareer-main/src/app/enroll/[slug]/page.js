import Header from "@/components/header"
import ClientLogos from "@/components/ClientLogos"
import { LearningSection } from "@/components/LearningSection"
import EnrollCourseInfo from "@/components/EnrollCourseInfo"
import { ContactForm } from "@/components/ContactForm"
import Link from "next/link"
import { getCourseBySlug } from "@/lib/course-catalog"
import { notFound } from "next/navigation"
import { Award, UsersRound, Zap, Shield, Clock, Users, GraduationCap, Briefcase, Star, Sparkles } from "lucide-react"

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

  const outcomes = [
    "Clear roadmap to complete the course with weekly milestones",
    "Hands-on assignments and mentor feedback",
    "Career guidance and interview preparation",
    "Portfolio-ready project support",
  ]

  const enrollmentSteps = [
    {
      title: "Share your details",
      description: "Tell us your goals and preferred batch timings.",
    },
    {
      title: "Get a counselor call",
      description: "We explain the curriculum, fees, and next steps.",
    },
    {
      title: "Confirm your seat",
      description: "Choose a batch and start your learning journey.",
    },
  ]

  const faqs = [
    {
      q: "Is the enrollment form required?",
      a: "Yes. It helps us understand your goals and share the right batch options.",
    },
    {
      q: "When will I get a callback?",
      a: "Within 24 hours on working days.",
    },
    {
      q: "Can I change my batch later?",
      a: "We allow batch changes subject to seat availability.",
    },
    {
      q: "Do I get a certificate?",
      a: "Yes, a SkillCareer completion certificate is provided.",
    },
  ]

  const trustSignals = [
    { icon: <Zap className="h-5 w-5" />, text: "Fast response" },
    { icon: <Shield className="h-5 w-5" />, text: "Secure process" },
    { icon: <Clock className="h-5 w-5" />, text: "24/7 support" },
    { icon: <Users className="h-5 w-5" />, text: "Trusted by 1000+ students" },
  ]

  const courseHighlights = [
    { icon: <GraduationCap className="h-5 w-5" />, text: "Industry-recognized certification" },
    { icon: <Briefcase className="h-5 w-5" />, text: "Job placement assistance" },
    { icon: <Users className="h-5 w-5" />, text: "Expert mentorship" },
    { icon: <Clock className="h-5 w-5" />, text: "Flexible batch timings" },
  ]

  return (
    <div className="flex flex-col min-h-screen enroll-theme">
      <Header />

      <div className="enroll-hero pt-12 pb-12 relative overflow-hidden">
        <div className="enroll-grid" />
        <div className="absolute -top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-16 right-10 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-24 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

        <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center lg:text-left space-y-6">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="enroll-badge">Enrollment</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200 shadow-sm">
                <UsersRound className="h-4 w-4 text-blue-600" />
                Trusted by learners
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200 shadow-sm">
                <Award className="h-4 w-4 text-emerald-600" />
                Industry-ready curriculum
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight enroll-title">
              Secure your seat for <span className="text-blue-700">{course.title}</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto lg:max-w-none">
              Share your details and get fee details, batch timings, and counselor support tailored to your goals.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 text-white px-6 py-3 text-base font-semibold shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Talk to a Consultant
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-white text-slate-900 px-6 py-3 text-base font-semibold border border-slate-200 hover:border-slate-300 transition-all transform hover:scale-105"
              >
                Download Syllabus
              </Link>
              <Link
                href="/courses"
                className="rounded-full bg-slate-900 text-white px-6 py-3 text-base font-semibold hover:bg-slate-800 transition-all transform hover:scale-105"
              >
                View Schedules
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div className="order-1 animate-fadeIn">
              <EnrollCourseInfo course={course} />
            </div>
            <div className="order-2 lg:sticky lg:top-8 animate-fadeInUp">
              <div className="wow-border wow-sheen course-surface course-float rounded-2xl bg-white/90">
                <ContactForm courseTitle={course.title} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ClientLogos />
      <LearningSection />

      <section className="bg-gradient-to-b from-white via-slate-50 to-white py-12">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-kicker mb-3">Outcomes</p>
            <h2 className="section-title text-3xl font-bold tracking-tight text-slate-900">
              What you can expect after enrollment
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((item, index) => (
              <div
                key={item}
                className="enroll-card px-6 py-5 text-slate-700 relative overflow-hidden rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Milestone {index + 1}</h3>
                    <p className="text-slate-600">{item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-12">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-kicker mb-3">Why Choose Us</p>
            <h2 className="section-title text-3xl font-bold tracking-tight text-slate-900">
              Course Highlights & Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Course Benefits
              </h3>
              <div className="space-y-3">
                {courseHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-700">
                    <div className="text-blue-600">{highlight.icon}</div>
                    <span>{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                Trust & Security
              </h3>
              <div className="space-y-3">
                {trustSignals.map((signal, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-700">
                    <div className="text-emerald-600">{signal.icon}</div>
                    <span>{signal.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-12">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-kicker mb-3">Process</p>
            <h2 className="section-title text-3xl font-bold tracking-tight text-slate-900">
              Enrollment in 3 simple steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {enrollmentSteps.map((step, index) => (
              <div key={step.title} className="enroll-card p-6 relative overflow-hidden">
                <div className="enroll-step-dot" />
                <div className="text-xs font-semibold text-blue-700 mb-2">Step {index + 1}</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">{step.title}</div>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-slate-50 to-white py-12">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-kicker mb-3">FAQs</p>
            <h2 className="section-title text-3xl font-bold tracking-tight text-slate-900">
              Common enrollment questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="enroll-card px-5 py-4 relative overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500" />
                <div className="font-semibold text-slate-900">{item.q}</div>
                <p className="mt-1 text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
