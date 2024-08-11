import React from "react";
import styled from "styled-components";
import data from "../../../data/data.json";
import { getWeek, getTime } from "../../../utils/filter";
import { getSize, getVwSize } from "../../../utils/sThemeUtils";
import {
  position,
  boxSize,
  flex,
  fontFamily,
  xyValue,
  sPosterTxt,
} from "../../../utils/sMixinUtils";

function OutTxt() {
  return (
    <SContainer>
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
      <SBottomTitle>
        <span>We are</span>
        <span>Getting</span>
        <SRedTxt>&#40;Married&#41;</SRedTxt>
      </SBottomTitle>
    </SContainer>
  );
}

export default OutTxt;

const SContainer = styled.div`
  ${flex("col", "center", "center")}
`;

const SPosterTxt = styled.div`
  ${fontFamily("Aoboshi One")};
  ${position("absolute")};
  ${xyValue("24", "", "", "")};
  ${boxSize("100%", "")};
  ${sPosterTxt};
`;

const SBottomTitle = styled.div`
  ${fontFamily("Abril Fatface")};
  ${position("absolute")};
  ${xyValue("", "", "24", "")};
  ${flex("column", "", "")};
  color: white;
  span {
    font-size: ${getVwSize(50)};
    line-height: 1.2;
  }
  @media screen and (min-width: 640px) {
    span {
      font-size: ${getSize(50)};
    }
  }
`;

const SRedTxt = styled.span`
  color: #f32a2a;
`;
