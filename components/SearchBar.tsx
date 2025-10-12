'use client'

import { useState } from 'react'
import { topicsList, TopicData } from '@/data/topics'
import Link from 'next/link'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [showSuggestionForm, setShowSuggestionForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const searchTopics = (term: string): TopicData[] => {
    if (!term || term.length < 2) return []
    
    const lowerTerm = term.toLowerCase()
    
    return topicsList.filter(topic => {
      // Busca no título
      if (topic.title.toLowerCase().includes(lowerTerm)) return true
      
      // Busca nas palavras-chave
      if (topic.keywords.some(keyword => keyword.toLowerCase().includes(lowerTerm))) return true
      
      // Busca nos artigos
      const articlesText = topic.legislation.map(l => 
        `${l.title} ${l.reference} ${l.content}`
      ).join(' ').toLowerCase()
      if (articlesText.includes(lowerTerm)) return true
      
      // Busca na descrição
      if (topic.description.toLowerCase().includes(lowerTerm)) return true
      
      return false
    })
  }

  const results = searchTerm.length >= 2 ? searchTopics(searchTerm) : []
  const hasResults = results.length > 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '86ffe49f-9f4c-43a7-a9a9-c0c97799accf',
          subject: `Nova Sugestão de Tema: ${formData.suggestion.substring(0, 50)}`,
          name: formData.name,
          email: formData.email,
          message: `Sugestão de Tema:\n\n${formData.suggestion}\n\nTermo buscado: ${searchTerm}`
        })
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', suggestion: '' })
        setTimeout(() => {
          setShowSuggestionForm(false)
          setFormStatus('idle')
        }, 3000)
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }
  }

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Busque por tema, artigo da CLT, ou palavra-chave... (ex: Art. 443, férias, home office)"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setShowResults(true)
            }}
            onFocus={() => setShowResults(true)}
            className="search-input"
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('')
                setShowResults(false)
              }}
              className="search-clear"
            >
              ✕
            </button>
          )}
        </div>

        {showResults && searchTerm.length >= 2 && (
          <div className="search-results">
            {hasResults ? (
              <>
                <div className="search-results-header">
                  Encontrados {results.length} {results.length === 1 ? 'resultado' : 'resultados'}:
                </div>
                {results.map((topic) => (
                  <Link
                    key={topic.id}
                    href={`/tema/${topic.id}`}
                    className="search-result-item"
                    onClick={() => {
                      setShowResults(false)
                      setSearchTerm('')
                    }}
                  >
                    <div className="search-result-title">{topic.title}</div>
                    <div className="search-result-desc">{topic.description}</div>
                    <div className="search-result-keywords">
                      {topic.keywords.slice(0, 3).map((keyword, idx) => (
                        <span key={idx} className="keyword">{keyword}</span>
                      ))}
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <div className="search-no-results">
                <div className="search-no-results-title">
                  😕 Nenhum resultado encontrado para "{searchTerm}"
                </div>
                <p className="search-no-results-text">
                  Não encontramos temas relacionados à sua busca.
                </p>
                <button
                  onClick={() => {
                    setShowSuggestionForm(true)
                    setShowResults(false)
                  }}
                  className="button button-primary"
                  style={{ marginTop: '1rem' }}
                >
                  💡 Sugerir este tema
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {showSuggestionForm && (
        <div className="suggestion-modal-overlay" onClick={() => setShowSuggestionForm(false)}>
          <div className="suggestion-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowSuggestionForm(false)}
            >
              ✕
            </button>
            
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
              💡 Sugerir Novo Tema
            </h2>
            
            {formStatus === 'success' ? (
              <div className="form-success">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3>Sugestão enviada com sucesso!</h3>
                <p>Obrigado pela sua contribuição. Vamos analisar e adicionar o tema em breve!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Ajude-nos a melhorar! Sugira um tema trabalhista que você gostaria de ver aqui.
                </p>

                <div className="form-group">
                  <label>Seu nome:</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Digite seu nome"
                  />
                </div>

                <div className="form-group">
                  <label>Seu email:</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label>Qual tema você gostaria de ver?</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.suggestion}
                    onChange={(e) => setFormData({ ...formData, suggestion: e.target.value })}
                    placeholder="Exemplo: Horas extras, Aviso prévio, FGTS, Rescisão contratual, etc."
                  />
                </div>

                {formStatus === 'error' && (
                  <div className="form-error">
                    ❌ Erro ao enviar. Tente novamente.
                  </div>
                )}

                <div className="button-group">
                  <button
                    type="submit"
                    className="button button-primary"
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? 'Enviando...' : 'Enviar Sugestão'}
                  </button>
                  <button
                    type="button"
                    className="button button-secondary"
                    onClick={() => setShowSuggestionForm(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

