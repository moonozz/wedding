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

      const isLocal = window.location.hostname === "localhost";
      const shareUrl = isLocal
        ? window.location.href
        : `https://weddingmoon.netlify.app/${Url}`;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
      }

      console.log("공유 데이터 확인:");
      console.log("title:", title);
      console.log("description:", subTxt);
      console.log("imageUrl:", imgUrl);
      console.log("link:", shareUrl);
      console.log("Kakao init 상태:", kakao.isInitialized());

      kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: title,
          description: subTxt,
          imageUrl: imgUrl,
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      });
    }
  };

  return { handleShare };
};
