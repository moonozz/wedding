import BottomOutTxt from "./BottomOutTxt";
import OutTxt from "./OutTxt";
import Poster from "./Poster";
import OnlyTxt from "./OnlyTxt";

const TitleSection = (i) => {
  switch (i) {
    case "bottom":
      return <BottomOutTxt />;
      break;
    case "out":
      return <OutTxt />;
      break;
    case "poster":
      return <Poster />;
      break;
    default:
      return <OnlyTxt />;
  }
};

export { TitleSection };
// export { BottomOutTxt, OutTxt, Poster, OnlyTxt };
