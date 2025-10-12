'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from '../login/auth.module.css'

export default function CadastroPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [endereco, setEndereco] = useState('')
  const [aceitouTermos, setAceitouTermos] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Validações
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

    if (!aceitouTermos) {
      setError('Você precisa aceitar os termos de uso e política de privacidade.')
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: nome,
            phone: telefone,
            address: endereco,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) {
        if (error.message.includes('already registered')) {
          setError('Este email já está cadastrado. Faça login ou use outro email.')
        } else {
          setError(error.message)
        }
        return
      }

      if (data.user) {
        setSuccess(true)
      }
    } catch (err) {
      setError('Erro ao criar conta. Tente novamente.')
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
            <h1>Confirme seu email!</h1>
            <p>
              Enviamos um link de confirmação para <strong>{email}</strong>
            </p>
            <p className={styles.successText}>
              Por favor, verifique sua caixa de entrada (e a pasta de spam) e clique no link para ativar sua conta.
            </p>
            <div className={styles.successActions}>
              <Link href="/auth/login" className={styles.linkButton}>
                Ir para Login
              </Link>
              <Link href="/" className={styles.linkButtonSecondary}>
                Voltar para Início
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
          <h1>Criar sua conta</h1>
          <p>Comece gratuitamente agora mesmo</p>
        </div>

        {error && (
          <div className={styles.errorMessage}>
            <span>⚠️</span>
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleCadastro} className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome completo</label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="João Silva"
              required
              disabled={loading}
            />
          </div>

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
            <label htmlFor="telefone">Telefone</label>
            <input
              id="telefone"
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(11) 99999-9999"
              required
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              placeholder="Rua, número, bairro, cidade - UF"
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
              minLength={6}
              disabled={loading}
            />
            <small>Mínimo de 6 caracteres</small>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirmar senha</label>
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

          <div className={styles.checkboxGroup}>
            <input
              id="termos"
              type="checkbox"
              checked={aceitouTermos}
              onChange={(e) => setAceitouTermos(e.target.checked)}
              required
              disabled={loading}
            />
            <label htmlFor="termos">
              Eu li e aceito os{' '}
              <Link href="/termos" target="_blank">Termos de Uso</Link>
              {' '}e a{' '}
              <Link href="/privacidade" target="_blank">Política de Privacidade</Link>
            </label>
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? 'Criando conta...' : 'Criar conta gratuita'}
          </button>
        </form>

        <div className={styles.authFooter}>
          <p>
            Já tem uma conta?{' '}
            <Link href="/auth/login">Faça login</Link>
          </p>
        </div>

        <div className={styles.backHome}>
          <Link href="/">← Voltar para página inicial</Link>
        </div>
      </div>
    </div>
  )
}

