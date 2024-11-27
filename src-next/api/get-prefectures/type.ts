export type ApiResult = {
  message: string;
  result: ResultItem[];
};

export type ResultItem = {
  prefCode: number;
  prefName: string;
};
