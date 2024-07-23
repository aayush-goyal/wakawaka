// Import global from third party libraries.
import axios from 'axios';

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
export default async function getUserData(
    username: string,
    range: string,
    authToken: string
): Promise<any> {
    // Check whether the data exists on redis cache.
    // If not, hit WakaTime API.
    const WAKATIME_API_BASE_URL = 'https://api.wakatime.com/api/v1';
    try {
        const userStats = await axios.get(
            `${WAKATIME_API_BASE_URL}/users/${username}/stats/${range}?token=${authToken}`
        );

        return userStats;
    } catch (error: any) {
        console.error('ERROR: ', error.toString());
        return error.toString();
    }
}
