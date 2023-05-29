// book.js
import AuthorDatamapper from '../datamappers/AuthorDatamapper.js';
import Author from '../models/Author.js';

const authorDatamapper = new AuthorDatamapper(Author);

const Book = {
  author: async (book) => {
    return await authorDatamapper.findByPk(book.authorId);
  },
};

export default Book;
