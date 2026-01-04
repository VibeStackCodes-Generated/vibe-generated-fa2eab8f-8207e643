import { Link } from 'react-router-dom'

/**
 * 404 Not Found page
 * Displayed when user navigates to a route that doesn't exist
 * Features:
 * - Engaging 404 display with animation
 * - Navigation suggestions
 * - Responsive design for all screen sizes
 * - Dark mode support
 * - Helpful context and next steps
 */
export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 py-12 dark:from-gray-950 dark:to-gray-900">
      <div className="w-full max-w-3xl space-y-8 sm:space-y-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Error Code and Icon */}
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#5200ff] blur-2xl opacity-20 rounded-full" />
              <div className="relative text-7xl sm:text-8xl font-bold text-[#5200ff] drop-shadow-lg">
                404
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Page Not Found
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Sorry, the page you're looking for doesn't exist or has been moved. Don't worry, we can help you find
              what you're looking for.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center pt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-[#5200ff] px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white text-sm sm:text-base transition-all duration-200 hover:bg-[#4100dd] dark:hover:bg-[#6300ff] focus-ring shadow-md hover:shadow-lg active:scale-95"
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12a9 9 0 0118 0m0 0a9.004 9.004 0 01-8.716 5.898M3 12a9.004 9.004 0 008.716-5.898" />
            </svg>
            Back to Home
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#5200ff] px-6 sm:px-8 py-3 sm:py-4 font-semibold text-[#5200ff] text-sm sm:text-base transition-all duration-200 hover:bg-[#5200ff] hover:text-white dark:text-[#c084fc] dark:border-[#c084fc] dark:hover:bg-[#c084fc] dark:hover:text-gray-950 focus-ring"
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            About Page
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="card max-w-2xl mx-auto">
          <h2 className="mb-6 text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-50">
            Here's where you can go:
          </h2>
          <ul className="space-y-3 text-left">
            {[
              { icon: '🏠', text: 'Go to the homepage', link: '/' },
              { icon: 'ℹ️', text: 'Learn about our project', link: '/about' },
              { icon: '📧', text: 'Contact us for help', link: '/contact' },
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-4 group">
                <span className="text-2xl sm:text-3xl flex-shrink-0">
                  {item.icon}
                </span>
                <Link
                  to={item.link}
                  className="flex-1 text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400 hover:text-[#5200ff] dark:hover:text-[#c084fc] transition-colors duration-200 group-hover:translate-x-1 transform"
                >
                  {item.text}
                </Link>
                <svg className="h-5 w-5 text-gray-400 group-hover:text-[#5200ff] dark:group-hover:text-[#c084fc] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Context */}
        <div className="rounded-lg border border-[#f5e942] bg-yellow-50/50 p-6 sm:p-8 dark:border-[#c084fc] dark:bg-gray-900/50 backdrop-blur-sm max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <svg className="h-6 w-6 text-[#5200ff] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
            </svg>
            <div className="text-left">
              <p className="font-semibold text-gray-900 dark:text-gray-50 text-sm sm:text-base">
                Can't find what you're looking for?
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                Try visiting our main pages or getting in touch with us directly. We're here to help!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
