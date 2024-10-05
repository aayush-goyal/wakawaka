// Import global from third party libraries.
import * as Sentry from '@sentry/node';
import { Request, Response } from 'express';

// Import use cases.
import filterStatsData from '../data/filter-stats';
import generateChartImg from '../domain/chart-generator';

// Import controllers.
import getUserData from '../middleware/stats';

// Import models.
// Entities.
import { Stat } from '../data/model/stat';
// Enums.
import CHART_TYPE from '../data/model/chart-type';
import DATA_TYPE from '../data/model/data-type';
import STAT_TYPE from '../data/model/stat-type';
// Errors.

// Import Utilities.
import logger from '../utils/logger';
import rangeGenerator from '../utils/range-generator';

// Import Db.

/**
 * This file handles all the controllers related to the "Chart" services.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier
 * @modified
 */
const getChartImage =
    (statType: STAT_TYPE) => async (req: Request, res: Response, next: any) => {
        const username = req.query.username as string;
        const rangeQuery = req.query.range as unknown as number;
        const authToken = req.query.token as string;
        let chartType = req.query.chart_type as unknown as number;
        let dataType = req.query.data_type as unknown as number;

        // Verify inputs and do a validation on values.
        if (!username) {
            return res.status(400).json({
                message: 'Username is required.'
            });
        }
        if (!chartType) {
            chartType = 0;
        }
        if (!dataType) {
            dataType = 0;
        }
        if (!authToken) {
            logger.error('Unauthorized access. No auth_token provided.');
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }

        // Get data.
        try {
            const range = rangeGenerator(rangeQuery);
            const userData = await getUserData(username, range, authToken);
            const filteredStats = filterStatsData(
                userData.data.data as Stat,
                statType
            );
            const chartImg = await generateChartImg(
                CHART_TYPE[CHART_TYPE[chartType] as keyof typeof CHART_TYPE],
                DATA_TYPE[DATA_TYPE[dataType] as keyof typeof DATA_TYPE],
                filteredStats
            );

            res.send(chartImg);
        } catch (error: any) {
            logger.error(error.toString());
            Sentry.captureException(error);
        }
    };

export { getChartImage };
