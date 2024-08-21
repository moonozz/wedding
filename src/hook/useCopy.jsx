import { useState } from "react";

function useCopy() {
  const [isCopy, setIsCopy] = useState(false);

  const onCopy = async (txt) => {
    try {
      await navigator.clipboard.writeText(txt);
      setIsCopy(true);
      // confirm("복사가 완료되었습니다.");

      return true;
    } catch (err) {
      console.log(err);
      setIsCopy(false);

      return false;
    }
  };

  return [isCopy, onCopy];
}

export default useCopy;
