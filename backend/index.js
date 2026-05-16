import config from './utils/config.js';
import logger from './utils/logger.js';

import app from './app.js';
import { connectDb } from './db.js';

const main = async () => {
  await connectDb();

  app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`);
  });
};

main();
