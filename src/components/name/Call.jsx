import React from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import CallLi from "./CallLi";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { flex, boxSize, defaultTxtStyle } from "../../utils/sMixinUtils";

function Call(sectionColor) {
  const groom = data.information[0];
  const bride = data.information[1];

  return (
    <SContainer>
      <SGroup $sectionColor={sectionColor}>
        <p>신랑측</p>
        <ul>
          <CallLi tag={"신랑"} name={groom.name} phone={groom.phone} />
          <CallLi
            tag={"신랑 아버지"}
            name={groom.father}
            phone={groom.fatherPhone}
          />
          <CallLi
            tag={"신랑 어머니"}
            name={groom.mother}
            phone={groom.motherPhone}
          />
        </ul>
      </SGroup>
      <SGroup $sectionColor={sectionColor}>
        <p>신부측</p>
        <ul>
          <CallLi tag={"신부"} name={bride.name} phone={bride.phone} />
          <CallLi
            tag={"신부 어머니"}
            name={bride.mother}
            phone={bride.motherPhone}
          />
        </ul>
      </SGroup>
    </SContainer>
  );
}

export default Call;

const SContainer = styled.div`
  ${flex("column", "", "")};
  ${boxSize("100%", "auto")}
  gap: ${getVwSize(10)};
  ${defaultTxtStyle("", "24", "30")}

  @media screen and (min-width: 640px) {
    gap: ${getSize(10)};
  }
`;

const SGroup = styled.div`
  p:first-child {
    padding-bottom: ${getVwSize(24)};
    border-bottom: 0.5px solid;
    border-color: {({$sectionColor}) => $sectionColor.color}

    @media screen and (min-width: 640px) {
      padding-bottom: ${getSize(24)};
    }
  }
  padding: ${getVwSize(30)} ${getVwSize(70)};
  ${flex("column", "", "")};
  text-align: left;

  @media screen and (min-width: 640px) {
    padding: ${getSize(30)} ${getSize(70)};
  }
`;
