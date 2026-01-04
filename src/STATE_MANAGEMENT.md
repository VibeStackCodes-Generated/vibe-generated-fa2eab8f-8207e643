# State Management Guide

This application uses React Context API and custom hooks for state management. This document explains how to use the state management system.

## Overview

The state management system is organized into several contexts and custom hooks:

### Contexts

1. **AppContext** - Global application state (loading, notifications)
2. **UserContext** - User authentication and profile state
3. **ThemeContext** - Theme preferences (light/dark mode)
4. **FormContext** - Form state and validation

### Custom Hooks

1. **useLocalStorage** - Persist state to localStorage
2. **useAsync** - Manage async operations
3. **useDebounce** - Debounce values
4. **usePrevious** - Access previous prop/state values
5. **useStateCallback** - useState with callbacks

## Context API

### AppContext

Manages global application state like loading states and notifications.

```typescript
import { useApp } from '@/context'

function MyComponent() {
  const {
    isLoading,
    setIsLoading,
    showNotification,
    dismissNotification
  } = useApp()

  const handleAction = async () => {
    setIsLoading(true)
    try {
      // Do something
      showNotification('Success!', 'success')
    } catch (error) {
      showNotification('Error occurred', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return <button onClick={handleAction}>Action</button>
}
```

**Available methods:**
- `setIsLoading(boolean)` - Set loading state
- `showNotification(message, type, duration?)` - Show a notification
  - Types: 'success', 'error', 'info', 'warning'
  - Default duration: 3000ms
- `dismissNotification()` - Close current notification

### UserContext

Manages user authentication and profile information.

```typescript
import { useUser } from '@/context'

function UserProfile() {
  const {
    user,
    isAuthenticated,
    loginUser,
    logoutUser,
    updateUser
  } = useUser()

  const handleLogin = () => {
    loginUser({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user'
    })
  }

  if (!isAuthenticated) {
    return <button onClick={handleLogin}>Login</button>
  }

  return (
    <div>
      <p>Welcome, {user?.name}</p>
      <button onClick={logoutUser}>Logout</button>
    </div>
  )
}
```

**Available methods:**
- `loginUser(userData)` - Log in a user
- `logoutUser()` - Log out the current user
- `updateUser(updates)` - Update user information
- `setIsLoadingUser(boolean)` - Set loading state for user operations

### ThemeContext

Manages light/dark mode theme preferences.

```typescript
import { useTheme } from '@/context'

function ThemeToggle() {
  const { theme, isDark, toggleTheme, setTheme } = useTheme()

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>

      {/* Set theme directly */}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <button onClick={() => setTheme('system')}>System Preference</button>
    </div>
  )
}
```

**Available properties:**
- `theme` - Current theme setting ('light', 'dark', or 'system')
- `effectiveTheme` - Actual theme being used ('light' or 'dark')
- `isDark` - Boolean indicating if dark mode is active
- `toggleTheme()` - Toggle between light and dark modes
- `setTheme(theme)` - Set theme explicitly

**Features:**
- System preference detection
- Automatic localStorage persistence
- Syncs across browser tabs
- Applies theme to document root

### FormContext

Manages form state across the application.

```typescript
import { useForm } from '@/context'

function MyForm() {
  const {
    formData,
    updateField,
    addError,
    clearErrors,
    errors,
    isSubmitting,
    resetForm
  } = useForm()

  const handleChange = (field: string, value: string) => {
    updateField(field, value)
    clearErrors(field) // Clear error when user starts typing
  }

  const handleSubmit = () => {
    // Validate
    if (!formData.email) {
      addError('email', 'Email is required')
      return
    }

    // Submit
  }

  return (
    <div>
      <input
        value={formData.name || ''}
        onChange={(e) => handleChange('name', e.target.value)}
      />
      <button onClick={handleSubmit} disabled={isSubmitting}>
        Submit
      </button>
      <button onClick={resetForm}>Reset</button>
    </div>
  )
}
```

**Available methods:**
- `updateField(field, value)` - Update a form field
- `addError(field, message)` - Add validation error
- `clearErrors(field?)` - Clear all errors or specific field error
- `resetForm()` - Reset form to initial state
- `setFormData(data)` - Set entire form data object
- `setFieldTouched(field)` - Mark field as touched
- `setIsSubmitting(boolean)` - Set form submission state

## Custom Hooks

### useLocalStorage

Persist state to browser localStorage and sync across tabs.

```typescript
import { useLocalStorage } from '@/hooks'

function UserPreferences() {
  const [fontSize, setFontSize] = useLocalStorage('user-font-size', 16)

  return (
    <div>
      <p>Font size: {fontSize}px</p>
      <button onClick={() => setFontSize(fontSize + 1)}>Increase</button>
      <button onClick={() => setFontSize(fontSize - 1)}>Decrease</button>
    </div>
  )
}
```

**Features:**
- Automatic JSON serialization/deserialization
- Syncs across browser tabs
- SSR-safe (checks for window)
- Error handling

### useAsync

Manage async operations with automatic loading and error states.

```typescript
import { useAsync } from '@/hooks'

function DataFetcher() {
  const { status, data, error, execute } = useAsync(
    async () => {
      const response = await fetch('/api/data')
      return response.json()
    },
    true // execute immediately
  )

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'error') return <p>Error: {error?.message}</p>
  if (status === 'success') return <p>Data: {JSON.stringify(data)}</p>

  return <button onClick={execute}>Load Data</button>
}
```

**Available states:**
- `idle` - Not started
- `loading` - Request in progress
- `success` - Request completed successfully
- `error` - Request failed

### useDebounce

Debounce value changes, useful for search inputs.

```typescript
import { useDebounce } from '@/hooks'
import { useState } from 'react'

function SearchUsers() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  // Only runs API call when user stops typing for 500ms
  useEffect(() => {
    if (debouncedSearch) {
      searchAPI(debouncedSearch)
    }
  }, [debouncedSearch])

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  )
}
```

### usePrevious

Access the previous value of a prop or state.

```typescript
import { usePrevious } from '@/hooks'

function Counter({ count }) {
  const prevCount = usePrevious(count)

  return (
    <div>
      Now: {count}, Before: {prevCount}
    </div>
  )
}
```

### useStateCallback

setState with callback support.

```typescript
import { useStateCallback } from '@/hooks'

function MyComponent() {
  const [count, setCount] = useStateCallback(0)

  const increment = () => {
    setCount(count + 1, (newCount) => {
      console.log('Count updated to:', newCount)
    })
  }

  return <button onClick={increment}>Increment</button>
}
```

## Combining Contexts and Hooks

You can combine multiple contexts and hooks in a single component:

```typescript
import { useApp, useUser, useTheme } from '@/context'
import { useLocalStorage, useDebounce } from '@/hooks'

function ComplexComponent() {
  // Contexts
  const { showNotification } = useApp()
  const { user, isAuthenticated } = useUser()
  const { isDark } = useTheme()

  // Custom hooks
  const [preference, setPreference] = useLocalStorage('pref', 'default')
  const [input, setInput] = useState('')
  const debouncedInput = useDebounce(input)

  // Use all together
  if (!isAuthenticated) {
    return <p>Please log in</p>
  }

  return (
    <div className={isDark ? 'dark' : 'light'}>
      {/* Your component content */}
    </div>
  )
}
```

## Best Practices

1. **Keep contexts focused** - Each context should manage a specific domain
2. **Use custom hooks for complex logic** - Extract repeated patterns into custom hooks
3. **Combine contexts wisely** - Use multiple contexts together when needed
4. **Persist with caution** - Only persist necessary data to localStorage
5. **Handle errors gracefully** - Always handle async errors with try/catch
6. **Clean up listeners** - Hooks automatically clean up, but verify on complex hooks
7. **Type your context values** - Always provide TypeScript types for context values

## Migration Guide

If migrating from other state management:

### From useState prop drilling
```typescript
// Before: Prop drilling
<Parent data={data}>
  <Child data={data}>
    <GrandChild data={data} />
  </Child>
</Parent>

// After: Context
import { useUser } from '@/context'
function GrandChild() {
  const { user } = useUser()
  return <div>{user.name}</div>
}
```

### From Redux
```typescript
// Before: Redux actions and reducers
dispatch(setUser(userData))

// After: Context hooks
const { loginUser } = useUser()
loginUser(userData)
```

## Debugging

Enable React DevTools browser extension to inspect context values and hook changes in your components.

```typescript
// Add to component to log context changes
function MyComponent() {
  const context = useTheme()
  console.log('Theme context:', context)
}
```

## Performance Optimization

For large applications, consider memoization:

```typescript
import { useMemo } from 'react'

function MyComponent() {
  const { user } = useUser()

  const memoizedValue = useMemo(() => {
    return expensiveCalculation(user)
  }, [user])

  return <div>{memoizedValue}</div>
}
```
