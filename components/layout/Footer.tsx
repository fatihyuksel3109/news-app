'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 dark:text-white">News Portal</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('footer.tagline')}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 dark:text-white">{t('footer.categories')}</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li><Link href="/technology" className="hover:text-gray-900 dark:hover:text-white">{t('navigation.technology')}</Link></li>
              <li><Link href="/politics" className="hover:text-gray-900 dark:hover:text-white">{t('navigation.politics')}</Link></li>
              <li><Link href="/sports" className="hover:text-gray-900 dark:hover:text-white">{t('navigation.sports')}</Link></li>
              <li><Link href="/health" className="hover:text-gray-900 dark:hover:text-white">{t('navigation.health')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 dark:text-white">{t('footer.company')}</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li><Link href="/about" className="hover:text-gray-900 dark:hover:text-white">{t('footer.about')}</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900 dark:hover:text-white">{t('footer.contact')}</Link></li>
              <li><Link href="/careers" className="hover:text-gray-900 dark:hover:text-white">{t('footer.careers')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 dark:text-white">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li><Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white">{t('footer.privacy')}</Link></li>
              <li><Link href="/terms" className="hover:text-gray-900 dark:hover:text-white">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} News Portal. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
} 