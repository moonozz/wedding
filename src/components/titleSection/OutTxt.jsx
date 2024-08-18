import React from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { getWeek, getTime } from "../../utils/filter";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  position,
  boxSize,
  flex,
  fontFamily,
  xyValue,
  sPosterTxt,
  circleTxt,
} from "../../utils/sMixinUtils";

function OutTxt() {
  return (
    <SContainer>
      <SCircleTxt>
        <p>Save our date</p>
      </SCircleTxt>
      <SBigTxt>
        <span className="first-title">Happy</span>
        <span className="second-title">Wedding</span>
        <span className="third-title">Day</span>
      </SBigTxt>
      <SPosterTxt>
        <div>
          <span>Bo Gum</span>
          <span>&</span>
          <span>Su ji</span>
        </div>
        <div>
          <span>
            {data.when} {getWeek(data.when, "Eng")}
          </span>
          <span>{getTime("eng")}</span>
        </div>
      </SPosterTxt>
    </SContainer>
  );
}

export default OutTxt;

const SContainer = styled.div`
  ${fontFamily("Aoboshi One", "")};
  ${boxSize("100%", "")};
  ${flex("col", "center", "center")};
`;

const SCircleTxt = styled.div`
  ${position("absolute")};
  ${xyValue("24", "", "", "")};
  ${position("absolute")};
  ${circleTxt("white")}
`;

const SBigTxt = styled.div`
  font-size: ${getVwSize(100)};
  font-weight: 800;
  color: #ff511a;
  .first-title {
    ${position("absolute")};
    ${xyValue("100", "", "", "24")};
  }
  .second-title {
    ${position("absolute")};
    ${xyValue("260", "", "", "")};
  }
  .third-title {
    ${position("absolute")};
    ${xyValue("350", "", "", "100")};
  }

  @media screen and (min-width: 640px) {
    font-size: ${getSize(100)};
  }
`;

const SPosterTxt = styled.div`
  ${position("absolute")};
  ${xyValue("", "", "24", "")};
  ${boxSize("100%", "")};
  ${sPosterTxt};
`;
