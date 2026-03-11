// components/Testimonials.jsx
import React from 'react';
import { Star, Quote } from 'lucide-react';

// Placeholder testimonial data
const testimonialsData = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Digital Marketing Specialist",
    course: "Digital Marketing Masterclass",
    quote: "The course structure was excellent, and the placement support team helped me land my dream job within weeks of completion. Highly recommended!",
    image: "/skill.jpg", // Replace with actual student image
    // companyLogo: "/company-logo-1.svg", 
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Full Stack Developer",
    course: "Full Stack Web Development",
    quote: "From beginner concepts to advanced MERN stack development, SkillCareer covered everything. The instructors were knowledgeable and always ready to help.",
    image: "/skill.jpg",
    // companyLogo: "/company-logo-2.svg",
  },
  {
    id: 3,
    name: "Anjali Singh",
    role: "Data Analyst",
    course: "Data Analytics with Python & SQL",
    quote: "The hands-on projects were invaluable. I felt confident applying the skills I learned directly to real-world data problems.",
    image: "/skill.jpg",
    // companyLogo: "/company-logo-3.svg",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden group">
    {/* Quote Icon Background */}
    <div className="absolute -right-4 -top-4 text-blue-50 opacity-30 transform rotate-12 group-hover:scale-110 transition-all duration-500">
      <Quote size={100} />
    </div>
    
    {/* Content Container */}
    <div className="relative z-10">
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow italic">
        "{testimonial.quote}"
      </blockquote>
      
      {/* Divider */}
      <div className="w-16 h-1 bg-blue-500 rounded-full mb-6"></div>
      
      {/* Student Information */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
          {/* Use Next/Image for actual images */}
          <span className="text-xl font-bold text-white">{testimonial.name.charAt(0)}</span>
        </div>
        
        <div className="flex-1">
          <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          <p className="text-xs text-blue-600 font-medium mt-1">{testimonial.course}</p>
        </div>
        
        {/* Optional Company Logo */}
        {testimonial.companyLogo && (
          <div className="h-8 w-8 bg-gray-100 rounded p-1 flex items-center justify-center">
            {/* Placeholder for company logo */}
            <div className="w-full h-full bg-gray-200 rounded"></div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Background Design Elements */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Success Stories from Our <span className="text-blue-600">Learners</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            Hear what our students have to say about their learning experience and career outcomes.
          </p>
        </div>
        
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        {/* Call to Action */}
        {/* <div className="mt-16 md:mt-24 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to join our success stories? Start your learning journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Browse Courses
            </button>
            <button className="px-8 py-3 bg-white border border-gray-300 hover:border-blue-500 text-gray-800 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              View More Testimonials
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;