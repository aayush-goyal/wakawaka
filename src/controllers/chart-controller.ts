// Import global from third party libraries.
import { Request, Response } from 'express';
import getUserData from '../middleware/stats';
import generateChartImg from '../domain/chart-generator';
import STAT_TYPE from '../data/model/stat-type';
import rangeGenerator from '../utils/range-generator';
import CHART_TYPE from '../data/model/chart-type';
import filterStatsData from '../data/filter-stats';
import { Stat } from '../data/model/stat';
import DATA_TYPE from '../data/model/data-type';

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
const getChartImage =
    (statType: STAT_TYPE) => async (req: Request, res: Response, next: any) => {
        const rangeQuery = req.query.range as unknown as number;
        const authToken = req.query.token as string;
        const chartType = req.query.chart_type as unknown as number;
        const dataType = req.query.data_type as unknown as number;

        // Get data.
        try {
            const range = rangeGenerator(rangeQuery);
            const userData = await getUserData(
                'aayushgoyalmps',
                range,
                authToken
            );
            const filteredStats = filterStatsData(
                userData.data.data as Stat,
                statType
            );
            const chartImg = await generateChartImg(
                CHART_TYPE[CHART_TYPE[chartType] as keyof typeof CHART_TYPE],
                DATA_TYPE[DATA_TYPE[dataType] as keyof typeof DATA_TYPE],
                filteredStats
            );

            // res.setHeader('Content-Type', 'image/png');
            res.send(chartImg);
        } catch (error: any) {
            console.error('LOG:', error.toString());
        }
    };

export { getChartImage };
