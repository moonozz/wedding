import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import { getKorDate, getWeek, getTime } from "../utils/filter";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import {
  position,
  boxSize,
  dim,
  fontFamily,
  fontSize,
} from "../utils/sMixinUtils";
import { TitleSection } from "../components/titleSection";

function Title() {
  return (
    <SContainer>
      <SDate>
        <p>
          {getKorDate(2)} {getWeek(data.when, "kor")}
        </p>
        <p>{data.time}</p>
      </SDate>
      <SInner>
        <SImgBox>
          <Img
            src={`${process.env.PUBLIC_URL}/assets/${data.img[0]}`}
            alt="양승역과 이정민의 청첩장 타이틀 이미지"
          />
        </SImgBox>
        {TitleSection("")}
      </SInner>
      <SHallInfo>
        <p>
          {data.information[0].EngName} ∙ {data.information[1].EngName}
        </p>
        <p>
          {getKorDate()} {getWeek(data.when, "kor")} {getTime("kor")}
        </p>
        <p>위더스 웨딩홀 8F</p>
      </SHallInfo>
    </SContainer>
  );
}

export default Title;

const SContainer = styled.section`
  padding: 0 ${getVwSize(60)};

  @media screen and (min-width: 640px) {
    padding: 0 ${getSize(60)};
  }
`;

const SDate = styled.div`
  margin-bottom: ${getVwSize(56)};
  text-align: center;
  p:first-child {
    ${fontSize("30")};
    font-weight: 300;
  }
  p:last-child {
    ${fontSize("150")};
    font-weight: 200;
    line-height: 1.1;
  }

  @media screen and (min-width: 640px) {
    margin-bottom: ${getSize(56)};
    text-align: center;
  }
`;

const SInner = styled.div`
  ${position("relative")}
`;

const SImgBox = styled.div`
  &::after {
    ${boxSize("100%", "99.5%")};
    ${dim}
  }
`;

const Img = styled.img`
  ${boxSize("100%", "auto")};
`;

const SHallInfo = styled.div`
  padding: ${getVwSize(60)} 0 0;

  p:first-child {
    ${fontFamily("MaruBuri", "900")};
    ${fontSize("24")};
    margin-bottom: ${getVwSize(20)};
  }
  p {
    ${fontFamily("MaruBuri", "300")};
    ${fontSize("20")};
  }

  @media screen and (min-width: 640px) {
    padding: ${getSize(60)} 0 0;
    p:first-child {
      margin-bottom: ${getSize(20)};
    }
  }
`;
