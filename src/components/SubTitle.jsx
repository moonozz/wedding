import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { secTitle, fontFamily } from "../\butils/sMixinUtils";

function SubTitle({ text, font }) {
  return (
    <STitle $font={font}>
      {/* {typeof text === "string" ? (
        text.endsWith(".svg") ? (
          <img src={text} alt="" />
        ) : (
          text
        )
      ) : (
        text
      )} */}
      {text}
    </STitle>
  );
}

export default SubTitle;

const STitle = styled.p`
  ${secTitle("#f32a2a")};
  font-family: ${({ $font }) => `${$font}`}, sans-serif;
  img {
    width: ${getVwSize(40)};
    height: auto;
    @media screen and (min-width: 640px) {
      width: ${getSize(40)};
    }
  }
`;
