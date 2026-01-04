import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Hook that extends useState with a callback function
 * Callback fires after state update is complete
 *
 * @param initialState - Initial state value
 * @returns [state, setState] - setState supports a callback as second argument
 */
export function useStateCallback<T>(
  initialState: T | (() => T)
): [T, (newState: T | ((prev: T) => T), callback?: (state: T) => void) => void] {
  const [state, setState] = useState<T>(initialState)
  const callbackRef = useRef<((state: T) => void) | undefined>()

  const setStateWithCallback = useCallback(
    (newState: T | ((prev: T) => T), callback?: (state: T) => void) => {
      callbackRef.current = callback
      setState(newState)
    },
    []
  )

  useEffect(() => {
    callbackRef.current?.(state)
    callbackRef.current = undefined
  }, [state])

  return [state, setStateWithCallback]
}
