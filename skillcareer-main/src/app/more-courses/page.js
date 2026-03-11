import Link from 'next/link'
import Image from 'next/image'

import { ArrowRight, Clock, BookOpen } from 'lucide-react'
import Header from '@/components/header'
import FooterEnhancedLight from '@/components/Footer'

export const revalidate = 3600


export const metadata = {
  title: 'More Courses | SkillCareer - Business & Startup Insights',
  description: 'Read expert articles on business registration, compliance, startup growth, and legal insights from SkillCareer experts.',
  alternates: {
    canonical: 'https://www.skillcareer.com/more-courses',
  },
}

async function getBlogPosts() {
  try {
    const res = await fetch('https://click.creditsdeal.com/admin/listService?websiteName=skillcareer.in', {
      headers: { 'accept': 'application/json' },
      next: { revalidate }
    })
    if (!res.ok) throw new Error('Failed to fetch blogs')
    const response = await res.json()
    return response.data || []
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return []
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header/>
      
      <section className="relative pt-12 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          {/* Changed orange-100 to blue-100 */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]" />
          {/* Changed blue-100 to sky-100 for variation within blue theme */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-sky-100/50 blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-4 max-w-7xl">
          <div className="max-w-3xl">
            {/* Changed text-orange-600/bg-orange-50 to text-blue-600/bg-blue-50 */}
            <span className="inline-block px-4 py-1.5 mb-6 text-lg font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Explore Our Courses
            </span>
            <p className="text-xl text-slate-600 leading-relaxed">
              Unlock the full potential of your career with our comprehensive courses designed to equip you with the skills and knowledge
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <article 
                  key={post._id} 
                  // Changed border-slate-600 to border-blue-200 to fit the theme while keeping the border structure
                  className="relative flex flex-col bg-white rounded-[2rem] shadow-lg border border-blue-200 -translate-y-2 transition-all duration-500 ease-out overflow-hidden"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Link href={`/more-courses/${post.slug}`} className="block h-full w-full">
                      <Image
                        src={post.coverImage || "/ad-formats.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      
                      {/* Changed bg-green-600/10 to bg-blue-600/10 */}
                      <div className="absolute inset-0 bg-blue-600/10 transition-colors duration-500" />
                      
                      <div className="absolute top-4 left-4">
                        {/* Changed bg-orange-400 to bg-blue-500 and text-slate-900 to text-white for contrast */}
                        <span className="backdrop-blur-md bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-widest shadow-sm">
                          {post.category || 'Service'}
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                   
                    {/* Changed text-orange-600 to text-blue-600 */}
                    <h2 className="text-2xl font-bold mb-4 leading-tight text-blue-600 transition-colors duration-300">
                      <Link href={`/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-slate-500 line-clamp-2 text-sm leading-relaxed mb-2">
                      {post.metaDescription || "Click to explore the details of this service and how it can benefit your business growth strategy."}
                    </p>

                   
                  </div>
                </article>
              ))
            ) : (
              // Changed border-slate-200 to border-blue-100
              <div className="col-span-full py-20 bg-white rounded-3xl border border-dashed border-blue-100 text-center">
                {/* Changed bg-slate-50 to bg-blue-50 */}
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                   {/* Changed text-slate-300 to text-blue-300 */}
                   <BookOpen className="w-8 h-8 text-blue-300" />
                </div>
                <p className="text-slate-500 text-lg font-medium">No courses found at the moment.</p>
              </div>
            )}

          </div>
        </div>
      </section>
      
      <FooterEnhancedLight/>
    </main>
  )
}
