import React from 'react';
import { CheckCircle2 } from 'lucide-react'; // Using a filled checkmark icon like the image

// Define the learning topics with their text and desired color scheme
// Based on the image: Columns 1 & 3 are Yellow, Column 2 is Blue
// We'll assign 'yellow' or 'blue' and apply styles accordingly.
const learningTopics = [
  { text: "Search Engine Optimization", color: "yellow" },
  { text: "Social Media Marketing", color: "blue" },
  { text: "Facebook & Instagram Ads", color: "yellow" },
  { text: "Google Ads", color: "blue" }, // This is blue in col 1 in the image
  { text: "Website Designing", color: "yellow" }, // This is yellow in col 2
  { text: "Website Development", color: "blue" }, // This is blue in col 3
  { text: "Graphic Designing", color: "yellow" },
  { text: "Video Editing", color: "blue" },
  { text: "Influencer Marketing", color: "yellow" },
  { text: "E-Commerce Marketing", color: "blue" }, // This is blue in col 1
  { text: "Online Reputation Management", color: "yellow" }, // This is yellow in col 2
  { text: "Blogging & Bloggers", color: "blue" }, // This is blue in col 3
  { text: "Full stack Development", color: "yellow" },
  { text: "Ads Psychology", color: "blue" },
  { text: "Mock Interviews", color: "yellow" },
];

export function LearningSection() {
  return (
    <section className="py-12 md:py-8 lg:py-8 bg-white"> {/* Or bg-gray-50 for slight contrast */}
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
          What will you learn?
        </h2>
        {/* Section Subtitle */}
        <p className="text-lg text-center text-muted-foreground mb-8 md:mb-12">
          Learn to Become a Professional.
        </p>

        {/* Grid for Learning Topics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
          {learningTopics.map((topic, index) => (
            <div
              key={index}
              className={`
                flex items-center p-3 rounded-lg shadow-sm transition-all duration-200 ease-in-out transform hover:scale-[1.02] hover:shadow-md
                ${
                  topic.color === 'yellow'
                    ? 'bg-amber-400 text-gray-900' // Using amber for a slightly richer yellow
                    : 'bg-blue-900 text-white' // Using a dark blue
                }
              `}
            >
              <CheckCircle2
                className={`w-5 h-5 flex-shrink-0 mr-2.5 ${
                  topic.color === 'yellow' ? 'text-gray-800' : 'text-blue-300' // Adjust icon color for contrast
                }`}
                aria-hidden="true"
              />
              <span className="font-medium text-sm leading-snug">{topic.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

