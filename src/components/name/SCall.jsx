import React from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import SCallLi from "./SCallLi";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  flex,
  fontFamily,
  boxSize,
  defaultTxtStyle,
} from "../../utils/sMixinUtils";

function SCall() {
  const groom = data.information[0];
  const bride = data.information[1];

  return (
    <Container>
      <Group>
        <p>신랑측</p>
        <ul>
          <SCallLi tag={"신랑"} name={groom.name} phone={groom.phone} />
          <SCallLi
            tag={"신랑 아버지"}
            name={groom.father}
            phone={groom.fatherPhone}
          />
          <SCallLi
            tag={"신랑 어머니"}
            name={groom.mother}
            phone={groom.motherPhone}
          />
        </ul>
      </Group>
      <Group>
        <p>신부측</p>
        <ul>
          <SCallLi tag={"신부"} name={bride.name} phone={bride.phone} />
          <SCallLi
            tag={"신부 어머니"}
            name={bride.mother}
            phone={bride.motherPhone}
          />
        </ul>
      </Group>
    </Container>
  );
}

export default SCall;

const Container = styled.div`
  ${flex("column", "", "")};
  ${boxSize("100%", "auto")}
  gap: ${getVwSize(10)};
  ${fontFamily("MaruBuri", "400")};
  ${defaultTxtStyle("", "24", "20")}

  @media screen and (min-width: 640px) {
    gap: ${getSize(10)};
  }
`;

const Group = styled.div`
  p:first-child {
    padding-bottom: 2rem;
    border-bottom: 0.5px solid rgb(0, 0, 0, 0.5);
  }
  padding: ${getVwSize(30)} ${getVwSize(70)};
  ${flex("column", "", "")};
  text-align: left;

  @media screen and (min-width: 640px) {
    padding: ${getSize(30)} ${getSize(70)};
  }
`;
