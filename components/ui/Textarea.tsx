import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-black mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-lg border transition-all duration-200',
            'text-black placeholder:text-black',
            'focus:outline-none focus:ring-2 focus:ring-offset-1',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50',
            'resize-y min-h-[120px]',
            error
              ? 'border-error focus:ring-error focus:border-error'
              : 'border-gray-300 focus:ring-mauve focus:border-mauve hover:border-mauve-dark',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-black">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-2 text-sm text-black">{helperText}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
