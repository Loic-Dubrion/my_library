// eslint-disable-next-line import/no-extraneous-dependencies
import Debug from 'debug';

import BookDatamapper from '../datamappers/BookDatamapper.js';
import AuthorDatamapper from '../datamappers/AuthorDatamapper.js';
import Book from '../models/Book.js';
import Author from '../models/Author.js';

const debug = Debug('app:query');

const bookDatamapper = new BookDatamapper(Book);
const authorDatamapper = new AuthorDatamapper(Author);

const Query = {
  books: async () => {
    debug('Récupération de tous les livres');
    return await bookDatamapper.findAll();
  },
  authors: async () => {
    debug('Récupération de tous les auteurs');
    return await authorDatamapper.findAll();
  },
  book: async (parent, args) => {
    const { bookId } = args;
    debug(`Récupération du livre avec l'ID ${bookId}`);
    return await bookDatamapper.findByPk(bookId);
  },
  author: async (parent, args) => {
    const { authorId } = args;
    debug(`Récupération de l'auteur avec l'ID ${authorId}`);
    return await authorDatamapper.findByPk(authorId);
  },
};

export default Query;
