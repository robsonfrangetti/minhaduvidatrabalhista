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
  const [cep, setCep] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [aceitouTermos, setAceitouTermos] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingCep, setLoadingCep] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  // Máscara de telefone
  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')
    
    if (value.length <= 11) {
      if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
      } else {
        value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
      }
      setTelefone(value)
    }
  }

  // Máscara de CEP
  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')
    
    if (value.length <= 8) {
      value = value.replace(/(\d{5})(\d{0,3})/, '$1-$2')
      setCep(value)
    }
  }

  // Buscar endereço por CEP
  const buscarCep = async () => {
    const cepNumeros = cep.replace(/\D/g, '')
    
    if (cepNumeros.length !== 8) {
      setError('CEP inválido. Digite 8 dígitos.')
      return
    }

    setLoadingCep(true)
    setError(null)

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepNumeros}/json/`)
      const data = await response.json()

      if (data.erro) {
        setError('CEP não encontrado.')
        return
      }

      setLogradouro(data.logradouro)
      setBairro(data.bairro)
      setCidade(data.localidade)
      setEstado(data.uf)
    } catch (err) {
      setError('Erro ao buscar CEP. Tente novamente.')
    } finally {
      setLoadingCep(false)
    }
  }

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

    // Validar telefone
    const telefoneNumeros = telefone.replace(/\D/g, '')
    if (telefoneNumeros.length < 10 || telefoneNumeros.length > 11) {
      setError('Telefone inválido. Digite um número válido com DDD.')
      setLoading(false)
      return
    }

    // Validar CEP
    const cepNumeros = cep.replace(/\D/g, '')
    if (cepNumeros.length !== 8) {
      setError('CEP inválido. Digite 8 dígitos.')
      setLoading(false)
      return
    }

    // Validar campos de endereço
    if (!numero.trim()) {
      setError('Número do endereço é obrigatório.')
      setLoading(false)
      return
    }

    if (!logradouro.trim() || !bairro.trim() || !cidade.trim() || !estado.trim()) {
      setError('Preencha todos os campos de endereço. Busque o CEP primeiro.')
      setLoading(false)
      return
    }

    try {
      const enderecoCompleto = `${logradouro}, ${numero}${complemento ? ' - ' + complemento : ''} - ${bairro}, ${cidade}/${estado} - CEP: ${cep}`

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: nome,
            phone: telefone,
            cep: cep,
            logradouro: logradouro,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            address: enderecoCompleto,
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
            <label htmlFor="telefone">Telefone (com DDD) *</label>
            <input
              id="telefone"
              type="tel"
              value={telefone}
              onChange={handleTelefoneChange}
              placeholder="(11) 99999-9999"
              required
              disabled={loading}
              maxLength={15}
            />
            <small>Formato: (XX) XXXXX-XXXX</small>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cep">CEP *</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                id="cep"
                type="text"
                value={cep}
                onChange={handleCepChange}
                placeholder="00000-000"
                required
                disabled={loading || loadingCep}
                maxLength={9}
                style={{ flex: 1 }}
              />
              <button
                type="button"
                onClick={buscarCep}
                disabled={loading || loadingCep || cep.replace(/\D/g, '').length !== 8}
                style={{
                  padding: '0.875rem 1.5rem',
                  background: loadingCep ? '#94a3b8' : '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 600,
                  cursor: loadingCep ? 'not-allowed' : 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {loadingCep ? 'Buscando...' : 'Buscar'}
              </button>
            </div>
            <small>Digite o CEP e clique em Buscar</small>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="logradouro">Logradouro *</label>
            <input
              id="logradouro"
              type="text"
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
              placeholder="Rua, Avenida, etc"
              required
              disabled={loading}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
            <div className={styles.formGroup}>
              <label htmlFor="numero">Número *</label>
              <input
                id="numero"
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="123"
                required
                disabled={loading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="complemento">Complemento</label>
              <input
                id="complemento"
                type="text"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                placeholder="Apto 45"
                disabled={loading}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="bairro">Bairro *</label>
            <input
              id="bairro"
              type="text"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              placeholder="Centro"
              required
              disabled={loading}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
            <div className={styles.formGroup}>
              <label htmlFor="cidade">Cidade *</label>
              <input
                id="cidade"
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="São Paulo"
                required
                disabled={loading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="estado">UF *</label>
              <input
                id="estado"
                type="text"
                value={estado}
                onChange={(e) => setEstado(e.target.value.toUpperCase())}
                placeholder="SP"
                required
                disabled={loading}
                maxLength={2}
              />
            </div>
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

