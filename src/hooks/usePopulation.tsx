import {useCallback, useState} from "react";
import {getPopulation} from "../api/population";

const usePopulation = (
    populationType: string
) => {
    const [populationData, setPopulationData] = useState({
        boundaryYear: 0,
        total: [],
        young: [],
        workingAge: [],
        elderly: [],
    });

    const [checkedPrefectures, setCheckedPrefecture] = useState([]);
    const updatePopulationData = useCallback(async (checkPrefectures: []) => {
        setCheckedPrefecture(checkPrefectures);
    }, []);

    const fetchAllPopulationData = async () => {
        try {
            return await Promise.all(checkedPrefectures.map((prefecture) => getPopulation(prefecture.id)));
        } catch (error) {
            console.error('Error fetching population data:', error);
        }
    };
    // データ取得
    const data = fetchAllPopulationData();

    return { populationData, updatePopulationData };
}

export default usePopulation;