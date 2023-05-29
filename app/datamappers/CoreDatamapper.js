import Debug from 'debug';

class CoreDatamapper {
  constructor(model) {
    this.model = model;
    this.debug = Debug('app:datamapper');
  }

  async findAll() {
    this.debug('findAll');
    return this.model.find();
  }

  async findByPk(id) {
    this.debug(`findByPk: ${id}`);
    return this.model.findById(id);
  }

  async create(data) {
    this.debug('create', data);
    return this.model.create(data);
  }

  async update(id, data) {
    this.debug(`update: ${id}`, data);
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    this.debug(`delete: ${id}`);
    return this.model.findByIdAndDelete(id);
  }
}

export default CoreDatamapper;
