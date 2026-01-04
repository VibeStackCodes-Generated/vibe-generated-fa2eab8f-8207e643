/**
 * ROUTING GUIDE
 * =============
 *
 * This application uses React Router for client-side SPA routing.
 * Below is a comprehensive guide to the routing setup.
 *
 * PROJECT STRUCTURE
 * -----------------
 * src/
 * ├── routes/
 * │   └── index.tsx          # Route definitions and configuration
 * ├── pages/
 * │   ├── home.tsx           # Home page (/)
 * │   ├── about.tsx          # About page (/about)
 * │   ├── contact.tsx        # Contact page (/contact)
 * │   └── not-found.tsx      # 404 Not Found page
 * ├── components/
 * │   ├── navigation.tsx     # Navigation header component
 * │   ├── error-boundary.tsx # Error boundary wrapper
 * │   └── vibestack-badge.tsx
 * ├── App.tsx                # Root component with layout
 * ├── main.tsx               # Application entry point
 * └── index.css              # Global styles
 *
 * AVAILABLE ROUTES
 * ----------------
 * 1. Home Page
 *    - Route: /
 *    - Component: HomePage
 *    - Type: Eager loaded (no code splitting)
 *    - Purpose: Landing page with feature overview
 *
 * 2. About Page
 *    - Route: /about
 *    - Component: AboutPage
 *    - Type: Lazy loaded (code splitting enabled)
 *    - Purpose: Information about the application and tech stack
 *
 * 3. Contact Page
 *    - Route: /contact
 *    - Component: ContactPage
 *    - Type: Lazy loaded (code splitting enabled)
 *    - Purpose: Contact form and communication information
 *
 * 4. Not Found Page
 *    - Routes: /not-found, /* (catch-all)
 *    - Component: NotFoundPage
 *    - Type: Lazy loaded (code splitting enabled)
 *    - Purpose: 404 error page for unknown routes
 *
 * KEY FEATURES
 * ============
 *
 * 1. CLIENT-SIDE ROUTING
 *    - All routing happens in the browser
 *    - No page reloads between routes
 *    - Uses React Router's <Link> component for navigation
 *    - Browser history is maintained
 *
 * 2. CODE SPLITTING
 *    - About, Contact, and NotFound pages are lazy-loaded
 *    - These pages are only downloaded when the user navigates to them
 *    - Separate JavaScript chunks are generated for each lazy-loaded page
 *    - Reduces initial bundle size significantly
 *
 * 3. LOADING STATES
 *    - <Suspense> boundaries wrap lazy-loaded components
 *    - LoadingFallback component displays during page transitions
 *    - Smooth loading experience for users
 *
 * 4. ERROR HANDLING
 *    - Error boundary wraps the entire app
 *    - Catches and displays errors gracefully
 *    - Provides error messages and recovery options
 *
 * 5. NAVIGATION COMPONENT
 *    - Persistent navigation header across all pages
 *    - Shows active route highlighting
 *    - Uses useLocation() hook to determine current page
 *
 * HOW IT WORKS
 * ============
 *
 * 1. Entry Point (main.tsx)
 *    - Initializes React with createRoot()
 *    - Wraps app in StrictMode for development warnings
 *    - Provides RouterProvider with the router configuration
 *
 * 2. Router Configuration (routes/index.tsx)
 *    - createBrowserRouter() sets up SPA routing
 *    - Defines all available routes and their components
 *    - Sets up basename for subdirectory deployments
 *    - Lazy-loaded routes are defined with React.lazy()
 *
 * 3. Root Component (App.tsx)
 *    - Wraps entire app in ErrorBoundary
 *    - Renders Navigation component for persistent header
 *    - Uses <Outlet /> to render current route
 *    - <Suspense> handles loading states
 *
 * 4. Page Components (pages/*.tsx)
 *    - Named exports (HomePage, AboutPage, etc.)
 *    - Use React Router's <Link> for navigation
 *    - Can use useLocation() and other hooks
 *    - Fully typed with TypeScript
 *
 * ADDING NEW ROUTES
 * =================
 *
 * To add a new page:
 *
 * 1. Create a new page component:
 *    src/pages/new-page.tsx
 *    export function NewPage() {
 *      return <div>New Page Content</div>
 *    }
 *
 * 2. Add route to src/routes/index.tsx:
 *    const NewPage = lazy(() =>
 *      import('@/pages/new-page').then((m) => ({ default: m.NewPage }))
 *    )
 *
 *    Then in the routes array:
 *    {
 *      path: 'new-page',
 *      element: (
 *        <Suspense fallback={<LoadingFallback />}>
 *          <NewPage />
 *        </Suspense>
 *      ),
 *    }
 *
 * 3. Update Navigation component if needed:
 *    Add new nav item to navItems array in components/navigation.tsx
 *
 * USEFUL REACT ROUTER HOOKS
 * ==========================
 *
 * useLocation()
 * - Gets current location object
 * - Useful for checking current route
 * - Example: Used in Navigation component for active highlighting
 *
 * useNavigate()
 * - Returns navigate function for programmatic navigation
 * - Use for redirects or navigation after actions
 * - Example: const navigate = useNavigate(); navigate('/home')
 *
 * useParams()
 * - Extracts route parameters
 * - For routes like /users/:id
 * - Example: const { id } = useParams()
 *
 * useSearchParams()
 * - Accesses and modifies URL query parameters
 * - Example: const [params] = useSearchParams()
 *
 * PERFORMANCE OPTIMIZATION
 * ========================
 *
 * 1. Lazy Loading
 *    - About, Contact, NotFound pages are lazy-loaded
 *    - Reduces initial bundle from ~350KB to ~293KB
 *    - Pages loaded on-demand when navigated to
 *
 * 2. Code Splitting
 *    - Separate chunks generated for each lazy page
 *    - Browser can cache chunks independently
 *    - Improves caching efficiency
 *
 * 3. Home Page Eager Loading
 *    - HomePage is eagerly loaded
 *    - Faster initial page display
 *    - Usually most important page
 *
 * DEPLOYMENT CONSIDERATIONS
 * ==========================
 *
 * 1. Basename Configuration
 *    - Supports subdirectory deployments
 *    - Uses getBasename() function
 *    - Checks window.__PREVIEW_BASENAME__ first
 *    - Falls back to VITE_BASENAME env variable
 *
 * 2. Server Configuration
 *    - SPA requires server to serve index.html for all routes
 *    - Configure web server to redirect 404s to index.html
 *    - Vite's preview command already does this
 *
 * 3. Browser History
 *    - Uses browser History API
 *    - Supports back/forward buttons
 *    - Browser history is maintained
 *
 * STYLING AND THEMING
 * ===================
 *
 * Brand Colors:
 * - Primary: #5200ff (purple)
 * - Accent: #f5e942 (yellow)
 * - Font: Inter
 *
 * All pages use:
 * - Tailwind CSS utility classes
 * - Dark mode support (dark:)
 * - Responsive design (sm:, md:, lg:)
 * - Brand colors throughout
 *
 * TESTING THE ROUTING
 * ===================
 *
 * Development:
 * npm run dev
 * - Navigate to http://localhost:5173
 * - Click navigation links
 * - Try browser back/forward buttons
 * - Check browser console for router logs
 *
 * Production Build:
 * npm run build
 * npm run preview
 * - Build creates optimized chunks
 * - Preview runs production build locally
 * - Test all routes work correctly
 *
 * TROUBLESHOOTING
 * ===============
 *
 * Routes not working?
 * 1. Check route paths are correct in routes/index.tsx
 * 2. Verify component imports use correct paths
 * 3. Ensure pages export named exports
 * 4. Check console for error messages
 *
 * Lazy loading not working?
 * 1. Verify lazy() import is correct
 * 2. Check .then() returns { default: Component }
 * 3. Ensure Suspense fallback is provided
 * 4. Check network tab in DevTools
 *
 * Page not found on reload?
 * 1. Configure server to serve index.html for all routes
 * 2. Check basename configuration
 * 3. Verify route paths don't have typos
 *
 * REFERENCES
 * ==========
 *
 * React Router Documentation:
 * https://reactrouter.com/
 *
 * React Suspense:
 * https://react.dev/reference/react/Suspense
 *
 * Code Splitting Best Practices:
 * https://webpack.js.org/guides/code-splitting/
 */

export {} // This file is for documentation only
