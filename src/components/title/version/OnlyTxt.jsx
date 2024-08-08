import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../../utils/sThemeUtils";
import {
  position,
  boxSize,
  flex,
  fontFamily,
  trbl,
} from "../../../utils/sMixinUtils";

function OutTxt() {
  return (
    <SContainer>
      <STitle>
        <span>We are</span>
        <span>Getting</span>
      </STitle>
      <SRedTxt className="absolute b-24">&#40;Married&#41;</SRedTxt>
    </SContainer>
  );
}

export default OutTxt;

const SContainer = styled.div`
  ${flex("column", "center", "center")}
  ${fontFamily("Abril Fatface")};
  ${boxSize("100%", "")};

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

const STitle = styled.div`
  ${flex("column", "", "")};
  ${position("absolute")};
  ${trbl("24", "", "", "")};
`;

const SRedTxt = styled.span`
  ${position("absolute")};
  ${trbl("", "", "24", "")};
  color: #f32a2a;
`;
