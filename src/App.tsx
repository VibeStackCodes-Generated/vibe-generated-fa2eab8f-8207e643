import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/error-boundary'
import { Navigation } from '@/components/navigation'
import { VibeStackBadge } from '@/components/vibestack-badge'

/**
 * Main App component with routing
 * Uses React Router for SPA navigation
 * Features:
 * - Error boundary for error handling
 * - Navigation header with responsive design
 * - Loading state with spinner
 * - VibeStack badge
 * - Smooth transitions and animations
 */
function App() {
  return (
    <ErrorBoundary>
      <Navigation />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
            <div className="space-y-4 text-center px-4">
              {/* Loading Spinner */}
              <div className="flex justify-center">
                <div className="spinner h-12 w-12" />
              </div>

              {/* Loading Text */}
              <div className="space-y-2">
                <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100">
                  Loading
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Please wait while we prepare your content...
                </p>
              </div>

              {/* Progress Bar Animation */}
              <div className="w-full max-w-xs h-1 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-800">
                <div className="h-full bg-gradient-to-r from-[#5200ff] to-[#f5e942] rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        }
      >
        <main className="flex flex-col min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </Suspense>
      <VibeStackBadge />
    </ErrorBoundary>
  )
}

export default App
