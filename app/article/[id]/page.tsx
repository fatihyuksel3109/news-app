import Image from 'next/image'
import { getArticleById } from '@/lib/api/news'

export default async function ArticlePage({
  params
}: {
  params: { id: string }
}) {
  const article = await getArticleById(params.id)

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <p>By {article.author || 'Unknown'}</p>
          <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
        </div>
        
        {article.urlToImage && (
          <div className="relative h-[400px] mb-8">
            <Image
              src={article.urlToImage}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        
        <div className="prose max-w-none">
          <p className="text-xl mb-4">{article.description}</p>
          <div>{article.content}</div>
        </div>
      </article>
    </main>
  )
} 