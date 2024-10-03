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
 * This interface defines the data type for {@link Language} entity.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-04
 * @modifier
 * @modified
 */
export default interface Language {
    id: string;

    name: string;

    color: string;

    is_verified: boolean;

    created_at: string;

    modified_at: string;
}
