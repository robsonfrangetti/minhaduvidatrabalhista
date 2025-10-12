import Link from 'next/link'
import { topicsList } from '@/data/topics'

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1>Minha Dúvida Trabalhista</h1>
          <p>Esclarecendo suas dúvidas trabalhistas de forma simples e prática</p>
        </div>
      </header>

      <main className="container">
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Escolha seu tema
        </h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Clique em uma das opções abaixo para obter informações detalhadas sobre o assunto
        </p>

        <div className="grid">
          {topicsList.map((topic) => (
            <Link 
              key={topic.id} 
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
          ))}
        </div>
      </main>
    </>
  )
}

