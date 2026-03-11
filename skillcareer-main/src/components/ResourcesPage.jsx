// components/ExternalResourcesPage.jsx
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Link as LinkIcon, ExternalLink, Book, Code, Video, MessageSquare, Users, GraduationCap, Wrench } from "lucide-react"; // Using more relevant icons

// --- Sample External Resource Data (Replace with your curated links) ---
const externalResourcesData = [
  {
    id: "ext001",
    title: "React Official Documentation",
    description: "The official source for learning React concepts, APIs, and best practices directly from the creators.",
    type: "Official Docs", // e.g., Official Docs, Tutorial, Industry Blog, Community Forum, Online Tool, Video Course
    link: "https://react.dev/",
    imageUrl: "https://via.placeholder.com/600x400/61DAFB/000000?text=React+Docs", // Placeholder or relevant logo
    tags: ["React", "JavaScript", "Frontend", "Documentation"],
    source: "react.dev" // Optional: Mention the source website
  },
  {
    id: "ext002",
    title: "MDN Web Docs: JavaScript Guide",
    description: "Mozilla Developer Network's comprehensive guide to JavaScript, covering everything from basics to advanced features.",
    type: "Official Docs",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    imageUrl: "https://via.placeholder.com/600x400/000000/FFFFFF?text=MDN+JS",
    tags: ["JavaScript", "Web Development", "Documentation", "Beginner", "Advanced"],
    source: "MDN Web Docs"
  },
  {
    id: "ext003",
    title: "CSS-Tricks: A Guide to Flexbox",
    description: "A popular and visual guide explaining the fundamentals and power of CSS Flexbox for layout.",
    type: "Tutorial",
    link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    imageUrl: "https://via.placeholder.com/600x400/FF7F3E/FFFFFF?text=CSS-Tricks",
    tags: ["CSS", "Flexbox", "Layout", "Frontend", "Tutorial"],
    source: "CSS-Tricks"
  },
   {
    id: "ext004",
    title: "Figma Community",
    description: "Explore templates, plugins, and design systems shared by the Figma user community.",
    type: "Community Hub",
    link: "https://www.figma.com/community",
    imageUrl: "https://via.placeholder.com/600x400/F24E1E/FFFFFF?text=Figma+Community",
    tags: ["UI Design", "UX Design", "Figma", "Community", "Resources"],
    source: "Figma"
  },
  {
    id: "ext005",
    title: "Stack Overflow: Python Questions",
    description: "Find answers or ask questions about Python programming challenges in this large developer community.",
    type: "Community Forum",
    link: "https://stackoverflow.com/questions/tagged/python",
    imageUrl: "https://via.placeholder.com/600x400/F48024/FFFFFF?text=Stack+Overflow",
    tags: ["Python", "Programming", "Q&A", "Community", "Debugging"],
    source: "Stack Overflow"
  },
   {
    id: "ext006",
    title: "Google Analytics Academy",
    description: "Free online courses from Google to learn about analytics tools and data analysis.",
    type: "Video Course",
    link: "https://analytics.google.com/analytics/academy/",
    imageUrl: "https://via.placeholder.com/600x400/FBBC05/000000?text=GA+Academy",
    tags: ["Google Analytics", "Data Analytics", "Digital Marketing", "Free Course"],
    source: "Google"
  },
   {
    id: "ext007",
    title: "Can I Use...",
    description: "Check browser compatibility for frontend web technologies (HTML, CSS, JS).",
    type: "Online Tool",
    link: "https://caniuse.com/",
    imageUrl: "https://via.placeholder.com/600x400/D94C4C/FFFFFF?text=Can+I+Use",
    tags: ["Frontend", "Web Development", "CSS", "HTML", "JavaScript", "Compatibility", "Utility"],
    source: "caniuse.com"
  },
  // Add more curated external resources
];
// --- End Sample Data ---

// Helper component for individual External Resource Cards
const ExternalResourceCard = ({ resource }) => {
  const getIconForType = (type) => {
    switch (type?.toLowerCase()) {
      case 'official docs': return <Book className="h-4 w-4" />;
      case 'tutorial': return <GraduationCap className="h-4 w-4" />;
      case 'industry blog': return <MessageSquare className="h-4 w-4" />;
      case 'community forum': return <Users className="h-4 w-4" />;
      case 'community hub': return <Users className="h-4 w-4" />;
      case 'online tool': return <Wrench className="h-4 w-4" />;
      case 'video course': return <Video className="h-4 w-4" />;
      default: return <LinkIcon className="h-4 w-4" />;
    }
  };

   const getBadgeColor = (type) => {
     switch (type?.toLowerCase()) {
      case 'official docs': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'tutorial': return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'industry blog': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'community forum': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'community hub': return 'bg-sky-100 text-sky-800 border-sky-200';
      case 'online tool': return 'bg-red-100 text-red-800 border-red-200';
      case 'video course': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  }

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-shadow duration-300 hover:shadow-lg border border-gray-200 rounded-xl group"> {/* Added group */}
      {resource.imageUrl && (
        <div className="h-10 overflow-hidden relative">
          {/* <img
            src={resource.imageUrl}
            alt={`${resource.title}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          /> */}
          <Badge className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 border ${getBadgeColor(resource.type)}`}>
             <span className="mr-1.5">{getIconForType(resource.type)}</span>
             {resource.type}
          </Badge>
        </div>
      )}

      <CardHeader className="pt-4 pb-2">
        {/* Title as External Link */}
        <CardTitle className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors">
          <a href={resource.link} target="_blank" rel="noopener noreferrer" className="line-clamp-2 flex items-start gap-1.5">
            {resource.title}
            {/* <ExternalLink className="h-3 w-3 text-gray-400 flex-shrink-0 relative top-1" /> */}
          </a>
        </CardTitle>
        {/* Optional: Source Website */}
        {resource.source && (
            <CardDescription className="text-xs text-gray-500 pt-1">
                Source: {resource.source}
            </CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex-grow space-y-3 pt-1 pb-4 text-sm">
        <p className="text-gray-600 line-clamp-3">{resource.description}</p>

        {/* Tags */}
        {resource.tags && resource.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
                {/* <Tag className="h-3.5 w-3.5 text-gray-400" /> */}
                {resource.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs font-normal bg-gray-100 text-gray-700">{tag}</Badge>
                ))}
            </div>
        )}
      </CardContent>

      <CardFooter className="pt-3 pb-4 border-t border-gray-100 bg-gray-50/50 flex justify-end items-center">
         {/* Action Button to External Site */}
         <Button variant="default" size="sm" asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
             <a href={resource.link} target="_blank" rel="noopener noreferrer">
                Visit Resource
                <ExternalLink className="h-4 w-4 ml-1.5" />
             </a>
         </Button>
      </CardFooter>
    </Card>
  );
};


// Main Page Component
export default function ExternalResourcesPage() {
  // --- State for filtering/search ---
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  // --- Use sample data (replace with API fetch if needed) ---
  const [resources, setResources] = useState(externalResourcesData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- Filtering Logic ---
  const filteredResources = resources.filter(resource => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = resource.title.toLowerCase().includes(searchLower) ||
                          resource.description.toLowerCase().includes(searchLower) ||
                          (resource.tags && resource.tags.some(tag => tag.toLowerCase().includes(searchLower))); // Search tags too
    const matchesType = selectedType === 'all' || resource.type.toLowerCase() === selectedType.toLowerCase();
    return matchesSearch && matchesType;
  });

  const resourceTypes = ['all', ...new Set(externalResourcesData.map(r => r.type))];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-teal-700 bg-teal-50 border-teal-200">
            Curated Links
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">
            Recommended <span className="text-teal-600">External Resources</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore valuable documentation, tutorials, tools, and communities related to our course topics from trusted external sources.
          </p>
        </div>

        {/* Filtering/Search Controls */}
        <div className="mb-10 md:mb-12 flex flex-col md:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search title, description, tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-full md:w-[200px]"> {/* Wider trigger */}
               <Filter className="h-4 w-4 mr-2 text-gray-500" />
              <SelectValue placeholder="Filter by Type" />
            </SelectTrigger>
            <SelectContent>
              {resourceTypes.map(type => (
                <SelectItem key={type} value={type.toLowerCase()} className="capitalize">
                  {type === 'all' ? 'All Resource Types' : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Resources Grid */}
        {isLoading ? (
          <div className="text-center py-10">Loading resources...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-600">Error loading resources: {error}</div>
        ) : filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredResources.map((resource) => (
              <ExternalResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          // Message when no resources match filters or none exist
          <div className="text-center py-12 px-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Matching Resources Found</h3>
            <p className="text-gray-500">
              {searchTerm || selectedType !== 'all'
                ? "Try adjusting your search or filter criteria, or select 'All Resource Types'."
                : "We couldn't find any external resources at this time."}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}