import {useCallback, useEffect, useMemo, useState} from "react";
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

    // populationTypeに変更があった場合にデータを更新する
    // useEffect(() => {
    //     // 非同期で即時関数を実行する
    //     (async () => {
    //         // const checkedPopulationData = await getPopulation(prefCode);
    //         // console.log(populationType)
    //     })();
    //
    // }, [populationType]);

    const updatePopulationData = useCallback(async (checkedPopulationData: []) => {
        // const checkedPopulationData = await getPopulation(prefCode);
        console.log(checkedPopulationData)
        // const prefecturePopulations = useMemo(() => checkedPopulationData.flatMap((result) => reslut.data || []), [checkedPopulationData]);
        // console.log(prefCode)
    }, []);


    return { populationData, updatePopulationData };
}

export default usePopulation;