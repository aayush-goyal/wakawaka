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
 * This function gets the vertical bar chart options to render an SVG image.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier
 * @modified
 */
export default async function getVerticalBarChartOptions(
    stats: TimeStatWithColor[]
): Promise<{}> {
    let verticalBarChartOption = {};

    try {
        verticalBarChartOption = {
            xAxis: {
                type: 'category',
                data: stats.map((stat) => stat.name),
                axisLabel: {
                    interval: 0
                }
            },
            yAxis: {
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
                    type: 'bar',
                    label: {
                        show: true,
                        position: 'top'
                    },
                    labelLine: {
                        show: true
                    }
                }
            ]
        };
    } catch (error: any) {
        logger.error(error.toString());
        Sentry.captureException(error);
    }

    return verticalBarChartOption;
}
