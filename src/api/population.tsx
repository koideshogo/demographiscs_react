import {axiosV1Instance} from "./api-instance";
import {PopulationResponse} from "../_types/api/population";

/**
 * 都道府県別の人口データを取得する
 */
export const getPopulation = async (prefectureCode: string, prefectureName: string): Promise<PopulationResponse> => {
    try {
        const response = await axiosV1Instance.get('/population/composition/perYear', {
            params: {
                prefCode: prefectureCode,
            },
        });

        return {
            prefectureCode: prefectureCode,
            prefectureName: prefectureName,
            message: response.data.message,
            result: response.data.result
        };
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get population');
    }
}