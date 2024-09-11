import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { fontSize } from "../../utils/sMixinUtils";

function SubTitleCircle({ text, font, color }) {
  return (
    <STitle $font={font} $color={color}>
      <span>{text}</span>
    </STitle>
  );
}

export default SubTitleCircle;

const STitle = styled.div`
  color: ${({ $color }) => $color};
  font-family: ${({ $font }) => `${$font}`}, sans-serif;

  span {
    ${fontSize("24")}
    border-radius: 100%;
    border: 0.1rem solid ${({ $color }) => $color};
    padding: ${getVwSize(8)} ${getVwSize(26)};
  }

  @media screen and (min-width: 640px) {
    span {
      padding: ${getSize(8)} ${getSize(26)};
    }
  }
`;
