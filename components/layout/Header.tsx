'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()

  return (
    <header className="border-b dark:border-gray-700 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-2xl font-bold dark:text-white">
            News Portal
          </Link>
          
          <nav className="flex items-center gap-8">
            <ul className="flex gap-6 dark:text-white">
              <li><Link href="/technology">{t('navigation.technology')}</Link></li>
              <li><Link href="/politics">{t('navigation.politics')}</Link></li>
              <li><Link href="/sports">{t('navigation.sports')}</Link></li>
              <li><Link href="/health">{t('navigation.health')}</Link></li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-2 px-3 py-2 rounded ${
                  language === 'en' ? 'bg-gray-200 dark:bg-gray-700' : ''
                }`}
              >
                <Image
                  src="/flags/en.svg"
                  alt="English"
                  width={20}
                  height={20}
                  className="rounded-sm"
                  priority
                />
                <span className="dark:text-white">EN</span>
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`flex items-center gap-2 px-3 py-2 rounded ${
                  language === 'fr' ? 'bg-gray-200 dark:bg-gray-700' : ''
                }`}
              >
                <Image
                  src="/flags/fr.svg"
                  alt="Français"
                  width={20}
                  height={20}
                  className="rounded-sm"
                  priority
                />
                <span className="dark:text-white">FR</span>
              </button>
            </div>

            {/* Theme Switcher */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-white" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 