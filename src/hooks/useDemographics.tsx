import {useCallback, useState} from "react";
import {getDemographics} from "../api/demographics";


const useDemographics = (
    demographicsType: string
) => {
    const [demographicsData, setDemographicsData] = useState({
        boundaryYear: 0,
        total: [],
        young: [],
        workingAge: [],
        elderly: [],
    });

    const updateDemographicsData = useCallback(async (prefCode: string) => {
        const checkedDemographicsData = await getDemographics(prefCode);
        setDemographicsData(checkedDemographicsData);
    }, []);

    return { demographicsData, updateDemographicsData };
}

export default useDemographics;