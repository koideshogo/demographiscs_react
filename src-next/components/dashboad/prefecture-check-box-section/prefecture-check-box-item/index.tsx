import { Domain } from "src-next/domain";

export type PrefectureCheckBoxItemProps = {
  prefecture: Domain.Prefecture;
  selectedPrefecture: (prefecture: Domain.Prefecture) => void;
};
