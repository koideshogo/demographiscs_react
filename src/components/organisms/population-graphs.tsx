import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Props = HighchartsReact.Props;

const PopulationGraph: React.FC<Props> = ({ populationList }) => {
    if (populationList.length === 0) {
        return <></>;
    }
// @ts-ignore
    const years  = [ ...new Set(populationList.flatMap((data) => data.result.data.map((item) => item.year)))];

    console.log(populationList)
    console.log(years)
    const options: Highcharts.Options = {
        title: undefined,
        // @ts-ignore
        xAxis: {
            title: {
                text: '年',
            },
            categories: years,
        },
        yAxis: {
            title: {
                text: '人口',
            },
        },
        // @ts-ignore
        series: populationList.map((data) => ({
            type: 'line',
            name: data.prefectureName,
            // @ts-ignore
            data: data.result.data.map((item) => item.value)
        })),
        accessibility: {
            enabled: false,
        },
    };

    return (
        <section>
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </section>
    );
}

export default PopulationGraph;