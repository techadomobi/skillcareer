import Link from 'next/link'
import Image from 'next/image'



import Footer from '@/components/Footer'
import Header from '@/components/header'

export const metadata = {
  title: 'Blog | SkillCareer – Easy Learning for Students & Beginners',
  description: 'Read simple and helpful blogs on career skills, technology, jobs, freelancing, and business basics made easy for students',
 
}

// Helper to get random colors for categories to match the colorful screenshot badges
const getCategoryColor = (category) => {
  const colors = {
    'Marketing': 'bg-pink-700',
    'Customer Relationships': 'bg-rose-600',
    'Artificial Intelligence': 'bg-blue-600',
    'Startup': 'bg-purple-600',
    'NBFC': 'bg-indigo-600',
    'Tax': 'bg-emerald-600',
  }
  return colors[category] || 'bg-blue-600' // Default color
}

async function getBlogPosts() {
  try {
    const res = await fetch('https://click.creditsdeal.com/admin/listBlogs?websiteName=skillcareer.in', {
      headers: {
        'accept': 'application/json'
      },
      cache: 'no-store' 
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch blogs')
    }
    
    const response = await res.json()
    return response.data || []
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return []
  }
}

function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  })
}

function getInitials(name) {
  if (!name) return 'FS'
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header/>
      
      <div className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          {/* Header Section */}
          <div className="mb-12 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-blue-500 mb-4">Latest Insights</h1>
            <p className="text-lg text-blue-500 max-w-2xl">
Delhi&apos;s leading Digital Marketing & Web Development Institute! Learn from industry experts with online & offline courses.            </p>
          </div>

          {/* Grid Layout to match Screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <article key={post._id} className="group flex flex-col h-full">
                  
                  {/* Image Card */}
                  <div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded-2xl shadow-sm">
                    <Link href={`/${post.slug}`}>
                      <Image
                                              src={post.coverImage || "/ad-formats.jpg"}

                        // src={ "/ad-formats.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className={`${getCategoryColor(post.category)} text-white text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wide inline-block`}>
                        {post.category || 'General'}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                      <Link href={`/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt || post.metaDescription || "Read full article to know more about this topic..."}
                    </p>

                    {/* Author Section (Bottom) */}
                    <div className="mt-auto flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative border border-slate-100 shrink-0">
                         {/* If API has writerImage, use it, else use initials */}
                         {post.writerImage ? (
                            <Image 
                              src={post.writerImage} 
                              alt={post.writerName} 
                              fill 
                              className="object-cover" 
                            />
                         ) : (
                           <div className="w-full h-full flex items-center justify-center bg-slate-800 text-white text-xs font-bold">
                              {getInitials(post.writerName)}
                           </div>
                         )}
                      </div>

                      {/* Name & Link */}
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900 underline decoration-slate-300 hover:decoration-blue-600 underline-offset-2">
                           {post.writerName || "AdoMobi Startup Team"}
                        </span>
                        {/* Optional: Add date if needed, though screenshot mostly focused on name */}
                        {/* <span className="text-xs text-slate-500">{formatDate(post.createdAt)}</span> */}
                      </div>
                    </div>

                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-slate-50 rounded-2xl">
                <p className="text-slate-500 text-lg">No blogs found at the moment.</p>
              </div>
            )}

          </div>
        </div>
      </div>
       <Footer/>
    </main>
  )
}