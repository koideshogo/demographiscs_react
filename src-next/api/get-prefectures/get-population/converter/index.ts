import { Domain } from "src-next/domain";
import { ApiResult } from "../type";

export const converter = (
  result: ApiResult["result"]
): Domain.Prefecture["population"] => {
  return {
    boundaryYear: result.boundaryYear,
    data: result.data.map((data) => {
      if (
        Domain.PrefectureProperties.PopulationProperties.PopulationLabelValidation(
          data.label
        )
      ) {
        return {
          label: data.label,
          data: data.data,
        } satisfies Domain.Prefecture["population"]["data"][number];
      } else {
        throw new Error("Invalid label");
      }
    }),
  };
};
