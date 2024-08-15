import React from "react";
import styled from "styled-components";
import SSubTitle from "../components/SSubTitle";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { fontFamily, boxSize } from "../utils/sMixinUtils";

function OurDay() {
  return (
    <Container>
      <SSubTitle text={"OUR DAY"} />
    </Container>
  );
}

export default OurDay;

const Container = styled.div`
  padding: ${getSize(60)} 0 ${getSize(90)};
  /* width: ${getVwSize(640)}; */
  ${boxSize("100%", "auto")};

  @media screen and (min-width: 640px) {
    width: ${getSize(640)};
  }
`;
