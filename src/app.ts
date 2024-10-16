// Import global from third party libraries.
import * as Sentry from '@sentry/node';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

// Import use cases.

// Import routers.
import chartsRouter from './routes/charts';
import statsRouter from './routes/stats';
// Import models.
// Entities.
// Enums.
// Errors.

// Import utilities.
import logger from './utils/logger';

// Import DB.

/**
 * This file is used as the entry point for all REST APIs.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-06
 * @modifier
 * @modified
 */
/*
 * Initializing app.
 */
const app = express();
const morganFormat =
    ':remote-addr :method :url :req[header] :res[header] :status :response-time';

/*
 * Sentry set-up
 */
Sentry.init({
    dsn: process.env.SENTRY_URL,
    tracesSampleRate: 1.0
});

/*
 * Logger set-up
 */
app.use(
    morgan(morganFormat, {
        stream: {
            write: (message: any) => {
                const logObject = {
                    address: message.split(' ')[0],
                    method: message.split(' ')[1],
                    url: message.split(' ')[2],
                    reqHeader: message.split(' ')[3],
                    resHeader: message.split(' ')[4],
                    status: message.split(' ')[5],
                    responseTime: message.split(' ')[6]
                };
                logger.info(JSON.stringify(logObject));
            }
        }
    })
);

/*
 * CORS Settings
 */
const corsOpts = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

/*
 * Body Parser Settings
 */
const jsonParser = bodyParser.json();

/*
 * Middlewares
 */
app.use(jsonParser);
app.use(cors(corsOpts));

/*
 * Url Routes
 */
app.use('/charts', chartsRouter);
app.use('/stats', statsRouter);

/*
 * No API end-point.
 */
app.get('/', (req, res, next) => {
    res.send('No API end-point');
});

/*
 * 404 Error
 */
app.use((req, res, next) => {
    res.status(404).send('Page not found.');
});

Sentry.setupExpressErrorHandler(app);

export default app;
