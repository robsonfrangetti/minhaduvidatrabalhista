'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LogoutButton() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    setLoading(true)
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      style={{
        padding: '0.5rem 1.5rem',
        background: 'white',
        color: '#667eea',
        border: '2px solid #667eea',
        borderRadius: '8px',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        opacity: loading ? 0.6 : 1
      }}
    >
      {loading ? 'Saindo...' : 'Sair'}
    </button>
  )
}

