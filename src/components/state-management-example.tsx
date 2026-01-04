import { useApp } from '@/context/app-context'
import { useUser } from '@/context/user-context'
import { useTheme } from '@/context/theme-context'
import { useForm } from '@/context/form-context'
import { useLocalStorage, useDebounce } from '@/hooks'
import { useState } from 'react'

/**
 * Example component demonstrating state management usage
 * Shows how to use contexts and custom hooks throughout the application
 *
 * Features demonstrated:
 * - Using AppContext for global notifications
 * - Using UserContext for user state
 * - Using ThemeContext for theme management
 * - Using FormContext for form state
 * - Using custom hooks (useLocalStorage, useDebounce)
 */
export function StateManagementExample() {
  const { showNotification, isLoading } = useApp()
  const { user, isAuthenticated, loginUser, logoutUser } = useUser()
  const { theme, toggleTheme, isDark } = useTheme()
  const { formData, updateField, addError, clearErrors } = useForm()
  const [counter, setCounter] = useLocalStorage<number>('app-counter', 0)
  const [searchInput, setSearchInput] = useState('')
  const debouncedSearch = useDebounce(searchInput, 300)

  const handleNotification = () => {
    showNotification('This is a success notification!', 'success', 3000)
  }

  const handleLogin = () => {
    loginUser({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user',
    })
    showNotification('User logged in successfully', 'success')
  }

  const handleLogout = () => {
    logoutUser()
    showNotification('User logged out', 'info')
  }

  const handleFormUpdate = () => {
    updateField('testField', 'test value')
    showNotification('Form field updated', 'info')
  }

  const handleError = () => {
    addError('email', 'Invalid email address')
    showNotification('Form validation error', 'error')
  }

  const handleClearError = () => {
    clearErrors('email')
    showNotification('Error cleared', 'info')
  }

  return (
    <div className="space-y-6 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          State Management Demo
        </h2>

        {/* App Context Demo */}
        <div className="card">
          <h3 className="font-semibold text-lg mb-3">App Context</h3>
          <button
            onClick={handleNotification}
            disabled={isLoading}
            className="btn-primary"
          >
            Show Notification
          </button>
          {isLoading && <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Loading...</p>}
        </div>

        {/* User Context Demo */}
        <div className="card">
          <h3 className="font-semibold text-lg mb-3">User Context</h3>
          <div className="space-y-3">
            {isAuthenticated && user ? (
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm font-medium text-green-900 dark:text-green-200">
                  Logged in as: <span className="font-bold">{user.name}</span>
                </p>
                <p className="text-xs text-green-800 dark:text-green-300">Email: {user.email}</p>
                <p className="text-xs text-green-800 dark:text-green-300">Role: {user.role}</p>
              </div>
            ) : (
              <p className="text-sm text-gray-600 dark:text-gray-400">Not logged in</p>
            )}
            <div className="flex gap-2">
              <button
                onClick={handleLogin}
                disabled={isAuthenticated}
                className="btn-primary text-sm"
              >
                Login Demo
              </button>
              <button
                onClick={handleLogout}
                disabled={!isAuthenticated}
                className="btn-secondary text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Theme Context Demo */}
        <div className="card">
          <h3 className="font-semibold text-lg mb-3">Theme Context</h3>
          <div className="space-y-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Current theme: <span className="font-bold">{theme}</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Effective theme: <span className="font-bold">{isDark ? 'Dark' : 'Light'}</span>
            </p>
            <button onClick={toggleTheme} className="btn-primary text-sm">
              Toggle Theme
            </button>
          </div>
        </div>

        {/* Form Context Demo */}
        <div className="card">
          <h3 className="font-semibold text-lg mb-3">Form Context</h3>
          <div className="space-y-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Form data: <span className="font-mono text-xs">{JSON.stringify(formData)}</span>
            </p>
            <div className="flex gap-2">
              <button onClick={handleFormUpdate} className="btn-primary text-sm">
                Update Form Field
              </button>
              <button onClick={handleError} className="btn-secondary text-sm">
                Add Error
              </button>
              <button onClick={handleClearError} className="btn-secondary text-sm">
                Clear Error
              </button>
            </div>
          </div>
        </div>

        {/* useLocalStorage Demo */}
        <div className="card">
          <h3 className="font-semibold text-lg mb-3">useLocalStorage Hook</h3>
          <div className="space-y-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Persistent counter: <span className="font-bold">{counter}</span>
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setCounter(counter + 1)}
                className="btn-primary text-sm"
              >
                Increment
              </button>
              <button
                onClick={() => setCounter(0)}
                className="btn-secondary text-sm"
              >
                Reset
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              This value persists in localStorage and survives page reloads
            </p>
          </div>
        </div>

        {/* useDebounce Demo */}
        <div className="card">
          <h3 className="font-semibold text-lg mb-3">useDebounce Hook</h3>
          <div className="space-y-3">
            <input
              type="text"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              placeholder="Type to search (debounced after 300ms)..."
              className="form-input text-sm"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Raw input: <span className="font-mono text-xs">{searchInput}</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Debounced value: <span className="font-mono text-xs">{debouncedSearch}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
