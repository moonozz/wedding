import React from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { getDate, getWeek, getTime, getDday } from "../../utils/filter";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  position,
  boxSize,
  fontSize,
  flex,
  xyValue,
} from "../../utils/sMixinUtils";

function Title({ font }) {
  const imgUrl = [
    `${process.env.PUBLIC_URL}/assets/${data.img[5]}`,
    `${process.env.PUBLIC_URL}/assets/${data.img[0]}`,
  ];

  return (
    <SContainer>
      <STxtInvite $font={font}>
        <p>invite you</p>
        <STopImgGroup $width={250}>
          <span>&#40;</span>
          <SImg $width={180} $imgUrl={imgUrl[0]} />
          <span>&#41;</span>
        </STopImgGroup>
        <p>,</p>
      </STxtInvite>
      <SCeleb>celebrate</SCeleb>
      <SOurW $font={font}>
        <p>our</p>
        <STopImgGroup $width={210} $right={250}>
          <span>&#40;</span>
          <SImg $width={140} $imgUrl={imgUrl[1]} />
          <span>&#41;</span>
        </STopImgGroup>
        <p>wedding</p>
      </SOurW>
      <SBottomTxt>
        <div>
          <p>
            {getDate("eng", 4)} {getWeek(data.when, "eng")}
          </p>
          <p>{getTime("eng")}</p>
          <p>{data.location.weddingHall}</p>
        </div>
        <div>
          <p>{data.information[0].EngName}</p>
          <p>{data.information[1].EngName}</p>
        </div>
      </SBottomTxt>
    </SContainer>
  );
}

export default Title;

const SContainer = styled.section`
  padding: ${getVwSize(50)} ${getVwSize(40)} ${getVwSize(50)};
  background-color: #eff0ee;

  @media screen and (min-width: 640px) {
    padding: ${getSize(50)} ${getSize(40)} ${getSize(50)};
  }
`;

const STxtInvite = styled.div`
  ${position("relative")};
  width: calc(100vw - ${getVwSize(80)});
  ${flex("row", "flex-end", "space-between")};
  font-family: ${({ $font }) => `${$font}`}, sans-serif;
  gap: ${getVwSize(10)};
  p {
    ${fontSize(80)};
  }

  @media screen and (min-width: 640px) {
    width: calc(640px - ${getSize(80)});
    gap: ${getSize(10)};
  }
`;

const STopImgGroup = styled.div`
  ${position("relative")};
  width: ${({ $width, theme }) => getVwSize($width)({ theme })};
  ${flex("row", "center", "")};
  right: ${({ $right, theme }) => getVwSize($right)({ theme })};

  span {
    ${position("absolute")};
    font-family: "Pretendard", sans-serif;
    font-weight: 200;
    ${fontSize(100)};
  }
  span:first-child {
    ${xyValue("", "", "0", "0")}
  }
  span:last-child {
    ${xyValue("", "0", "0", "")}
  }

  @media screen and (min-width: 640px) {
    width: ${({ $width, theme }) => getSize($width)({ theme })};
    right: ${({ $right, theme }) => getSize($right)({ theme })};
  }
`;

const SImg = styled.div`
  ${position("absolute")};
  width: ${({ $width, theme }) => getVwSize($width)({ theme })};
  height: ${getVwSize(100)};
  ${xyValue("", "", "12", "30")};
  /* background-image: url(${process.env.PUBLIC_URL}/assets/${data.img[5]}); */
  background-image: url(${({ $imgUrl }) => `${$imgUrl}`}););
  background-position: 0 15%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${getVwSize(8)};
  margin: 0 ${getVwSize(4)};

  @media screen and (min-width: 640px) {
    width: ${({ $width, theme }) => getSize($width)({ theme })};
    height: ${getSize(100)};
    border-radius: ${getSize(8)};
    margin: 0 ${getSize(4)};
  }
`;

const SCeleb = styled.p`
  width: calc(100vw - ${getVwSize(80)});
  font-family: "NanumMyeongjoBold", sans-serif;
  ${fontSize(60)};
  text-align: right;
  margin: 0 ${getVwSize(10)};

  @media screen and (min-width: 640px) {
    width: calc(640px - ${getSize(80)});
  }
`;

const SOurW = styled.div`
  ${position("relative")};
  width: calc(100vw - ${getVwSize(80)});
  ${flex("row", "flex-end", "space-between")};
  gap: ${getVwSize(10)};
  p:first-child {
    font-family: "NanumMyeongjoBold", sans-serif;
    ${fontSize(60)};
  }
  p:last-child {
    ${position("absolute")};
    ${xyValue("", "0", "-2", "")};
    font-family: ${({ $font }) => `${$font}`}, sans-serif;
    ${fontSize(80)};
  }
  @media screen and (min-width: 640px) {
    width: calc(640px - ${getSize(80)});
    gap: ${getSize(10)};
  }
`;

const SBottomTxt = styled.div`
  ${flex("row", "", "space-between")};
  z-index: 10;
  /* width: calc(100% - ${getVwSize(80)}); */
  width: 100%;
  text-align: left;
  line-height: 1.5;
  margin-top: ${getVwSize(500)};

  div:last-child {
    text-align: right;
  }

  p {
    ${fontSize(20)};
  }

  @media screen and (min-width: 640px) {
    width: calc(640px - ${getSize(80)});
    margin-top: ${getSize(500)};
  }
`;
