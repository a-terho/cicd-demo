import { join } from 'node:path';
import { projectRoot } from './utils/dir.js';
import middleware from './utils/middleware.js';
import express from 'express';

import pkg from './package.json' with { type: 'json' };

// luodaan Express app
const app = express();
export default app;

// jaa bundlattu frontend tuotantovaiheessa
console.log('root directory:', projectRoot);
app.use(express.static(join(projectRoot, '/frontend/dist')));

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

app.use('/health', (req, res) => {
  res.status(200).send('ok');
});

app.use('/version', (req, res) => {
  res.status(200).send(pkg.version);
});

// virheidenkäsittelyn middlewaret
app.use(middleware.noEndpoint);
app.use(middleware.globalErrorHandler);
