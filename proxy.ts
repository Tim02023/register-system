import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from './app/lib/session'

const protectedRoutes = ['/dashboard']
const publicRoutes = ['/signup', '/']
export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  const cookie = (await cookies()).get('sessionT')?.value
  const session = await decrypt(cookie)
    console.log('Session cookie:', cookie)
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/signup', req.nextUrl))
  }

  // if (
  //   isPublicRoute &&
  //   session?.userId &&
  //   !req.nextUrl.pathname.startsWith('/dashboard')
  // ) {
  //   return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  // }
  return NextResponse.next()
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}