import { books, authors } from '../../data/index.js';

export const Query = {
  books: () => {
    console.log("Récupération de tous les livres");
    return books;
  },
  authors: () => {
    console.log("Récupération de tous les auteurs");
    return authors;
  },
  book: (parent, args) => {
    const { bookId } = args;
    console.log(`Récupération du livre avec l'ID ${bookId}`);
    return books.find(book => book.id === bookId);
  }, 
  author: (parent, args) => {
    const { authorId } = args;
    console.log(`Récupération de l'auteur avec l'ID ${authorId}`);
    return authors.find(author => author.id === authorId);
  },
};
