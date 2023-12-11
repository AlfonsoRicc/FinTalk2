const categorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    // other fields as necessary
  });
  
  const Category = mongoose.model('Category', categorySchema);