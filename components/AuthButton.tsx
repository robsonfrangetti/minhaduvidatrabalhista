import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import LogoutButton from './LogoutButton'

export default async function AuthButton() {
  const supabase = await createClient()
  
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    const isAdmin = user.email === 'robson.frangetti@gmail.com'
    
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <span style={{
          color: 'white',
          fontWeight: 500,
          padding: '0.5rem 1rem',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '8px'
        }}>
          👋 Olá, {user.user_metadata.full_name || user.email?.split('@')[0]}
        </span>
        
        {isAdmin && (
          <Link 
            href="/admin"
            style={{
              padding: '0.5rem 1rem',
              background: 'rgba(255, 255, 255, 0.15)',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.3s ease'
            }}
          >
            📊 Dashboard Admin
          </Link>
        )}
        
        <LogoutButton />
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
      <Link 
        href="/auth/login"
        style={{
          padding: '0.75rem 1.5rem',
          background: 'white',
          color: '#667eea',
          border: '2px solid #667eea',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          transition: 'all 0.3s ease'
        }}
      >
        Entrar
      </Link>
      <Link 
        href="/auth/cadastro"
        style={{
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          transition: 'all 0.3s ease'
        }}
      >
        Cadastre-se Grátis
      </Link>
    </div>
  )
}

