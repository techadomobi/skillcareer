// components/ClientLogos.jsx
import React from 'react';

const clientLogos = [
  { name: "ACKO", url: "/acko.png" },
  { name: "Aditya Birla Group", url: "/phone.jpg" },
  { name: "Adomobi", url: "/myntr.png" },
  { name: "Amazon", url: "/amazon-logo.png" },
  { name: "Adidas", url: "/adidas-removebg-preview.png" },
  { name: "Blinkit", url: "/blinkit_logo_web.webp" },
  { name: "Frank", url: "/PAYTM.NS_BIG.png" },
  { name: "Hexamobi", url: "/flipkartlogo.png" },
  { name: "Juspay", url: "/oyo-rooms-logo.png" },
  { name: "OnTaxCo", url: "/urban-company-logo.png" },
  { name: "Primary", url: "/primary-logo.svg" },
  // { name: "Razorpay", url: "rozarpay.webp" },
  { name: "Adani", url: "/adan.png" },
  { name: "Google", url: "/Googlee.png" },
  { name: "Meesho", url: "/meesho.png" },
  { name: "Jio", url: "/jio.webp" },
  { name: "Book", url: "/Makemy.webp" },
  { name: "Disnep", url: "/Disney.svg" },
  // { name: "zomato", url: "zomata.png" },
  { name: "swiggy", url: "/swiggy.png" },
  // { name: "hdfc", url: "hdfc.jpeg" },

];

const ClientLogos = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Our Corporate Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Over 1000+ freshers secured their first job with SkillCareer certifications, 
            and 900+ trainees achieved significant salary increases.
          </p>
        </div>
        
        {/* Logos Marquee (auto-scroll like course pages) */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent" />

          <div className="flex gap-10 py-8 px-6 w-max animate-scroll-left motion-reduce:animate-none">
            {clientLogos
              .concat(clientLogos)
              .map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex items-center justify-center h-14 w-36 sm:w-40 md:w-44 lg:w-48"
                >
                  <img
                    src={logo.url}
                    alt={`${logo.name} logo`}
                    loading="lazy"
                    className="max-h-10 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
