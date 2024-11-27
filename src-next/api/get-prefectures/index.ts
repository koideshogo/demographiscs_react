import axios from "axios";
import { Domain } from "src-next/domain";
import { ApiResult } from "./type";
import { getPopulation } from "./get-population";

export const getPrefectures = async (): Promise<Domain.Prefecture[]> => {
  const result = await axios.get<ApiResult>(
    "https://yumemi-frontend-engineer-codecheck-api.vercel.app/api/v1/prefectures"
  );
  return await Promise.all(
    result.data.result.map(async (item) => {
      return {
        prefCode: item.prefCode,
        prefName: item.prefName,
        selected: false,
        population: await getPopulation(item),
      };
    })
  );
};
