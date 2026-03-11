// src/components/WhatsAppButton.jsx
"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=7055275529&text=Hi+SkillCareer+Team%2C&type=phone_number&app_absent=0";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SkillCareer on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-15 left-5 z-[998] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      // Note: z-index is z-[998] to be potentially under PhoneButton if they overlapped, though they won't here.
      // Or make PhoneButton z-[998] and WhatsAppButton z-[999] if you want WhatsApp definitively on top in z-axis.
      // Since they don't overlap vertically with this setup, the exact z-ordering between them is less critical as long as they are above other page content.
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;