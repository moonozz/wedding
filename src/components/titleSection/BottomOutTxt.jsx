import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  position,
  boxSize,
  flex,
  fontFamily,
  fontSize,
} from "../../utils/sMixinUtils";

function BottomOutTxt() {
  return (
    <SContainer>
      <span>Happy</span>
      <span>Wedding</span>
      <span>Day</span>
    </SContainer>
  );
}

export default BottomOutTxt;

const SContainer = styled.div`
  ${boxSize("100%", "")};
  ${flex("column", "", "")};
  ${position("absolute")};
  ${fontFamily("Aoboshi One", "")};
  ${fontSize("100")}
  font-weight: 800;
  color: #de2b2b;
  bottom: -${getVwSize(130)};

  @media screen and (min-width: 640px) {
    bottom: -${getSize(130)};
  }
`;
