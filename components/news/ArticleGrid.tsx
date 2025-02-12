'use client'

import { ArticleGridProps } from '@/types/components'
import Link from 'next/link'
import Image from 'next/image'

export function ArticleGrid({ articles }: ArticleGridProps) {
  const encodeArticle = (article: ArticleGridProps['articles'][number]) => {
    return encodeURIComponent(JSON.stringify(article))
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {articles?.map((article) => (
        <Link 
          href={`/article/${encodeArticle(article)}`} 
          key={article.url}
        >
          <article className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            {article.urlToImage && (
              <div className="relative h-48 mb-4">
                <Image
                  src={article.urlToImage}
                  alt={article.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}
            <h3 className="font-bold">{article.title}</h3>
            <p className="text-gray-600 mt-2">{article.description}</p>
          </article>
        </Link>
      ))}
    </div>
  )
} 