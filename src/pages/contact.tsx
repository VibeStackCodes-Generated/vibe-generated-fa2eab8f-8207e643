import { Link } from 'react-router-dom'
import { useState } from 'react'

/**
 * Contact page - Contact form and information
 */
export function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle')
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
    // Simulate form submission
    console.log('Form submitted:', formData)
    setFormStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setFormStatus('idle'), 3000)
  }

  return (
    <div className="min-h-screen bg-white px-4 py-16 dark:bg-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#5200ff] hover:underline dark:text-[#c084fc]"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-100"
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
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 transition-colors focus:border-[#5200ff] focus:outline-none focus:ring-2 focus:ring-[#5200ff] focus:ring-opacity-20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-100"
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
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 transition-colors focus:border-[#5200ff] focus:outline-none focus:ring-2 focus:ring-[#5200ff] focus:ring-opacity-20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 transition-colors focus:border-[#5200ff] focus:outline-none focus:ring-2 focus:ring-[#5200ff] focus:ring-opacity-20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  placeholder="Your message..."
                />
              </div>

              {formStatus === 'success' && (
                <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    ✓ Message sent successfully!
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-lg bg-[#5200ff] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#4100dd] dark:hover:bg-[#6300ff]"
              >
                Send Message
              </button>
            </form>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p className="font-medium">hello@example.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border-2 border-[#f5e942] bg-yellow-50 p-6 dark:border-[#c084fc] dark:bg-gray-900">
                <h3 className="mb-2 font-semibold text-[#5200ff]">Response Time</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We typically respond to messages within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
