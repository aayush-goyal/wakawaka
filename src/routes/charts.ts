// Import global from third party libraries.
import express from 'express';

// Import use cases.

// Import controllers.
import { getChartImage } from '../controllers/chart-controller';
import STAT_TYPE from '../data/model/stat-type';

// Import middlewares.

// Import models.
// Entities.
// Enums.
// Errors.

// Import Db.

/**
 * This file is used to export all the routers related to the "Home" service.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-07-02
 * @modifier
 * @modified
 * @since 0.4.0
 */
const chartsRouter = express.Router();

chartsRouter.get('/categories', getChartImage(STAT_TYPE.CATEGORIES));

chartsRouter.get('/editors', getChartImage(STAT_TYPE.EDITORS));

chartsRouter.get('/languages', getChartImage(STAT_TYPE.LANGUAGES));

chartsRouter.get('/os', getChartImage(STAT_TYPE.OS));

chartsRouter.get('/projects', getChartImage(STAT_TYPE.PROJECTS));

export default chartsRouter;
