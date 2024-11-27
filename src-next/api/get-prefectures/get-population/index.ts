import axios from "axios";
import { Domain } from "src-next/domain";
import { ApiResult } from "./type";
import { ResultItem } from "../type";
import { converter } from "./converter";

export const getPopulation = async (
  prefecture: ResultItem
): Promise<Domain.Prefecture["population"]> => {
  const result = await axios.get<ApiResult>(
    "https://yumemi-frontend-engineer-codecheck-api.vercel.app/api/v1/population/composition/perYear",
    {
      params: {
        prefCode: prefecture.prefCode,
      },
    }
  );

  return converter(result.data.result);
};
