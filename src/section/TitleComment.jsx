import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import ScrollImg from "../components/ScrollImg";
import SubTitle from "../components/SubTitle";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { fontFamily, defaultTxtStyle } from "../utils/sMixinUtils";

function Introduce() {
  return (
    <Container>
      <SubTitle text={"***"} />
      <SScriptDiv>
        <p>
          작은 우연이 모여 서로를 알게 되고,
          <br />
          작은 순간들에 사랑이 스며들어
          <br />
          서로를 바라보게 되었습니다.
        </p>
        <p>
          이제 같은 시간 속에서 <br />
          평생을 함께 하려고 합니다.
        </p>
        <p>
          저희 두 사람의 새 출발을
          <br />
          함께 축복해주세요.
        </p>
      </SScriptDiv>
      <ScrollImg imgUrl={data.img[7]} margin={100} />
    </Container>
  );
}

export default Introduce;

const Container = styled.section`
  padding: ${getVwSize(90)} 0;
  ${fontFamily("MaruBuri", "400")};
  @media screen and (min-width: 640px) {
    padding: ${getSize(90)} 0;
  }
`;

const SScriptDiv = styled.div`
  ${defaultTxtStyle("1.8", "24", "40")};
  padding: ${getVwSize(40)} 0;

  @media screen and (min-width: 640px) {
    padding: ${getSize(40)} 0;
  }
`;
