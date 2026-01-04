import { Link } from 'react-router-dom'

/**
 * Home page - Landing page for the application
 * Demonstrates routing capabilities and navigation
 */
export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-16 dark:from-gray-950 dark:to-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Hero Section */}
        <div className="space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Welcome to Your App</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A fully functional React SPA with client-side routing
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-lg bg-[#5200ff] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#4100dd] dark:hover:bg-[#6300ff]"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#5200ff] px-8 py-4 font-semibold text-[#5200ff] transition-colors hover:bg-[#5200ff] hover:text-white dark:text-[#c084fc]"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <section className="space-y-6">
          <h2 className="text-center text-3xl font-bold">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5200ff] text-white">
                🛣️
              </div>
              <h3 className="mb-2 font-semibold">Client-Side Routing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fast navigation between pages without full page reloads. React Router handles all
                routing logic in the browser.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5200ff] text-white">
                ⚡
              </div>
              <h3 className="mb-2 font-semibold">Code Splitting</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pages are lazy-loaded only when needed, reducing the initial bundle size and
                improving load times.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5200ff] text-white">
                🎨
              </div>
              <h3 className="mb-2 font-semibold">Modern Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Built with Tailwind CSS and featuring dark mode support, the UI is responsive and
                beautifully styled.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5200ff] text-white">
                🔒
              </div>
              <h3 className="mb-2 font-semibold">Type Safe</h3>
              <p className="text-gray-600 dark:text-gray-400">
                TypeScript strict mode ensures type safety throughout the application, catching
                errors at compile time.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-center text-3xl font-bold">Technology Stack</h2>
          <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-[#5200ff]">Framework</h3>
                <p className="text-gray-600 dark:text-gray-400">React 19.2.0</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#5200ff]">Language</h3>
                <p className="text-gray-600 dark:text-gray-400">TypeScript 5.9.3</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#5200ff]">Build Tool</h3>
                <p className="text-gray-600 dark:text-gray-400">Vite 7.2.2</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#5200ff]">Routing</h3>
                <p className="text-gray-600 dark:text-gray-400">React Router 7.9.5</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#5200ff]">Styling</h3>
                <p className="text-gray-600 dark:text-gray-400">Tailwind CSS 4.1.17</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#5200ff]">Primary Color</h3>
                <p className="text-gray-600 dark:text-gray-400">#5200ff</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#5200ff]">Accent Color</h3>
                <p className="text-gray-600 dark:text-gray-400">#f5e942</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#5200ff]">Font</h3>
                <p className="text-gray-600 dark:text-gray-400">Inter</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Examples */}
        <section className="space-y-6 rounded-lg border-2 border-[#f5e942] bg-yellow-50 p-8 dark:border-[#c084fc] dark:bg-gray-900">
          <h2 className="text-2xl font-bold">Explore the Routing</h2>
          <p className="text-gray-600 dark:text-gray-400">
            This application demonstrates a fully functional client-side routing setup. Click the
            navigation buttons above or use the links below to explore the different pages:
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link
              to="/about"
              className="rounded-lg bg-white px-4 py-3 text-center font-medium text-[#5200ff] transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              About Page
            </Link>
            <Link
              to="/contact"
              className="rounded-lg bg-white px-4 py-3 text-center font-medium text-[#5200ff] transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Contact Page
            </Link>
            <Link
              to="/not-found"
              className="rounded-lg bg-white px-4 py-3 text-center font-medium text-[#5200ff] transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              404 Example
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
