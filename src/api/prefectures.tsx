import {axiosV1Instance} from "./api-instance";
import {PrefecturesResponse} from "../_types/api/prefectures";

/**
 * 都道府県一覧を取得する
 *
 * @endpoints GET /prefectures
 * @returns PrefecturesResponse
 */
export const getPrefectures = async (): Promise<PrefecturesResponse> => {
    try {
        const response = await axiosV1Instance.get('/prefectures');
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get prefectures');
    }
}