'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import styles from '../login/auth.module.css'

export default function RecuperarSenhaPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const supabase = createClient()

  const handleRecuperarSenha = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/redefinir-senha`,
      })

      if (error) {
        setError(error.message)
        return
      }

      setSuccess(true)
    } catch (err) {
      setError('Erro ao enviar email de recuperação. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className={styles.authContainer}>
        <div className={styles.authCard}>
          <div className={styles.successCard}>
            <div className={styles.successIcon}>📧</div>
            <h1>Email enviado!</h1>
            <p>
              Enviamos um link para <strong>{email}</strong>
            </p>
            <p className={styles.successText}>
              Verifique sua caixa de entrada (e a pasta de spam) e clique no link para redefinir sua senha.
            </p>
            <div className={styles.successActions}>
              <Link href="/auth/login" className={styles.linkButton}>
                Voltar para Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.authHeader}>
          <h1>Recuperar senha</h1>
          <p>Digite seu email para receber o link de recuperação</p>
        </div>

        {error && (
          <div className={styles.errorMessage}>
            <span>⚠️</span>
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleRecuperarSenha} className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              disabled={loading}
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar link de recuperação'}
          </button>
        </form>

        <div className={styles.authFooter}>
          <p>
            Lembrou sua senha?{' '}
            <Link href="/auth/login">Fazer login</Link>
          </p>
        </div>

        <div className={styles.backHome}>
          <Link href="/">← Voltar para página inicial</Link>
        </div>
      </div>
    </div>
  )
}

