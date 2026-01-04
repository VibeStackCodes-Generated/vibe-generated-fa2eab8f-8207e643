import { Link } from 'react-router-dom'

/**
 * 404 Not Found page
 * Displayed when user navigates to a route that doesn't exist
 */
export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 dark:from-gray-950 dark:to-gray-900">
      <div className="w-full max-w-2xl space-y-8 text-center">
        <div className="space-y-4">
          <div className="text-6xl font-bold text-[#5200ff]">404</div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Page Not Found</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-[#5200ff] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#4100dd] dark:hover:bg-[#6300ff]"
          >
            Back to Home
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#5200ff] px-6 py-3 font-semibold text-[#5200ff] transition-colors hover:bg-[#5200ff] hover:text-white dark:text-[#c084fc]"
          >
            Visit About Page
          </Link>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 font-semibold">Here's what you can do:</h2>
          <ul className="space-y-2 text-left text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-3">
              <span className="text-[#f5e942]">→</span>
              <Link to="/" className="hover:text-[#5200ff]">
                Go to the homepage
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#f5e942]">→</span>
              <Link to="/about" className="hover:text-[#5200ff]">
                Learn about our project
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#f5e942]">→</span>
              <Link to="/contact" className="hover:text-[#5200ff]">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
