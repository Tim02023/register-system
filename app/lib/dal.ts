import 'server-only'

import { cookies } from 'next/headers'
import { decrypt } from '@/app/lib/session'
import { cache } from 'react'
import { redirect } from 'next/navigation'

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('sessionT')?.value
  const session = await decrypt(cookie)
  if (!session?.userId) {
    redirect('/signup')
  }

  return { isAuth: true, userId: session?.userId }
})