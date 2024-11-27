import {ChangeEvent, useEffect, useState} from "react";
import {getPrefectures} from "../api/prefectures";
import {PrefectureCheckBoxProps} from "../_types/prefectures";
import {Prefecture} from "../_types/api/prefectures";

export const usePrefectureCheckBox = (
    updatePopulationData: (checkedPrefecture: {
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        name: string;
        checked: boolean;
        id: string;
        label: string
    }[]) => Promise<PrefectureCheckBoxProps>,
) => {
    const [prefectureCheckBoxInfo, setPrefectureCheckBoxInfo] = useState<PrefectureCheckBoxProps>();

    // ローディング状態
    const [isLoading, setLoading] = useState<boolean>(true);

    const handleCheckboxChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = event.target;
        setPrefectureCheckBoxInfo((prev) => {
            // @ts-ignore
            const updatedInfo = prev.map((prefecture: { id: string; }) =>
                prefecture.id === id ? { ...prefecture, checked } : prefecture
            );
            const checkedPrefecture = updatedInfo.filter((prefecture: { checked: boolean; }) => prefecture.checked);
            updatePopulationData(checkedPrefecture);

            return updatedInfo;
        });
    };

    useEffect(() => {
        setLoading(true);
        const fetchPrefecturesData = async () => {
            try {
                const prefectureData = await getPrefectures();

                const checkBoxWithHandlers: {
                    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
                    name: string;
                    checked: boolean;
                    id: string;
                    label: string
                }[] = prefectureData.result.map((info: Prefecture) => {
                    return {
                        id: info.prefCode.toString(),
                        name: info.prefName,
                        checked: false,
                        label: info.prefName,
                        handleChange: handleCheckboxChange,
                    };
                });
                // @ts-ignore
                setPrefectureCheckBoxInfo(checkBoxWithHandlers);
            } catch (error) {
                console.error('Failed to fetch prefecture data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPrefecturesData().catch((error) => console.error(error));
    }, []);

    return { prefectureCheckBoxInfo, isLoading};
};