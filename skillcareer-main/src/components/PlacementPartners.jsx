// components/PlacementPartners.jsx
"use client";

import React, { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const firstRowLogos = [
    { name: "OYO", src: "/oyo-rooms-logo.png" },
    { name: "Resonance", src: "/flipkartlogo.png" },
    { name: "Commission", src: "/v-commission-logo.png" },
    { name: "Urban Company", src: "/urban-company-logo.png" },
    { name: "Paytm", src: "/PAYTM.NS_BIG.png" },
    { name: "Tech2Globe", src: "/phone.jpg" },
    // Add more logos as needed
];

const secondRowLogos = [
    { name: "ACKO", src: "/acko.png" },
    { name: "Aditya Birla Group", src: "/my.png" },
    { name: "Amazon", src: "/amazon-logo.png" },
    { name: "Adidas", src: "/adidas-removebg-preview.png" },
    { name: "Blinkit", src: "/blinkit_logo_web.webp" },
    { name: "Scaler", src: "/primary-logo.svg" },
    // Add more logos as needed
];

// --- Configuration ---
const SCROLL_SPEED = 0.7; // Adjust speed (pixels per frame) - lower is slower
const LOGO_HEIGHT_CLASS = "h-14"; // Or "max-h-16" for flexibility
const LOGO_WIDTH_CLASS = "w-32";  // Or remove if using max-h and object-contain is enough
const LOGO_GAP_CLASS = "gap-12"; // Corresponds to px-6 on inner divs (gap/2)
const LOGO_MARGIN_X_CLASS = "px-6"; // Space before/after logos within the flex container


const PlacementPartners = () => {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const firstRequestRef = useRef();
  const secondRequestRef = useRef();
  
  // Position tracking for debugging and ensuring movement
  const positionRef = useRef({ first: 0, second: 0 });

  // Dedicated animation function for first row
  const animateFirstRow = useCallback(() => {
    if (firstRowRef.current) {
      const scrollWidth = firstRowRef.current.scrollWidth;
      const elementWidth = scrollWidth / 2;
      
      // Update position directly with increment
      positionRef.current.first += SCROLL_SPEED;
      
      // Check if we need to reset
      if (positionRef.current.first >= elementWidth) {
        positionRef.current.first -= elementWidth;
      }
      
      // Apply the position
      firstRowRef.current.scrollLeft = positionRef.current.first;
    }
    
    firstRequestRef.current = requestAnimationFrame(animateFirstRow);
  }, []);

  // Dedicated animation function for second row
  const animateSecondRow = useCallback(() => {
    if (secondRowRef.current) {
      const scrollWidth = secondRowRef.current.scrollWidth;
      const elementWidth = scrollWidth / 2;
      
      // Update position directly with decrement
      positionRef.current.second -= SCROLL_SPEED;
      
      // Check if we need to reset
      if (positionRef.current.second <= 0) {
        positionRef.current.second += elementWidth;
      }
      
      // Apply the position
      secondRowRef.current.scrollLeft = positionRef.current.second;
    }
    
    secondRequestRef.current = requestAnimationFrame(animateSecondRow);
  }, []);

  // Effect to start and stop animation
  useEffect(() => {
    // Important: Initialize both positions
    if (firstRowRef.current && secondRowRef.current) {
      positionRef.current.first = 0;
      positionRef.current.second = secondRowRef.current.scrollWidth / 2;
      
      // Ensure initial positions are set
      firstRowRef.current.scrollLeft = positionRef.current.first;
      secondRowRef.current.scrollLeft = positionRef.current.second;
    }

    // Start animations
    firstRequestRef.current = requestAnimationFrame(animateFirstRow);
    secondRequestRef.current = requestAnimationFrame(animateSecondRow);

    // Cleanup function
    return () => {
      if (firstRequestRef.current) {
        cancelAnimationFrame(firstRequestRef.current);
      }
      if (secondRequestRef.current) {
        cancelAnimationFrame(secondRequestRef.current);
      }
    };
  }, [animateFirstRow, animateSecondRow]);

  // Combine logos for rendering duplicates easily
  const renderLogos = (logos, prefix) => (
    <>
      {/* Original Set */}
      <div className={`flex ${LOGO_GAP_CLASS} items-center ${LOGO_MARGIN_X_CLASS}`}>
        {logos.map((logo, index) => (
          <div key={`${prefix}-${index}`} className={`flex-shrink-0 ${LOGO_HEIGHT_CLASS} ${LOGO_WIDTH_CLASS} relative`}>
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority={index < 5}
            />
          </div>
        ))}
      </div>
      {/* Duplicate Set */}
      <div className={`flex ${LOGO_GAP_CLASS} items-center ${LOGO_MARGIN_X_CLASS}`} aria-hidden="true">
        {logos.map((logo, index) => (
          <div key={`${prefix}-dup-${index}`} className={`flex-shrink-0 ${LOGO_HEIGHT_CLASS} ${LOGO_WIDTH_CLASS} relative`}>
            <Image
              src={logo.src}
              alt="" // Alt empty for duplicate decorative images
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          1000+ Placement Partners
        </h2>

        {/* First row - scrolling left */}
        <div className="relative mb-12">
          <div
            ref={firstRowRef}
            className="flex overflow-x-hidden whitespace-nowrap"
          >
            {renderLogos(firstRowLogos, 'first')}
          </div>
        </div>

        {/* Second row - scrolling right */}
        <div className="relative">
          <div
            ref={secondRowRef}
            className="flex overflow-x-hidden whitespace-nowrap"
          >
            {renderLogos(secondRowLogos, 'second')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementPartners;