import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import ScrollImg from "./ScrollImg";

function Introduce() {
  const introDataMale = data.information[0];
  const introDataFemale = data.information[1];
  console.log(data.img[7]);

  return (
    // <IntroSec className="maruburi">
    <IntroSec className="">
      <ScriptDiv>
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
      </ScriptDiv>
      <Name className="flex-col">
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
      </Name>
      <ScrollImg imgUrl={data.img[7]} />
    </IntroSec>
  );
}

export default Introduce;

const IntroSec = styled.section`
  padding: 14vw 0;
  @media screen and (min-width: 640px) {
    padding: 9rem 0;
  }
`;

const ScriptDiv = styled.div`
  line-height: 1.6;
  p {
    font-size: 3.8vw;
    margin-bottom: 3.8vw;
  }
  @media screen and (min-width: 640px) {
    p {
      font-size: 2.4rem;
      margin-bottom: 2.4rem;
    }
  }
`;

const Name = styled.div`
  padding: 10.7vw 0 20.3vw;
  gap: 2vw;
  /* p {
    margin-bottom: 2rem;
  } */
  p,
  div > span {
    font-size: 3.8vw;
  }
  span:nth-child(2) {
    font-size: 3vw;
    margin: 0 1.5vw;
  }

  @media screen and (min-width: 640px) {
    padding: 7rem 0 10rem;
    gap: 1.4rem;
    p,
    div > span {
      font-size: 2.4rem;
    }
    span:nth-child(2) {
      font-size: 2rem;
      margin: 0 1rem;
    }
  }
`;
