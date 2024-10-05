// Import global from third party libraries.
import express from 'express';

// Import use cases.

// Import controllers.
import { getChartImage } from '../controllers/chart-controller';

// Import middlewares.

// Import models.
// Entities.
// Enums.
import STAT_TYPE from '../data/model/stat-type';
// Errors.

// Import Db.

/**
 * This file is used to export all the routers related to the "Chart" service.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier
 * @modified
 */
const chartsRouter = express.Router();

chartsRouter.get('/categories', getChartImage(STAT_TYPE.CATEGORIES));

chartsRouter.get('/editors', getChartImage(STAT_TYPE.EDITORS));

chartsRouter.get('/languages', getChartImage(STAT_TYPE.LANGUAGES));

chartsRouter.get('/os', getChartImage(STAT_TYPE.OS));

chartsRouter.get('/projects', getChartImage(STAT_TYPE.PROJECTS));

export default chartsRouter;
