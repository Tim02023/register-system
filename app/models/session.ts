import mongoose from 'mongoose'

const sessionSchemaModel = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  expiresAt: Date,
  sessionToken: String,
})

export const Session = mongoose.models.Session || mongoose.model('Session', sessionSchemaModel)