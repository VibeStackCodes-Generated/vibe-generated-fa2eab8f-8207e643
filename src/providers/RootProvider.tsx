import { ReactNode } from 'react'
import { AppProvider } from '@/context/app-context'
import { UserProvider } from '@/context/user-context'
import { ThemeProvider } from '@/context/theme-context'
import { FormProvider } from '@/context/form-context'

/**
 * Root provider component
 * Combines all context providers in the correct order
 * Providers are ordered so that parent contexts are available to child contexts
 *
 * Order:
 * 1. ThemeProvider - Base layer for theme management
 * 2. AppProvider - Global app state
 * 3. UserProvider - User state
 * 4. FormProvider - Form state
 */
export function RootProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AppProvider>
        <UserProvider>
          <FormProvider>
            {children}
          </FormProvider>
        </UserProvider>
      </AppProvider>
    </ThemeProvider>
  )
}
