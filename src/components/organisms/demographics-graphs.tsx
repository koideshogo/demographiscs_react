import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, {useRef} from 'react';

type Props = {
    populationList: populationListType
}

const DemographicsGraphs: React.FC<Props> = ({ populationList }) => {

    return (
        <HighchartsReact
            highcharts={HighCharts}
            options={options}
            ref={chartComponentRef}
        />
    )
}

export default DemographicsGraphs;