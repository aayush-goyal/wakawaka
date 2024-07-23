// Import global from third party libraries.

import { Stat, TimeStat } from './model/stat';
import STAT_TYPE from './model/stat-type';

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
function filterStats(stats: TimeStat[]): TimeStat[] {
    return stats
        .filter((stat) => stat.name !== 'Other')
        .sort((a: TimeStat, b: TimeStat) => b.percent - a.percent)
        .slice(0, 10);
}

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
