/**
 * Dynamic sitemap for skillcareer.in
 * Fetches blog slugs from the specific SkillCareer API and maps them to root-level URLs.
 */
export const revalidate = 3600

export default async function sitemap() {
  const baseUrl = 'https://www.skillcareer.in'

  // 1. Fetch blog posts from the specific SkillCareer API
  let blogPosts = []
  try {
    const res = await fetch('https://click.creditsdeal.com/admin/listBlogs?websiteName=skillcareer.in', {
      headers: { accept: 'application/json' },
      next: { revalidate }
    })
    
    if (res.ok) {
      const json = await res.json()
      blogPosts = json.data || []
    }
  } catch (err) {
    console.error('Error fetching blog posts for sitemap:', err)
  }

  const now = new Date()

  // 2. Define Static Pages (Based on your XML)
  const staticPages = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/job-training-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/courses`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/center`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/join-course-today`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/enroll-now`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/digital-marketing-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/web-development-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/full-stack-development-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/finance-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Course sub-pages (Priority 0.64)
    { url: `${baseUrl}/data-analytics-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.64 },
    { url: `${baseUrl}/ui-design-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.64 },
    { url: `${baseUrl}/accounting-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.64 },
    { url: `${baseUrl}/android-development-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.64 },
    { url: `${baseUrl}/basic-computer-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.64 },
    { url: `${baseUrl}/advance-computer-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.64 },
    { url: `${baseUrl}/amazon-digital-marketing-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.64 },
    { url: `${baseUrl}/english-speaking-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.64 },
    { url: `${baseUrl}/affiliate-marketing-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.64 },
    { url: `${baseUrl}/youtube-seo-growth-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.64 },
    { url: `${baseUrl}/class-10-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.64 },
    { url: `${baseUrl}/class-12-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.64 },
  ]

  // 3. Generate Dynamic Blog Pages (at root level: /slug)
  const blogPages = blogPosts
    .filter(p => p.slug)
    .map((p) => ({
      // Changed from /blog/${p.slug} to /${p.slug} per instructions
      url: `${baseUrl}/${p.slug}`,
      lastModified: p.updatedAt ? new Date(p.updatedAt) : p.createdAt ? new Date(p.createdAt) : now,
      changeFrequency: 'weekly',
      priority: 0.64
    }))

  // 4. Return combined array
  return [...staticPages, ...blogPages]
}
