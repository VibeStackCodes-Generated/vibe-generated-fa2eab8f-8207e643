import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

/**
 * Form state management context
 * Handles form data, validation, and submission state across the app
 */
interface FormError {
  field: string
  message: string
}

interface FormContextType {
  formData: Record<string, unknown>
  isSubmitting: boolean
  errors: FormError[]
  touched: Set<string>
  setFormData: (data: Record<string, unknown>) => void
  updateField: (field: string, value: unknown) => void
  setFieldTouched: (field: string) => void
  setIsSubmitting: (submitting: boolean) => void
  setErrors: (errors: FormError[]) => void
  addError: (field: string, message: string) => void
  clearErrors: (field?: string) => void
  resetForm: () => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormDataState] = useState<Record<string, unknown>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormError[]>([])
  const [touched, setTouched] = useState<Set<string>>(new Set())

  const setFormData = useCallback((data: Record<string, unknown>) => {
    setFormDataState(data)
  }, [])

  const updateField = useCallback((field: string, value: unknown) => {
    setFormDataState(prev => ({
      ...prev,
      [field]: value,
    }))
  }, [])

  const setFieldTouched = useCallback((field: string) => {
    setTouched(prev => new Set([...prev, field]))
  }, [])

  const addError = useCallback((field: string, message: string) => {
    setErrors(prev => {
      // Remove existing error for this field if present
      const filtered = prev.filter(e => e.field !== field)
      return [...filtered, { field, message }]
    })
  }, [])

  const clearErrors = useCallback((field?: string) => {
    if (field) {
      setErrors(prev => prev.filter(e => e.field !== field))
    } else {
      setErrors([])
    }
  }, [])

  const resetForm = useCallback(() => {
    setFormDataState({})
    setErrors([])
    setTouched(new Set())
    setIsSubmitting(false)
  }, [])

  return (
    <FormContext.Provider
      value={{
        formData,
        isSubmitting,
        errors,
        touched,
        setFormData,
        updateField,
        setFieldTouched,
        setIsSubmitting,
        setErrors,
        addError,
        clearErrors,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

/**
 * Hook to use FormContext
 * @throws Error if used outside of FormProvider
 */
export function useForm() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider')
  }
  return context
}
