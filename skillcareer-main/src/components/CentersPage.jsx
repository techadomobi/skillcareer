// components/CentersPage.jsx
"use client"

import React from 'react'; 
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from "lucide-react";
import Link from 'next/link';


const centersData = [
  {
    id: "delhi-cp",
    name: "Delhi - Connaught Place Center",
    address: "A-12, First Floor, Connaught Place, New Delhi, Delhi 110001",
    city: "New Delhi",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Connaught+Place+New+Delhi", 
    phone: "+91 7055275529",
    email: "info@skillcareer.in", 
    hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    status: "Coming Soon", 
    features: ["Flagship Center", "Metro Connected", "Weekend Batches"],
  },
  {
    id: "delhi-chattarpur",
    name: "Delhi - Chattarpur Center",
    address: "Phase 2, I, 11, Pocket D, Chattarpur Enclave, Delhi 110074",
    city: "New Delhi",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Phase+2,+I,+11,+Pocket+D,+Chattarpur+Enclave,+Delhi+110074", // Replace with specific link
    phone: "+91 63666 66760",
    email: "info@skillcareer.in", 
    hours: "Mon-Sun: 9:00 AM - 9:00 PM",
    status: "Operational",
    features: ["Dedicated Labs", "Near Metro", "Daily Batches"],
  },
  {
    id: "Gurgaon",
    name: "Gurgaon - Sector 14 Center", 
    address: "Sector 14, Gurugram, Haryana 122001",
    city: "Gurgaon",
    mapLink: " https://www.google.com/maps/search/?api=1&query=Sector+14,+Gurugram,+Haryana+122001", // Replace with specific link
    phone: "+91 7055275529",
    email: "info@skillcareer.in", 
    hours: "Mon-Fri: 10:00 AM - 6:00 PM",
    status: "Operational",
    features: ["Corporate Hub", "Easy Access"],
  },
  
];



const CenterCard = ({ center }) => {
  const getStatusBadgeVariant = (status) => {
    switch (status?.toLowerCase()) {
      case 'operational': return 'success'; 
      case 'temporarily closed': return 'warning'; 
      case 'coming soon': return 'info'; 
      default: return 'secondary';
    }
  };

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-shadow duration-300 hover:shadow-lg border border-gray-200 rounded-xl">
    

      <CardHeader className="pt-4 pb-3">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-xl font-semibold text-gray-800">{center.name}</CardTitle>
          {center.status && (
             // Note: Shadcn Badge default variant is 'secondary'. Customize variants in ui/badge.jsx if needed.
             // For now, let's use semantic colors via text/bg classes if variants aren't defined.
            <Badge
                className={`text-xs font-medium px-2.5 py-1 flex-shrink-0
                    ${center.status.toLowerCase() === 'operational' ? 'bg-green-100 text-green-800 border border-green-200' : ''}
                    ${center.status.toLowerCase() === 'temporarily closed' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' : ''}
                    ${center.status.toLowerCase() === 'coming soon' ? 'bg-blue-100 text-blue-800 border border-blue-200' : ''}
                    ${!['operational', 'temporarily closed', 'coming soon'].includes(center.status.toLowerCase()) ? 'bg-gray-100 text-gray-800 border border-gray-200' : ''}
                `}
            >
                {center.status}
            </Badge>
          )}
        </div>
        <CardDescription className="text-sm text-gray-500">{center.city}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-4 pt-2 pb-5 text-sm">
        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <p className="text-gray-700">{center.address}</p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          {center.phone && (
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <a href={`tel:${center.phone}`} className="text-indigo-600 hover:text-indigo-800 hover:underline">
                {center.phone}
              </a>
            </div>
          )}
          {center.email && (
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <a href={`mailto:${center.email}`} className="text-indigo-600 hover:text-indigo-800 hover:underline">
                {center.email}
              </a>
            </div>
          )}
        </div>

        {/* Hours */}
        {center.hours && (
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100 mt-4">
                <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <p className="text-gray-700 font-medium">{center.hours}</p>
            </div>
        )}

        {/* Optional Features */}
        {center.features && center.features.length > 0 && (
          <div className="pt-3">
            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Features</h4>
            <div className="flex flex-wrap gap-2">
              {center.features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs">{feature}</Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      {/* <CardFooter className="pt-4 border-t border-gray-100 bg-gray-50/50">
        <div className="flex justify-end w-full gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href={center.mapLink} target="_blank" rel="noopener noreferrer">
              <Navigation className="h-3.5 w-3.5 mr-1.5" />
              Get Directions
            </a>
          </Button>
          
        </div>
      </CardFooter> */}
    </Card>
  );
};


// Main Page Component
export default function CentersPage() {

 
  // Use hardcoded data for now
  const centers = centersData;

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-indigo-700 bg-indigo-50 border-indigo-200">
            Our Locations
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">
            Find a <span className="text-indigo-600">Training Center</span> Near You
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Visit our state-of-the-art centers for in-person training, counseling, and support. Explore the locations below to find the one most convenient for you.
          </p>
        </div>

        {/* Centers Grid */}
        {centers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {centers.map((center) => (
              <CenterCard key={center.id} center={center} />
            ))}
          </div>
        ) : (
           
           <div className="text-center py-12 px-6 bg-gray-100 rounded-lg">
             <h3 className="text-xl font-semibold text-gray-700 mb-2">No Centers Found</h3>
             <p className="text-gray-500">We currently don&apos;t have any listed centers. Please check back later or contact us for more information.</p>
           </div>
        )}

        {/* Optional: General Contact Info or Map Overview Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-600">Can&apos;t find a center nearby? We also offer comprehensive online courses!</p>
          <Link href="/courses" className=" text-indigo-600 hover:text-indigo-800 font-semibold">
          <Button variant="link" className="mt-2 text-indigo-600">Explore Online Courses <ExternalLink className="h-4 w-4 ml-1" /></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}