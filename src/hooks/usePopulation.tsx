import {useCallback, useEffect, useState} from "react";
import {getPopulation} from "../api/population";
import {PopulationResponse} from "../_types/api/population";
import {PrefectureCheckBoxProps} from "../_types/prefectures";

const usePopulation = (
    SelectedGraphType: number
) => {
    const [populationData, setPopulationData] = useState<PopulationResponse[]|undefined>([]);
    // @ts-ignore
    const [checkedPrefectures, setCheckedPrefecture] = useState<PrefectureCheckBoxProps>([]);
    const updatePopulationData = useCallback(async (checkPrefectures: []) => {
        // @ts-ignore
        setCheckedPrefecture(checkPrefectures);
    }, []);

    const fetchAllPopulationData = async () => {
        console.log(checkedPrefectures)
        try {
            // @ts-ignore
            return await Promise.all(checkedPrefectures.map((prefecture) => getPopulation(prefecture.id, prefecture.label)));
        } catch (error) {
            console.error('Error fetching population data:', error);
        }
    };
    // データ取得
    useEffect(() => {
        fetchAllPopulationData().then((data) => {
            if (!data) {
                return;
            }
            // @ts-ignore
            const populationBySelectedGraphType = data.map((population) => {
                const populationResultData = population.result.data[SelectedGraphType];
                return {
                    prefectureName: population.prefectureName,
                    prefectureCode: population.prefectureCode,
                    boundaryYear: population.result.boundaryYear,
                    message: population.message,
                    result: populationResultData,
                };
            });

            setPopulationData(populationBySelectedGraphType);
        });
    }, [checkedPrefectures, SelectedGraphType]);

    return { populationData, updatePopulationData };
}

export default usePopulation;