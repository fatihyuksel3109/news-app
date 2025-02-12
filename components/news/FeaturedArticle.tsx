'use client'

import Image from 'next/image'
import { LiveBadge } from './LiveBadge'
import { FeaturedArticleProps } from '@/types/components'
import { useState } from 'react'

export function FeaturedArticle(props: FeaturedArticleProps) {
  const { title, description, imageUrl, isLive = false, author, category } = props
  const [imgSrc, setImgSrc] = useState(imageUrl)
  const fallbackImage = '/images/default-news.jpg'

  return (
    <article className="relative rounded-lg overflow-hidden">
      <div className="relative h-[400px]">
        <Image
          src={imgSrc || fallbackImage}
          alt={title}
          fill
          className="object-cover"
          onError={() => setImgSrc(fallbackImage)}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
        {isLive && <LiveBadge />}
        <span className="text-sm text-white/80">{category}</span>
        <h1 className="text-3xl font-bold text-white mt-2">{title}</h1>
        <p className="text-white/90 mt-2">{description}</p>
        <p className="text-sm text-white/80 mt-4">By {author}</p>
      </div>
    </article>
  )
} 