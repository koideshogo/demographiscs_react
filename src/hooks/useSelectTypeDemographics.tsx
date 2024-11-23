import {useState} from "react";
import {SelectTypeDemographicsProps} from "../_types/demographics";

const TYPES: string[] = [
    '総人口',
    '年少人口',
    '生産年齢人口',
    '老年人口'
];

const useSelectTypeDemographics = (): SelectTypeDemographicsProps => {
    const [demographicsType, setDemographicsType] = useState<string>("総人口");

    function changeDemographicsType(e: ChangeEvent<HTMLSelectElement>): void {
        const { value } = e.target;

        if (TYPES.includes(value)) {
            setDemographicsType(value);
        }
    }

    return {
        demographicsType: demographicsType,
        handleChange: changeDemographicsType,
        options: TYPES
    }
}

export default useSelectTypeDemographics;