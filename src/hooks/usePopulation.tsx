import {useCallback, useEffect, useState} from "react";
import {getPopulation} from "../api/population";

const usePopulation = (
    SelectedGraphType: string
) => {
    const [populationData, setPopulationData] = useState({
        boundaryYear: 0,
        prefectureCode: 0,
        prefectureName: '',
        total: {label: '', data: [{'year' : 0, 'value': 0, 'rate': 0}]},
        young: {label: '', data: [{'year' : 0, 'value': 0, 'rate': 0}]},
        workingAge: {label: '', data: [{'year' : 0, 'value': 0, 'rate': 0}]},
        elderly: {label: '', data: [{'year' : 0, 'value': 0, 'rate': 0}]},
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
                const populationResultData = population.result.data;
                return {
                    prefectureName: population.prefectureName,
                    prefectureCode: population.prefectureCode,
                    boundaryYear: population.result.boundaryYear,
                    total: populationResultData[0],
                    young: populationResultData[1],
                    workingAge: populationResultData[2],
                    elderly: populationResultData[3],
                };
            });

            setPopulationData(populationByGraph);
        });
    }, [checkedPrefectures, SelectedGraphType]);

    return { populationData, updatePopulationData };
}

export default usePopulation;