/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
import Debug from 'debug';
import mongoose from '../app/services/client.js';
import Author from '../app/models/Author.js';
import Book from '../app/models/Book.js';

const debug = Debug('app:seeding');

const seedDatabase = async () => {
  try {
    // Clean the database
    await Author.deleteMany({});
    await Book.deleteMany({});

    debug('Database cleaned');

    // Insert authors
    const authors = [
      { _id: new mongoose.Types.ObjectId(), name: 'Author 1' },
      { _id: new mongoose.Types.ObjectId(), name: 'Author 2' },
    ];
    await Author.insertMany(authors);

    debug('Authors inserted');

    // Insert books
    const books = [
      { isbn: 1234, title: 'Book 1', authorId: authors[0]._id },
      { isbn: 1235, title: 'Book 2', authorId: authors[0]._id },
      { isbn: 1236, title: 'Book 3', authorId: authors[1]._id },
      { isbn: 1237, title: 'Book 4', authorId: authors[1]._id },
      { isbn: 1238, title: 'Book 5', authorId: authors[1]._id },
    ];
    await Book.insertMany(books);

    debug('Books inserted');

    debug('Database seeding completed');
    process.exit();
  } catch (error) {
    debug('Error seeding database', error);
    process.exit(1);
  }
};

seedDatabase();
