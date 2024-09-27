import SubTitleCircle from "./SubTitleCircle";
import SubTitleTxt from "./SubTitleTxt";
import SubTitleUnder from "./SubTitleUnder";

const useSubTitle = ({ type, text, font, color }) => {
  switch (type) {
    case "circle":
      return <SubTitleCircle text={text} font={font} color={color} />;
      break;
    case "()":
      return <SubTitleTxt text={`(${text})`} font={font} color={color} />;
      break;
    case "underline":
      return <SubTitleUnder text={text} font={font} color={color} />;
      break;
    default:
      return <SubTitleTxt text={text} font={font} color={color} />;
  }
};

export { useSubTitle };
