// Import global from third party libraries.

// Import use cases.

// Import controllers.

// Import middlewares.

// Import models.
// Entities.
import { TimeStat } from './model/time-stat';
import { Stat } from './model/stat';
// Enums.
import STAT_TYPE from './model/stat-type';
// Errors.

// Import utilities.

// Import DB.

/**
 * This function filters the stats on one particular entity (languages, categories, editors, and etc.)
 *
 * @param stats Given entity type of stat.
 * @returns Filtered stats removing "Other" category and sorting in ascending order taking at max 10 entries.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier
 * @modified
 */
function filterStats(stats: TimeStat[]): TimeStat[] {
    return (
        stats
            // Remove all the entries grouped under one project named 'Other'.
            .filter((stat) => stat.name !== 'Other')
            // Sort in the descending order.
            .sort((a: TimeStat, b: TimeStat) => b.percent - a.percent)
            // Take the top 10 entries at max.
            .slice(0, 10)
    );
}

/**
 * This function filters the stats data based on the stat type the user passed.
 *
 * @param stats The entire stats data bounded only by range.
 * @param statType {@link STAT_TYPE} of the stat.
 * @returns Filtered stats data based on the stat type.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier
 * @modified
 */
export default function filterStatsData(stats: Stat, statType: STAT_TYPE) {
    switch (statType) {
        case STAT_TYPE.LANGUAGES:
            return filterStats(stats.languages);
        case STAT_TYPE.EDITORS:
            return filterStats(stats.editors);
        case STAT_TYPE.OS:
            return filterStats(stats.operating_systems);
        case STAT_TYPE.PROJECTS:
            return filterStats(stats.projects);
        default:
            return filterStats(stats.categories);
    }
}
