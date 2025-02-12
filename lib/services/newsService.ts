import { getTopNews, getNewsByCategory } from '@/lib/api/news'
import { Language } from '@/lib/i18n/translations'
import { Article } from '@/lib/types/article'
function ensureValidImageUrl(article: Article) {
  // If the image is from lesechos.com, use a fallback image
  if (article.urlToImage?.includes('lesechos.com') || 
      article.urlToImage?.includes('lemonde.fr')) {
    return {
      ...article,
      urlToImage: '/images/default-news.jpg' // Make sure to add this image to your public folder
    };
  }
  return article;
}

export async function getHomePageData(language: Language = 'en') {
  try {
    // For French, we'll use French news sources like Le Monde, Les Echos, Liberation
    const sources = language === 'fr' ? 
      'le-monde,les-echos,liberation' : 
      'reuters,associated-press,bloomberg';

    const [topNews, techNews, sportsNews, healthNews] = await Promise.all([
      getTopNews(sources),
      getNewsByCategory('technology', language),
      getNewsByCategory('sports', language),
      getNewsByCategory('health', language)
    ])

    // Check if we have valid data
    if (!topNews?.articles?.length) {
      throw new Error('No top news available');
    }

    const processedTopNews = topNews.articles.map(ensureValidImageUrl);
    const processedTechNews = techNews.articles.map(ensureValidImageUrl);
    const processedSportsNews = sportsNews.articles.map(ensureValidImageUrl);
    const processedHealthNews = healthNews.articles.map(ensureValidImageUrl);

    const opinions = language === 'fr' ? [
      {
        author: "Jean Dupont",
        title: "L'Avenir de l'IA",
        excerpt: "Alors que nous regardons vers l'avenir de l'intelligence artificielle...",
        avatarUrl: "/avatars/jean.jpg"
      },
      {
        author: "Marie Laurent",
        title: "La Réalité du Changement Climatique",
        excerpt: "Nous devons agir maintenant pour faire face au changement climatique...",
        avatarUrl: "/avatars/marie.jpg"
      }
    ] : [
      {
        author: "John Doe",
        title: "The Future of AI",
        excerpt: "As we look into the future of artificial intelligence...",
        avatarUrl: "/avatars/john.jpg"
      },
      {
        author: "Jane Smith",
        title: "Climate Change Reality",
        excerpt: "We must act now to address climate change...",
        avatarUrl: "/avatars/jane.jpg"
      }
    ]
    
    return {
      featuredArticle: processedTopNews[0],
      topArticles: processedTopNews.slice(1) || [],
      techNews: processedTechNews || [],
      sportsNews: processedSportsNews || [],
      healthNews: processedHealthNews || [],
      opinions
    }
  } catch (error) {
    console.error('Error fetching news data:', error)
    // Return default data structure with empty arrays
    return {
      featuredArticle: null,
      topArticles: [],
      techNews: [],
      sportsNews: [],
      healthNews: [],
      opinions: []
    }
  }
} 