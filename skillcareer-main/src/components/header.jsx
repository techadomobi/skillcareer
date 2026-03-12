// src/components/Header.jsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'; // Import the next/image component
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, Menu, X } from "lucide-react"; // Removed GraduationCap
import { cn } from "@/lib/utils"; // Assuming you have this utility

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // Optional: Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup scroll listener and reset body overflow on unmount
    return () => {
        window.removeEventListener("scroll", handleScroll);
        document.body.style.overflow = ''; // Ensure overflow is reset
    };
  }, [isMobileMenuOpen]);

  // --- Navigation Data ---
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/job-training-course", label: "Training" },
    {
      label: "Courses",
      isDropdown: true,
      href: "/courses", // Your courses overview page
      items: [
       
        { href: "/digital-marketing-course", label: "Digital Marketing" },
        { href: "/web-development-course", label: "Web Development" },
        { href: "/full-stack-development-course", label: "Full Stack Development" },
        { href: "/finance-course", label: "Finance Course" },
        { href: "/accounting-course", label: "Accounting Course" },

        // { href: "/courses/all", label: "View All Courses", isPrimary: true },
      ],
    },
    { href: "#", label: "Resources" },
    { href: "/center", label: "Centers" },
    { href: "/blog", label: "Blogs" },
    { href: "/more-courses", label: "More-courses" },

  ];

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false); // Close menu when a link is clicked
  };

  // --- Desktop Nav Rendering (Option A: Separate Link/Trigger) ---
  const renderDesktopNavLinks = () => (
    navItems.map((item) => (
      item.isDropdown ? (
        <div key={item.label} className="flex items-center group"> {/* Use a div wrapper */}
          {/* Link for the main text */}
          <Button
            variant="ghost"
            asChild
            // Apply hover styles based on group hover for a combined effect
            className="text-sm font-medium text-gray-600 group-hover:text-blue-600 px-3 py-2 rounded-r-none h-9"
          >
            {/* Ensure item.href exists before creating Link */}
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </Button>
          {/* Dropdown for the chevron */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                // Apply hover styles based on group hover
                className="h-9 w-7 text-gray-600 group-hover:text-blue-600 group-hover:bg-gray-100 rounded-l-none"
                aria-label={`Open ${item.label} menu`}
              >
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-white shadow-lg rounded-lg border border-gray-200/80 mt-1">
                {item.items.map((subItem, index) => (
                    <React.Fragment key={subItem.label}>
                      {subItem.isPrimary && index > 0 && <DropdownMenuSeparator className="bg-gray-200"/> }
                      <DropdownMenuItem asChild>
                        <Link href={subItem.href} className={`block text-sm cursor-pointer px-3 py-2 rounded-md transition-colors hover:bg-gray-100 ${subItem.isPrimary ? 'font-semibold text-blue-600 hover:text-blue-700' : 'text-gray-700 hover:text-gray-900'}`}>
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    </React.Fragment>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
         // Non-dropdown items remain the same
        <Button
          variant="ghost"
          asChild
          key={item.label}
          className={`text-sm font-medium px-3 py-2 ${item.href === '/' ? 'text-blue-600 hover:text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      )
    ))
  );

  // --- Mobile Nav Rendering (Link main text, Chevron triggers details) ---
   const renderMobileNavLinks = () => (
    navItems.map((item) => (
      item.isDropdown ? (
         <details key={item.label} className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">
               {/* Link the label */}
               {item.href ? (
                  <Link href={item.href} onClick={handleMobileLinkClick} className="text-sm font-medium grow hover:text-blue-600 mr-2">
                     {item.label}
                  </Link>
               ) : (
                  <span className="text-sm font-medium grow mr-2">{item.label}</span>
               )}
               {/* Keep chevron separate for expanding */}
               <ChevronDown className="h-4 w-4 shrink-0 transition duration-300 group-open:rotate-180" />
            </summary>
            {/* Sub-items remain the same */}
            <nav className="mt-1 flex flex-col px-4 ml-4 border-l border-gray-200">
                {item.items.map((subItem) => (
                    <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={handleMobileLinkClick} // Close menu on click
                        className={`flex items-center rounded-lg px-4 py-2 text-sm hover:bg-gray-100 ${subItem.isPrimary ? 'font-semibold text-blue-600 hover:text-blue-700' : 'text-gray-600 hover:text-gray-800'}`}
                    >
                        {subItem.label}
                    </Link>
                ))}
            </nav>
         </details>
      ) : (
        // Non-dropdown items remain the same
        <Link
            key={item.label}
            href={item.href}
            onClick={handleMobileLinkClick} // Close menu on click
            className={`block rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 ${item.href === '/' ? 'text-blue-600 hover:text-blue-700' : 'text-gray-700 hover:text-gray-900'}`}
        >
            {item.label}
        </Link>
      )
    ))
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 bg-gradient-to-br from-blue-50 via-blue-50 to-white", // Always white bg
        // isScrolled ? "shadow-sm border-b border-gray-200/80" : "border-b border-transparent", 
        isMobileMenuOpen ? "shadow-md" : "" // Keep shadow if menu is open, even if not scrolled
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* ====================== */}
          {/* === LOGO SECTION === */}
          {/* ====================== */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="SkillCareer Home">
             <Image
               src="/logo.png" // <-- REPLACE with your logo path in /public (e.g., /logo.svg)
               alt="SkillCareer – Online Learning Platform for Students" // <-- REPLACE with your actual company name
               width={140} // <-- ADJUST width based on your logo's aspect ratio & desired display height
               height={32} // <-- ADJUST height for desired display size in header (e.g., 32, 36, 40)
               priority // Prioritize loading the logo
               className="h-20 w-auto" // Control display height (e.g., h-8, h-9), width adjusts automatically
             />
          </Link>
          {/* ====================== */}
          {/* === END LOGO SECTION === */}
          {/* ====================== */}


          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-grow items-center justify-center space-x-1 lg:space-x-2">
            {renderDesktopNavLinks()}
          </nav>

          {/* Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
             <Button variant="ghost" size="sm" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4">
                Log in
             </Button>
            <Link href="/enroll-now" className="flex-shrink-0">
            <Button
                size="sm"
                className="rounded-full px-5 py-2 bg-blue-600 text-white hover:bg-blue-700 text-sm font-semibold shadow-sm transition-colors"
            >
              Join Course Today!
            </Button>
              </Link>
          </div>

          {/* --- Mobile Menu Button & Container --- */}
          <div className="md:hidden flex items-center">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle state
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} // Accessibility
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </Button>
          </div>
        </div>

         {/* --- Mobile Menu Panel (Inline) --- */}
        <div
          className={cn(
            "absolute left-0 top-full w-full overflow-hidden bg-white border-t border-gray-200/80 shadow-md transition-all duration-300 ease-in-out md:hidden",
            isMobileMenuOpen
              ? "max-h-[calc(100vh-4rem)] opacity-100" // Use max-height for transition, limit height
              : "max-h-0 opacity-0"
          )}
        >
            <div className="flex flex-col space-y-1 p-4">
                {renderMobileNavLinks()}
                <Separator className="my-4 bg-gray-200"/>
                <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-100"
                        onClick={handleMobileLinkClick} // Close menu on click
                    >
                        Log in
                    </Button>
                    <Link href="/enroll-now" className="flex-shrink-0">
                    <Button
                        className="w-full bg-blue-600 text-white hover:bg-blue-700"
                        onClick={handleMobileLinkClick} // Close menu on click
                    >
                        Join Today
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
        {/* --- End Mobile Menu Panel --- */}

      </div>
    </header>
  );
}
