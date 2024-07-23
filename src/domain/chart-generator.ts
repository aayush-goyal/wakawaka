// Import global from third party libraries.
import { EChartsType, init } from 'echarts';

// Import use cases.
import getVerticalBarChartOptions from './bar-chart-ver';

// Import controllers.

// Import middlewares.

// Import models.
// Entities.
import { TimeStat } from '../data/model/time-stat';
// Enums.
import CHART_TYPE from '../data/model/chart-type';
import DATA_TYPE from '../data/model/data-type';
// Errors.

// Import utilities.

// Import DB.

/**
 * Description
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-07-dd
 * @modifier
 * @modified
 * @since x.y.0
 */
function getChartOptions(
    chartType: CHART_TYPE,
    dataType: DATA_TYPE,
    filteredStats: TimeStat[]
) {
    switch (chartType) {
        case CHART_TYPE.BAR_CHART_HORIZONTAL:
            return getVerticalBarChartOptions(filteredStats, dataType);
        default:
            return getVerticalBarChartOptions(filteredStats, dataType);
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
        width: 600,
        height: 450
    });

    try {
        const chartData = await getChartOptions(
            chartType,
            dataType,
            filteredStats
        );
        chart.setOption(chartData);
        const svgStr = chart.renderToSVGString();
        return svgStr.split('<style >')[0] + '</svg>';

        // console.log('SVG:', svgStr);

        // const convertedSVG = Buffer.from(svgStr);

        // const buffer = await sharp(convertedSVG, { animated: false })
        //     .png({
        //         compressionLevel: 0
        //     })
        //     .toBuffer();

        // // If chart is no longer useful, consider disposing it to release memory.
        // chart.dispose();
        // chart = null;

        // return svgStr;
    } catch (error: any) {
        console.error('ERROR:', error.toString());
    }
}
