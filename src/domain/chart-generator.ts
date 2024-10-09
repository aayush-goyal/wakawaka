// Import global from third party libraries.
import * as Sentry from '@sentry/node';
import { EChartsType, EChartsOption, init } from 'echarts';

// Import use cases.
import getDoughnutChartOptions from './doughnut-chart';
import getHorizontalBarChartOptions from './bar-chart-hor';
import getNightingaleChartOptions from './nightingale-chart';
import getPieChartOptions from './pie-chart';
import getVerticalBarChartOptions from './bar-chart-ver';

// Import controllers.

// Import middlewares.

// Import models.
// Entities.
import { TimeStat, TimeStatWithColor } from '../data/model/time-stat';
// Enums.
import CHART_TYPE from '../data/model/chart-type';
import DATA_TYPE from '../data/model/data-type';
// Errors.

// Import utilities.
import logger from '../utils/logger';

// Import DB.

/**
 * This file contains code to generate chart images from user stats data.
 *
 * @version 1.1.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier Aayush Goyal
 * @modified 2024-10-06
 */
const colorsArray = [
    '#CFB3E8',
    '#C2C3F0',
    '#E3A6BE',
    '#BDE1ED',
    '#BBEBB2',
    '#FCF4D3',
    '#F2D2BA',
    '#F4D4A7',
    '#EBC5C5',
    '#D3D3D3'
];

async function getChartOptions(
    chartType: CHART_TYPE,
    dataType: DATA_TYPE,
    filteredStats: TimeStat[]
): Promise<EChartsOption | undefined> {
    let chartOptions;
    try {
        const statsWithColor: TimeStatWithColor[] = filteredStats.map(
            (stat, index) => ({
                ...stat,
                color: colorsArray[index]
            })
        );

        switch (chartType) {
            case CHART_TYPE.BAR_CHART_HORIZONTAL:
                chartOptions = getVerticalBarChartOptions(statsWithColor);
                break;
            case CHART_TYPE.BAR_CHART_VERTICAL:
                chartOptions = getHorizontalBarChartOptions(statsWithColor);
                break;
            case CHART_TYPE.DOUGHNUT_CHART:
                chartOptions = getDoughnutChartOptions(statsWithColor);
                break;
            case CHART_TYPE.NIGHTINGALE_CHART:
                chartOptions = getNightingaleChartOptions(statsWithColor);
                break;
            case CHART_TYPE.PIE_CHART:
                chartOptions = getPieChartOptions(statsWithColor);
                break;
        }

        return chartOptions;
    } catch (error: any) {
        logger.error(error.toString());
        Sentry.captureException(error);
    }
}

export default async function generateChartImg(
    chartType: CHART_TYPE,
    dataType: DATA_TYPE,
    filteredStats: TimeStat[]
) {
    const chart: EChartsType | null = init(null, null, {
        renderer: 'svg',
        devicePixelRatio: 16,
        ssr: true,
        width: 800,
        height: 600
    });

    try {
        const chartData: EChartsOption = (await getChartOptions(
            chartType,
            dataType,
            filteredStats
        )) as EChartsOption;
        chart.setOption(chartData);
        const svgStr = chart.renderToSVGString().split('<style>')[0];

        return svgStr;
    } catch (error: any) {
        logger.error(error.toString());
        Sentry.captureException(error);
    }
}
