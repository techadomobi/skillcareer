import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import Footer from '@/components/Footer'
import Header from '@/components/header'

// --- Icons (Extended for Courses) ---
const Icons = {
  ChevronLeft: () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>,
  Calendar: () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  Clock: () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
  Facebook: () => <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
  Twitter: () => <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>,
  Linkedin: () => <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
  
  // Specific Icons for Courses
  Megaphone: () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
  Code: () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
  Smartphone: () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  ChartBar: () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
}

// 2. Fetcher
async function getBlogPost(slug) {
  try {
    const res = await fetch(
      `https://click.creditsdeal.com/admin/viewBlog?slug=${slug}`,
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

// 3. Metadata
export async function generateMetadata({ params } ) {
  const { slug } = await params
  const blog = await getBlogPost(slug)
  
  if (!blog) return { title: 'Blog Not Found | First Startup' }
  
  return {
    title: blog.seoTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    keywords: blog.seoKeywords?.join(', '),
    openGraph: {
      title: blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: [blog.coverImage || ''],
    },
    alternates: {
      canonical: `https://www.firststartup.in/blog/${blog.slug}`,
    },
  }
}

function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
}

function getInitials(name) {
  if (!name) return 'FS'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

function calculateReadTime(content) {
  if (!content) return 5;
  let text = "";
  content.forEach(b => { if(b.type === 'paragraph') text += b.text + " "; });
  const words = text.replace(/<[^>]*>/g, '').split(' ').length;
  return Math.ceil(words / 200); 
}

export default async function BlogPostPage({ params } ) {
  const { slug } = await params
  const blog = await getBlogPost(slug)
  
  if (!blog) notFound()

  const readTime = calculateReadTime(blog.content);

  // --- Courses Data for Sidebar ---
  const COURSES = [
    { 
      title: "Digital Marketing Masterclass", 
      icon: <Icons.Megaphone />, 
      color: "from-orange-400 to-pink-500", 
      shadow: "shadow-orange-500/30" 
    },
    { 
      title: "Full Stack Web Development", 
      icon: <Icons.Code />, 
      color: "from-blue-400 to-cyan-500", 
      shadow: "shadow-blue-500/30" 
    },
    { 
      title: "Android App Development", 
      icon: <Icons.Smartphone />, 
      color: "from-emerald-400 to-green-500", 
      shadow: "shadow-emerald-500/30" 
    },
    { 
      title: "Data Analytics with Python & SQL", 
      icon: <Icons.ChartBar />, 
      color: "from-purple-400 to-indigo-500", 
      shadow: "shadow-purple-500/30" 
    },
  ]
  
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. Navbar */}
      <Header/>
      
      {/* 2. Main Content Wrapper */}
      <main className="flex-grow">
        
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200 mt-16 md:mt-0">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-4">
            <div className="flex items-center text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-800 font-medium truncate max-w-[200px] md:max-w-xs">{blog.title}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* --- Content Column --- */}
            <article className="lg:col-span-8">
              
              <header className="mb-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                    {blog.category || "Article"}
                  </span>
                  <span className="text-slate-400 text-sm flex items-center gap-1">
                    <Icons.Clock /> {readTime} min read
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                  {blog.title}
                </h1>

                {blog.excerpt && (
                  <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-8 border-l-4 border-blue-600 pl-6">
                    {blog.excerpt}
                  </p>
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-t border-b border-slate-100 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-slate-600">{getInitials(blog.writerName)}</span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg leading-none mb-1">
                        {blog.writerName || 'First Startup Team'}
                      </div>
                      <div className="text-slate-500 text-sm flex items-center gap-2">
                        <span className="flex items-center gap-1"><Icons.Calendar /> {formatDate(blog.date || blog.createdAt)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-slate-400">Share:</span>
                    <button className="p-2 bg-slate-50 rounded-full hover:bg-blue-50 transition-colors"><Icons.Linkedin /></button>
                    <button className="p-2 bg-slate-50 rounded-full hover:bg-blue-50 transition-colors"><Icons.Twitter /></button>
                    <button className="p-2 bg-slate-50 rounded-full hover:bg-blue-50 transition-colors"><Icons.Facebook /></button>
                  </div>
                </div>
              </header>

              {blog.coverImage && (
                <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw"
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-p:text-slate-600 prose-p:leading-8 prose-p:mb-6 prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg prose-img:my-10 prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-700 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg prose-ul:list-disc prose-ul:pl-6 prose-ul:text-slate-600 prose-li:marker:text-blue-500">
                {blog.content && blog.content.map((block) => {
                  if (block.type === 'paragraph' && block.text) {
                    return <div key={block._id} dangerouslySetInnerHTML={{ __html: block.text }} />
                  }
                  if (block.type === 'image' && block.url) {
                    return (
                      <figure key={block._id} className="my-10">
                        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
                          <Image src={block.url} alt="Article Detail" fill className="object-cover" />
                        </div>
                      </figure>
                    )
                  }
                  return null
                })}
              </div>

              {blog.seoKeywords && blog.seoKeywords.length > 0 && (
                <div className="mt-16 pt-8 border-t border-slate-200">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {blog.seoKeywords.map((keyword, index) => (
                      <Link href="#" key={index} className="bg-slate-50 text-slate-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-100">
                        {keyword}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* --- Sticky Sidebar (Right) --- */}
            <aside className="lg:col-span-4 pl-0 lg:pl-10">
              <div className="sticky top-28 space-y-8">
                
                {/* --- Updated Courses Card --- */}
                <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                  {/* Background Accents */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl"></div>
                  
                  <h3 className="text-2xl font-bold mb-2 relative z-10 leading-tight">
                    Upgrade Your Skills
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 relative z-10">
                    Join our premium courses to accelerate your career.
                  </p>

                  <div className="grid grid-cols-2 gap-3 relative z-10">
                    {COURSES.map((course, index) => (
                      <Link 
                        key={index}
                        href="/courses" 
                        className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className={`
                          w-10 h-10 rounded-lg bg-gradient-to-br ${course.color} ${course.shadow}
                          flex items-center justify-center text-white mb-2 shadow-lg 
                          group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300
                        `}>
                          {course.icon}
                        </div>
                        <span className="text-[10px] leading-tight font-semibold text-center text-slate-300 group-hover:text-white">
                          {course.title}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <Link 
                    href="/courses"
                    className="block mt-6 w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-center rounded-xl transition-all shadow-lg shadow-blue-900/50 relative z-10"
                  >
                    View All Courses
                  </Link>
                </div>

                {/* Popular Links */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Popular on Blog</h3>
                  <ul className="space-y-4">
                    {[1,2,3].map((i) => (
                      <li key={i} className="group">
                        <Link href="#" className="flex gap-4 items-start">
                          <span className="text-4xl font-bold text-slate-100 group-hover:text-blue-50 transition-colors leading-none -mt-1">0{i}</span>
                          <div>
                            <span className="text-xs font-bold text-blue-600 uppercase mb-1 block">Startup</span>
                            <h4 className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-2">
                              How to scale your business without losing your company culture
                            </h4>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </main>

      {/* 3. Footer */}
     <Footer/>

    </div>
  )
}