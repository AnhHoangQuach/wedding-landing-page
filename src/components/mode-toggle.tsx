'use client'

import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure the component only renders after mounting to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSwitch = (value: boolean) => {
    setTheme(value ? 'dark' : 'light')
  }

  if (!mounted) {
    return <Switch />
  }

  return <Switch id="theme-mode" onCheckedChange={handleSwitch} checked={resolvedTheme === 'dark'} />
}
