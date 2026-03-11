// src/components/PhoneButton.jsx
"use client";

import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const PhoneButton = () => {
  const phoneNumber = "+916366666760";
  const phoneUrl = `tel:${phoneNumber}`;

  return (
    <a
      href={phoneUrl}
      aria-label="Call SkillCareer"
      title="Call Us"
      className="fixed bottom-15 right-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
    >
      <FaPhoneAlt className="h-6 w-6 animate-[shake_1s_infinite]" />
    </a>
  );
};

export default PhoneButton;
