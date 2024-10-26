'use client'

import { cn } from '@/lib/utils'
import { menuItems } from '@/shared/constants'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [active, setActive] = useState('Trang chủ')

  return (
    <nav className="flex gap-8 p-4 bg-background text-foreground">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            active === item.name ? 'text-foreground' : 'text-[#62646C]',
            'relative pb-1 hover:text-foreground transition'
          )}
          onClick={() => setActive(item.name)}
        >
          {item.name}
          {active === item.name && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFC0D3]" />
          )}
        </Link>
      ))}
    </nav>
  )
}
