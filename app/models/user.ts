import mongoose from 'mongoose'

const userSchemaModel = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
})

export const User = mongoose.models.User || mongoose.model('User', userSchemaModel)