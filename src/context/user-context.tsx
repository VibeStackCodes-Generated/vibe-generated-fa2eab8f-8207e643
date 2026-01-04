import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

/**
 * User state and authentication management
 * Manages user profile, authentication status, and user preferences
 */
interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'user' | 'admin'
  createdAt: Date
}

interface UserContextType {
  user: User | null
  isAuthenticated: boolean
  isLoadingUser: boolean
  loginUser: (userData: Omit<User, 'createdAt'>) => void
  logoutUser: () => void
  updateUser: (updates: Partial<User>) => void
  setIsLoadingUser: (loading: boolean) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoadingUser, setIsLoadingUser] = useState(false)

  const loginUser = useCallback((userData: Omit<User, 'createdAt'>) => {
    setUser({
      ...userData,
      createdAt: new Date(),
    })
  }, [])

  const logoutUser = useCallback(() => {
    setUser(null)
  }, [])

  const updateUser = useCallback((updates: Partial<User>) => {
    setUser(prev => {
      if (!prev) return null
      return { ...prev, ...updates }
    })
  }, [])

  const isAuthenticated = user !== null

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoadingUser,
        loginUser,
        logoutUser,
        updateUser,
        setIsLoadingUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

/**
 * Hook to use UserContext
 * @throws Error if used outside of UserProvider
 */
export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
