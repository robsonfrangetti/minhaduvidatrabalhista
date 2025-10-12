import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import LogoutButton from '@/components/LogoutButton'
import styles from '../dashboard.module.css'

export default async function PerfilPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>⚖️ Minha Dúvida Trabalhista</h1>
          <div className={styles.userInfo}>
            <span>👋 {user.user_metadata.full_name || user.email}</span>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.welcomeSection}>
          <h2>Meu Perfil</h2>
          <p>Gerencie suas informações pessoais</p>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className={styles.accountInfo}>
            <h3>📧 Informações da conta</h3>
            <div className={styles.accountDetails}>
              <div className={styles.detailRow}>
                <span className={styles.label}>Nome:</span>
                <span className={styles.value}>{user.user_metadata.full_name || 'Não informado'}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.label}>Email:</span>
                <span className={styles.value}>{user.email}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.label}>Status:</span>
                <span className={styles.badge} style={{ background: '#48bb78', color: 'white' }}>✓ Confirmado</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.label}>Membro desde:</span>
                <span className={styles.value}>{new Date(user.created_at).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>
          </div>

          <div className={styles.infoSection} style={{ marginTop: '2rem' }}>
            <h3>🔒 Segurança</h3>
            <Link href="/auth/recuperar-senha" style={{ 
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '10px',
              fontWeight: 600,
              transition: 'all 0.3s ease'
            }}>
              Alterar senha
            </Link>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/dashboard" style={{
              color: '#667eea',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              ← Voltar ao dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

