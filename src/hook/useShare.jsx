import { useEffect, useState } from "react";
import data from "../data/data.json";
import { getKorDate, getWeek, getTime } from "../utils/filter";

export const useShare = () => {
  // const [img, setImg] = useState("");
  // const img = data.img[0];
  const title = `${data.information[0].name}❤️${data.information[1].name} 결혼합니다.`;
  const subTxt = `${getKorDate(2)} ${getWeek(data.when, "kor")}, ${getTime(
    "kor"
  )}`;

  const handleShare = (imgUrl) => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
      }

      kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: title,
          description: subTxt,
          imageUrl: imgUrl,
          // imageUrl: `${process.env.PUBLIC_URL}/assets/${data.img[0]}`,
          link: {
            mobileWebUrl: "http://192.168.35.233:3000",
            webUrl: "http://localhost:3000",
          },
        },
      });
    }
  };

  return { handleShare };
};
