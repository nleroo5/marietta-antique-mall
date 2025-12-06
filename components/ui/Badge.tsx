import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'mint' | 'mauve' | 'magenta' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  children: React.ReactNode
}

export default function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-black',
    primary: 'bg-mauve-light/20 text-black',
    mint: 'bg-mauve-light/20 text-black', // Legacy alias for mauve
    mauve: 'bg-mauve-light/20 text-black',
    magenta: 'bg-mauve-light/20 text-black', // Legacy alias for mauve
    secondary: 'bg-secondary/10 text-black',
    success: 'bg-success/10 text-black',
    warning: 'bg-warning/10 text-black',
    danger: 'bg-error/10 text-black',
    info: 'bg-info/10 text-black',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
