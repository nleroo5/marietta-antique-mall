'use client'

import React, { forwardRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface SearchBarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onSearch?: (value: string) => void
  onClear?: () => void
  showClearButton?: boolean
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, onSearch, onClear, showClearButton = true, onChange, value, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState('')
    const displayValue = value !== undefined ? value : internalValue

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      if (value === undefined) {
        setInternalValue(newValue)
      }
      onChange?.(e)
    }

    const handleClear = () => {
      if (value === undefined) {
        setInternalValue('')
      }
      onClear?.()
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSearch) {
        onSearch(displayValue as string)
      }
    }

    return (
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg
            className="h-5 w-5 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          ref={ref}
          type="search"
          value={displayValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={cn(
            'w-full pl-11 pr-12 py-3 rounded-lg border transition-all duration-200',
            'text-black placeholder:text-black',
            'focus:outline-none focus:ring-2 focus:ring-offset-1',
            'border-gray-300 focus:ring-mauve focus:border-mauve hover:border-mauve-dark',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50',
            className
          )}
          {...props}
        />
        {showClearButton && displayValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-black hover:text-black transition-colors"
            aria-label="Clear search"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    )
  }
)

SearchBar.displayName = 'SearchBar'

export default SearchBar
