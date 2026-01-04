import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/error-boundary'
import { Navigation } from '@/components/navigation'
import { VibeStackBadge } from '@/components/vibestack-badge'

/**
 * Main App component with routing
 * Uses React Router for SPA navigation
 * Includes navigation header and error boundary
 */
function App() {
  return (
    <ErrorBoundary>
      <Navigation />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <div className="space-y-4 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-[#5200ff] dark:border-gray-600"></div>
              <p className="text-gray-600 dark:text-gray-400">Loading...</p>
            </div>
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <VibeStackBadge />
    </ErrorBoundary>
  )
}

export default App
