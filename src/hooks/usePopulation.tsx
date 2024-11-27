import {useCallback, useEffect, useState} from "react";
import {getPopulation} from "../api/population";

const usePopulation = (
    SelectedGraphType: string
) => {
    const [populationData, setPopulationData] = useState({
        boundaryYear: 0,
        prefectureCode: 0,
        prefectureName: '',
        result: [],
    });
    const [checkedPrefectures, setCheckedPrefecture] = useState([]);
    const updatePopulationData = useCallback(async (checkPrefectures: []) => {
        setCheckedPrefecture(checkPrefectures);
    }, []);

    const fetchAllPopulationData = async () => {
        try {
            return await Promise.all(checkedPrefectures.map((prefecture) => getPopulation(prefecture.id, prefecture.name)));
        } catch (error) {
            console.error('Error fetching population data:', error);
        }
    };
    // データ取得
    useEffect(() => {
        fetchAllPopulationData().then((data) => {
            const populationByGraph = data.map((population) => {
                const populationResultData = population.result.data[SelectedGraphType];
                return {
                    prefectureName: population.prefectureName,
                    prefectureCode: population.prefectureCode,
                    boundaryYear: population.result.boundaryYear,
                    result: populationResultData,
                };
            });

            setPopulationData(populationByGraph);
        });
    }, [checkedPrefectures, SelectedGraphType]);

    return { populationData, updatePopulationData };
}

export default usePopulation;