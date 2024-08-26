import React from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { flex, fontFamily, fontSize } from "../../utils/sMixinUtils";
import { getSize, getVwSize } from "../../utils/sThemeUtils";

function Name() {
  const introDataMale = data.information[0];
  const introDataFemale = data.information[1];

  return (
    <SContainer>
      <div>
        <span>
          {introDataMale.father}∙{introDataMale.mother}
        </span>
        <span>의 아들</span>
        <span>{introDataMale.name}</span>
      </div>
      <div>
        <span>
          {introDataFemale.father}∙{introDataFemale.mother}
        </span>
        <span>의 딸</span>
        <span>{introDataFemale.name}</span>
      </div>
    </SContainer>
  );
}

export default Name;

const SContainer = styled.div`
  ${flex("column", "", "")};
  padding: ${getVwSize(40)} 0 ${getVwSize(80)};
  gap: 2vw;
  ${fontFamily("MaruBuri", "600")};

  p,
  div > span {
    ${fontSize("24")};
  }
  span:nth-child(2) {
    ${fontSize("20")};

    margin: 0 1.5vw;
    ${fontFamily("MaruBuri", "400")};
  }

  @media screen and (min-width: 640px) {
    padding: ${getSize(40)} 0 ${getSize(80)};
    gap: 1.4rem;
  }
`;
