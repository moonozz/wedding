import React from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { getDate, getWeek, getTime, getDday } from "../../utils/filter";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  position,
  boxSize,
  dim,
  fontSize,
  flex,
} from "../../utils/sMixinUtils";

function Title({ font }) {
  return (
    <SContainer>
      <SDate $font={font}>
        <p>
          {getDate("kor", 2)} {getWeek(data.when, "kor")}
        </p>
        <p>{data.time}</p>
        <SInfo>
          <span>D - {getDday()}일</span>
          <SDiary>
            <span>{getTime("kor")}</span>
            <span>
              {data.information[0].name} {data.information[1].name} 결혼식
            </span>
            <span>{data.location.weddingHall}</span>
          </SDiary>
        </SInfo>
      </SDate>
      <SInner>
        <SImgBox>
          <Img
            src={`${process.env.PUBLIC_URL}/assets/${data.img[7]}`}
            alt={`${data.information[0].name}과 ${data.information[1].name}의 청첩장 타이틀 이미지`}
          />
        </SImgBox>
      </SInner>
    </SContainer>
  );
}

export default Title;

const SContainer = styled.section`
  ${position("relative")}
`;

const SDate = styled.div`
  ${boxSize("100vw", "auto")};
  ${position("absolute")};
  ${flex("column", "", "center")};
  /* padding: 0 ${getVwSize(24)}; */
  font-family: ${({ $font }) => `${$font}`}, sans-serif;
  z-index: 10;
  color: white;
  margin: ${getVwSize(80)} 0 ${getVwSize(56)};
  text-align: center;

  p:nth-child(1) {
    ${fontSize("30")};
    font-weight: 300;
  }
  p:nth-child(2) {
    ${fontSize("150")};
    font-weight: 200;
    line-height: 1.1;
  }

  @media screen and (min-width: 640px) {
    ${boxSize("640px", "auto")};
    margin: ${getSize(80)} 0 ${getSize(56)};
    /* padding: 0 ${getSize(24)}; */
    text-align: center;
  }
`;

const SInfo = styled.div`
  ${boxSize("100%", "auto")};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: ${getVwSize(40)} 0;
  span {
    ${fontSize("24")};
  }
  span:first-child {
    font-weight: 700;
  }

  @media screen and (min-width: 640px) {
    padding: ${getSize(40)} 0;
  }
`;

const SDiary = styled.div`
  ${flex("column", "baseline", "")};
  padding: 0 ${getVwSize("10")};
`;

const SInner = styled.div`
  ${boxSize("100vw", "89vh")};
  max-height: 1200px;

  &::after {
    ${boxSize("100vw", "89vh")};
    ${dim};
    max-height: 1200px;
  }

  @media screen and (min-width: 640px) {
    /* ${boxSize("640px", "89vh")}; */
    &::after {
      ${boxSize("640px", "89vh")};
    }
  }
`;

const SImgBox = styled.div`
  ${boxSize("100vw", "89vh")};
  max-height: 1200px;

  @media screen and (min-width: 640px) {
    ${boxSize("640px", "89vh")};
  }
`;

const Img = styled.img`
  ${boxSize("100%", "100%")};
  object-fit: cover;
`;
