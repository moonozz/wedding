import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  position,
  boxSize,
  flex,
  fontFamily,
  xyValue,
  fontSize,
} from "../../utils/sMixinUtils";

function OutTxt() {
  return (
    <SContainer>
      <STitle>
        <span>We are</span>
        <span>Getting</span>
      </STitle>
      <SRedTxt>&#40;Married&#41;</SRedTxt>
    </SContainer>
  );
}

export default OutTxt;

const SContainer = styled.div`
  ${flex("column", "center", "center")}
  ${fontFamily("Abril Fatface", "")};
  ${boxSize("100%", "")};

  color: white;
  span {
    ${fontSize("50")}
    line-height: 1.2;
  }
`;

const STitle = styled.div`
  ${flex("column", "", "")};
  ${position("absolute")};
  ${xyValue("24", "", "", "")};
`;

const SRedTxt = styled.span`
  ${position("absolute")};
  ${xyValue("", "", "24", "")};
  color: #f32a2a;
`;
