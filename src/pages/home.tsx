import { Link } from 'react-router-dom'

/**
 * Home page - Landing page for the application
 * Features:
 * - Fully responsive hero section
 * - Feature grid with responsive columns
 * - Technology stack showcase
 * - Call-to-action buttons
 * - Dark mode support
 * - Smooth scrolling and animations
 */
export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Hero Section */}
        <div className="space-y-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-50 leading-tight">
              Welcome to Your App
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A fully functional React SPA with client-side routing, TypeScript, and responsive design built with
              <span className="font-semibold"> Tailwind CSS</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center pt-4">
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-lg bg-[#5200ff] px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white text-sm sm:text-base transition-all duration-200 hover:bg-[#4100dd] dark:hover:bg-[#6300ff] focus-ring shadow-md hover:shadow-lg active:scale-95"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#5200ff] px-6 sm:px-8 py-3 sm:py-4 font-semibold text-[#5200ff] text-sm sm:text-base transition-all duration-200 hover:bg-[#5200ff] hover:text-white dark:text-[#c084fc] dark:border-[#c084fc] dark:hover:bg-[#c084fc] dark:hover:text-gray-950 focus-ring"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <section className="space-y-8 sm:space-y-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50">Key Features</h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Everything you need to build modern web applications
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
            <div className="card group hover:shadow-elevated animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both" style={{ animationDelay: '100ms' }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5200ff] text-white text-lg group-hover:scale-110 transition-transform duration-200">
                🛣️
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">Client-Side Routing</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Fast navigation between pages without full page reloads. React Router handles all routing logic
                seamlessly in the browser.
              </p>
            </div>

            <div className="card group hover:shadow-elevated animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both" style={{ animationDelay: '200ms' }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5200ff] text-white text-lg group-hover:scale-110 transition-transform duration-200">
                ⚡
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">Code Splitting</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Pages are lazy-loaded only when needed, reducing the initial bundle size and dramatically
                improving load times.
              </p>
            </div>

            <div className="card group hover:shadow-elevated animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both" style={{ animationDelay: '300ms' }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5200ff] text-white text-lg group-hover:scale-110 transition-transform duration-200">
                🎨
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">Modern Design</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Built with Tailwind CSS and featuring dark mode support, the UI is responsive and beautifully
                styled on all devices.
              </p>
            </div>

            <div className="card group hover:shadow-elevated animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both" style={{ animationDelay: '400ms' }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5200ff] text-white text-lg group-hover:scale-110 transition-transform duration-200">
                🔒
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">Type Safe</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                TypeScript strict mode ensures type safety throughout the application, catching errors at
                compile time.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-8 sm:space-y-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50">Technology Stack</h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Built with modern, industry-standard tools and libraries
            </p>
          </div>
          <div className="card">
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3 group">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#5200ff]" />
                  <h3 className="font-semibold text-[#5200ff] group-hover:text-[#4100dd] dark:group-hover:text-[#c084fc] transition-colors">
                    Framework
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">React 19.2.0</p>
              </div>
              <div className="space-y-3 group">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#5200ff]" />
                  <h3 className="font-semibold text-[#5200ff] group-hover:text-[#4100dd] dark:group-hover:text-[#c084fc] transition-colors">
                    Language
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">TypeScript 5.9.3</p>
              </div>
              <div className="space-y-3 group">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#5200ff]" />
                  <h3 className="font-semibold text-[#5200ff] group-hover:text-[#4100dd] dark:group-hover:text-[#c084fc] transition-colors">
                    Build Tool
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Vite 7.2.2</p>
              </div>
              <div className="space-y-3 group">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#5200ff]" />
                  <h3 className="font-semibold text-[#5200ff] group-hover:text-[#4100dd] dark:group-hover:text-[#c084fc] transition-colors">
                    Routing
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">React Router 7.9.5</p>
              </div>
              <div className="space-y-3 group">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#5200ff]" />
                  <h3 className="font-semibold text-[#5200ff] group-hover:text-[#4100dd] dark:group-hover:text-[#c084fc] transition-colors">
                    Styling
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Tailwind CSS 4.1.17</p>
              </div>
              <div className="space-y-3 group">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#f5e942]" />
                  <h3 className="font-semibold text-[#5200ff] group-hover:text-[#4100dd] dark:group-hover:text-[#c084fc] transition-colors">
                    Primary Color
                  </h3>
                </div>
                <p className="text-sm sm:text-base font-mono text-gray-600 dark:text-gray-400">#5200ff</p>
              </div>
              <div className="space-y-3 group">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#f5e942]" />
                  <h3 className="font-semibold text-[#5200ff] group-hover:text-[#4100dd] dark:group-hover:text-[#c084fc] transition-colors">
                    Accent Color
                  </h3>
                </div>
                <p className="text-sm sm:text-base font-mono text-gray-600 dark:text-gray-400">#f5e942</p>
              </div>
              <div className="space-y-3 group">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#5200ff]" />
                  <h3 className="font-semibold text-[#5200ff] group-hover:text-[#4100dd] dark:group-hover:text-[#c084fc] transition-colors">
                    Font
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Inter</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Examples */}
        <section className="space-y-6 sm:space-y-8 rounded-lg border-2 border-[#f5e942] bg-yellow-50/50 p-6 sm:p-8 lg:p-10 dark:border-[#c084fc] dark:bg-gray-900/50 backdrop-blur-sm">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">Explore the Routing</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
              This application demonstrates a fully functional client-side routing setup. Click the
              navigation buttons above or use the links below to explore the different pages.
            </p>
          </div>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
            <Link
              to="/about"
              className="rounded-lg bg-white px-4 py-3 text-center font-semibold text-[#5200ff] text-sm sm:text-base transition-all duration-200 hover:bg-gray-100 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-[#c084fc] focus-ring"
            >
              About Page
            </Link>
            <Link
              to="/contact"
              className="rounded-lg bg-white px-4 py-3 text-center font-semibold text-[#5200ff] text-sm sm:text-base transition-all duration-200 hover:bg-gray-100 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-[#c084fc] focus-ring"
            >
              Contact Page
            </Link>
            <Link
              to="/not-found"
              className="rounded-lg bg-white px-4 py-3 text-center font-semibold text-[#5200ff] text-sm sm:text-base transition-all duration-200 hover:bg-gray-100 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-[#c084fc] focus-ring"
            >
              404 Example
            </Link>
          </div>
        </section>
        </div>
      </div>
    </div>
  )
}
