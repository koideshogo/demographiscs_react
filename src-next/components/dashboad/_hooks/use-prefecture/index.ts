import { useEffect, useState } from "react";
import { Api } from "src-next/api";
import { Domain } from "src-next/domain";

export const usePrefecture = () => {
  const [prefectures, setPrefectures] = useState<Domain.Prefecture[]>([]);
  useEffect(() => {
    Api.getPrefectures().then((prefectures) => {
      setPrefectures(prefectures);
    });
  }, []);

  return {
    prefectures,
  };
};
