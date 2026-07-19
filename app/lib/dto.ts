import 'server-only'
import { verifySession } from '@/app/lib/dal'
import { User } from '../models/user'

function canSeeUsername(viewer: string) {
  return true
}

function canSeeEmail(viewer: { role: string }) {
  return viewer.role === 'admin'
}

export async function getUser() {
  const session = await verifySession()
  if (!session) return null

  try {
    const data = await User.find({ _id: session.userId }).lean().exec()
    const currentUser = data[0]

    return {
      username: canSeeUsername(currentUser) ? currentUser.name : null,
      email: canSeeEmail(currentUser) ? currentUser.email : null,
    }
  } catch (error) {
    console.log('Failed to fetch user', error)
    return null
  }
}
