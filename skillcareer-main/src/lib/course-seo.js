import { getCourseBySlug } from "@/lib/course-catalog"

const BASE_URL = "https://www.skillcareer.in"

const buildCourseMetadata = (slug) => {
  const course = getCourseBySlug(slug)
  if (!course) {
    return {
      title: "Course | SkillCareer",
      description: "Explore career-focused courses and professional training programs.",
    }
  }

  const url = `${BASE_URL}/${course.slug}`
  const title = `${course.title} | SkillCareer`

  return {
    title,
    description: course.description,
    keywords: course.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: course.description,
      url,
      type: "website",
      images: course.image ? [{ url: course.image, alt: course.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: course.description,
      images: course.image ? [course.image] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

const buildCourseJsonLd = (slug) => {
  const course = getCourseBySlug(slug)
  if (!course) return null

  const url = `${BASE_URL}/${course.slug}`
  const hasPrice = Number.isFinite(course.discountedPrice)
  const price = hasPrice ? course.discountedPrice : course.price

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "SkillCareer",
      url: BASE_URL,
    },
    courseMode: "online",
    educationalLevel: course.level || "Beginner",
    timeRequired: course.duration || undefined,
    image: course.image ? [`${BASE_URL}${course.image}`] : undefined,
    url,
    offers: price
      ? {
          "@type": "Offer",
          price: String(price),
          priceCurrency: "INR",
          url,
          availability: "https://schema.org/InStock",
        }
      : undefined,
  }
}

export { BASE_URL, buildCourseMetadata, buildCourseJsonLd }
