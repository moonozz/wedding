import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { secTitle } from "../\butils/sMixinUtils";

function SubTitle({ text, font, subColor }) {
  return (
    <STitle $font={font} $color={subColor}>
      {text}
    </STitle>
  );
}

export default SubTitle;

const STitle = styled.p`
  ${secTitle(({ $color }) => $color)};
  font-family: ${({ $font }) => `${$font}`}, sans-serif;
  img {
    width: ${getVwSize(40)};
    height: auto;
    @media screen and (min-width: 640px) {
      width: ${getSize(40)};
    }
  }
`;
