import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { secTitle } from "../../utils/sMixinUtils";

function SubTitleUnder({ text, font, color }) {
  return (
    <STitle $font={font} $color={color}>
      {text}
    </STitle>
  );
}

export default SubTitleUnder;

const STitle = styled.p`
  ${secTitle(({ $color }) => $color)};
  font-family: ${({ $font }) => `${$font}`}, sans-serif;
  font-weight: 800;
  text-decoration: underline;
  img {
    width: ${getVwSize(40)};
    height: auto;
    @media screen and (min-width: 640px) {
      width: ${getSize(40)};
    }
  }
`;
