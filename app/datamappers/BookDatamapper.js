import CoreDatamapper from './CoreDatamapper.js';

class BookDatamapper extends CoreDatamapper {
  async findByTitle(title) {
    this.debug(`findByTitle: ${title}`);
    return this.model.findOne({ title });
  }

  async findByAuthor(authorId) {
    this.debug(`findByAuthor: ${authorId}`);
    return this.model.find({ authorId });
  }
}

export default BookDatamapper;
