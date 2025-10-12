'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from '../login/auth.module.css'

export default function RedefinirSenhaPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    // Verificar se há um token de recuperação válido
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        setError('Link inválido ou expirado. Solicite um novo link de recuperação.')
      }
    })
  }, [supabase.auth])

  const handleRedefinirSenha = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.')
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      })

      if (error) {
        setError(error.message)
        return
      }

      setSuccess(true)
      setTimeout(() => {
        router.push('/auth/login')
      }, 3000)
    } catch (err) {
      setError('Erro ao redefinir senha. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className={styles.authContainer}>
        <div className={styles.authCard}>
          <div className={styles.successCard}>
            <div className={styles.successIcon}>✅</div>
            <h1>Senha redefinida!</h1>
            <p className={styles.successText}>
              Sua senha foi alterada com sucesso. Você será redirecionado para o login em alguns segundos...
            </p>
            <div className={styles.successActions}>
              <Link href="/auth/login" className={styles.linkButton}>
                Ir para Login agora
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
          <h1>Redefinir senha</h1>
          <p>Digite sua nova senha</p>
        </div>

        {error && (
          <div className={styles.errorMessage}>
            <span>⚠️</span>
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleRedefinirSenha} className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="password">Nova senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
              disabled={loading}
            />
            <small>Mínimo de 6 caracteres</small>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirmar nova senha</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
              disabled={loading}
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? 'Redefinindo...' : 'Redefinir senha'}
          </button>
        </form>

        <div className={styles.authFooter}>
          <p>
            <Link href="/auth/login">← Voltar para login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

