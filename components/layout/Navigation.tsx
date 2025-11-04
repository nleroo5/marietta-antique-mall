'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Vendors', href: '/vendors' },
  { label: 'Events', href: '/events' },
  { label: 'Visit Us', href: '#visit-us' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="flex items-center gap-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        const isAnchor = item.href.startsWith('#')

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleScrollTo(e, item.href)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              'hover:bg-primary/10 hover:text-primary',
              isActive ? 'bg-primary/10 text-primary' : 'text-text-secondary'
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
