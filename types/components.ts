import { Article } from './article'

export interface FeaturedArticleProps {
  title: string
  description: string
  imageUrl: string
  isLive?: boolean
  author: string
  category: string
}

export interface ArticleGridProps {
  articles: Article[]
}

export interface Opinion {
  author: string
  title: string
  excerpt: string
  avatarUrl: string
}

export interface OpinionSectionProps {
  opinions: Opinion[]
}

export interface CategorySectionProps {
  title: string
  articles: Article[]
} 