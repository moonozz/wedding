import React from "react";
import styled from "styled-components";
import SubTitle from "../components/SubTitle";
import { boxSize } from "../utils/sMixinUtils";
import { getSize, getVwSize } from "../utils/sThemeUtils";

function Location() {
  return (
    <SContainer>
      <SubTitle text={"Location"} />
    </SContainer>
  );
}

export default Location;

const SContainer = styled.div`
  ${boxSize("100%", "auto")};
  padding: ${getSize(60)} 0 ${getSize(90)};
`;
