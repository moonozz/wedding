import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { position, boxSize, flex, fontSize } from "../../utils/sMixinUtils";

function BottomOutTxt({ font }) {
  return (
    <SContainer $font={font}>
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
  font-family: ${({ $font }) => `${$font}`}, sans-serif;
  ${fontSize("100")}
  font-weight: 800;
  color: #de2b2b;
  bottom: -${getVwSize(130)};

  @media screen and (min-width: 640px) {
    bottom: -${getSize(130)};
  }
`;
