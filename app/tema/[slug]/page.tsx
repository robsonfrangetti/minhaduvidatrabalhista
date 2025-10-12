import Link from 'next/link'
import { topics } from '@/data/topics'
import { notFound } from 'next/navigation'

export default function ConfirmationPage({ params }: { params: { slug: string } }) {
  const topic = topics[params.slug]

  if (!topic) {
    notFound()
  }

  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1>Minha Dúvida Trabalhista</h1>
          <p>Confirmação do tema</p>
        </div>
      </header>

      <main className="container">
        <Link href="/" className="back-link">
          ← Voltar para início
        </Link>

        <div className="confirmation-card">
          <h2>{topic.title}</h2>
          <p>{topic.description}</p>
          <p style={{ fontSize: '1rem', marginTop: '1rem' }}>
            É esse mesmo o tema que você está procurando?
          </p>

          <div className="button-group">
            <Link href={`/resultado/${topic.id}`} className="button button-primary">
              Sim, continuar
            </Link>
            <Link href="/" className="button button-secondary">
              Não, escolher outro tema
            </Link>
          </div>
        </div>

        <div className="section" style={{ marginTop: '3rem' }}>
          <h3 style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
            Palavras-chave relacionadas
          </h3>
          <div className="keywords" style={{ justifyContent: 'center', marginTop: '1rem' }}>
            {topic.keywords.map((keyword, index) => (
              <span key={index} className="keyword">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

