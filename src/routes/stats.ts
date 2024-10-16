// Import global from third party libraries.
import express from 'express';

// Import use cases.

// Import controllers.
import {
    getBestDayStats,
    getDailyAvgStats
} from '../controllers/stats-controller';

// Import middlewares.

// Import models.
// Entities.
// Enums.
// Errors.

// Import Db.

/**
 * This file is used to export all the routers related to the "Stats" service.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-16
 * @modifier
 * @modified
 */
const statsRouter = express.Router();

statsRouter.get('/best_day', getBestDayStats());

statsRouter.get('/daily_avg', getDailyAvgStats());

export default statsRouter;
