import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import SubTitle from "../components/SubTitle";
import Dropdown from "../components/Dropdown";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import {
  boxSize,
  flex,
  fontFamily,
  defaultTxtStyle,
} from "../utils/sMixinUtils";

function Account() {
  const infoData = data.account;
  const groomInfo = infoData[0];
  const brideInfo = infoData[1];

  return (
    <SContainer>
      <SubTitle text={"Account"} />
      <SDropdownGroup>
        <Dropdown title={"신랑"} info={groomInfo} />
        <Dropdown title={"신부"} info={brideInfo} />
      </SDropdownGroup>
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

const SDropdownGroup = styled.div`
  padding: ${getVwSize(40)} 0 ${getVwSize(26)};
  @media screen and (min-width: 640px) {
    padding: ${getSize(40)} 0;
  }
`;
