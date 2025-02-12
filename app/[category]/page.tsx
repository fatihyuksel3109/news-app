'use client'

import { getNewsByCategory } from '@/lib/api/news'
import { ArticleGrid } from '@/components/news/ArticleGrid'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useEffect, useState } from 'react'
import { Article } from '@/types/article'
import { use } from 'react'

export default function CategoryPage({
  params
}: {
  params: Promise<{ category: string }>
}) {
  const category = use(params).category
  const { language, t } = useLanguage()
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const news = await getNewsByCategory(category, language)
      setArticles(news.articles)
    }
    fetchData()
  }, [category, language])

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {t(`categories.${category}`)}
      </h1>
      <ArticleGrid articles={articles} />
    </main>
  )
} 