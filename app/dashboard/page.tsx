import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import LogoutButton from '@/components/LogoutButton'
import styles from './dashboard.module.css'

export default async function DashboardPage() {
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
            <span>👋 Olá, {user.user_metadata.full_name || user.email}</span>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.welcomeSection}>
          <h2>Bem-vindo à sua área exclusiva!</h2>
          <p>Você agora tem acesso completo a todas as funcionalidades da plataforma.</p>
        </div>

        <div className={styles.cardsGrid}>
          <Link href="/" className={styles.card}>
            <div className={styles.cardIcon}>📋</div>
            <h3>Consultar Temas</h3>
            <p>Acesse informações sobre legislação, súmulas e jurisprudências trabalhistas</p>
          </Link>

          <Link href="/dashboard/perfil" className={styles.card}>
            <div className={styles.cardIcon}>👤</div>
            <h3>Meu Perfil</h3>
            <p>Gerencie suas informações pessoais e configurações de conta</p>
          </Link>

          <div className={styles.card} style={{ opacity: 0.6, cursor: 'not-allowed' }}>
            <div className={styles.cardIcon}>⭐</div>
            <h3>Favoritos</h3>
            <p>Em breve: Salve seus temas favoritos para acesso rápido</p>
            <span className={styles.badge}>Em breve</span>
          </div>

          <div className={styles.card} style={{ opacity: 0.6, cursor: 'not-allowed' }}>
            <div className={styles.cardIcon}>📜</div>
            <h3>Histórico</h3>
            <p>Em breve: Veja seu histórico de consultas e pesquisas</p>
            <span className={styles.badge}>Em breve</span>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h3>🎯 Próximas funcionalidades</h3>
          <ul>
            <li>✨ Sistema de favoritos para temas importantes</li>
            <li>📊 Histórico de consultas realizadas</li>
            <li>🔔 Alertas sobre atualizações em temas de interesse</li>
            <li>📱 Aplicativo mobile</li>
            <li>💬 Chat com especialistas (plano premium)</li>
          </ul>
        </div>

        <div className={styles.accountInfo}>
          <h3>📧 Informações da conta</h3>
          <div className={styles.accountDetails}>
            <div className={styles.detailRow}>
              <span className={styles.label}>Email:</span>
              <span className={styles.value}>{user.email}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.label}>Status:</span>
              <span className={styles.badge} style={{ background: '#48bb78' }}>✓ Confirmado</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.label}>Plano:</span>
              <span className={styles.value}>Gratuito</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

