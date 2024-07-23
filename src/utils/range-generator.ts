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
export default function rangeGenerator(range: number): string {
    switch (range) {
        case 0:
            return 'last_7_days';
        case 1:
            return 'last_30_days';
        case 2:
            return 'last_6_months';
        case 3:
            return 'last_year';
        default:
            return 'all_time';
    }
}
