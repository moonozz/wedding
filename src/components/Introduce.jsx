import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import ScrollImg from "./ScrollImg";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { flex } from "../utils/sMixinUtils";

function Introduce() {
  const introDataMale = data.information[0];
  const introDataFemale = data.information[1];
  console.log(data.img[7]);

  return (
    <Container>
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
      <SName>
        <p>👰🏻‍♀️❤️🤵🏻‍♂️</p>
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
      </SName>
      <ScrollImg imgUrl={data.img[7]} />
    </Container>
  );
}

export default Introduce;

const Container = styled.section`
  padding: ${getVwSize(90)} 0;
  @media screen and (min-width: 640px) {
    padding: ${getSize(90)} 0;
  }
`;

const SScriptDiv = styled.div`
  line-height: 1.6;
  p {
    font-size: ${getVwSize(24)};
    margin-bottom: ${getVwSize(24)};
  }
  @media screen and (min-width: 640px) {
    p {
      font-size: ${getSize(24)};
      margin-bottom: ${getSize(24)};
    }
  }
`;

const SName = styled.div`
  ${flex("column", "", "")};
  padding: ${getVwSize(70)} 0 ${getVwSize(100)};
  gap: 2vw;

  p,
  div > span {
    font-size: ${getVwSize(24)};
  }
  span:nth-child(2) {
    font-size: ${getVwSize(20)};
    margin: 0 1.5vw;
  }

  @media screen and (min-width: 640px) {
    padding: ${getSize(70)} 0 ${getSize(100)};
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
