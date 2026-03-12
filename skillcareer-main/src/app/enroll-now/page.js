"use client";

import ClientLogos from "@/components/ClientLogos";
import { ContactForm } from "@/components/ContactForm";
import { CourseInfo } from "@/components/CourseInfo";
import Header from "@/components/header";
import { LearningSection } from "@/components/LearningSection";
import { useEffect, useRef } from "react";

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

      <div className="bg-gradient-to-br from-blue-50 via-white to-gray-100 pt-8 px-0 sm:px-0 lg:px-0 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 items-start">
            <div className="order-1 animate-fadeIn">
              <CourseInfo />
            </div>
            <div
              ref={contactFormRef}
              className="order-2 lg:sticky lg:top-4 animate-fadeInUp"
              style={{ animationDelay: "300ms" }}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <ClientLogos />
      <LearningSection />
    </div>
  );
}
