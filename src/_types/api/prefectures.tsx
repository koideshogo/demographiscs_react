/**
 * @endpoint GET /prefectures
 */
export type PrefecturesResponse = {
    message: string | null;
    result: Prefecture[];
}

export type Prefecture = {
    prefCode: number;
    prefName: string;
}