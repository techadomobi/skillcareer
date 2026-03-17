import React from 'react';
import { CheckCircle2 } from 'lucide-react'; // Using a filled checkmark icon like the image

const learningTopics = [
  { text: "Search Engine Optimization", tone: "amber" },
  { text: "Social Media Marketing", tone: "blue" },
  { text: "Facebook & Instagram Ads", tone: "emerald" },
  { text: "Google Ads", tone: "slate" },
  { text: "Website Designing", tone: "amber" },
  { text: "Website Development", tone: "blue" },
  { text: "Graphic Designing", tone: "emerald" },
  { text: "Video Editing", tone: "slate" },
  { text: "Influencer Marketing", tone: "amber" },
  { text: "E-Commerce Marketing", tone: "blue" },
  { text: "Online Reputation Management", tone: "emerald" },
  { text: "Blogging & Bloggers", tone: "slate" },
  { text: "Full stack Development", tone: "amber" },
  { text: "Ads Psychology", tone: "blue" },
  { text: "Mock Interviews", tone: "emerald" },
];

const toneStyles = {
  amber: {
    card: "bg-white text-slate-900",
    bar: "bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600",
    chip: "bg-amber-500/15 text-amber-700",
    ring: "ring-1 ring-slate-200/70",
    shadow: "shadow-[0_18px_34px_-26px_rgba(15,23,42,0.35)]",
  },
  blue: {
    card: "bg-white text-slate-900",
    bar: "bg-gradient-to-b from-blue-500 via-blue-600 to-indigo-700",
    chip: "bg-blue-500/15 text-blue-700",
    ring: "ring-1 ring-slate-200/70",
    shadow: "shadow-[0_18px_34px_-26px_rgba(15,23,42,0.35)]",
  },
  emerald: {
    card: "bg-white text-slate-900",
    bar: "bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600",
    chip: "bg-emerald-500/15 text-emerald-700",
    ring: "ring-1 ring-slate-200/70",
    shadow: "shadow-[0_18px_34px_-26px_rgba(15,23,42,0.35)]",
  },
  slate: {
    card: "bg-white text-slate-900",
    bar: "bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900",
    chip: "bg-slate-500/15 text-slate-700",
    ring: "ring-1 ring-slate-200/70",
    shadow: "shadow-[0_18px_34px_-26px_rgba(15,23,42,0.35)]",
  },
};

const blockSizes = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
];

export function LearningSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-10 lg:py-12 bg-slate-50">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-3 tracking-tight flow-underline">
          What will you learn?
        </h2>
        {/* Section Subtitle */}
        <p className="text-lg text-center text-slate-600 mb-8 md:mb-12">
          Learn to Become a Professional.
        </p>

        {/* Text-based Learning Topics */}
        <div className="max-w-4xl mx-auto bg-white/90 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-slate-900">You will cover:</span>{" "}
            {learningTopics.map((topic, index) => (
              <span key={topic.text} className="inline">
                <span className="text-slate-900 font-medium">{topic.text}</span>
                {index < learningTopics.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {learningTopics.slice(0, 8).map((topic) => (
              <span
                key={`${topic.text}-pill`}
                className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-semibold"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                {topic.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
