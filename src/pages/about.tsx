import { Link } from 'react-router-dom'

/**
 * About page - Information about the application
 */
export function AboutPage() {
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
        <article className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              About This Application
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A modern React application built with TypeScript, Vite, and Tailwind CSS
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Technology Stack</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="font-semibold">Frontend</h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• React 19.2.0</li>
                  <li>• TypeScript 5.9.3</li>
                  <li>• Vite 7.2.2</li>
                  <li>• Tailwind CSS 4.1.17</li>
                </ul>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="font-semibold">Routing</h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• React Router 7.9.5</li>
                  <li>• Client-side SPA</li>
                  <li>• Code splitting</li>
                  <li>• Nested routes</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Project Features</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#5200ff] text-xs font-bold text-white">
                  ✓
                </span>
                <span>Client-side routing with React Router</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#5200ff] text-xs font-bold text-white">
                  ✓
                </span>
                <span>TypeScript strict mode for type safety</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#5200ff] text-xs font-bold text-white">
                  ✓
                </span>
                <span>Error boundary for error handling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#5200ff] text-xs font-bold text-white">
                  ✓
                </span>
                <span>Tailwind CSS for responsive design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#5200ff] text-xs font-bold text-white">
                  ✓
                </span>
                <span>Code splitting with lazy loading</span>
              </li>
            </ul>
          </section>

          <section className="rounded-lg border border-[#f5e942] bg-yellow-50 p-6 dark:border-[#c084fc] dark:bg-gray-900">
            <h2 className="mb-2 font-semibold text-[#5200ff]">Brand Colors</h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-lg bg-[#5200ff]" />
                <div>
                  <p className="font-mono text-sm">#5200ff</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Primary</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-lg border-2 border-gray-300 bg-[#f5e942] dark:border-gray-700" />
                <div>
                  <p className="font-mono text-sm">#f5e942</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Accent</p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
