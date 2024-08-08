import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { boxSize, position, trbl } from "../\butils/sMixinUtils";

function ScrollImg({ imgUrl }) {
  return (
    <SContainer>
      <SImgBox>
        {/* <Img $image={imgUrl} /> */}
        <SImg $image={imgUrl} />
      </SImgBox>
    </SContainer>
  );
}

export default ScrollImg;

const SContainer = styled.section`
  ${position("relative")};
  ${boxSize("100vw", "62.5vw")}
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
  @media screen and (min-width: 640px) {
    ${boxSize("", "40rem")}
    margin-left: calc(50% - 32rem);
  }
`;

const SImgBox = styled.div`
  background-color: black;
  ${position("absolute")};
  ${boxSize("64rem", "100%")};
  clip: rect(0, auto, auto, 0);
`;

const SImg = styled.div`
  display: block;
  ${boxSize("100%", "100%")};
  ${position("fixed")};
  ${trbl("0", "", "", "")};
  background: url(${process.env.PUBLIC_URL}/assets/${(props) => props.$image})
    no-repeat center center;
  background-size: cover;

  @media screen and (min-width: 640px) {
    ${boxSize("64rem", "")};
    /* width: 64rem; */
  }
`;
