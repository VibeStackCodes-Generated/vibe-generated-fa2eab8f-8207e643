import React, { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

/**
 * ErrorBoundary component
 * Catches React component errors and displays a user-friendly error message
 * Features:
 * - Responsive error UI for all screen sizes
 * - Dark mode support
 * - Development-friendly error details
 * - Recovery mechanism with reset button
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 px-4 py-6 sm:py-8 lg:py-12">
          <div className="w-full max-w-md sm:max-w-lg rounded-lg border border-red-200 bg-white p-6 sm:p-8 shadow-elevated dark:border-red-900 dark:bg-gray-900 animate-in fade-in zoom-in-95 duration-200">
            {/* Error Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30">
              <svg
                className="h-6 w-6 text-red-600 dark:text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4v2m0 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Error Title */}
            <h2 className="mb-2 text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
              Something went wrong
            </h2>

            {/* Error Description */}
            <p className="mb-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              An unexpected error occurred. We apologize for the inconvenience. Please try again or
              contact support if the problem persists.
            </p>

            {/* Error Details (Development only) */}
            {this.state.error && import.meta.env.DEV && (
              <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4 dark:bg-red-950/30 dark:border-red-900">
                <p className="mb-2 text-xs font-semibold text-red-700 dark:text-red-300 uppercase tracking-wide">
                  Error Details (Development)
                </p>
                <p className="text-xs sm:text-sm font-mono text-red-800 dark:text-red-200 overflow-auto max-h-24">
                  {this.state.error.message}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-3">
              <button
                onClick={this.handleReset}
                className="flex-1 inline-flex items-center justify-center rounded-lg bg-[#5200ff] px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all duration-200 hover:bg-[#4100dd] dark:hover:bg-[#6300ff] focus-ring shadow-md hover:shadow-lg active:scale-95"
              >
                <svg
                  className="h-4 w-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Try Again
              </button>
              <a
                href="/"
                className="flex-1 inline-flex items-center justify-center rounded-lg border-2 border-[#5200ff] px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-[#5200ff] dark:text-[#c084fc] dark:border-[#c084fc] transition-all duration-200 hover:bg-[#5200ff] hover:text-white dark:hover:bg-[#c084fc] dark:hover:text-gray-950 focus-ring"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
