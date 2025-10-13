'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ExpandableOrdinanceProps {
  title: string
  reference: string
  content: string
  fullContent?: string
  interpretation: string
  link?: string
}

export default function ExpandableOrdinance({
  title,
  reference,
  content,
  fullContent,
  interpretation,
  link
}: ExpandableOrdinanceProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="item">
      <div className="item-header">
        <span className="item-title">{title}</span>
        <span className="item-reference">{reference}</span>
      </div>
      
      <div className="item-content">{content}</div>
      
      {fullContent && (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ordinance-expand-button"
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            {isExpanded ? '▼ Ocultar' : '▶ Ver'} conteúdo completo da portaria
          </button>
          
          {isExpanded && (
            <div 
              className="ordinance-full-content"
              style={{
                marginTop: '1rem',
                padding: '1.5rem',
                background: '#f8f9fa',
                borderLeft: '4px solid var(--primary)',
                borderRadius: '0 8px 8px 0',
                whiteSpace: 'pre-line',
                lineHeight: '1.8',
                color: 'var(--text-secondary)'
              }}
            >
              <strong style={{ color: 'var(--primary)', fontSize: '1.1rem' }}>
                📜 Texto Completo:
              </strong>
              <div style={{ marginTop: '1rem' }}>{fullContent}</div>
            </div>
          )}
        </>
      )}
      
      <div className="item-interpretation">
        💡 {interpretation}
      </div>

      {link && (
        <div style={{ marginTop: '0.75rem' }}>
          <Link 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: 'var(--primary)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            🔗 Ver portaria completa no site oficial
          </Link>
        </div>
      )}
    </div>
  )
}

