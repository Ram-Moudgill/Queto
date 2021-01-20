import mongoose from 'mongoose'
const quetoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add title to the post'],
    trim: true,
  },
  queto: {
    type: String,
    required: true,
    maxlength: [2000, 'Queto length could not be more than 300 words'],
  },
  category: {
    type: String,
    required: true,
    enum: [
      'love',
      'motivation',
      'friendship',
      'nature',
      'death',
      'birthday',
      'worship',
      'god',
      'Others',
    ],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
})
const quetoModel = mongoose.model('queto', quetoSchema)
export default quetoModel
