import { useEffect, useRef } from 'react'

/**
 * Hook for accessing the previous value of a prop or state
 * Useful for comparing current vs previous values
 *
 * @param value - Value to track
 * @returns Previous value
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
