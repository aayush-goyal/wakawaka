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
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-10-05
 * @modifier
 * @modified
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
        let svgStr = chart.renderToSVGString();

        const fontFaceRule = `
          <style>
            @font-face {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FN_C-bnTfc7AGrY.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            text {
              font-family: 'Manrope';
            }
          </style>
        `;

        svgStr = svgStr.split('<style>')[0] + '</svg>';
        svgStr = svgStr.replace('<svg', `${fontFaceRule}<svg`);
        return svgStr;
    } catch (error: any) {
        logger.error(error.toString());
        Sentry.captureException(error);
    }
}
