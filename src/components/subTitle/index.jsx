import SubTitleCircle from "./SubTitleCircle";
import SubTitleTxt from "./SubTitleTxt";

const useSubTitle = (i, text, font, color) => {
  switch (i) {
    case "circle":
      return <SubTitleCircle text={text} font={font} color={color} />;
      break;
    default:
      return <SubTitleTxt text={text} font={font} color={color} />;
  }
};

export { useSubTitle };
