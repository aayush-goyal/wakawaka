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
 * Description
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-07-dd
 * @modifier
 * @modified
 * @since x.y.0
 */
interface TimeStat {
    total_seconds: number;

    name: string;

    percent: number;

    digital: string;

    decimal: string;

    text: string;

    hours: number;

    minutes: number;
}

type TimeStatWithColor = TimeStat & { color: string };

export { TimeStat, TimeStatWithColor };
