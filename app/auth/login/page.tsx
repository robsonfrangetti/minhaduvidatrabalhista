'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './auth.module.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        if (error.message.includes('Email not confirmed')) {
          setError('Por favor, confirme seu email antes de fazer login. Verifique sua caixa de entrada.')
        } else if (error.message.includes('Invalid login credentials')) {
          setError('Email ou senha inválidos.')
        } else {
          setError(error.message)
        }
        return
      }

      if (data.user) {
        setMessage('Login realizado com sucesso! Redirecionando...')
        setTimeout(() => {
          router.push('/')
          router.refresh()
        }, 1000)
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.authHeader}>
          <h1>Bem-vindo de volta!</h1>
          <p>Entre na sua conta para continuar</p>
        </div>

        {error && (
          <div className={styles.errorMessage}>
            <span>⚠️</span>
            <p>{error}</p>
          </div>
        )}

        {message && (
          <div className={styles.successMessage}>
            <span>✅</span>
            <p>{message}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className={styles.authForm}>
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

          <div className={styles.formGroup}>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              disabled={loading}
            />
          </div>

          <div className={styles.forgotPassword}>
            <Link href="/auth/recuperar-senha">Esqueceu sua senha?</Link>
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className={styles.authFooter}>
          <p>
            Não tem uma conta?{' '}
            <Link href="/auth/cadastro">Cadastre-se gratuitamente</Link>
          </p>
        </div>

        <div className={styles.backHome}>
          <Link href="/">← Voltar para página inicial</Link>
        </div>
      </div>
    </div>
  )
}

