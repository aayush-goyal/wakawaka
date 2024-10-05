// Import global from third party libraries.
import * as Sentry from '@sentry/node';
import axios from 'axios';

// Import use cases.

// Import controllers.

// Import middlewares.

// Import models.
// Entities.
// Enums.
// Errors.

// Import utilities.
import logger from '../utils/logger';

// Import DB.

/**
 * This function gets all the user data from Wakatime.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier
 * @modified
 */
export default async function getUserData(
    username: string,
    range: string,
    authToken: string
): Promise<any> {
    const WAKATIME_API_BASE_URL = 'https://api.wakatime.com/api/v1';

    try {
        const userStats = await axios.get(
            `${WAKATIME_API_BASE_URL}/users/${username}/stats/${range}?token=${authToken}`
        );

        return userStats;
    } catch (error: any) {
        logger.error('ERROR: ', error.toString());
        Sentry.captureException(error);
        return error.toString();
    }
}
