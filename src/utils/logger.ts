// Import third-party libraries.
import chalk from 'chalk';
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, json } = format;

/*
 * Custom format for console logging with colors.
 */
const consoleLogFormat = format.printf(({ level, message, timestamp }) => {
    let coloredLevel;

    // Apply custom colors based on the log level.
    switch (level) {
        case 'error':
            coloredLevel = chalk.hex('#F63E02');
            break;
        case 'warn':
            coloredLevel = chalk.hex('#F3B700');
            break;
        case 'info':
            coloredLevel = chalk.hex('#4F759B');
            break;
        default:
            coloredLevel = chalk.hex('#009B72');
            break;
    }

    // Customize the log message with timestamp and chalk.
    return `${chalk.gray(timestamp)} ${coloredLevel(level)}: ${coloredLevel(message)}`;
});

/*
 * Create a Winston logger.
 */
const logger = createLogger({
    level: 'info',
    format: combine(timestamp(), json()),
    transports: [
        new transports.Console({
            format: consoleLogFormat
        }),
        new transports.File({
            filename: 'app.log',
            handleExceptions: true,
            handleRejections: true
        })
    ]
});

export default logger;
