// src/app/layout.js

import Script from 'next/script'; // Import the next/script component
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from '@/components/WhatsAppButton';
import AdmissionPopup from "@/components/AdmissionPopup";
import PhoneButton from '@/components/PhoneButton';
import GoogleAdSense from '@/components/GoogleAdSense';
// No GoogleAnalytics component import needed for this simple version

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- Metadata (Keep your updated SEO data) ---
export const metadata = {
  title: "SkillCareer – Digital Marketing & Web Development Institute Delhi",
  description: "SkillCareer is a Digital Marketing & Web Development Institute in Delhi offering practical, career-focused training and courses.",
  keywords: [
    "Best Digital Marketing Institute in Delhi",
    "Best Web Development Institute in Delhi",
    "Digital Marketing Course in Delhi",
    "Web Development Course in Delhi",
    "Digital Marketing Training with Job Guarantee",
    "Web Development Training with Job Guarantee",
    "Online & Offline Digital Marketing Course",
    "Online & Offline Web Development Course",
    "Digital Marketing Institute with 100% Placement",
    "Web Development Course with 100% Job Assistance",
    "Learn Digital Marketing in Delhi",
    "Learn Web Development in Delhi",
    "Industry Expert Digital Marketing Training",
    "Industry Expert Web Development Training"
  ],
};

// --- End Metadata ---

export default function RootLayout({ children }) {
  const GA_ID = 'G-V76KS02VD5'; // Hardcode the ID here

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* --- Google Analytics Scripts (Simplified) --- */}
        {/* Load the main gtag library */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        {/* Initialize gtag and set default config (sends initial page_view here) */}
        <Script
          id="gtag-init-simple" // Use a different ID if you had the other version before
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_ID}');
            `,
          }}
        />
        {/* --- End Google Analytics Scripts --- */}

        {children}
        <GoogleAdSense/>
        <WhatsAppButton />
        <PhoneButton/>
        {/* <AdmissionPopup/> */}
      </body>
    </html>
  );
}