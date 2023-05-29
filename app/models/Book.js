import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  isbn: Number,
  title: String,
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
