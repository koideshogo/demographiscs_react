import {useState} from "react";
import {SelectTypePopulationProps} from "../_types/population";

const TYPES: string[] = [
    '総人口',
    '年少人口',
    '生産年齢人口',
    '老年人口'
];

const useSelectTypePopulation = (): SelectTypePopulationProps => {
    const [populationType, setPopulationType] = useState<string>("総人口");

    function changePopulationType(e: ChangeEvent<HTMLSelectElement>): void {
        const { value } = e.target;

        if (TYPES.includes(value)) {
            setPopulationType(value);
        }
    }

    return {
        populationType: populationType,
        handleChange: changePopulationType,
        options: TYPES
    }
}

export default useSelectTypePopulation;