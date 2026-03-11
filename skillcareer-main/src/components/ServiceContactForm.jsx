'use client'

import { useState } from 'react'
import axios from 'axios'

const Icons = {
  User: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  Mail: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  Phone: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  ChevronDown: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>,
}

export default function ServiceContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const [formError, setFormError] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    service: '',
    message: '',
    country: 'India',
  })

  const inputClasses = "w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"

  const validateMobile = (mobile) => {
    if (!mobile) return true
    const mobileRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    return mobileRegex.test(mobile)
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleChange = (e) => {
    if (isSubmitted) setIsSubmitted(false)
    if (formError) setFormError(null)
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormLoading(true)
    setFormError(null)
    setIsSubmitted(false)

    if (!formData.fullName) {
      setFormError('Please enter your full name')
      setFormLoading(false)
      return
    }
    if (!validateEmail(formData.email)) {
      setFormError('Please enter a valid email address')
      setFormLoading(false)
      return
    }
    if (!validateMobile(formData.mobile)) {
      setFormError('Please enter a valid mobile number (or leave it blank)')
      setFormLoading(false)
      return
    }
    if (!formData.service) {
      setFormError('Please select a course you need')
      setFormLoading(false)
      return
    }
    if (!formData.message) {
      setFormError('Please let us know how we can help')
      setFormLoading(false)
      return
    }

    const apiPayload = {
      fullName: formData.fullName,
      email: formData.email,
      mobileNumber: formData.mobile,
      country: formData.country,
      additional_text1: `Course Needed: ${formData.service}. Message: ${formData.message}`,
      receivedBy: 'adomobi.com'
    }

    try {
      const response = await axios.post(
        'https://click.creditsdeal.com/api/leadApi',
        new URLSearchParams(apiPayload),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json' } }
      )

      if (response.data && response.data.responseCode === 201) {
        setIsSubmitted(true)
        setFormData({
          fullName: '', email: '', mobile: '', service: '', message: '', country: 'India'
        })
      } else {
        setFormError(response.data?.responseMessage || 'An unexpected error occurred.')
      }
    } catch (err) {
      setFormError(err.response?.data?.responseMessage || 'Failed to connect. Please try again.')
    } finally {
      setFormLoading(false)
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-slate-800">Thank you!</h3>
          <p className="text-slate-600 mt-2">
            Your message has been sent. We&apos;ll be in touch shortly.
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-blue-600 text-2xl font-bold text-center mb-6">
            Book a Free Consultation!
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Icons.User />
              </div>
              <input 
                id="fullName" 
                type="text" 
                placeholder="Enter your full name *" 
                value={formData.fullName} 
                onChange={handleChange} 
                className={`${inputClasses} pl-10`} 
                required 
              />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Icons.Mail />
              </div>
              <input 
                id="email" 
                type="email" 
                placeholder="Enter your email *" 
                value={formData.email} 
                onChange={handleChange} 
                className={`${inputClasses} pl-10`} 
                required 
              />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Icons.Phone />
              </div>
              <input 
                id="mobile" 
                type="tel" 
                placeholder="Enter your phone number" 
                value={formData.mobile} 
                onChange={handleChange} 
                className={`${inputClasses} pl-10`} 
              />
            </div>
            <div className="relative">
              <select 
                id="service" 
                value={formData.service} 
                onChange={handleChange} 
                className={`${inputClasses} appearance-none`} 
                required
              >
                <option value="" disabled>Select Course You Need *</option>
                <option>Accounting Course</option>
                <option>Advanced Computer Course</option>
                <option>Affiliate Marketing Course</option>
                <option>Amazon Digital Marketing Course</option>
                <option>Android Development Course</option>
                <option>Basic Computer Course</option>
                <option>Data Analytics Course</option>
                <option>Digital Marketing Course</option>
                <option>English Speaking Course</option>
                <option>Finance Course</option>
                <option>Full Stack Development Course</option>
                <option>Job Training Course</option>
                <option>UI Design Course</option>
                <option>Web Development Course</option>
                <option>YouTube SEO & Growth Course</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <Icons.ChevronDown />
              </div>
            </div>
            <textarea 
              id="message" 
              placeholder="I need your help... *" 
              rows="3" 
              value={formData.message} 
              onChange={handleChange} 
              className={inputClasses} 
              required
            ></textarea>
            
            {formError && (
              <div className="text-red-600 text-sm bg-red-100 p-3 rounded-lg border border-red-200">
                {formError}
              </div>
            )}

            <button 
              type="submit" 
              disabled={formLoading} 
              className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/40 flex items-center justify-center disabled:bg-blue-300"
            >
              {formLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : 'Submit'}
            </button>
          </form>
        </>
      )}
    </div>
  )
}