import React, { forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helpText?: string
  required?: boolean
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, error, helpText, required, ...props }, ref) => {
    return (
            <div className="space-y-2">
                {label && (
                <label className="flex items-center text-sm font-medium text-gray-700">
                    {label}
                    {required && <span className="ml-1 text-red-500">*</span>}
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
                </label>
                )}
                <input
                ref={ref}
                className={cn(
                    "w-full px-4 py-3 border border-gray-200 rounded-lg",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    "placeholder-gray-400 text-gray-900 text-base",
                    "transition-all duration-200",
                    "bg-white",  // 改为纯白色背景
                    error && "border-red-300 focus:ring-red-500 focus:border-red-500",
                    "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed",
                    "hover:border-gray-300",
                    className
                )}
                {...props}
                />
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

FormInput.displayName = 'FormInput'