import {ChangeEvent, useEffect, useState} from "react";
import {getPrefectures} from "../api/prefectures";
import {PrefectureCheckBoxProps} from "../_types/prefectures";
import {Prefecture} from "../_types/api/prefectures";

export const usePrefectureCheckBox = (
    updatePopulationData: (checkedPrefecture: []) => Promise<void>,
) => {
    const [prefectureCheckBoxInfo, setPrefectureCheckBoxInfo] = useState<PrefectureCheckBoxProps>([{
        id: "",
        name: "",
        checked: false,
        label: "",
        handleChange: () => () => {},
    }]);

    // ローディング状態
    const [isLoading, setLoading] = useState<boolean>(true);

    const handleCheckboxChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const { id, name, checked } = event.target;
        setPrefectureCheckBoxInfo((prev) =>
            prev.map((prefecture) =>
                prefecture.id === id ? { ...prefecture, checked: checked } : prefecture
            )
        );
        console.log(prefectureCheckBoxInfo)
        // checked だけを取得
        // const checkedPrefecture = prefectureCheckBoxInfo.filter((prefecture) => prefecture.checked);
        // console.log(checkedPrefecture)
    };

    useEffect(() => {
        setLoading(true);
        const fetchPrefecturesData = async () => {
            try {
                const prefectureData = await getPrefectures();
                const checkBoxesWithHandlers: PrefectureCheckBoxProps = prefectureData.result.map((info: Prefecture) => {
                    return {
                        id: info.prefCode.toString(),
                        name: info.prefName,
                        checked: false,
                        label: info.prefName,
                        handleChange: handleCheckboxChange,
                    };
                });
                setPrefectureCheckBoxInfo(checkBoxesWithHandlers);
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