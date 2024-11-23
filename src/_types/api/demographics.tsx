/**
 * @endpoint GET /population/composition/perYear
 */
export type DemographicsResponse = {
    message: string | null;
    result: DemographicsResult;
}

export type DemographicsResult = {
    boundaryYear: number;
    data: DemographicsData[];
}

export type DemographicsData = {
    label: string;
    data: YearlyData[];
}

export type YearlyData = {
    year: number;
    value: number;
}