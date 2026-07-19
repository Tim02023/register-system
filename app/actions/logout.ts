// app/actions/auth.tsx
'use server'

import { deleteSession } from '../lib/session'
import { redirect } from 'next/navigation'

export async function logout() {
  await deleteSession()
  // ملاحظة: الـ redirect هنا ستعمل مباشرة على السيرفر وستوجه العميل تلقائياً!
  redirect('/signup')
}
