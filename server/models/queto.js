import mongoose from 'mongoose'
const quetoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel',
    required: true,
  },
  title: {
    type: String,
    required: [true, 'Please add title to the post'],
    trim: true,
  },
  queto: {
    type: String,
    required: true,
    maxlength: [300, 'Queto length could not be more than 300 words'],
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Love',
      'Motivation',
      'Friendship',
      'Nature',
      'Worship',
      'God',
      'Death',
      'Others',
    ],
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})
const quetoModel = mongoose.model('queto', quetoSchema)
export default quetoModel
