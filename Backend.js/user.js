import mongoose from ('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  // other fields like password, etc.
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }]
});

export user from mongoose.model('User', userSchema);