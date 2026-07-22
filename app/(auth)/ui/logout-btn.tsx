'use client'

import { LogOut } from 'lucide-react'
import { logout } from '@/app/actions/auth' // استيراد الـ Action هنا
import { useTransition } from 'react'
import { Button } from '@/components/ui/button'

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition() // استخدم useTransition هنا
  const handleLogout = () => {
    startTransition( async() => {
      await logout()
    })
  }
  return (
      <Button
          title="Logout"
          onClick={handleLogout}
          className={`${isPending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'} flex items-center ml-auto gap-2 border p-2 rounded bg-gray-200 transition cursor-pointer`}
    >
      <LogOut />
    </Button>
  )
}
