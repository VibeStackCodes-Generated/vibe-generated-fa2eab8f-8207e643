import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

/**
 * Application-wide state
 * Manages global application settings and UI state
 */
interface AppContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  notification: Notification | null
  showNotification: (message: string, type: NotificationType, duration?: number) => void
  dismissNotification: () => void
}

export type NotificationType = 'success' | 'error' | 'info' | 'warning'

export interface Notification {
  id: string
  message: string
  type: NotificationType
  timestamp: number
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState<Notification | null>(null)

  const showNotification = useCallback(
    (message: string, type: NotificationType, duration = 3000) => {
      const id = `${Date.now()}-${Math.random()}`
      setNotification({
        id,
        message,
        type,
        timestamp: Date.now(),
      })

      if (duration > 0) {
        setTimeout(() => {
          setNotification(prev => (prev?.id === id ? null : prev))
        }, duration)
      }
    },
    []
  )

  const dismissNotification = useCallback(() => {
    setNotification(null)
  }, [])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        notification,
        showNotification,
        dismissNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

/**
 * Hook to use AppContext
 * @throws Error if used outside of AppProvider
 */
export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
