import {ChangeEvent, useState} from "react";
import {SelectTypePopulationProps} from "../_types/population";

const GRAPH_TYPES= [
    { "value" : 0, "label" : '総人口'},
    { "value" : 1, "label" : '年少人口'},
    { "value" : 2, "label" : '生産年齢人口'},
    { "value" : 3, "label" : '老年人口'},
];

const useSelectTypePopulation = (): SelectTypePopulationProps => {
    const [graphType, setGraphType] = useState(0);

    function changePopulationType(e: ChangeEvent<HTMLSelectElement>): void {
        const { value } = e.target;

        const collectTypeValue = GRAPH_TYPES.map((type) => type.value);
        if (collectTypeValue.includes(Number(value))) {
            setGraphType(Number(value));
        }
    }

    return {
        handleChange: changePopulationType,
        options: GRAPH_TYPES,
        selectedValue: graphType
    }
}

export default useSelectTypePopulation;