# Modern News Portal

## Overview
A sophisticated news portal built with Next.js 14, featuring a modern design inspired by leading news websites. This application provides a rich news browsing experience with real-time updates, categorized content, and personalized features.

## Features
- **Modern UI Components**
  - Responsive header with navigation
  - Featured article sections
  - Article grid layouts
  - Opinion sections with author profiles
  - Category-based news sections
  - Live news indicators
  - Interactive search functionality
  - Social sharing buttons
  - Newsletter subscription
  - Reading time estimates

- **Core Functionalities**
  - Real-time news updates
  - Category-based filtering
  - Search functionality
  - Responsive design for all devices
  - Dark mode support
  - Article bookmarking (requires authentication)
  - Reading history tracking
  - Personalized news feed
  - Push notifications for breaking news
  - Offline reading support

## Tech Stack
- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: @heroicons/react
- **State Management**: React Context
- **Data Fetching**: TanStack Query
- **API Integration**: News API
- **Authentication**: NextAuth.js
- **Database**: Prisma with PostgreSQL
- **Testing**: Jest and React Testing Library
- **Analytics**: Google Analytics
- **Performance Monitoring**: Vercel Analytics

## Project Structure
```
app/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   ├── news/
│   │   ├── FeaturedArticle.tsx
│   │   ├── ArticleGrid.tsx
│   │   ├── ArticleCard.tsx
│   │   ├── OpinionSection.tsx
│   │   ├── CategorySection.tsx
│   │   ├── LiveBadge.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Avatar.tsx
├── lib/
│   ├── types/
│   │   ├── article.ts
│   ├── api/
│   │   ├── news.ts
├── app/
│   ├── page.tsx
│   ├── layout.tsx
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/news-portal.git
cd news-portal
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_auth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

## Component Usage

### Featured Article
```tsx
<FeaturedArticle
  title="Article Title"
  description="Article description..."
  imageUrl="/image.jpg"
  isLive={true}
  author="Author Name"
  category="Politics"
/>
```

### Article Grid
```tsx
<ArticleGrid
  articles={[
    {
      title: "Article Title",
      excerpt: "Article excerpt...",
      imageUrl: "/image.jpg",
      author: "Author Name",
      category: "Technology",
      date: "2024-01-28"
    },
    // ... more articles
  ]}
/>
```

### Opinion Section
```tsx
<OpinionSection
  opinions={[
    {
      author: "Author Name",
      title: "Opinion Title",
      excerpt: "Opinion excerpt...",
      avatarUrl: "/avatar.jpg"
    },
    // ... more opinions
  ]}
/>
```

## API Integration

1. Sign up for a News API key at https://newsapi.org
2. Create an API client in `lib/api/news.ts`:
```typescript
import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY
  }
});

export const getTopNews = async () => {
  const response = await newsApi.get('/top-headlines?country=us');
  return response.data;
};
```

## Styling
The project uses Tailwind CSS for styling. Custom theme configuration can be found in `tailwind.config.js`.

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn
- PostgreSQL (if using database features)

## Development

### Running Tests
```bash
npm run test
npm run test:e2e
```

### Building for Production
```bash
npm run build
npm run start
```

### Environment Variables
Required environment variables:
```env
NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_auth_secret
NEXTAUTH_URL=http://localhost:3000
```

## Deployment
This project can be deployed on Vercel:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy

## Performance Optimization
- Implements image optimization using Next.js Image component
- Uses incremental static regeneration for news articles
- Implements proper caching strategies
- Optimizes fonts and icons loading