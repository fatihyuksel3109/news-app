'use client'

import { Article } from '@/lib/types/article'
import Link from 'next/link'

interface CategorySectionProps {
  title: string
  articles: Article[]
}

export function CategorySection({ title, articles }: CategorySectionProps) {
  const encodeArticle = (article: Article) => {
    return encodeURIComponent(JSON.stringify(article))
  }

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {articles?.map((article) => (
          <Link 
            href={`/article/${encodeArticle(article)}`}
            key={article.url}
          >
            <article className="border rounded p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-bold">{article.title}</h3>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
} 