export type ApiResult = {
  message: string;
  result: {
    boundaryYear: number;
    data: [
      {
        label: string;
        data: [
          {
            year: number;
            value: number;
            rate: number;
          }
        ];
      }
    ];
  };
};
