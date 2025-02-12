interface Opinion {
  author: string
  title: string
  excerpt: string
  avatarUrl: string
}

export function OpinionSection({ opinions }: { opinions: Opinion[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Opinion</h2>
      {opinions?.map((opinion) => (
        <div key={opinion.title} className="border-b pb-4">
          <h3 className="font-bold">{opinion.title}</h3>
          <p className="text-gray-600">{opinion.excerpt}</p>
        </div>
      ))}
    </div>
  )
} 