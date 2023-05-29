import CoreDatamapper from './CoreDatamapper.js';

class AuthorDatamapper extends CoreDatamapper {
  async findByName(name) {
    this.debug(`findByName: ${name}`);
    return this.model.findOne({ name });
  }
}

export default AuthorDatamapper;
