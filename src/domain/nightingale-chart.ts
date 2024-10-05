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
 * This function gets the nightingale chart options to render an SVG image.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier
 * @modified
 */
export default async function getNightingaleChartOptions(
    stats: TimeStatWithColor[]
): Promise<{}> {
    let nightingaleChartOption = {};

    try {
        nightingaleChartOption = {
            textStyle: {
                fontFamily: 'Manrope'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            series: [
                {
                    type: 'pie',
                    radius: [50, 250],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    label: {
                        show: true,
                        formatter: '{b}: {c}%'
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

    return nightingaleChartOption;
}
