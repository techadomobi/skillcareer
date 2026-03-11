"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { 
    Star, 
    CheckCircle, 
    AlertCircle, 
    Loader2, 
    PartyPopper,
    Megaphone,
    Code,
    Handshake,
    ChevronRight,
    ChevronLeft
} from "lucide-react";

export function ContactForm() {
    // Form field states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [consent, setConsent] = useState(false); // Keep state to track checkbox

    // UI/API states
    const [isLoading, setIsLoading] = useState(false);
    const [formErrorMessage, setFormErrorMessage] = useState("");
    const [showThankYou, setShowThankYou] = useState(false);
    
    // For Our Core Programs section
    const [isMobile, setIsMobile] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderIntervalRef = useRef(null);
    
    const courses = [
      {
        icon: Megaphone,
        title: "Digital Marketing Master",
        description: "Become a sought-after marketer. Master SEO, SEM, Social Media, Content & more.",
        iconColor: "text-blue-600",
        bgColor: "bg-blue-100",
      },
      {
        icon: Code,
        title: "Full-Stack Web Development",
        description: "Build modern web applications. Learn front-end (React, Next.js) & back-end (Node.js, Databases).",
        iconColor: "text-green-600",
        bgColor: "bg-green-100",
      },
      {
        icon: Handshake,
        title: "Affiliate Marketing Expert",
        description: "Learn to build passive income streams by promoting products and earning commissions.",
        iconColor: "text-purple-600",
        bgColor: "bg-purple-100",
      },
    ];
    
    useEffect(() => {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);
      
      return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    useEffect(() => {
      if (isMobile) {
        sliderIntervalRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
        }, 3000); 
      }
      
      return () => {
        if (sliderIntervalRef.current) {
          clearInterval(sliderIntervalRef.current);
        }
      };
    }, [isMobile, courses.length]);

    const goToSlide = (index) => {
      setCurrentSlide(index);
      if (sliderIntervalRef.current) {
        clearInterval(sliderIntervalRef.current);
        sliderIntervalRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
        }, 3000);
      }
    };

    const nextSlide = () => {
      goToSlide(currentSlide === courses.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
      goToSlide(currentSlide === 0 ? courses.length - 1 : currentSlide - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setIsLoading(true);
        setFormErrorMessage("");

        // Basic validation for required fields
        if (!name || !email || !phone) {
            setFormErrorMessage("Name, Email, and Phone are required.");
            setIsLoading(false);
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
             setFormErrorMessage("Please enter a valid email address.");
             setIsLoading(false);
             return;
        }

        // Prepare API Data
        const params = new URLSearchParams();
        params.append('fullName', name);
        params.append('email', email);
        params.append('mobileNumber', phone);
        params.append('additional_text1', message);
        params.append('receivedBy', 'skillcareer.in');
        params.append('country', 'India');
        // Optionally, you can send the consent status to your API if it supports it
        // params.append('consentGiven', consent ? 'true' : 'false');


        // API Call Logic
        try {
            const response = await fetch('https://click.creditsdeal.com/api/leadApi', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params,
            });

            if (!response.ok) {
                let errorDetails = `HTTP error! Status: ${response.status}`;
                 try {
                    const errorData = await response.json();
                    errorDetails = errorData.responseMessage || errorData.message || JSON.stringify(errorData);
                } catch (parseError) {
                    try {
                       const errorText = await response.text();
                       if(errorText) errorDetails = `${errorDetails} - ${errorText}`;
                    } catch(textError) {
                       errorDetails = `${errorDetails} - ${response.statusText || 'Unknown server error'}`;
                    }
                }
                throw new Error(`Submission Failed: ${errorDetails}`);
            }

            const result = await response.json();
            if (result.responseCode === 201 || response.ok) {
                setShowThankYou(true);
                setName(''); setEmail(''); setPhone(''); setMessage(''); setConsent(false); // Reset consent too
            } else {
                 throw new Error(result.responseMessage || 'An unexpected response was received.');
            }

        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown network error occurred.';
            console.error("Form submission error:", err);
            setFormErrorMessage(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    if (showThankYou) {
        return (
            <Card className="w-full max-w-lg shadow-lg border border-gray-200/80 rounded-lg mx-auto bg-white overflow-hidden text-center min-h-[580px] flex flex-col justify-center">
                <div>
                    <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-8 border-b-0">
                         <PartyPopper className="h-16 w-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
                        <CardTitle className="text-2xl font-semibold text-emerald-700">
                            Thank You!
                        </CardTitle>
                        <CardDescription className="text-emerald-600 text-base pt-2">
                            Your details have been submitted successfully.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8">
                        <p className="text-blue-600 text-base font-medium mb-4">
                            Our team will review your request and get back to you shortly via email or phone.
                        </p>
                    </CardContent>
                 </div>
            </Card>
        );
    }

    return (
        <>
            <Card className="w-full max-w-lg shadow-xl border border-gray-200/80 rounded-xl mx-auto bg-white overflow-hidden">
                <CardHeader className="text-left bg-gradient-to-r from-gray-50 to-white px-6 py-6 border-b border-gray-200/80">
                    <CardTitle className="text-2xl font-bold flex items-center gap-2">
                        <Star className="h-7 w-7 text-yellow-400 fill-yellow-400" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Ready to Upskill?
                        </span>
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base pt-1.5">
                        Get course details, fees, and career guidance. Fill the form below!
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-7">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1.5">
                            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                                Full Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="name" placeholder="e.g., Priya Sharma" value={name}
                                onChange={(e) => setName(e.target.value)} required disabled={isLoading}
                                className="focus-visible:ring-blue-500 focus-visible:ring-offset-1"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Email Address <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="email" type="email" placeholder="you@example.com" value={email}
                                onChange={(e) => setEmail(e.target.value)} required disabled={isLoading}
                                className="focus-visible:ring-blue-500 focus-visible:ring-offset-1"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                Mobile Number <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="phone" type="tel" placeholder="+91 98765 43210" value={phone}
                                onChange={(e) => setPhone(e.target.value)} required disabled={isLoading}
                                className="focus-visible:ring-blue-500 focus-visible:ring-offset-1"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                                Your Query (Optional)
                            </Label>
                            <Textarea
                                id="message" placeholder="Any specific questions about courses or timing?"
                                value={message} onChange={(e) => setMessage(e.target.value)}
                                rows={3} disabled={isLoading}
                                className="focus-visible:ring-blue-500 focus-visible:ring-offset-1"
                            />
                        </div>
                        <div className="flex items-start space-x-2.5 pt-1">
                            <Checkbox
                                id="consent" 
                                checked={consent} 
                                onCheckedChange={setConsent}
                                disabled={isLoading} 
                                className="mt-0.5 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 focus-visible:ring-purple-500"
                            />
                            <Label
                                htmlFor="consent"
                                className="text-xs leading-relaxed text-gray-500 cursor-pointer"
                            >
                                I authorise SkillCareer & its partners to contact me via Call, SMS, Email, WhatsApp for info & offers. Opt-out anytime. T&C Apply. (Optional)
                            </Label>
                        </div>

                        {formErrorMessage && (
                            <div
                                className="p-3 rounded-md text-sm flex items-center gap-x-2 border bg-red-50 text-red-700 border-red-200"
                                role="alert"
                            >
                                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                                <span className="flex-grow">{formErrorMessage}</span>
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:from-blue-700 hover:via-purple-700 hover:to-pink-600
                                       text-white text-lg font-bold py-6 px-6 rounded-lg 
                                       focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500
                                       flex items-center justify-center gap-x-2.5 mt-2
                                       disabled:opacity-100 
                                       animate-pulse-cta"
                            disabled={isLoading} // Only disable when loading
                        >
                            {isLoading ? (
                                <> <Loader2 className="h-6 w-6 animate-spin" /> Submitting... </>
                            ) : (
                                <> Request Callback Now <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-200" /> </>
                            )}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-gray-50 border-t border-gray-200/80">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 mb-3 sm:mb-0">
                        <div className="flex items-center space-x-1 text-xs text-gray-600">
                            <svg className="w-3.5 h-3.5" fill="#4285F4" viewBox="0 0 24 24"><path d="M21.35 11.1h-9.35v2.8h5.9c-.3 1.6-1.5 3.4-3.6 3.4-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1c1.1 0 2 .4 2.6 1l2.1-2.1c-1.3-1.2-3.1-2-5.1-2-4.2 0-7.6 3.4-7.6 7.6s3.4 7.6 7.6 7.6c4.4 0 7.2-3.1 7.2-7.4 0-.6-.1-1.1-.2-1.6z"></path></svg>
                            <span>Google</span> <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" /> <span className="font-medium">4.8</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-600">
                            <Star className="w-3.5 h-3.5 text-green-500 fill-green-500" /> <span>Trustpilot</span> <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" /> <span className="font-medium">4.7</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 text-center sm:text-right">We respect your privacy.</p>
                </CardFooter>
            </Card>
            
            {/* Our Core Programs Section (remains the same) */}
            <div className="space-y-5 pt-8 mt-8">
                <h2 className="text-2xl sm:hidden font-bold text-gray-800 mb-4 flex items-center justify-center text-center">
                    <span className="w-10 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                    Our Core Programs
                    <span className="w-10 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full ml-3"></span>
                </h2>
                
                {isMobile ? (
                    <div className="relative">
                        <div className="overflow-hidden rounded-lg">
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {courses.map((course, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-full p-1"
                                    >
                                      <div className="p-4 rounded-lg border border-gray-200 bg-white shadow-sm mx-2">
                                        <div className="flex items-start space-x-3">
                                            <div
                                                className={`flex-shrink-0 w-10 h-10 rounded-full ${course.bgColor} flex items-center justify-center mr-2 mt-1`}
                                            >
                                                <course.icon className={`w-5 h-5 ${course.iconColor}`} aria-hidden="true" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-base text-gray-900">
                                                    {course.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                                                <div className="mt-2 text-blue-600 text-sm font-medium flex items-center hover:underline cursor-pointer">
                                                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <button 
                            className="absolute top-1/2 left-1 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1.5 shadow-md z-10"
                            onClick={prevSlide}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <button 
                            className="absolute top-1/2 right-1 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1.5 shadow-md z-10"
                            onClick={nextSlide}
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                        
                        <div className="flex justify-center mt-4 space-x-2">
                            {courses.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-blue-600 w-5' : 'bg-gray-300 hover:bg-gray-400'}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                       {/* Desktop courses layout was commented out, add back if needed */}
                    </>
                )}
            </div>
        </>
    );
}