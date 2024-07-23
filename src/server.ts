// Import global from third party libraries.
import app from './app';

// Import use cases.

// Import controllers.

// Import middlewares.

// Import models.
// Entities.
// Enums.
// Errors.

// Import utilities.

// Import DB.

/**
 * This file starts the server.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-07-02
 * @modifier
 * @modified
 * @since 0.4.0
 */
const port: number = 8080;

/*
 * The app starts here.
 */
app.listen(port, () => {
    return console.log(`Server started @ port:${port}`);
});
