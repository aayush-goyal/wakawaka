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
 * This function gets the doughnut chart options to render an SVG image.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier
 * @modified
 */
export default async function getDoughnutChartOptions(
    stats: TimeStatWithColor[]
): Promise<{}> {
    let doughnutChartOption = {};

    try {
        doughnutChartOption = {
            textStyle: {
                fontFamily: 'Manrope'
            },
            series: [
                {
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: true,
                        formatter: '{b}: {c}%'
                    },
                    labelLine: {
                        show: true
                    },
                    data: stats.map((stat) => ({
                        value: stat.percent,
                        itemStyle: {
                            color: stat.color
                        },
                        name: stat.name
                    }))
                }
            ]
        };
    } catch (error: any) {
        logger.error(error.toString());
        Sentry.captureException(error);
    }

    return doughnutChartOption;
}
