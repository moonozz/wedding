import React from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { getKorDate, getWeek, getTime } from "../../utils/filter";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { position, boxSize, dim } from "../../utils/sMixinUtils";
import BottomOutTxt from "./version/BottomOutTxt";
import OutTxt from "./version/OutTxt";
import Poster from "./version/Poster";
import OnlyTxt from "./version/OnlyTxt";

function Title() {
  return (
    <Container>
      <SDate>
        <p>
          {getKorDate()} {getWeek(data.when, "kor")}
        </p>
        <p>{data.time}</p>
      </SDate>
      <SInner>
        <SImgBox>
          <Img
            src={`${process.env.PUBLIC_URL}/assets/${data.img[0]}`}
            alt="박보검과 수지의 청첩장 타이틀 이미지"
            // className="w-100"
          />
        </SImgBox>
        {/* 가져다쓸때 조건문을 쓰거나~~ */}
        {/* <BottomOutTxt /> */}
        {/* <OutTxt /> */}
        {/* <Poster /> */}
        <OnlyTxt />
      </SInner>
      {/* <HallInfo className="maruburi"> */}
      <HallInfo>
        {/* <p className="abril-fatface">
          &#40;{data.information[0].EngName}&#41;∙&#40;
          {data.information[1].EngName}&#41;
        </p> */}
        <p className="abril-fatface">
          {data.information[0].EngName}∙{data.information[1].EngName}
        </p>
        {/* <p>
          {data.information[0].name}∙{data.information[1].name}
        </p> */}
        <p>
          {getKorDate()} {getWeek(data.when, "kor")} {getTime("kor")}
        </p>
        <p>위더스 웨딩홀 8F</p>
      </HallInfo>
    </Container>
  );
}

export default Title;

const Container = styled.section`
  padding: 0 ${getVwSize(60)};
  @media screen and (min-width: 640px) {
    padding: 0 ${getSize(60)};
  }
`;

const SDate = styled.div`
  margin-bottom: ${getVwSize(56)};
  text-align: center;
  p:first-child {
    font-size: ${getVwSize(30)};
    font-weight: 300;
  }
  p:last-child {
    font-size: ${getVwSize(150)};
    font-weight: 200;
    line-height: 1.1;
  }

  @media screen and (min-width: 640px) {
    margin-bottom: ${getSize(56)};
    text-align: center;
    p:first-child {
      font-size: ${getSize(30)};
    }
    p:last-child {
      font-size: ${getSize(150)};
    }
  }
`;

const SInner = styled.div`
  ${position("relative")}
`;

const SImgBox = styled.div`
  ::after {
    ${dim}
  }
`;

const Img = styled.img`
  ${boxSize("100%", "")};
`;

const HallInfo = styled.div`
  margin-top: 9.3vw;
  p:first-child {
    font-size: 3.8vw;
    margin-bottom: 3.1vw;
    /* color: #f32a2a; */
  }
  p {
    font-size: 3.1vw;
  }

  @media screen and (min-width: 640px) {
    margin-top: 6rem;
    p:first-child {
      font-size: 2.4rem;
      margin-bottom: 2rem;
      /* color: #f32a2a; */
    }
    p {
      font-size: 2rem;
    }
  }
`;
