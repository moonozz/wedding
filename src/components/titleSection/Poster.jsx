import React from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { getWeek, getTime } from "../../utils/filter";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  position,
  boxSize,
  flex,
  xyValue,
  sPosterTxt,
  fontSize,
} from "../../utils/sMixinUtils";

function Poster() {
  return (
    <SContainer>
      <SPosterTxt $font={"Aoboshi One"}>
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
      <SBottomTitle $font={"Abril Fatface"}>
        <span>We are</span>
        <span>Getting</span>
        <SRedTxt>&#40;Married&#41;</SRedTxt>
      </SBottomTitle>
    </SContainer>
  );
}

export default Poster;

const SContainer = styled.div`
  ${flex("col", "center", "center")}
`;

const SPosterTxt = styled.div`
  font-family: ${({ $font }) => `${$font}`}, sans-serif;
  ${position("absolute")};
  ${xyValue("24", "", "", "")};
  ${boxSize("100%", "")};
  ${sPosterTxt};
`;

const SBottomTitle = styled.div`
  font-family: ${({ $font }) => `${$font}`}, sans-serif;
  ${position("absolute")};
  ${xyValue("", "", "24", "")};
  ${flex("column", "", "")};
  color: white;
  span {
    ${fontSize("50")}
    line-height: 1.2;
  }
`;

const SRedTxt = styled.span`
  color: #f32a2a;
`;
