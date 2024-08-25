import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import SubTitle from "../components/SubTitle";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { boxSize, flex, fontFamily } from "../utils/sMixinUtils";

function Account() {
  return (
    <SContainer>
      <SubTitle text={"Account"} />
    </SContainer>
  );
}

export default Account;

const SContainer = styled.section`
  ${boxSize("100%", "auto")};
  ${flex("column", "", "")};
  ${fontFamily("MaruBuri", "")};
  padding: ${getSize(60)} 0 ${getSize(90)};
`;
