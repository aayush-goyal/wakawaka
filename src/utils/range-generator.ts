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
 * This function generates the range for Wakatime API call based on the value passed to the API.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier
 * @modified
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
