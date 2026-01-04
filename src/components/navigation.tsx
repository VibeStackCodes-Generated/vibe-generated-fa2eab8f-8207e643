import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

/**
 * Navigation component for site-wide navigation
 * Displays active route highlighting with mobile-responsive menu
 * Features:
 * - Responsive design with hamburger menu on mobile
 * - Active route highlighting
 * - Dark mode support
 * - Smooth transitions and hover effects
 */
export function Navigation() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string): boolean => {
    if (path === '/' && location.pathname === '/') {
      return true
    }
    return path !== '/' && location.pathname.startsWith(path)
  }

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/95 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand/Logo - Responsive sizing */}
          <Link
            to="/"
            className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[#5200ff] hover:text-[#4100dd] dark:hover:text-[#c084fc] transition-colors duration-200 focus-ring"
            onClick={handleNavClick}
          >
            <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#5200ff] to-[#4100dd] shadow-md" />
            <span className="hidden sm:inline">App</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-1 lg:gap-2">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-200 focus-ring ${
                  isActive(item.path)
                    ? 'bg-[#5200ff] text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors duration-200 focus-ring"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 focus-ring ${
                    isActive(item.path)
                      ? 'bg-[#5200ff] text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
