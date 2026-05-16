import logger from '../utils/logger.js';
import mongoose from 'mongoose';

const connectTestDb = async () => {
  if (process.env.NODE_ENV !== 'test') {
    throw new Error(
      'you cannot use test database methods when not in test mode',
    );
  }

  if (process.env.TEST_MONGODB_URI.includes('?')) {
    throw new Error('test database address must not contain url parameters');
  }
  if (process.env.TEST_MONGODB_URI.includes('#')) {
    throw new Error('test database address must not contain hashes');
  }

  const dbId = `_test${process.pid}`;
  const connectionUri = `${process.env.TEST_MONGODB_URI}${dbId}`;
  logger.info(`connecting to MongoDB test database ${dbId}...`);

  try {
    await mongoose.connect(connectionUri, { family: 4 });
    logger.info('connected to MongoDB');
  } catch (err) {
    logger.error('error while connecting to MongoDB:', err.message);
    throw err;
  }
};

const disconnectTestDb = async () => {
  if (process.env.NODE_ENV !== 'test') {
    throw new Error(
      'you cannot use test database methods when not in test mode',
    );
  }

  await mongoose.connection.close();
  // await mongoose.disconnect();
};

const dropTestDb = async () => {
  if (process.env.NODE_ENV !== 'test') {
    throw new Error(
      'you cannot use test database methods when not in test mode',
    );
  }

  await mongoose.connection.dropDatabase();
};

export { connectTestDb, disconnectTestDb, dropTestDb };
