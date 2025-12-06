'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  id: string
  title: string
  content: React.ReactNode
  isOpen?: boolean
  onToggle?: (id: string) => void
}

export function AccordionItem({ id, title, content, isOpen = false, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => onToggle?.(id)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-mauve-light/10 transition-colors duration-200 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-black pr-4">{title}</span>
        <svg
          className={cn(
            'w-5 h-5 text-black transition-transform duration-200 flex-shrink-0',
            isOpen && 'rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 py-4 bg-mauve-light/5 text-black border-t border-mauve-light/30">
          {content}
        </div>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: Array<{
    id: string
    title: string
    content: React.ReactNode
  }>
  allowMultiple?: boolean
  defaultOpenIds?: string[]
  className?: string
}

export default function Accordion({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds)

  const handleToggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
      )
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isOpen={openIds.includes(item.id)}
          onToggle={handleToggle}
        />
      ))}
    </div>
  )
}
