import BookDatamapper from '../datamappers/BookDatamapper.js';
import Book from '../models/Book.js';

const bookDatamapper = new BookDatamapper(Book);

const Author = {
  books: async (author) => {
    return await bookDatamapper.findByAuthor(author.id);
  },
};

export default Author;
