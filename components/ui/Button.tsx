'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-2'

  const variants = {
    primary: 'border-mauve text-black bg-transparent hover:bg-mauve hover:text-black focus:ring-mauve',
    secondary: 'border-secondary text-black bg-transparent hover:bg-secondary hover:text-white focus:ring-secondary',
    accent: 'border-mauve text-black bg-transparent hover:bg-mauve hover:text-white focus:ring-mauve',
    outline: 'border-mauve text-black bg-transparent hover:bg-mauve hover:text-black focus:ring-mauve',
    ghost: 'border-transparent text-black bg-transparent hover:bg-mauve/10 focus:ring-mauve',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
