// Import global from third party libraries.
// import axios from 'axios';
import { Request, Response } from 'express';

// Import use cases.

// Import controllers.

// Import models.
// Entities.
// Enums.
// Errors.

// Import Utilities.
// eslint-disable-next-line import/extensions

// Import Db.

/**
 * This file handles all the controllers related to the "Home" service.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-07-02
 * @modifier
 * @modified
 * @since 0.4.0
 */
/**
 * This function is the controller to handle a request to return all the images on the home page.
 */

/**
 * Params
 * Type (4) -> languahes, projects, categories, os, editors
 * chart type(5) -> nightingale chart, scrollable chart, doughnut with roudn, axis align, horizaontal
 * Range (5) -> last 7 days, last-30-days, last-6-months, lat year, all-time
 *
 */

const getBestDayStats =
    () => async (req: Request, res: Response, next: any) => {
        // Output a string

        res.send('Helloo');
        // res.send('HELLO');
        // res.send(screenshot);
    };

const getDailyAvgStats =
    () => async (req: Request, res: Response, next: any) => {
        // Output a string

        res.send('Helloo');
        // res.send('HELLO');
        // res.send(screenshot);
    };

const getWeekRankings =
    () => async (req: Request, res: Response, next: any) => {
        // Output a string

        res.send('Helloo');
        // res.send('HELLO');
        // res.send(screenshot);
    };

export { getBestDayStats, getDailyAvgStats, getWeekRankings };
