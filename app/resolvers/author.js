import { books } from '../../data/index.js';

export const Author = {
  books: (author) => {
    return books.filter(book => book.authorId === author.id);
  },
};
