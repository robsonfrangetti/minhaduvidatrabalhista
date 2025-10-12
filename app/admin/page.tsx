import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import styles from './admin.module.css'

// ⚠️ IMPORTANTE: ALTERE PARA SEU EMAIL!
const ADMIN_EMAIL = 'robson.frangetti@email.com' // <<< COLOQUE SEU EMAIL AQUI!

export default async function AdminPage() {
  const supabase = await createClient()

  // Verificar se está logado
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Verificar se é admin
  if (user.email !== ADMIN_EMAIL) {
    return (
      <div className={styles.accessDenied}>
        <h1>🚫 Acesso Negado</h1>
        <p>Você não tem permissão para acessar esta área.</p>
        <Link href="/">Voltar para o início</Link>
      </div>
    )
  }

  // Buscar todos os usuários do auth
  const { data: { users }, error } = await supabase.auth.admin.listUsers()

  if (error) {
    console.error('Erro ao buscar usuários:', error)
  }

  return (
    <div className={styles.adminContainer}>
      <header className={styles.adminHeader}>
        <div className={styles.headerContent}>
          <div>
            <h1>🔐 Painel Administrativo</h1>
            <p>Visualize e gerencie todos os usuários cadastrados</p>
          </div>
          <Link href="/" className={styles.backButton}>
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>👥</div>
            <div className={styles.statInfo}>
              <h3>Total de Usuários</h3>
              <p className={styles.statNumber}>{users?.length || 0}</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>✅</div>
            <div className={styles.statInfo}>
              <h3>Emails Confirmados</h3>
              <p className={styles.statNumber}>
                {users?.filter(u => u.email_confirmed_at).length || 0}
              </p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>⏳</div>
            <div className={styles.statInfo}>
              <h3>Pendentes</h3>
              <p className={styles.statNumber}>
                {users?.filter(u => !u.email_confirmed_at).length || 0}
              </p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>📅</div>
            <div className={styles.statInfo}>
              <h3>Novos (7 dias)</h3>
              <p className={styles.statNumber}>
                {users?.filter(u => {
                  const created = new Date(u.created_at)
                  const weekAgo = new Date()
                  weekAgo.setDate(weekAgo.getDate() - 7)
                  return created > weekAgo
                }).length || 0}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <h2>📋 Lista de Usuários Cadastrados</h2>
            <p>{users?.length || 0} usuário(s) no total</p>
          </div>

          {users && users.length > 0 ? (
            <div className={styles.tableWrapper}>
              <table className={styles.usersTable}>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th>Data de Cadastro</th>
                    <th>Confirmado em</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>
                        {user.email_confirmed_at ? (
                          <span className={styles.statusBadge + ' ' + styles.confirmed}>
                            ✓ Confirmado
                          </span>
                        ) : (
                          <span className={styles.statusBadge + ' ' + styles.pending}>
                            ⏳ Pendente
                          </span>
                        )}
                      </td>
                      <td className={styles.nameCell}>
                        {user.user_metadata?.full_name || '-'}
                      </td>
                      <td>{user.email}</td>
                      <td>{user.user_metadata?.phone || '-'}</td>
                      <td className={styles.addressCell}>
                        {user.user_metadata?.address || '-'}
                      </td>
                      <td className={styles.dateCell}>
                        {new Date(user.created_at).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className={styles.dateCell}>
                        {user.email_confirmed_at
                          ? new Date(user.email_confirmed_at).toLocaleDateString('pt-BR', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })
                          : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>📭 Nenhum usuário cadastrado ainda.</p>
            </div>
          )}
        </div>

        <div className={styles.exportSection}>
          <h3>📥 Exportar Dados</h3>
          <p>
            Para exportar os dados dos usuários, acesse o painel do Supabase:
          </p>
          <a 
            href="https://supabase.com/dashboard" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.exportButton}
          >
            Abrir Supabase Dashboard
          </a>
          <p className={styles.exportHint}>
            No Supabase: <strong>Authentication → Users → Export CSV</strong>
          </p>
        </div>
      </main>
    </div>
  )
}

