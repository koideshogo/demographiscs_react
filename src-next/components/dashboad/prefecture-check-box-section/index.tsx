import { Domain } from "src-next/domain";

export type PrefectureCheckBoxProps = {
  prefectures: Domain.Prefecture[];
  selectedPrefecture: (prefecture: Domain.Prefecture) => void;
};
