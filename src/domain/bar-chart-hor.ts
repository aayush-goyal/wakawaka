// Import global from third party libraries.
import * as Sentry from '@sentry/node';

// Import use cases.

// Import controllers.

// Import middlewares.

// Import models.
// Entities.
import { TimeStatWithColor } from '../data/model/time-stat';
// Enums.
// Errors.

// Import utilities.
import logger from '../utils/logger';

// Import DB.

/**
 * This function gets the horizontal bar chart options to render an SVG image.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier
 * @modified
 */
export default async function getHorizontalBarChartOptions(
    stats: TimeStatWithColor[]
): Promise<{}> {
    let horizontalBarChartOption = {};

    try {
        horizontalBarChartOption = {
            yAxis: {
                type: 'category',
                data: stats.map((stat) => stat.name)
            },
            xAxis: {
                type: 'value'
            },
            textStyle: {
                fontFamily: 'Manrope'
            },
            series: [
                {
                    data: stats.map((stat) => ({
                        value: stat.percent,
                        itemStyle: {
                            color: stat.color
                        },
                        name: stat.name
                    })),
                    label: {
                        show: true,
                        position: 'right'
                    },
                    type: 'bar'
                }
            ]
        };
    } catch (error: any) {
        logger.error(error.toString());
        Sentry.captureException(error);
    }

    return horizontalBarChartOption;
}
