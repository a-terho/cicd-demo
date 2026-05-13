import config from './src/utils/config.js';
import logger from './src/utils/logger.js';

import app from './src/app.js';
import { connectDb } from './src/db.js';

connectDb();

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
