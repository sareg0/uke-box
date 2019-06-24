import { Note } from '../note.model'
import mongoose from 'mongoose'

describe('Note model', () => {
  describe('schema', () => {
    test('name', () => {
      const name = Note.schema.obj.name
      expect(name).toEqual({
        type: String,
        required: true,
        trim: true,
      })
    })
    
    test('frequency', () => {
      const frequency = Note.schema.obj.frequency
      expect(frequency).toEqual({
        type: Number,
        required: true,
      })
    })
  })
})

// class Note {
//   Number audio_frequency
//   String name e.g. ("Am7")
// }