// app/contact/layout.js
import React from 'react';

// SEO Metadata for the /contact route
// This will set the <title> and <meta> tags in the <head> of the HTML
export const metadata = {
  // Consider adding your Institution Name for branding
  title: "Contact Us | Get in Touch for Inquiries & Support",
  description: "Have questions about our courses, admissions, or need support? Contact us via phone, email, or our online form. Find our address and location details here.",
  keywords: [
    "Contact Us",
    "Get in Touch",
    "Contact Information",
    "Support",
    "Inquiries",
    "Admissions Contact",
    "Phone Number",
    "Email Address",
    "Contact Form",
    "Location",
    "Address",
    // Add your institution name, e.g., "SkillCircle Contact"
    "Training Institute Contact",
    "Customer Service",
    "Help Center"
  ],
  // Optional: Add Open Graph or other specific meta tags here if needed
  // openGraph: {
  //   title: 'Contact Us | Get in Touch Today',
  //   description: 'Reach out for course inquiries, admissions, and support...',
  //   // Consider adding location data if relevant for local SEO
  //   // latitude: '...',
  //   // longitude: '...',
  //   // streetAddress: '...',
  //   // locality: '...',
  //   // region: '...',
  //   // postalCode: '...',
  //   // countryName: '...',
  //   // email: '...',
  //   // phoneNumber: '...',
  // },
};


export default function ContactLayout({ children }) {
  return (
    <>
      {/* You might have a standard header, or a specific one for the contact page */}
      {/* e.g., <ContactPageHeader /> */}

      {/* The actual page content (contact form, map, details) will be rendered here */}
      <main>{children}</main>

      {/* Standard footer likely applies here */}
    </>
  );
}