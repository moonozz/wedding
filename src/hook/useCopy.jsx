import { useState } from "react";

export const useCopy = () => {
  const [isCopy, setIsCopy] = useState(false);

  const onCopy = async (txt) => {
    try {
      await navigator.clipboard.writeText(txt);
      // safari에서는 https 여야만 사용이 가능하데.. 그래서 clipboard API 를 사용해야함..
      setIsCopy(true);
      // confirm("복사가 완료되었습니다.");

      return true;
    } catch (err) {
      console.log(err);
      setIsCopy(false);

      return false;
    }
  };

  // return [isCopy, onCopy];
  return { isCopy, onCopy };
};
