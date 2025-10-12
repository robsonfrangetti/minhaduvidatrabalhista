import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1>Página não encontrada</h1>
        </div>
      </header>

      <main className="container">
        <div className="confirmation-card">
          <h2>Ops! Tema não encontrado</h2>
          <p>O tema que você está procurando não existe ou foi removido.</p>
          <div className="button-group">
            <Link href="/" className="button button-primary">
              Voltar para início
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

