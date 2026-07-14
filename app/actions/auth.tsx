'use server'
import { FormState, SignupFormSchema } from "@/app/lib/definitions"
import bcrypt from "bcrypt"
import { connectionDB } from "../lib/db"
import { User } from "../models/user"
export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  const { name, email, password } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)
  // If any form fields are invalid, return early
    // 3. Insert the user into the database or call an Auth Library's API
    await connectionDB()
    const createUser = await new User({
        name,
        email,
        password: hashedPassword,
    }).save()
    if (!createUser) {
    return {
        message: 'Failed to create user.',
    }
   }
    

  // Call the provider or db to create a user...
}
