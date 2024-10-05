// Import global from third party libraries.

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
 * This interface defines the data type for {@link Editor} entity.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier
 * @modified
 */
export default interface Editor {
    id: string;

    name: string;

    color: string;

    website: string;

    repository: string;

    released: boolean;

    hidden: boolean;

    version: string;

    history_url: string;

    version_url: string;
}
