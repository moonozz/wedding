import BottomOutTxt from "./BottomOutTxt";
import OutTxt from "./OutTxt";
import Poster from "./Poster";
import OnlyTxt from "./OnlyTxt";

const TitleSection = (i, font) => {
  switch (i) {
    case "bottom":
      return <BottomOutTxt font={"Aoboshi One"} />;
      break;
    case "out":
      return <OutTxt font={"Aoboshi One"} />;
      break;
    case "poster":
      return <Poster />;
      break;
    default:
      return <OnlyTxt font={"Abril Fatface"} />;
  }
};

export { TitleSection };
// export { BottomOutTxt, OutTxt, Poster, OnlyTxt };
