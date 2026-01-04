import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * State for async operations
 */
interface AsyncState<T> {
  status: 'idle' | 'loading' | 'success' | 'error'
  data: T | null
  error: Error | null
}

/**
 * Hook for managing async operations
 * Automatically handles loading, success, and error states
 *
 * @param asyncFunction - Async function to execute
 * @param immediate - Whether to execute immediately (default: true)
 * @returns Current state and execute function
 */
export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate = true
): AsyncState<T> & { execute: () => Promise<void> } {
  const [state, setState] = useState<AsyncState<T>>({
    status: 'idle',
    data: null,
    error: null,
  })

  // Use ref to track if component is mounted
  const mountedRef = useRef(true)

  const execute = useCallback(async () => {
    setState({ status: 'loading', data: null, error: null })
    try {
      const response = await asyncFunction()
      if (mountedRef.current) {
        setState({ status: 'success', data: response, error: null })
      }
    } catch (error) {
      if (mountedRef.current) {
        setState({
          status: 'error',
          data: null,
          error: error instanceof Error ? error : new Error(String(error)),
        })
      }
    }
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }

    return () => {
      mountedRef.current = false
    }
  }, [execute, immediate])

  return { ...state, execute }
}
