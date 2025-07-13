import React, { forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface FormToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  description?: string
  error?: string
  helpText?: string
}

export const FormToggle = forwardRef<HTMLInputElement, FormToggleProps>(
  ({ className, label, description, error, helpText, checked, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <div className="relative">
                <input
                  ref={ref}
                  type="checkbox"
                  checked={checked}
                  className="sr-only"
                  {...props}
                />
                <div
                  className={cn(
                    "block w-12 h-6 rounded-full transition-colors duration-200 ease-in-out cursor-pointer",
                    checked ? "bg-blue-500" : "bg-gray-300",
                    error && "ring-2 ring-red-500 ring-offset-2"
                  )}
                  onClick={() => props.onChange?.({ target: { checked: !checked } } as any)}
                >
                  <div
                    className={cn(
                      "absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-200 ease-in-out shadow-sm",
                      checked ? "transform translate-x-6" : "transform translate-x-0"
                    )}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              {label && (
                <div className="flex items-center">
                  <label className="text-sm font-medium text-gray-700 cursor-pointer">
                    {label}
                  </label>
                  {helpText && (
                    <div className="ml-2 group relative">
                      <svg
                        className="w-4 h-4 text-gray-400 cursor-help"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <circle cx="12" cy="17" r="1" />
                      </svg>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                        {helpText}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {description && (
                <p className="text-sm text-gray-500 mt-1">{description}</p>
              )}
            </div>
          </div>
        </div>
        
        {error && (
          <p className="text-sm text-red-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}
      </div>
    )
  }
)

FormToggle.displayName = 'FormToggle'