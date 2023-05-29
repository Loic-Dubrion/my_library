// eslint-disable-next-line import/no-extraneous-dependencies
import Debug from 'debug';
import mongoose from 'mongoose';

const debug = Debug('app:db');

const uri = 'mongodb://localhost:27017/library';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    debug('Successfully connected to MongoDB');
  } catch (error) {
    debug('Error connecting to MongoDB: ', error);
  }
};

connectDB();

export default mongoose;
