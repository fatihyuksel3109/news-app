'use client'

import React from 'react';
import { FeaturedArticle } from '@/components/news/FeaturedArticle';
import { ArticleGrid } from '@/components/news/ArticleGrid';
import { OpinionSection } from '@/components/news/OpinionSection';
import { CategorySection } from '@/components/news/CategorySection';
import { getHomePageData } from '@/lib/services/newsService';
import { useLanguage } from '@/lib/context/LanguageContext';
import { useEffect, useState } from 'react';
import { Article } from '@/types/article';
import { Opinion } from '@/types/components';

interface HomeData {
  featuredArticle: Article;
  topArticles: Article[];
  techNews: Article[];
  sportsNews: Article[];
  healthNews: Article[];
  opinions: Opinion[];
}

export default function Home() {
  const { language, t } = useLanguage();
  const [data, setData] = useState<HomeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const newsData = await getHomePageData(language);
        if (!newsData.featuredArticle) {
          throw new Error('No news data available');
        }
        setData(newsData);  
      } catch (err) {
        setError('Failed to load news');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [language]);

  if (isLoading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  if (!data?.featuredArticle) return <div className="p-8 text-center">No news available</div>;

  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <FeaturedArticle
          title={data.featuredArticle.title}
          description={data.featuredArticle.description}
          imageUrl={data.featuredArticle.urlToImage || '/images/default-news.jpg'}
          isLive={true}
          author={data.featuredArticle.author || 'Unknown'}
          category={t('categories.politics')}
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ArticleGrid articles={data.topArticles} />
          </div>
          <aside>
            <OpinionSection opinions={data.opinions} />
          </aside>
        </div>

        <div className="mt-12">
          <CategorySection 
            title={t('categories.technology')}
            articles={data.techNews}
          />
          <CategorySection 
            title={t('categories.sports')}
            articles={data.sportsNews}
          />
          <CategorySection 
            title={t('categories.health')}
            articles={data.healthNews}
          />
        </div>
      </main>
    </div>
  );
}