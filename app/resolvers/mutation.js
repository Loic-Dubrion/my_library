/* eslint-disable no-underscore-dangle */
import Book from '../models/Book.js';
import BookDatamapper from '../datamappers/BookDatamapper.js';
import AuthorDatamapper from '../datamappers/AuthorDatamapper.js';
import Author from '../models/Author.js';

const bookDatamapper = new BookDatamapper(Book);
const authorDatamapper = new AuthorDatamapper(Author);

const Mutation = {
  addBook: async (_, { isbn, title, authorName }) => {
    // vérifier que l'auteur existe
    let author = await authorDatamapper.findByName(authorName);
    if (!author) {
      // l'auteur n'existe pas, créer un nouvel auteur
      author = await authorDatamapper.create({ name: authorName });
    }

    // créer le livre avec l'auteur associé
    const book = await bookDatamapper.create({ isbn, title, author: author._id });
    return book;
  },
};

export default Mutation;
