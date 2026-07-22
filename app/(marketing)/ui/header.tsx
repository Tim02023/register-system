import { Home, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MarketingHeader = () => {
    const nav = [
        { icon: <Home />, href: '/' },
        { icon: 'About', href: '/about' },
        { icon: 'Contact', href: '/contact' },
        { icon: 'Cart', href: '/cart' },
        { icon: 'Blog', href: '/blog' },
    ]
  return (
    <header className="bg-gray-800 text-white p-4 h-15">
      <nav>
        <ul className="flex space-x-4">
          <Link href='/' className="hover:text-gray-300 font-mono text-xl">
            <Home/>
          </Link>
          <Link href='/signup' className="hover:text-gray-300 font-mono text-xl ml-auto">
            <User/>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default MarketingHeader