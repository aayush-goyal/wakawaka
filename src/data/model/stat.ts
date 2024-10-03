// Import global from third party libraries.

// Import use cases.

// Import controllers.

// Import middlewares.

// Import models.
// Entities.
import { TimeStat } from './time-stat';
// Enums.
// Errors.

// Import utilities.

// Import DB.

/**
 * This file contains all types for defining {@link Stat} entity.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-04
 * @modifier
 * @modified
 */
interface BestDay {
    date: string;

    total_seconds: number;

    text: string;
}

interface Stat {
    id: string;

    user_id: string;

    range: string;

    start: string;

    end: string;

    timeout: number;

    writes_only: boolean;

    timezone: string;

    holidays: number;

    status: string;

    created_at: string;

    modified_at: string;

    operating_systems: TimeStat[];

    percent_calculated: number;

    human_readable_daily_average_including_other_language: string;

    languages: TimeStat[];

    human_readable_total_including_other_language: string;

    editors: TimeStat[];

    human_readable_total: string;

    is_already_updating: boolean;

    days_including_holidays: number;

    is_stuck: boolean;

    daily_average_including_other_language: number;

    projects: TimeStat[];

    total_seconds_including_other_language: number;

    human_readable_daily_average: string;

    best_day: BestDay;

    is_up_to_date_pending_future: boolean;

    days_minus_holidays: number;

    total_seconds: number;

    is_up_to_date: boolean;

    categories: TimeStat[];

    is_cached: boolean;

    username: string;

    is_including_today: boolean;

    human_readable_range: string;

    is_coding_activity_visible: boolean;

    is_other_usage_visible: boolean;
}

export { BestDay, Stat };
