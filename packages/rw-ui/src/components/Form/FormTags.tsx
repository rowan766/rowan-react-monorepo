import React, { useState, forwardRef, KeyboardEvent } from 'react'
import { cn } from '../../utils/cn'

export interface FormTagsProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  label?: string
  error?: string
  helpText?: string
  required?: boolean
  value?: string[]
  onChange?: (tags: string[]) => void
  placeholder?: string
  maxTags?: number
  allowDuplicates?: boolean
  addOnEnter?: boolean
  addOnBlur?: boolean
  separator?: string
}

export const FormTags = forwardRef<HTMLInputElement, FormTagsProps>(
  ({ 
    className, 
    label, 
    error, 
    helpText, 
    required, 
    value = [], 
    onChange,
    placeholder = "Enter tag name and press Enter or click the add button",
    maxTags,
    allowDuplicates = false,
    addOnEnter = true,
    addOnBlur = false,
    separator = ",",
    ...props 
  }, ref) => {
    const [inputValue, setInputValue] = useState('')

    const addTag = (tagValue: string = inputValue) => {
      const trimmedValue = tagValue.trim()
      
      if (!trimmedValue) return
      
      if (maxTags && value.length >= maxTags) return
      
      if (!allowDuplicates && value.includes(trimmedValue)) return

      const newTags = [...value, trimmedValue]
      onChange?.(newTags)
      setInputValue('')
    }

    const removeTag = (index: number) => {
      const newTags = value.filter((_, i) => i !== index)
      onChange?.(newTags)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (addOnEnter && e.key === 'Enter') {
        e.preventDefault()
        addTag()
      }
      
      if (e.key === 'Backspace' && !inputValue && value.length > 0) {
        removeTag(value.length - 1)
      }
    }

    const handleBlur = () => {
      if (addOnBlur) {
        addTag()
      }
    }

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault()
      const pastedText = e.clipboardData.getData('text')
      const tags = pastedText.split(separator).map(tag => tag.trim()).filter(tag => tag)
      
      tags.forEach(tag => {
        if (maxTags && value.length >= maxTags) return
        if (!allowDuplicates && value.includes(tag)) return
        
        const newTags = [...value, tag]
        onChange?.(newTags)
      })
    }

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
        
        {/* 主要标签输入区域 */}
        <div
          className={cn(
            "min-h-[48px] w-full border border-gray-200 rounded-lg p-3",
            "focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500",
            "transition-all duration-200",
            error && "border-red-300 focus-within:ring-red-500",
            "bg-white",
            "hover:border-gray-300"
          )}
        >
          {/* 输入框区域 */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <input
                ref={ref}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                onPaste={handlePaste}
                placeholder={placeholder}
                disabled={maxTags ? value.length >= maxTags : false}
                className={cn(
                  "w-full outline-none border-none bg-transparent text-base",
                  "placeholder-gray-400 text-gray-900",
                  "disabled:text-gray-500 disabled:cursor-not-allowed",
                  className
                )}
                {...props}
              />
            </div>
            
            {/* 添加按钮 */}
            <button
              type="button"
              onClick={() => addTag()}
              disabled={!inputValue.trim() || (maxTags ? value.length >= maxTags : false)}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                "transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",
                inputValue.trim() && (!maxTags || value.length < maxTags)
                  ? "bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              )}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* 辅助文本 */}
        <div className="text-sm text-gray-500">
          {placeholder}
        </div>
        
        {/* 已添加的标签 */}
        {value.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {value.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1.5 text-sm bg-blue-100 text-blue-800 rounded-lg border border-blue-200"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(index)}
                  className="ml-2 hover:text-blue-600 focus:outline-none transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            ))}
          </div>
        )}
        
        {/* 显示标签数量限制 */}
        {maxTags && (
          <p className="text-xs text-gray-500">
            {value.length} / {maxTags} 标签
          </p>
        )}
        
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

FormTags.displayName = 'FormTags'