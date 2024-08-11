import React from "react";
import styled from "styled-components";
import { secTitle, fontFamily } from "../\butils/sMixinUtils";

function SSubTitle({ text }) {
  return <STitle>{text}</STitle>;
}

export default SSubTitle;

const STitle = styled.p`
  ${secTitle("#f32a2a")};
  ${fontFamily("Abril Fatface", "")};
`;
