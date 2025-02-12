export interface Article {
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  author: string
  source: {
    id: string | null
    name: string
  }
  content: string
}

export interface NewsApiResponse {
  status: string
  totalResults: number
  articles: Article[]
} 