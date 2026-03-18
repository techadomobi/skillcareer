"use client";

import ClientLogos from "@/components/ClientLogos";
import { ContactForm } from "@/components/ContactForm";
import { CourseInfo } from "@/components/CourseInfo";
import Header from "@/components/header";
import { LearningSection } from "@/components/LearningSection";
import { useEffect, useRef } from "react";
import { CheckCircle2, ShieldCheck, Sparkles, Users2 } from "lucide-react";

export default function EnrollNowPage() {
  const contactFormRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 1024;

      if (isMobile && contactFormRef.current) {
        const timer = setTimeout(() => {
          contactFormRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 500);

        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_24%),radial-gradient(circle_at_82%_10%,_rgba(79,70,229,0.16),_transparent_24%),linear-gradient(180deg,#eff6ff_0%,#ffffff_58%,#f8fafc_100%)] px-0 pt-10">
        <div className="absolute left-10 top-16 h-64 w-64 rounded-full bg-cyan-100 opacity-70 blur-3xl animate-blob" />
        <div className="absolute right-10 top-32 h-72 w-72 rounded-full bg-indigo-100 opacity-70 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-emerald-100 opacity-70 blur-3xl animate-blob animation-delay-4000" />

        <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Premium UI",
                text: "A cleaner enrollment journey with stronger hierarchy and modern motion.",
              },
              {
                icon: Users2,
                title: "Human Guidance",
                text: "Admissions is positioned as a real consultation, not a generic form fill.",
              },
              {
                icon: ShieldCheck,
                title: "Clear Value",
                text: "Content now explains course fit, process, benefits, and what happens next.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 items-start gap-8 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-16">
            <div className="order-1 animate-fadeIn">
              <CourseInfo />
            </div>
            <div
              ref={contactFormRef}
              className="order-2 animate-fadeInUp lg:sticky lg:top-6"
              style={{ animationDelay: "300ms" }}
            >
              <ContactForm />
            </div>
          </div>

          <div className="grid gap-5 pb-12 md:grid-cols-3 lg:pb-16">
            {[
              "Request details in under a minute",
              "Receive batch timing and fee guidance",
              "Start with a clear, job-focused roadmap",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[24px] border border-slate-200 bg-white/85 px-5 py-4 shadow-sm backdrop-blur">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ClientLogos />
      <LearningSection />
    </div>
  );
}
