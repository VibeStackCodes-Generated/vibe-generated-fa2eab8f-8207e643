import { Link, useLocation } from 'react-router-dom'

/**
 * Navigation component for site-wide navigation
 * Displays active route highlighting
 */
export function Navigation() {
  const location = useLocation()

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

  return (
    <nav className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand/Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-[#5200ff]">
            <span className="h-8 w-8 rounded-lg bg-[#5200ff]" />
            App
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-[#5200ff] text-white'
                    : 'text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#c084fc]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
