import { getUser } from '../../lib/dto'

export default async function Dashboard() {
  const user = await getUser()
  if (!user) {
    console.log('User not found. Please log in again.')
    return null
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.username}!</p>
      <strong className="text-red-400">{user.email}</strong>
    </div>
  )
}
