import { getNewsByCategory } from '@/lib/api/news'
import { ArticleGrid } from '@/components/news/ArticleGrid'

export default async function CategoryPage({
  params
}: {
  params: { category: string }
}) {
  const news = await getNewsByCategory(params.category)
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{params.category} News</h1>
      <ArticleGrid articles={news.articles} />
    </main>
  )
} 