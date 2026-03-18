import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

const learningTopics = [
  "Search Engine Optimization",
  "Social Media Marketing",
  "Facebook & Instagram Ads",
  "Google Ads",
  "Website Designing",
  "Website Development",
  "Graphic Designing",
  "Video Editing",
  "Influencer Marketing",
  "E-Commerce Marketing",
  "Online Reputation Management",
  "Blogging & Bloggers",
  "Full Stack Development",
  "Ads Psychology",
  "Mock Interviews",
];

export function LearningSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef6ff_100%)] py-14 md:py-16">
      <div className="pointer-events-none absolute -left-10 top-10 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Learning outcomes
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            What will you learn?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Explore a broad set of practical skills designed to make you employable and confident.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.45)] backdrop-blur sm:p-8">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            <span className="font-semibold text-slate-950">You will cover:</span>{" "}
            {learningTopics.map((topic, index) => (
              <span key={topic} className="inline">
                <span className="font-medium text-slate-900">{topic}</span>
                {index < learningTopics.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {learningTopics.map((topic) => (
              <span key={topic} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
