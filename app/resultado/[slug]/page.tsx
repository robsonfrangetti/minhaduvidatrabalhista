import Link from 'next/link'
import { topics } from '@/data/topics'
import { notFound } from 'next/navigation'

export default function ResultPage({ params }: { params: { slug: string } }) {
  const topic = topics[params.slug]

  if (!topic) {
    notFound()
  }

  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1>{topic.title}</h1>
          <p>Informações completas sobre o tema</p>
        </div>
      </header>

      <main className="container">
        <Link href="/" className="back-link">
          ← Voltar para início
        </Link>

        {/* Legislação */}
        <section className="section">
          <h2>📋 Legislação</h2>
          {topic.legislation.map((law, index) => (
            <div key={index} className="item">
              <div className="item-header">
                <span className="item-title">{law.title}</span>
                <span className="item-reference">{law.reference}</span>
              </div>
              <div className="item-content">{law.content}</div>
              {law.interpretation && (
                <div className="item-interpretation">
                  💡 {law.interpretation}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Portarias */}
        {topic.ordinances.length > 0 && (
          <section className="section">
            <h2>📄 Portarias</h2>
            {topic.ordinances.map((ordinance, index) => (
              <div key={index} className="item">
                <div className="item-header">
                  <span className="item-title">{ordinance.title}</span>
                  <span className="item-reference">{ordinance.reference}</span>
                </div>
                <div className="item-content">{ordinance.content}</div>
                {ordinance.interpretation && (
                  <div className="item-interpretation">
                    💡 {ordinance.interpretation}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Súmulas */}
        <section className="section">
          <h2>⚖️ Súmulas</h2>
          {topic.summaries.map((summary, index) => (
            <div key={index} className="item">
              <div className="item-header">
                <span className="item-title">{summary.number}</span>
                <span className="item-reference">{summary.court}</span>
              </div>
              <div className="item-content">{summary.content}</div>
              {summary.interpretation && (
                <div className="item-interpretation">
                  💡 {summary.interpretation}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Jurisprudências */}
        <section className="section">
          <h2>📚 Jurisprudências</h2>
          {topic.jurisprudence.map((item, index) => (
            <div key={index} className="item">
              <div className="item-header">
                <span className="item-title">{item.title}</span>
              </div>
              <div className="item-content">{item.content}</div>
              {item.interpretation && (
                <div className="item-interpretation">
                  💡 {item.interpretation}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Decisões Recentes */}
        <section className="section">
          <h2>
            🔥 Decisões Recentes
            <span className="badge badge-recent" style={{ marginLeft: '1rem' }}>
              Atualizado
            </span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            As 3 decisões mais recentes sobre este tema
          </p>
          {topic.recentDecisions.map((decision) => (
            <div key={decision.id} className="decision-card">
              <div className="decision-header">
                <span className="decision-court">{decision.court}</span>
                <span className="decision-date">{decision.date}</span>
              </div>
              <div className="decision-number">{decision.number}</div>
              <div className="decision-summary">{decision.summary}</div>
            </div>
          ))}
        </section>

        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'var(--surface)', borderRadius: '12px' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Precisa de ajuda com outro tema?
          </h3>
          <Link href="/" className="button button-primary">
            Voltar para temas
          </Link>
        </div>
      </main>
    </>
  )
}

