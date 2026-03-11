'use client'

import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import ServiceContactForm from '@/components/ServiceContactForm'
import { useEffect, useState } from 'react'
import Header from '@/components/header'
import FooterEnhancedLight from '@/components/Footer'

// --- Data Fetcher ---
async function getBlogPost(slug) {
  try {
    const res = await fetch(
      `https://click.creditsdeal.com/admin/viewService?slug=${slug}`,
      { headers: { 'accept': 'application/json' }, cache: 'no-store' }
    )
    if (!res.ok) return null
    const response = await res.json()
    return response.data || null
  } catch (error) {
    console.error('Error fetching blog:', error)
    return null
  }
}

export default function BlogPostPage({ params }) {
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    async function loadData() {
      const resolved = await params
      const data = await getBlogPost(resolved.slug)
      setBlog(data)
    }
    loadData()
  }, [params])

  const courseLinks = [
    { title: 'Accounting Course', href: '/accounting-course', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
    { title: 'Advanced Computer Course', href: '/advance-computer-course', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { title: 'Affiliate Marketing Course', href: '/affiliate-marketing-course', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { title: 'Amazon Digital Marketing', href: '/amazon-digital-marketing-course', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
    { title: 'Android Development', href: '/android-development-course', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
    { title: 'Basic Computer Course', href: '/basic-computer-course', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { title: 'Data Analytics Course', href: '/data-analytics-course', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { title: 'Digital Marketing Course', href: '/digital-marketing-course', icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z' },
    { title: 'English Speaking Course', href: '/english-speaking-course', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    { title: 'Finance Course', href: '/finance-course', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: 'Full Stack Development', href: '/full-stack-development-course', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { title: 'Job Training Course', href: '/job-training-course', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { title: 'UI Design Course', href: '/ui-design-course', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
    { title: 'Web Development Course', href: '/web-development-course', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { title: 'YouTube SEO & Growth', href: '/youtube-seo-growth-course', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <Header/>
      
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <div className="bg-white border-b border-white">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8 2xl:px-12 max-w-[1600px] py-16 md:pt-24 md:pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-widest mb-6">
                  {blog?.category || 'Premium Course'}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-slate-900">
                  {blog?.title || 'Our Courses'}
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                  {blog?.excerpt || 'Data-driven strategies designed for high-performance digital growth and scalability.'}
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[ {v: '500+', l: 'Students'}, {v: '98%', l: 'Success'}, {v: '24/7', l: 'Support'} ].map((s,i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-black text-blue-600 mb-1">{s.v}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">{s.l}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all">
                    Enroll Now
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">
                  <ServiceContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-16 md:pt-12 md:pb-8">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8 2xl:px-12 max-w-[1600px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
                Why Choose <span className="text-blue-600">Our Courses</span>?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Delivering exceptional learning through expert-led training and practical skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { 
                  title: 'Students Trained', 
                  value: '500+', 
                  desc: 'Successfully completed courses',
                  icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                },
                { 
                  title: 'Success Rate', 
                  value: '98%', 
                  desc: 'Student satisfaction rate',
                  icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                },
                { 
                  title: 'Course Completion', 
                  value: '100%', 
                  desc: 'Quality learning materials',
                  icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                },
                { 
                  title: 'Career Growth', 
                  value: '3.5x', 
                  desc: 'Average salary increase',
                  icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                }
              ].map((stat, idx) => (
                <div key={idx} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-400">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {stat.icon}
                    </div>
                    <div className="text-5xl font-black text-blue-600 mb-3 group-hover:scale-105 transition-transform">
                      {stat.value}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. CONTENT & SIDEBAR SECTION */}
        <div className="container mx-auto px-4 lg:px-6 xl:px-8 2xl:px-12 max-w-[1600px] py-12 md:py-20">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">

            {/* Main Article Content - High Depth Card Look */}
            <article className="xl:col-span-8 w-full">
              <div className="bg-white p-6 md:p-6 rounded-[2.5rem] shadow-[0_15px_60px_rgba(0,0,0,0.08)] border border-slate-100 ring-1 ring-slate-100">
                {blog?.coverImage && (
                  <div className="relative w-full aspect-video mb-12 rounded-3xl overflow-hidden shadow-lg ring-1 ring-slate-100">
                    <Image src={blog.coverImage} alt={blog?.title || 'Cover'} fill className="object-contain" priority />
                  </div>
                )}

                <div className="space-y-8 min-h-[400px]">
                  {blog?.content ? (
                    blog.content.map((block) => {
                      if (block.type === 'paragraph' && block.text) {
                        return (
                          <div key={block._id} className="prose prose-lg max-w-none prose-slate prose-headings:text-slate-900 prose-headings:font-black prose-p:text-slate-700"
                            dangerouslySetInnerHTML={{ __html: block.text }} 
                          />
                        )
                      }
                      if (block.type === 'image' && block.url) {
                        return (
                          <div key={block._id} className="my-10 rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-100">
                            <Image src={block.url} alt="Visual" width={1000} height={600} className="w-full h-auto" />
                          </div>
                        )
                      }
                      return null
                    })
                  ) : (
                    <div className="space-y-4 animate-pulse">
                      <div className="h-6 bg-slate-100 rounded w-3/4"></div>
                      <div className="h-6 bg-slate-100 rounded w-full"></div>
                      <div className="h-6 bg-slate-100 rounded w-5/6"></div>
                    </div>
                  )}
                </div>
              </div>
            </article>

            {/* Sticky Sidebar - High Depth Card Look */}
            <aside id="contact" className="xl:col-span-4 w-full sticky top-24">
              <div className="p-8 rounded-[2.5rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-blue-100 ring-1 ring-blue-50">
                <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </span>
                  Explore Courses
                </h3>
                <div className="space-y-4">
                  {courseLinks.map((item, idx) => (
                    <Link key={idx} href={item.href}
                      className="group flex items-center gap-4 px-5 py-4 rounded-2xl border-2 border-blue-400 bg-white transition-all duration-300 shadow-[0_8px_15px_rgba(59,130,246,0.1)] scale-[1.02] -translate-y-1 hover:border-blue-600 hover:shadow-blue-100"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <span className="flex-1 text-sm font-black text-blue-600 leading-tight group-hover:text-blue-700">{item.title}</span>
                      <svg className="w-5 h-5 text-blue-500 translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* 3. YOUR ORIGINAL BOTTOM SECTIONS (RESTORED) */}
        <div className="container mx-auto px-4 lg:px-6 xl:px-8 2xl:px-12 max-w-[1600px] pb-20">
          
          {/* Why Choose This Course Section */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-blue-50 border border-blue-100 mb-12">
             <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-200 text-white">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Why Choose This Course?</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Expert Instructors', desc: 'Learn from industry professionals with real-world experience', icon: '👨‍🏫' },
                  { title: 'Practical Learning', desc: 'Hands-on projects and real-world applications', icon: '💻' },
                  { title: 'Certification', desc: 'Receive recognized certificates upon completion', icon: '🎓' },
                  { title: '24/7 Support', desc: 'Round-the-clock assistance whenever you need it', icon: '☎️' }
                ].map((feature, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-blue-100 hover:shadow-lg hover:scale-[1.02] transition-all">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h4 className="font-bold text-lg text-slate-900 mb-3">{feature.title}</h4>
                    <p className="text-slate-600 text-base leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* Related Topics Section */}
          {/* <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Related Topics</h2>
             </div>
             
             <div className="flex flex-wrap gap-3">
               {blog?.seoKeywords?.map((keyword, index) => (
                 <span key={index} className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-full text-slate-600 text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all cursor-default shadow-sm">
                   #{keyword}
                 </span>
               ))}
             </div>
          </div> */}

        </div>
      </main>

      <FooterEnhancedLight/>
    </div>
  )
}