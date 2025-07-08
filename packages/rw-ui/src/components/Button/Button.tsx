import React from 'react'

export interface ButtonProps {
  /**
   * 按钮类型
   */
  type?: 'primary' | 'secondary' | 'outline'
  /**
   * 按钮尺寸
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 按钮内容
   */
  children: React.ReactNode
  /**
   * 点击事件
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /**
   * 自定义类名
   */
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const typeClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500'
  }
  
  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  }
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  
  const buttonClasses = `${baseClasses} ${typeClasses[type]} ${sizeClasses[size]} ${disabledClasses} ${className}`.trim()
  
  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}