import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import { useScrollEvent } from "../hook/useScrollEvent";
import { useSubTitle } from "../components/subTitle";
import Dropdown from "../components/Dropdown";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { boxSize, flex, animation } from "../utils/sMixinUtils";

function Account({ subTitle, sectionColor, padding }) {
  const { ref, isView } = useScrollEvent();

  const infoData = data.account;
  const groomInfo = infoData[0];
  const brideInfo = infoData[1];

  return (
    <SContainer $sectionColor={sectionColor} $padding={padding}>
      <div ref={ref} className={isView ? "frame-in" : ""}>
        {useSubTitle(subTitle.type, "Account", subTitle.font, subTitle.color)}
        <SDropdownGroup>
          <Dropdown title={"신랑"} info={groomInfo} />
          <Dropdown title={"신부"} info={brideInfo} />
        </SDropdownGroup>
      </div>
    </SContainer>
  );
}

export default Account;

const SContainer = styled.section`
  ${boxSize("100%", "auto")};
  ${flex("column", "", "")};
  background-color: ${({ $sectionColor }) => $sectionColor.bg};
  color: ${({ $sectionColor }) => $sectionColor.color};
  padding: ${({ $padding }) => `${$padding.top}rem 2rem ${$padding.bottom}rem`};

  div {
    &.frame-in {
      ${animation};
    }
  }
`;

const SDropdownGroup = styled.div`
  padding: ${getVwSize(40)} 0 ${getVwSize(26)};
  @media screen and (min-width: 640px) {
    padding: ${getSize(40)} 0;
  }
`;
