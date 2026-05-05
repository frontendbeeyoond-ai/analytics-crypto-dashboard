import { cookies } from 'next/headers'

const SESSION_COOKIE = 'dashboard-session'

export interface SessionUser {
  email: string
  name: string
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies()
  const session = cookieStore.get(SESSION_COOKIE)
  if (!session) return null
  try {
    return JSON.parse(session.value) as SessionUser
  } catch {
    return null
  }
}
