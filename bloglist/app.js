import config from './utils/config.js';
import logger from './utils/logger.js';
import middleware from './utils/middleware.js';

import express from 'express';
import mongoose from 'mongoose';

// luodaan Express app
const app = express();
export default app;

// tietokantayhteys
logger.info('connecting to MongoDB...');
mongoose
  .connect(config.MONGODB_URI, { family: 4 })
  .then(() => logger.info('connected to MongoDB'))
  .catch((err) =>
    logger.error('error while connecting to MongoDB:', err.message),
  );

// globaalit middlewaret
app.use(express.json());
app.use(middleware.addRequestLogger());
app.use(middleware.tokenExtractor);

// reitittimet
import blogsRouter from './controllers/blogs.js';
import loginRouter from './controllers/login.js';
import usersRouter from './controllers/users.js';
app.use('/api/blogs', middleware.userExtractor, blogsRouter);
app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);

// vain testeissä käytettävä nollausreitti
import testingRouter from './controllers/testing.js';
if (process.env.NODE_ENV === 'test') {
  app.use('/api/testing', testingRouter);
}

// virheidenkäsittelyn middlewaret
app.use(middleware.noEndpoint);
app.use(middleware.globalErrorHandler);
