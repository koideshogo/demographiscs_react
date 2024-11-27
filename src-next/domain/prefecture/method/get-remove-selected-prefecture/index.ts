import { Domain } from "src-next/domain";

export const getRemoveSelectedPrefecture = (
  prefecture: Domain.Prefecture
): Domain.Prefecture => {
  return {
    ...prefecture,
    selected: false,
  };
};
