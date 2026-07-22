'use client'
import { signup } from '@/app/actions/auth'
import { Button } from '@/components/ui/button'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'

export function SignupForm() {
    const [state, action, pending] = useActionState(signup, undefined)
  useEffect(() => {
    if (state?.message) {
      toast.success(state.message)
    }
  }, [state?.message])

  return (
    <form action={action}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          className="border ml-3"
          id="name"
          name="name"
          placeholder="Name"
        />
      </div>
      {state?.errors?.name && <p>{state.errors.name}</p>}
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="border ml-3"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}
      <div>
        <label htmlFor="password">Password</label>
        <input
          className="border ml-3"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <Button type="submit" className="border p-3">
        Sign Up
      </Button>
      {pending ? <p>Loading...</p> : null}
    </form>
  )
}
