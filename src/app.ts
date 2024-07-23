// Import global from third party libraries.
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

// Import use cases.

// Import routers.
import chartsRouter from './routes/charts';
import statsRouter from './routes/stats';
// Import models.
// Entities.
// Enums.
// Errors.

// Import utilities.

// Import DB.

/**
 * This file is used as the entry point for all REST APIs.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-07-02
 * @modifier Aayush Goyal
 * @modified 2024-07-03
 * @since 0.4.0
 */
/*
 * Initializing app.
 */
const app = express();

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

export default app;
