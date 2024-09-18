import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { secTitle } from "../../utils/sMixinUtils";

function SubTitleTxt({ text, font, color }) {
  return (
    <STitle $font={font} $color={color}>
      {text}
    </STitle>
  );
}

export default SubTitleTxt;

const STitle = styled.p`
  ${secTitle(({ $color }) => $color)};
  font-family: ${({ $font }) => `${$font}`}, sans-serif;
  font-weight: 800;
  img {
    width: ${getVwSize(40)};
    height: auto;
    @media screen and (min-width: 640px) {
      width: ${getSize(40)};
    }
  }
`;
