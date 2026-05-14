import config from './utils/config.js';
import logger from './utils/logger.js';
import mongoose from 'mongoose';

const connectDb = async () => {
  logger.info('connecting to MongoDB...');
  try {
    await mongoose.connect(config.MONGODB_URI, { family: 4 });
    logger.info('connected to MongoDB');
  } catch (err) {
    logger.error('error while connecting to MongoDB:', err.message);
    throw err;
  }
};

const disconnectDb = async () => {
  await mongoose.connection.close();
  // await mongoose.disconnect();
};

export { connectDb, disconnectDb };
