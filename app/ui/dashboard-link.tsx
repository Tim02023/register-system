import { LayoutDashboard, User } from 'lucide-react'
import Link from 'next/link'
import { getUser } from '../lib/dto'
import LogoutButton from './logout-btn'

const DashboardLink = async () => {
    const user = await getUser() 
   // Fetch user data using the getProfileDTO function
   if(!user) {
    console.log('User not found. Please log in again.')
       return (
        <Link href='/signup'>
            <User />
        </Link>
        )
    }
    
  return (
    <>
        <Link href='/dashboard'>
        <LayoutDashboard />
        </Link>
         <LogoutButton/>
    </>
    
  )
}

export default DashboardLink