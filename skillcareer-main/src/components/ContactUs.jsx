"use client";

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  User,
  AtSign,
  MessageSquare,
  AlertTriangle,
  PartyPopper,
  RotateCw,
  Map,
  HelpCircle
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// --- Helper Components ---

const InputField = ({ id, name, type, label, value, onChange, placeholder, required, disabled, icon: Icon, pattern, title }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
    <div className="relative group">
      {Icon && <Icon className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors duration-200 pointer-events-none" />}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition duration-200 ease-in-out ${Icon ? 'pl-11 pr-4' : 'px-4'} disabled:bg-slate-50 disabled:cursor-not-allowed hover:border-indigo-300 shadow-sm`}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
      />
    </div>
  </div>
);

const TextareaField = ({ id, name, label, value, onChange, placeholder, required, disabled, rows, icon: Icon }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
    <div className="relative group">
      {Icon && <Icon className="absolute left-3.5 top-[18px] h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors duration-200 pointer-events-none" />}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition duration-200 ease-in-out ${Icon ? 'pl-11 pr-4 py-3' : 'px-4 py-3'} disabled:bg-slate-50 disabled:cursor-not-allowed hover:border-indigo-300 shadow-sm`}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
      ></textarea>
    </div>
  </div>
);

const ContactInfoItem = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 mt-1 bg-gradient-to-br from-indigo-100 to-violet-100 p-3.5 rounded-xl text-indigo-600 shadow-md">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h4 className="text-base font-semibold text-slate-800 mb-1.5">{title}</h4>
      <div className="text-sm text-slate-600 space-y-1.5">
        {children}
      </div>
    </div>
  </div>
);

const FaqItem = ({ question, answer }) => (
  <div className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
    <dt className="text-lg font-semibold text-slate-800 flex items-start gap-2">
      <HelpCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-1" />
      <span>{question}</span>
    </dt>
    <dd className="mt-3 text-slate-600 text-base leading-relaxed">{answer}</dd>
  </div>
);

// --- Main Component ---

export default function ContactUsEnhancedV4() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleResetForm = () => {
    setSuccessMessage(null);
    setError(null);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    const params = new URLSearchParams();
    params.append('fullName', formData.name);
    params.append('email', formData.email);
    params.append('mobileNumber', formData.phone);
    params.append('additional_text1', formData.message);
    params.append('receivedBy', 'skillcareer.in');
    params.append('country', 'India');

    try {
      const response = await fetch('https://click.creditsdeal.com/api/leadApi', {
        method: 'POST',
        headers: { 'accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' },
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
            if (errorText) errorDetails = `${errorDetails} - ${errorText}`;
          } catch (textError) { /* ignore text errors */ }
          errorDetails = `${errorDetails} - ${response.statusText || 'Unknown Server Error'}`;
        }
        throw new Error(`Failed to submit form: ${errorDetails}`);
      }

      const result = await response.json();
      if (result.responseCode === 201 || response.ok) {
        setSuccessMessage(result.responseMessage || 'Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(result.responseMessage || 'An unexpected response was received.');
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An unknown network error occurred.';
      setError(message);
      console.error("Form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const faqs = [
    {
      question: "What's the typical response time?",
      answer: "We strive to respond to all inquiries within 24-48 business hours (Monday-Saturday). If your matter is urgent, please call us directly during office hours."
    },
    {
      question: "Can I get course details or fee structure via email?",
      answer: "Absolutely! Please mention the specific course(s) you're interested in, and our counselors will send you detailed information, including the curriculum and fee structure."
    },
    {
      question: "Do you offer support after course completion?",
      answer: "Yes, we provide placement assistance and career support services to our eligible graduates. Feel free to inquire about the specific support available for your chosen course."
    },
  ];

  const socialLinks = [
    { label: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com/company/skillcareer" },
    { label: "Twitter", icon: FaTwitter, href: "https://twitter.com/skillcareer_edu" },
    { label: "Facebook", icon: FaFacebook, href: "https://facebook.com/skillcareer.in/" },
    { label: "Instagram", icon: FaInstagram, href: "https://instagram.com/skillcareer.in" },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 py-16 md:py-20 lg:py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 blur-3xl animate-pulse animation-delay-3000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-wide shadow-sm">
            Get In Touch
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-violet-700">
            Connect With SkillCareer
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re here to help you take the next step in your career journey. Whether you have questions about our courses, need admission support, or want to discuss partnerships, please reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 max-w-7xl mx-auto">

          {/* == Contact Form Section Wrapper == */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 order-2 lg:order-1 transform transition-all duration-300 hover:shadow-indigo-100 min-h-[500px] flex flex-col">
            {successMessage ? (
              <div className="flex flex-col items-center justify-center text-center flex-grow animate-fade-in">
                <PartyPopper className="h-16 w-16 text-emerald-500 mb-5" />
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Thank You!</h2>
                <p className="text-emerald-700 font-medium mb-6">{successMessage}</p>
                <p className="text-slate-600 text-base mb-8">
                  We appreciate you reaching out. Our team will review your message and get back to you as soon as possible.
                </p>
                <button
                  onClick={handleResetForm}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                >
                  <RotateCw className="h-4 w-4" /> Send Another Message
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-7">
                  <InputField id="name" name="name" type="text" label="Full Name" value={formData.name} onChange={handleChange} placeholder="e.g., Alex Johnson" required disabled={isLoading} icon={User} />
                  <InputField id="email" name="email" type="email" label="Email Address" value={formData.email} onChange={handleChange} placeholder="you@example.com" required disabled={isLoading} icon={AtSign} />
                  <InputField id="phone" name="phone" type="tel" label="Phone Number" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required disabled={isLoading} icon={Phone} pattern="[0-9+ ]{10,15}" title="Please enter a valid 10-15 digit phone number" />
                  <TextareaField id="message" name="message" label="Your Message" value={formData.message} onChange={handleChange} placeholder="How can we assist you today? (e.g., course inquiry, support request)" required disabled={isLoading} rows={5} icon={MessageSquare} />

                  {error && (
                    <div className="flex items-start gap-3 p-5 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-sm font-medium animate-fade-in">
                      <AlertTriangle className="h-5 w-5 flex-shrink-0 text-rose-500 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className={`w-full text-base font-semibold px-8 py-4 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ease-in-out flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* == Contact Information & Hours Section == */}
          <div className="space-y-10 order-1 lg:order-2">
            {/* Contact Info Card */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 space-y-8 border-t-[6px] border-indigo-500 transform transition-all duration-300 hover:shadow-indigo-100">
              <h3 className="text-2xl font-bold text-slate-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Contact Information</h3>
              <ContactInfoItem icon={MapPin} title="Visit Our Delhi Center">
                <p className="text-slate-600 leading-relaxed">
                  FIRST FLOOR FRONT SIDE OF PROPERTY BEARING NO.D-50/F, KANWAR SINGH BUILDING CHHATTARPUR ENCLAVE, NEW DELHI-110074
                </p>
                <a 
                  href="https://www.google.com/maps/place/28%C2%B030'06.4%22N+77%C2%B011'06.0%22E/@28.501772,77.1824231,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.501772!4d77.184998?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-600 hover:text-indigo-800 text-xs font-semibold inline-flex items-center gap-1 group mt-2"
                >
                  View on Map <Map className="h-3 w-3 group-hover:translate-x-1 transition-transform"/>
                </a>
              </ContactInfoItem>
              <ContactInfoItem icon={Mail} title="Email Us Directly">
                <a href="mailto:info@skillcareer.in" className="hover:text-indigo-700 hover:underline transition-colors font-medium">
                  info@skillcareer.in
                </a>
                <p className="text-xs text-slate-500">Best for detailed inquiries.</p>
              </ContactInfoItem>
              <ContactInfoItem icon={Phone} title="Call Our Counselors">
                <a href="tel:+916366666760" className="block hover:text-indigo-700 hover:underline transition-colors font-medium">+91 6366666760</a>
                <p className="text-xs text-slate-500">For quick questions & admissions.</p>
                <a href="tel:+91 7055275529" className="block hover:text-indigo-700 hover:underline transition-colors font-medium">+91 7055275529</a>
                {/* <p className="text-xs text-slate-500">For quick questions & admissions.</p> */}
              </ContactInfoItem>
               
            </div>

            {/* Office Hours Card */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 border-t-[6px] border-violet-500 transform transition-all duration-300 hover:shadow-violet-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-7 flex items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">
                <Clock className="h-6 w-6 text-violet-600" /> Office Hours (IST)
              </h3>
              <div className="space-y-5 text-sm">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4 hover:border-violet-200 transition-colors">
                  <span className="text-slate-600 font-medium">Monday - Saturday:</span>
                  <span className="text-slate-900 font-semibold bg-gradient-to-r from-violet-50 to-fuchsia-50 px-3 py-1.5 rounded-lg border border-violet-100 shadow-sm">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Sunday:</span>
                  <span className="font-semibold text-rose-600 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-100 shadow-sm">9:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media Links Section */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 text-center">Follow Us</h3>
              <div className="flex justify-center items-center gap-5">
                
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className="text-slate-500 hover:text-indigo-600 transition-colors duration-200"
                  >
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* == Embedded Map Section == */}
        <div className="mt-16 md:mt-24 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-violet-700">
            Find Us Here
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            {/* UPDATED MAP IFRAME WITH EXACT COORDINATES */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3892827982844!2d77.18242307549743!3d28.501772075738544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzA2LjQiTiA3N8KwMTEnMDYuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SkillCareer Location Map"
            ></iframe>
          </div>
        </div>

        {/* == FAQ Section == */}
        <div className="mt-16 md:mt-24 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-fuchsia-700">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-8 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </dl>
        </div>

      </div>
    </div>
  );
}