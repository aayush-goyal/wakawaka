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
 * This function gets the pie chart options to render an SVG image.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier
 * @modified
 */
export default async function getPieChartOptions(
    stats: TimeStatWithColor[]
): Promise<{}> {
    let pieChartOption = {};

    try {
        pieChartOption = {
            textStyle: {
                fontFamily: 'Manrope'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    type: 'pie',
                    radius: '55%',
                    center: ['40%', '50%'],
                    data: stats.map((stat) => ({
                        value: stat.percent,
                        itemStyle: {
                            color: stat.color
                        },
                        name: stat.name
                    })),
                    label: {
                        show: true,
                        formatter: '{b}: {c}%'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    } catch (error: any) {
        logger.error(error.toString());
        Sentry.captureException(error);
    }

    return pieChartOption;
}
