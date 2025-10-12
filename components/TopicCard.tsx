import Link from 'next/link'
import { TopicData } from '@/data/topics'

interface TopicCardProps {
  topic: TopicData
}

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <Link 
      href={`/tema/${topic.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="card">
        <h2>{topic.title}</h2>
        <p>{topic.description}</p>
        <div className="keywords">
          {topic.keywords.map((keyword, index) => (
            <span key={index} className="keyword">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

