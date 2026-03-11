// components/ClientLogos.jsx
import React from 'react';

const clientLogos = [
  { name: "ACKO", url: "acko.png" },
  { name: "Aditya Birla Group", url: "phone.jpg" },
  { name: "Adomobi", url: "myntr.png" },
  { name: "Amazon", url: "amazon-logo.png" },
  { name: "Adidas", url: "adidas-removebg-preview.png" },
  { name: "Blinkit", url: "blinkit_logo_web.webp" },
  { name: "Frank", url: "PAYTM.NS_BIG.png" },
  { name: "Hexamobi", url: "flipkartlogo.png" },
  { name: "Juspay", url: "oyo-rooms-logo.png" },
  { name: "OnTaxCo", url: "urban-company-logo.png" },
  { name: "Primary", url: "primary-logo.svg" },
  // { name: "Razorpay", url: "rozarpay.webp" },
  { name: "Adani", url: "adan.png" },
  { name: "Google", url: "Googlee.png" },
  { name: "Meesho", url: "meesho.png" },
  { name: "Jio", url: "jio.webp" },
  { name: "Book", url: "Makemy.webp" },
  { name: "Disnep", url: "Disney.svg" },
  // { name: "zomato", url: "zomata.png" },
  { name: "swiggy", url: "swiggy.png" },
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
        
        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clientLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img 
                src={logo.url} 
                alt={`${logo.name} logo`} 
                className="h-20 object-contain filter  hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;