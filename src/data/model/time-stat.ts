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
 * This file contains all data types related to stats in unit of time.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-04
 * @modifier
 * @modified
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
