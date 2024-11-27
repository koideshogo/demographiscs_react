import { Domain } from "src-next/domain";

export const getSelectedPrefecture = (
  prefecture: Domain.Prefecture
): Domain.Prefecture => {
  return {
    ...prefecture,
    selected: true,
  };
};
