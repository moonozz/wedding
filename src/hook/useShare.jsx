// import data from "../data/data.json";
import { getDate, getWeek, getTime } from "../utils/filter";

export const useShare = () => {
  const handleShare = (data, imgUrl, Url) => {
    const title = `${data.information[0].name}❤️${data.information[1].name} 결혼합니다.`;
    const subTxt = `${getDate(data.when, "kor", 2)} ${getWeek(
      data.when,
      "kor"
    )}, ${getTime(data.time, "kor")}`;

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
          link: {
            // mobileWebUrl: "http://192.168.35.233:3000",
            mobileWebUrl: `https://weddingmoon.netlify.app/${Url}`,
            // webUrl: "http://localhost:3000",
            webUrl: `https://weddingmoon.netlify.app/${Url}`,
          },
        },
      });
    }
  };

  return { handleShare };
};
