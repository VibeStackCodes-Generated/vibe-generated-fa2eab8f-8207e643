import { Link } from 'react-router-dom'
import { useState } from 'react'

/**
 * Contact page - Contact form and information
 * Features:
 * - Fully responsive contact form
 * - Accessible form fields with labels
 * - Success/error messaging
 * - Contact information display
 * - Dark mode support
 * - Mobile-optimized layout
 */
export function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 3000)
      return
    }
    // Simulate form submission
    console.log('Form submitted:', formData)
    setFormStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setFormStatus('idle'), 4000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#5200ff] hover:text-[#4100dd] dark:text-[#c084fc] dark:hover:text-[#f5e942] transition-colors duration-200 focus-ring"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Content */}
        <div className="space-y-12 sm:space-y-16">
          <header className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-50 leading-tight">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible. Fill out the form
              below and let's start a conversation.
            </p>
          </header>

          <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-2">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="form-group">
                <label
                  htmlFor="name"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="email"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="message"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Your message..."
                />
              </div>

              {formStatus === 'success' && (
                <div className="rounded-lg border border-green-200 bg-green-50 p-4 sm:p-6 dark:border-green-900 dark:bg-green-950 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="flex gap-3">
                    <svg className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm sm:text-base font-medium text-green-800 dark:text-green-200">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 sm:p-6 dark:border-red-900 dark:bg-red-950 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="flex gap-3">
                    <svg className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm sm:text-base font-medium text-red-800 dark:text-red-200">
                      Please fill in all fields before submitting.
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-primary px-6 py-3 sm:py-4 text-base font-semibold shadow-md hover:shadow-lg"
              >
                <span>Send Message</span>
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-3 w-3 rounded-full bg-[#5200ff]" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    Contact Information
                  </h2>
                </div>
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5200ff]/10 flex-shrink-0">
                      <svg className="h-5 w-5 text-[#5200ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide">
                        Email
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mt-1">
                        hello@example.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5200ff]/10 flex-shrink-0">
                      <svg className="h-5 w-5 text-[#5200ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide">
                        Phone
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mt-1">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5200ff]/10 flex-shrink-0">
                      <svg className="h-5 w-5 text-[#5200ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide">
                        Location
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mt-1">
                        San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-[#f5e942] bg-yellow-50/50 p-6 sm:p-8 dark:border-[#c084fc] dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="flex items-start gap-3 mb-3">
                  <svg className="h-5 w-5 text-[#5200ff] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-semibold text-base sm:text-lg text-[#5200ff] dark:text-[#c084fc]">
                    Response Time
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  We typically respond to messages within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
