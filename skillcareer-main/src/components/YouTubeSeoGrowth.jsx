import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Search, Film, ThumbsUp, Users, TrendingUp, BarChartHorizontal, Youtube, ChevronRight, PlayCircle, BookOpen, Lightbulb, Medal } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";

export default function YouTubeSeoGrowthCourse() {
  const courseModules = [
    {
      title: "YouTube Keyword Mastery",
      description: "Learn advanced techniques to find high-ranking keywords that attract viewers to your content.",
      icon: Search,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Content Optimization Framework",
      description: "Create videos that rank higher with our proven optimization strategies for titles, descriptions and thumbnails.",
      icon: Film,
      bgColor: "bg-violet-100",
      iconColor: "text-violet-600",
    },
    {
      title: "Channel Growth Blueprint",
      description: "Transform your channel structure and branding to maximize subscriber growth and retention.",
      icon: Youtube,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      title: "Audience Engagement Secrets",
      description: "Discover proven tactics to boost likes, comments, shares and most importantly, watch time.",
      icon: ThumbsUp,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Analytics & Growth Tracking",
      description: "Master YouTube Studio analytics to measure performance and make data-driven content decisions.",
      icon: BarChartHorizontal,
      bgColor: "bg-violet-100",
      iconColor: "text-violet-600",
    },
    {
      title: "Trending Content Strategy",
      description: "Stay ahead of the curve with techniques to identify and leverage trending topics in your niche.",
      icon: TrendingUp,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section - Blue/Violet Theme */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-violet-600 text-white">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-pattern" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="2" height="80" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-violet-500/20"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-violet-700 px-4 py-1.5 text-sm font-medium text-white mb-6 shadow-md">
              <BookOpen size={16} className="mr-2"/> Complete YouTube SEO Course
            </span>
            <h1 className="mb-6 text-white text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight">
              Master YouTube <span className="text-blue-300">SEO & Growth</span> Strategies
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100 sm:text-xl leading-relaxed">
              Learn proven techniques to rank your videos higher, grow your audience, and turn your channel into a successful content platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAa__fUQAp1UMTIxMlZKWjBTT0MzM0g3VFNLSDdPRlNUNy4u&route=shorturl" passHref legacyBehavior>
                <Button asChild className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 text-lg font-semibold flex items-center gap-2 rounded-lg shadow-lg transition duration-300">
                  <a>
                    Enroll Now
                    <ArrowUpRight size={20} />
                  </a>
                </Button>
              </Link>
              <Button variant="outline" className="border-blue-300 bg-blue-700 text-white px-8 py-3 text-lg font-semibold flex items-center gap-2 rounded-lg transition duration-300">
                Watch Course Preview
                <PlayCircle size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Modules Section */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
            Course Curriculum
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Comprehensive <span className="text-violet-600">Learning Path</span> to Success
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Six in-depth modules designed to transform your YouTube strategy and maximize channel growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courseModules.map((module, index) => (
            <Card key={index} className="group flex flex-col overflow-hidden border border-gray-200/80 bg-gray-50 shadow-sm hover:shadow-xl hover:border-violet-300 transition-all duration-300 rounded-xl">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${module.bgColor} ${module.iconColor} group-hover:scale-105 transition-transform duration-300`}>
                    <module.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-violet-600 transition-colors duration-300">{module.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {module.description}
                </CardDescription>
              </CardContent>
               <div className="p-4 pt-2 mt-auto">
                 <span className="flex items-center text-violet-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Module Details <ChevronRight size={16} className="ml-1" />
                </span>
               </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section - Blue/Violet Theme */}
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-700 to-violet-800 shadow-xl">
           
           <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4">
             <div className="h-64 w-64 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl"></div>
           </div>
           <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
             <div className="h-64 w-64 rounded-full bg-gradient-to-bl from-violet-500/20 to-transparent blur-3xl"></div>
           </div>

          <div className="relative px-8 py-16 md:px-12 lg:px-16 z-10">
            <div className="md:flex md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:w-2/3 md:pr-12">
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  Ready to Transform Your YouTube Channel?
                </h2>
                <p className="text-lg text-blue-100 mb-8">
                  Join over 2,000 successful YouTubers who have used our course to grow their channels and increase their revenue.
                </p>
                 <div className="flex items-center space-x-2 text-sm text-blue-200">
                    <Medal size={16} />
                    <span>30-day money-back guarantee if you&apos;re not completely satisfied.</span>
                 </div>
              </div>
              <div className="flex-shrink-0">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-bold rounded-lg shadow-lg transition-all duration-300 md:w-auto flex items-center gap-2">
                  Enroll Now - 15000 Rs.
                  <ArrowUpRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Benefits Section */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
            Course Benefits
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Our YouTube SEO Course Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            A systematic approach based on proven strategies and years of experience.
          </p>
        </div>

        {/* Course benefits cards */}
        <div className="grid gap-10 md:grid-cols-3">
          <div className="text-center p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-lg">
             <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-md">
              <Lightbulb className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-800">Practical Techniques</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              No fluff or theory - only actionable strategies you can implement immediately to see real results.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-white shadow-md">
              <BarChartHorizontal className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-800">Data-Backed Methods</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All strategies are supported by extensive research and analytics from successful YouTube channels.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-lg">
             <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-md">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-800">Community Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Join our exclusive community of course students for ongoing support, feedback, and collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}