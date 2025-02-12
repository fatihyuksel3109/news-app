'use client'

import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/lib/context/LanguageContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
} 