import React from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { flex, fontFamily } from "../../utils/sMixinUtils";
import { getSize, getVwSize } from "../../utils/sThemeUtils";

function SName() {
  const introDataMale = data.information[0];
  const introDataFemale = data.information[1];

  return (
    <Name>
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
    </Name>
  );
}

export default SName;

const Name = styled.div`
  ${flex("column", "", "")};
  padding: ${getVwSize(40)} 0 ${getVwSize(80)};
  gap: 2vw;
  ${fontFamily("MaruBuri", "600")};

  p,
  div > span {
    font-size: ${getVwSize(24)};
  }
  span:nth-child(2) {
    font-size: ${getVwSize(20)};
    margin: 0 1.5vw;
    ${fontFamily("MaruBuri", "400")};
  }

  @media screen and (min-width: 640px) {
    padding: ${getSize(40)} 0 ${getSize(80)};
    gap: 1.4rem;
    p,
    div > span {
      font-size: ${getSize(24)};
    }
    span:nth-child(2) {
      font-size: ${getSize(20)};
      margin: 0 1rem;
    }
  }
`;
