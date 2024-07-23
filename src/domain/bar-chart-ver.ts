// Import global from third party libraries.
import { promises as fsPromises } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Import use cases.

// Import controllers.

// Import middlewares.

// Import models.
// Entities.
import Language from '../data/model/lang';
import { TimeStat, TimeStatWithColor } from '../data/model/time-stat';
import DATA_TYPE from '../data/model/data-type';
// Enums.
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
async function mapColorsToFilterStats(
    stats: TimeStat[]
): Promise<TimeStatWithColor[]> {
    const currentWorkingDirectory = dirname(fileURLToPath(import.meta.url));
    const langsFilePath = join(currentWorkingDirectory, '../utils/langs.json');

    let colorMappedStats: TimeStatWithColor[] = [];

    try {
        const fileData = await fsPromises.readFile(langsFilePath, 'utf8');
        const langs = (JSON.parse(fileData) as Language[]).filter((lang) =>
            stats.map((stat) => stat.name).includes(lang.name)
        );
        // console.log('LANGS:', langs);
        colorMappedStats = stats.map((stat) => ({
            ...stat,
            color: `${langs.filter((lang) => lang.name === stat.name)[0].color}`
        }));
    } catch (error: any) {
        console.error('ERROR:', error.toString());
    }

    return colorMappedStats;
}

export default async function getVerticalBarChartOptions(
    stats: TimeStat[],
    dataType: DATA_TYPE
): Promise<{}> {
    // Add colors to filtered stats data.
    let verticalBarChartOption = {};

    try {
        const colorMappedStats = await mapColorsToFilterStats(stats);

        verticalBarChartOption = {
            xAxis: {
                type: 'category',
                data: colorMappedStats.map((stat) => stat.name)
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: colorMappedStats.map((stat) => ({
                        value: stat.percent,
                        itemStyle: {
                            color: stat.color
                        },
                        name: stat.name
                    })),
                    type: 'bar'
                }
            ]
        };
    } catch (error: any) {
        console.error('ERROR:', error.toString());
    }

    return verticalBarChartOption;
}
