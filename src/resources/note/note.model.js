import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      trim: true, 
      type: String
    },
    frequency: {
      required: true,
      type: Number
    }
  }, 
  { timestamps: true }
)
export const Note = mongoose.model('note', noteSchema)
