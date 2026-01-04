import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import { HomePage } from '@/pages/home'

/**
 * Lazy-loaded page components for code splitting
 * These pages are loaded only when needed to reduce initial bundle size
 */
const AboutPage = lazy(() => import('@/pages/about').then(m => ({ default: m.AboutPage })))
const ContactPage = lazy(() => import('@/pages/contact').then(m => ({ default: m.ContactPage })))
const NotFoundPage = lazy(() =>
  import('@/pages/not-found').then(m => ({ default: m.NotFoundPage }))
)

/**
 * Fallback component while lazy-loaded pages are loading
 */
function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-[#5200ff] dark:border-gray-600"></div>
        <p className="text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  )
}

/**
 * Get basename dynamically from window location or environment
 * Supports both preview proxy and direct deployment
 */
function getBasename(): string {
  // Check if basename is set by preview proxy script
  if (typeof window !== 'undefined') {
    const previewBasename = (window as { __PREVIEW_BASENAME__?: string }).__PREVIEW_BASENAME__
    if (previewBasename) {
      console.log('[Router] Using basename from window.__PREVIEW_BASENAME__:', previewBasename)
      return previewBasename
    }

    // Fallback: detect basename from current URL pathname
    // This handles cases where the script hasn't run yet or for preview proxy URLs
    if (window.location.pathname.startsWith('/api/preview/')) {
      const pathMatch = window.location.pathname.match(/^(\/api\/preview\/[^/]+)/)
      if (pathMatch) {
        const detectedBasename = pathMatch[1]
        console.log('[Router] Detected basename from URL pathname:', detectedBasename)
        // Also set it on window for consistency
        ;(window as { __PREVIEW_BASENAME__?: string }).__PREVIEW_BASENAME__ = detectedBasename
        return detectedBasename
      }
    }
  }

  // Check environment variable (for build-time configuration)
  if (import.meta.env.VITE_BASENAME) {
    return import.meta.env.VITE_BASENAME
  }

  // Default: no basename (root deployment)
  console.log('[Router] No basename detected, using root')
  return ''
}

/**
 * Application routes configuration
 *
 * Features:
 * - Client-side SPA routing with React Router
 * - Lazy-loaded pages for code splitting
 * - Error boundary integration
 * - 404 Not Found handling
 * - Nested routes support
 */
export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: (
        <Suspense fallback={<LoadingFallback />}>
          <NotFoundPage />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'about',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <AboutPage />
            </Suspense>
          ),
        },
        {
          path: 'contact',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <ContactPage />
            </Suspense>
          ),
        },
        {
          path: 'not-found',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <NotFoundPage />
            </Suspense>
          ),
        },
        {
          path: '*',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <NotFoundPage />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: getBasename(),
  }
)
