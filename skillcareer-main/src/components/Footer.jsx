"use client";

import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Map, ArrowRight } from 'lucide-react';
import { FaLinkedinIn, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

// --- Configuration ---
const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blogs" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Courses",
    links: [
      { label: "Web Development", href: "/web-development-course" },
      { label: "Digital Marketing", href: "/digital-marketing-course" },
      { label: "Full Stack Dev", href: "/web-development-course" },
      { label: "Finance Course", href: "/finance-course" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
      { label: "Resource Guides", href: "/resources" },
      { label: "FAQs", href: "/faq" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com/company/skillcareer" },
  { label: "Twitter", icon: FaTwitter, href: "https://twitter.com/skillcareer_edu" },
  { label: "Facebook", icon: FaFacebook, href: "https://facebook.com/skillcareer.in/" },
  { label: "Instagram", icon: FaInstagram, href: "https://instagram.com/skillcareer.in" },
];

const currentYear = new Date().getFullYear();

export default function FooterEnhancedLight() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter submitted:", e.target.email.value);
    e.target.reset();
  };

  return (
    <footer className="bg-[#f8f9fc] border-t border-slate-200 text-slate-700">

      {/* ── TOP SECTION ─────────────────────────────────── */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* ── Col 1: Brand + Address (span 3) ── */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center" aria-label="SkillCareer Home">
              <Image
                src="/logo.png"
                alt="SkillCareer"
                width={140}
                height={36}
                priority
                className="h-14 w-auto"
              />
            </Link>

            <p className="text-sm text-slate-500 leading-relaxed">
              Empowering individuals with in-demand tech skills for a successful career transition.
            </p>

            {/* Social row */}
            <div className="flex gap-2 pt-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                  aria-label={link.label}
                >
                  <link.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Company links (span 2) ── */}
          <div className="lg:col-span-2">
            <h5 className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2">
              Company
            </h5>
            <ul className="space-y-3">
              {footerSections[0].links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group text-sm text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Courses links (span 2) ── */}
          <div className="lg:col-span-2">
            <h5 className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2">
              Courses
            </h5>
            <ul className="space-y-3">
              {footerSections[1].links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group text-sm text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Resources links (span 2) ── */}
          <div className="lg:col-span-2">
            <h5 className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2">
              Resources
            </h5>
            <ul className="space-y-3">
              {footerSections[2].links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group text-sm text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 5: Newsletter (span 3) ── */}
          <div className="lg:col-span-3">
            <h5 className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2">
              Newsletter
            </h5>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              Get the latest career tips and course updates directly in your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="h-10 text-sm bg-white border-slate-200 focus-visible:ring-blue-500 rounded-lg"
              />
              <Button
                type="submit"
                size="sm"
                className="h-10 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex-shrink-0"
              >
                <Send className="h-3.5 w-3.5" />
              </Button>
            </form>

            {/* Address card */}
            <div className="mt-5 flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-100 shadow-sm">
              <div className="flex-shrink-0 mt-0.5 bg-indigo-50 p-2 rounded-lg">
                <MapPin className="h-4 w-4 text-indigo-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Headquarters</p>
                <p className="text-xs text-slate-700 font-medium leading-relaxed mb-1.5">
                  D-50/F, Kanwar Singh Building, Chhattarpur Enclave, New Delhi-110074
                </p>
                <a
                  href="https://www.google.com/maps/place/28%C2%B030'06.4%22N+77%C2%B011'06.0%22E/@28.501772,77.1824231,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.501772!4d77.184998?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <Map className="h-3 w-3" /> View on Map
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM CONTACT BAR ──────────────────────────── */}
      <div className="border-t border-slate-200 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Left: contact pills */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Email */}
              <a
                href="mailto:info@skillcareer.in"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors group"
              >
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600">
                  <Mail className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-semibold text-blue-700 group-hover:text-blue-900">
                  info@skillcareer.in
                </span>
              </a>

              {/* Phone 1 */}
              <a
                href="tel:+916366666760"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-green-50 border border-green-100 hover:bg-green-100 transition-colors group"
              >
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600">
                  <Phone className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-semibold text-green-700 group-hover:text-green-900">
                  +91 6366666760
                </span>
              </a>

              {/* Phone 2 */}
              <a
                href="tel:+917055275529"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-green-50 border border-green-100 hover:bg-green-100 transition-colors group"
              >
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600">
                  <Phone className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-semibold text-green-700 group-hover:text-green-900">
                  +91 7055275529
                </span>
              </a>

              {/* Address pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-indigo-50 border border-indigo-100">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-600">
                  <MapPin className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-semibold text-indigo-700">
                  Chhattarpur Enclave, New Delhi-110074
                </span>
              </div>
            </div>

            {/* Right: copyright + legal */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-slate-400">
              <p>
                © {currentYear}{" "}
                <span className="font-bold text-slate-600">SkillCareer</span>. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link href="/privacy-policy" className="hover:text-slate-700 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="hover:text-slate-700 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}