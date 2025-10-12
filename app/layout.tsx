import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Minha Dúvida Trabalhista',
  description: 'Esclarecendo dúvidas trabalhistas de forma simples e prática',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

