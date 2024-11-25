import {axiosV1Instance} from "./api-instance";
import {PopulationResponse} from "../_types/api/population";

/**
 * 都道府県別の人口データを取得する
 */
export const getPopulation = async (prefCode: string): Promise<PopulationResponse> => {
    try {
        const response = await axiosV1Instance.get('/population/composition/perYear', {
            params: {
                prefCode: prefCode,
            },
        });
        console.log('ok')
        console.log(response.data.result);
        return response.data.result;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get population');
    }
}