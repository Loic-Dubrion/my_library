// book.js
import { authors } from '../../data/index.js';

export const Book = {
  author: (book) => {
    return authors.find(author => author.id === book.authorId);
  },
};
