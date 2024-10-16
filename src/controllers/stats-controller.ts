// Import global from third party libraries.
import * as Sentry from '@sentry/node';
import { Request, Response } from 'express';

// Import use cases.

// Import controllers.
import getUserData from '../middleware/stats';

// Import models.
// Entities.
// Enums.
// Errors.

// Import Utilities.
import logger from '../utils/logger';
import { Stat } from '../data/model/stat';

// Import Db.

/**
 * This file handles all the controllers related to the "Stats" service.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-16
 * @modifier
 * @modified
 */
const getBestDayStats =
    () => async (req: Request, res: Response, next: any) => {
        const username = req.query.username as string;
        const authToken = req.query.token as string;

        // Verify inputs and do a validation on values.
        if (!username) {
            return res.status(400).json({
                message: 'Username is required.'
            });
        }

        if (!authToken) {
            logger.error('Unauthorized access. No auth_token provided.');
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }

        // Get data.
        try {
            const userData = await getUserData(username, 'all_time', authToken);
            const bestDay = (userData.data.data as Stat).best_day;

            if (!bestDay) {
                return res.status(404).json({
                    message: 'No data found.'
                });
            }

            const date = new Date(bestDay.date);
            const formattedDate = date.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            });
            bestDay.date = formattedDate.split(' ').join('%20');
            bestDay.text = bestDay.text.split(' ').join('%20') + '-blue';

            let shieldString = 'https://img.shields.io/badge/';
            shieldString = shieldString + bestDay.date + '-' + bestDay.text;

            res.status(200).json({
                message: 'Success',
                data: shieldString
            });
        } catch (error: any) {
            logger.error(error.toString());
            Sentry.captureException(error);
            res.status(500).json({
                message: 'Internal Server Error',
                data: ''
            });
        }
    };

const getDailyAvgStats =
    () => async (req: Request, res: Response, next: any) => {
        const username = req.query.username as string;
        const authToken = req.query.token as string;

        // Verify inputs and do a validation on values.
        if (!username) {
            return res.status(400).json({
                message: 'Username is required.'
            });
        }

        if (!authToken) {
            logger.error('Unauthorized access. No auth_token provided.');
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }

        // Get data.
        try {
            const userData = await getUserData(username, 'all_time', authToken);
            const dailyAverage =
                (userData.data.data as Stat).human_readable_daily_average
                    .split(' ')
                    .join('%20') + '-blue';

            const shieldString = `https://img.shields.io/badge/Daily%20Average-${dailyAverage}`;

            res.status(200).json({
                message: 'Success',
                data: shieldString
            });
        } catch (error: any) {
            logger.error(error.toString());
            Sentry.captureException(error);
            res.status(500).json({
                message: 'Internal Server Error',
                data: ''
            });
        }
    };

export { getBestDayStats, getDailyAvgStats };
