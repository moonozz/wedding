import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  position,
  boxSize,
  flex,
  xyValue,
  fontSize,
} from "../../utils/sMixinUtils";

function OutTxt({ font }) {
  return (
    <SContainer $font={font}>
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
  font-family: ${({ $font }) => `${$font}`}, sans-serif;
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
