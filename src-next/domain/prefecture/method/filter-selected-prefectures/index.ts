import { Prefecture } from "../..";

export const filterSelectedPrefectures = (
  prefectures: Prefecture[]
): Prefecture[] => {
  return prefectures.filter((prefecture) => prefecture.selected);
};
