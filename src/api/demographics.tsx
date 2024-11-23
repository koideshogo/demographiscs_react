import {axiosV1Instance} from "./api-instance";
import {DemographicsResponse} from "../_types/api/demographics";

/**
 * 都道府県別の人口データを取得する
 */
export const getDemographics = async (prefCode: string): Promise<DemographicsResponse> => {
    try {
        const response = await axiosV1Instance.get('/population/composition/perYear', {
            params: {
                prefCode: prefCode,
            },
        });

        return response.data.result;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get demographics');
    }
}