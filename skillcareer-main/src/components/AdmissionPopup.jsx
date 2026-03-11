// src/components/AdmissionPopup.jsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // <-- Import for App Router
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Percent, X } from 'lucide-react';

// Define a key for session storage to track if popup was shown
const POPUP_SHOWN_KEY = 'admissionPopupShown_v1'; // Increment version if you change the promo
const EXCLUDED_PATH = '/join-course-today'; // Path to exclude the popup on
const POPUP_DELAY = 2000; // ms delay before showing

const AdmissionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // <-- Get current path (App Router)

  // Effect to trigger the popup visibility based on path and session
  useEffect(() => {
    // 1. Check if the current path is the excluded one
    if (pathname === EXCLUDED_PATH) {
      // console.log("Popup excluded on this path:", pathname); // Optional Debugging
      setIsOpen(false); // Ensure it's closed if navigation happens
      return; // Don't proceed further on the excluded path
    }

    // 2. Check if the popup has already been shown in this session
    const hasShown = sessionStorage.getItem(POPUP_SHOWN_KEY);
    // console.log("Popup check - Path:", pathname, "Has Shown:", hasShown); // Optional Debugging

    if (!hasShown) {
      // 3. Show the popup after a delay if not shown and not excluded path
      const timer = setTimeout(() => {
        // console.log("Popup timer fired - Opening popup"); // Optional Debugging
        setIsOpen(true);
        sessionStorage.setItem(POPUP_SHOWN_KEY, 'true');
      }, POPUP_DELAY);

      // Cleanup timer on component unmount or if path changes before timer fires
      return () => clearTimeout(timer);
    }

    // Explicitly return undefined if no cleanup needed for this path/condition
    return undefined;

  }, [pathname]); // Re-run the effect if the pathname changes

  // Effect to handle background scroll lock
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow; // Restore original
    }
    // Cleanup function restores original overflow on unmount or when isOpen changes
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]); // Only depends on isOpen state

  // If the component shouldn't be open based on state, render nothing
  // (The Dialog component handles visibility based on the `open` prop)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="sm:max-w-md md:max-w-lg lg:max-w-xl p-0 overflow-hidden border-none shadow-2xl rounded-xl bg-gradient-to-br from-blue-50 via-white to-purple-50"
        // Optional: Prevent closing on outside click if desired
        // onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="p-6 pb-4 text-center space-y-2 relative">
          {/* Default Shadcn close button is usually present unless explicitly hidden */}
          {/* If you need a custom one: */}
          <DialogClose asChild>
             {/* <button
                 className="absolute top-3 right-3 rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 z-50"
                 aria-label="Close"
               >
                 <X className="h-5 w-5" />
             </button> */}
          </DialogClose>

          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              LIVE NOW! 🔥
            </span>
             <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
              LIMITED TIME!
            </span>
          </div>
          <DialogTitle className="text-2xl inline-flex items-center justify-center sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ADMISSIONS OPEN!
          </DialogTitle>
           <DialogDescription className="text-base text-slate-600 max-w-sm mx-auto pt-1">
             Enroll now and get an exclusive <strong className="text-blue-600">50% discount</strong> on ALL our industry-leading courses! 🚀
           </DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-6 text-center">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group px-8 py-3 rounded-lg"
            onClick={() => setIsOpen(false)} // Close popup on button click
            asChild
          >
             <Link href="/courses"> {/* Link to general courses or specific offer page */}
              <Percent className="mr-2 h-5 w-5 animate-bounce group-hover:animate-none" /> Claim Your 50% Discount NOW!
            </Link>
          </Button>
           <p className="text-xs text-slate-500 mt-3">
             Offer ends soon. Don't miss out!
           </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdmissionPopup;


