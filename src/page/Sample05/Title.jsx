import styled from "styled-components";
import data from "../../data/data.json";
import { getDate, getWeek, getTime } from "../../utils/filter";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  position,
  boxSize,
  fontSize,
  dim,
  xyValue,
  flex,
} from "../../utils/sMixinUtils";

function Title({ font }) {
  return (
    <SContainer>
      <SBgPaper />
      <SContent>
        <STopTxt>
          <div>
            <p>{data.information[0].EngName}</p>
            <p>{data.information[1].EngName}</p>
          </div>
          <p>
            Wedding
            <br />
            Day
          </p>
        </STopTxt>
        <SImg
          src={`${process.env.PUBLIC_URL}/assets/titleImg.png`}
          alt={"we are getting married image"}
        />
        <SBottomTxt>
          <p>
            {getDate("", 4)}
            <br />
            {getWeek(data.when, "Eng")}
          </p>
          <p>{getTime("eng")}</p>
        </SBottomTxt>
      </SContent>
    </SContainer>
  );
}

export default Title;

const SContainer = styled.section`
  ${position("relative")};
  background-color: #fceaea;
  width: 100%;
  padding: ${getVwSize(50)};
  @media screen and (min-width: 640px) {
    width: ${getSize(640)};
    padding: ${getSize(50)};
  }
`;

const SBgPaper = styled.div`
  ${position("absolute")};
  ${xyValue("0", "0", "", "")};
  ${boxSize("100%", "100%")};
  mix-blend-mode: multiply;
  background-image: url(${process.env.PUBLIC_RUL}/assets/paperImg.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SContent = styled.div`
  width: 100%;
  ${flex("column", "center", "")};
  font-family: "panchang", sans-serif;
  font-weight: 800;
  color: #d8444f;
  p {
    ${fontSize(16)};
  }

  @media screen and (min-width: 640px) {
    width: calc(640px - ${getSize(100)});
  }
`;

const STopTxt = styled.div`
  ${boxSize("100%", "auto")};
  ${flex("row", "", "space-between")};
  text-align: left;

  div {
    ${flex("column", "", "")};
  }
`;

const SImg = styled.img`
  margin: ${getVwSize(90)} 0;
  width: ${getVwSize(500)};
  /* height: ${getVwSize(640)}; */
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 640px) {
    margin: ${getSize(90)} 0;
    width: ${getSize(500)};
    /* height: ${getSize(640)}; */
  }
`;

const SBottomTxt = styled.div`
  ${boxSize("100%", "auto")};
  ${flex("row", "", "space-between")};
  text-align: left;
`;
