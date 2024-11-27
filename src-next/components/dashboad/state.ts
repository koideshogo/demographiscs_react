import { Domain } from "src-next/domain";

export type DashboardState = {
  selectedLabel: Domain.PrefectureProperties.PopulationProperties.PopulationLabelType;
  prefecturesAll: Domain.Prefecture[];
};
