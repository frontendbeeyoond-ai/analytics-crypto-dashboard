'use client'

import { useState, useRef, useEffect, Suspense } from 'react'
import { logoutAction } from '@/app/actions/auth'
import GlobalDatePicker from './GlobalDatePicker'

interface HeaderProps {
  user: { email: string; name: string }
  onMenuClick: () => void
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function Header({ user, onMenuClick }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className="h-16 flex items-center justify-between px-4 lg:px-6 shrink-0 z-10"
      style={{ background: '#030712', borderBottom: '1px solid #1f2937' }}
    >
      {/* Hamburger — mobile only */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg transition-colors hover:bg-white/5"
        style={{ color: '#6b7280' }}
        aria-label="Open sidebar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Global date picker */}
      <div className="ml-auto mr-3">
        <Suspense fallback={null}>
          <GlobalDatePicker />
        </Suspense>
      </div>

      {/* Profile dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2.5 py-1.5 px-2 rounded-xl transition-colors hover:bg-white/5"
        >
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
            {getInitials(user.name)}
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-white leading-none">{user.name}</p>
            <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>{user.email}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            style={{ color: '#6b7280' }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* Dropdown menu */}
        {open && (
          <div
            className="absolute right-0 mt-2 w-48 rounded-xl shadow-2xl py-1 z-50"
            style={{ background: '#0d1117', border: '1px solid #1f2937' }}
          >
            <div className="px-4 py-2.5" style={{ borderBottom: '1px solid #1f2937' }}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#4b5563' }}>Account</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-left hover:bg-white/5"
              style={{ color: '#9ca3af' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
              Profile
            </button>

            <form action={logoutAction}>
              <button
                type="submit"
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 transition-colors text-left hover:bg-red-500/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Logout
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  )
}
