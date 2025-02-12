'use client'

import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/lib/context/LanguageContext'
import { useEffect, useState } from 'react'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
} 