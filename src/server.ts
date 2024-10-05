// Import global from third party libraries.

// Import use cases.

// Import controllers.
import app from './app';

// Import middlewares.

// Import models.
// Entities.
// Enums.
// Errors.

// Import utilities.
import logger from './utils/logger';

// Import DB.

/**
 * This file starts the server.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier
 * @modified
 */
const port: number = 8080;

/*
 * The app starts here.
 */
app.listen(port, () => {
    return logger.info(`Server started @ port:${port}`);
});
