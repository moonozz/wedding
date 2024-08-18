import React from "react";
import styled from "styled-components";
import SubTitle from "../components/SubTitle";
import Calendar from "../components/calendar/Calendar";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { fontFamily, boxSize, flex } from "../utils/sMixinUtils";

function OurDay() {
  return (
    <SContainer>
      <SubTitle text={"OUR DAY"} />
      <Calendar />
    </SContainer>
  );
}

export default OurDay;

const SContainer = styled.div`
  padding: ${getSize(60)} 0 ${getSize(90)};
  /* width: ${getVwSize(640)}; */
  ${boxSize("100%", "auto")};
  ${flex("column", "center", "center")};

  @media screen and (min-width: 640px) {
    /* width: ${getSize(640)}; */
  }
`;
