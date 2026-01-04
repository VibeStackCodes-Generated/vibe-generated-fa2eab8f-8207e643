import { Link } from 'react-router-dom'

/**
 * About page - Information about the application
 * Features:
 * - Responsive layout for all screen sizes
 * - Technology stack display
 * - Feature highlights with icons
 * - Brand colors showcase
 * - Dark mode support
 */
export function AboutPage() {
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
        <article className="space-y-12 sm:space-y-16">
          <header className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-50 leading-tight">
              About This Application
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              A modern React application built with TypeScript, Vite, and Tailwind CSS featuring responsive design,
              client-side routing, and best practices for modern web development.
            </p>
          </header>

          <section className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">Technology Stack</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Built with industry-standard tools and frameworks
              </p>
            </div>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-[#5200ff]" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-50">Frontend</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <span className="text-[#5200ff]">▸</span> React 19.2.0
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <span className="text-[#5200ff]">▸</span> TypeScript 5.9.3
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <span className="text-[#5200ff]">▸</span> Vite 7.2.2
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <span className="text-[#5200ff]">▸</span> Tailwind CSS 4.1.17
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-[#5200ff]" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-50">Routing & Navigation</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <span className="text-[#5200ff]">▸</span> React Router 7.9.5
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <span className="text-[#5200ff]">▸</span> Client-side SPA
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <span className="text-[#5200ff]">▸</span> Code splitting
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <span className="text-[#5200ff]">▸</span> Nested routes
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">Project Features</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Core features that make this application stand out
              </p>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {[
                'Client-side routing with React Router',
                'TypeScript strict mode for type safety',
                'Error boundary for robust error handling',
                'Tailwind CSS for responsive design',
                'Code splitting with lazy loading',
                'Dark mode support for all pages',
                'Accessibility-first component design',
                'Mobile-responsive navigation menu',
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#5200ff] text-sm font-bold text-white flex-shrink-0 group-hover:bg-[#4100dd] transition-colors">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border border-[#f5e942] bg-yellow-50/50 p-6 sm:p-8 dark:border-[#c084fc] dark:bg-gray-900/50 backdrop-blur-sm">
            <h2 className="mb-4 text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-50">Brand Colors</h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg bg-[#5200ff] shadow-md flex-shrink-0" />
                <div>
                  <p className="font-mono text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-50">
                    #5200ff
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Primary Color</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-[#f5e942] shadow-md flex-shrink-0" />
                <div>
                  <p className="font-mono text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-50">
                    #f5e942
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Accent Color</p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
