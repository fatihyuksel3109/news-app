import axios from 'axios'
import { Language } from '@/lib/i18n/translations'

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY

if (!API_KEY) {
  throw new Error('News API key is not configured')
}

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': API_KEY
  }
})

export const getTopNews = async (sources: string) => {
  const response = await newsApi.get('/top-headlines', {
    params: {
      sources,
      pageSize: 10
    }
  })
  return response.data
}

export const getNewsByCategory = async (category: string, language: Language = 'en') => {
  const response = await newsApi.get('/top-headlines', {
    params: {
      language,
      country: language === 'fr' ? 'fr' : 'us',
      category,
      pageSize: 10
    }
  })
  return response.data
}

export const getArticleById = async (id: string) => {
  // Since NewsAPI doesn't provide single article endpoint,
  // we'll need to encode the article data in the URL and decode it here
  const decodedArticle = JSON.parse(decodeURIComponent(id))
  return decodedArticle
} 