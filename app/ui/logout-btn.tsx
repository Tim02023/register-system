// app/ui/logout-button.tsx
'use client'

import { LogOut } from 'lucide-react'
import { logout } from '@/app/actions/auth' // استيراد الـ Action هنا

export default function LogoutButton() {
  return (
      <button
          title="Logout"
      onClick={async () => {
        // استدعاء الأكشن؛ سيقوم بحذف الجلسة والتوجيه تلقائياً من السيرفر
        await logout()
          }}
          className="flex items-center ml-auto gap-2 border p-2 rounded bg-gray-200 hover:bg-gray-100 transition cursor-pointer"
    >
      <LogOut />
    </button>
  )
}
