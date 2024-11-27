/**
 * @endpoint GET /population/composition/perYear
 */
export type PopulationResponse = {
    prefectureCode: string;
    prefectureName: string;
    message: string | null;
    result: PopulationResult;
}

export type PopulationResult = {
    boundaryYear: number;
    data: PopulationData[];
}

export type PopulationData = {
    label: string;
    data: YearlyData[];
}

export type YearlyData = {
    year: number;
    value: number;
    // rate: number;
}