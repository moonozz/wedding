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
  paddingIgnore,
} from "../../utils/sMixinUtils";

function Title({ font }) {
  return (
    <SContainer>
      <STitleT>
        <p>WE'RE</p>
        <p>GETTING</p>
      </STitleT>
      <Img src={`${process.env.PUBLIC_URL}/assets/${data.img[5]}`} />
      <STitleB $font={font}>Married</STitleB>
      <SInfo>
        <span>{data.information[0].EngName}</span>
        <span>{getDate("", 2)}</span>
        <span>{data.information[1].EngName}</span>
      </SInfo>
    </SContainer>
  );
}

export default Title;

const SContainer = styled.section`
  padding: ${getVwSize(170)} ${getVwSize(170)} ${getVwSize(70)};
  background-color: #e4e3d8;
  ${position("relative")};

  @media screen and (min-width: 640px) {
    padding: ${getSize(170)} ${getSize(170)} ${getSize(70)};
  }
`;

const STitleT = styled.div`
  ${flex("column", "flex-start", "center")};
  p {
    ${fontSize(60)};
    font-weight: 700;
    line-height: 1.1;
  }
`;

const Img = styled.img`
  ${boxSize("100%", "60vw")};
  border-radius: 1rem;
  margin: ${getVwSize(24)} 0 ${getVwSize(10)};
  object-fit: cover;

  @media screen and (min-width: 640px) {
    ${boxSize("100%", "384px")};
    margin: ${getSize(24)} 0 ${getSize(10)};
  }
`;

const STitleB = styled.p`
  font-family: ${({ $font }) => `${$font}`}, sans-serif;
  ${fontSize(90)};
  margin-right: 2rem;
`;

const SInfo = styled.div`
  ${paddingIgnore};
  ${boxSize("100vw", "auto")};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 ${getVwSize(50)};
  margin: ${getVwSize(100)} 0 0;
  span {
    ${fontSize(20)};
    font-weight: 500;
  }
  span:first-child {
    text-align: left;
  }
  span:last-child {
    text-align: right;
  }

  @media screen and (min-width: 640px) {
    ${boxSize("640px", "auto")};
    padding: 0 ${getSize(50)};
    margin: ${getSize(100)} 0 0;
  }
`;

const SDate = styled.p`
  ${fontSize(20)};
  font-weight: 500;
  margin: ${getVwSize(90)} 0 0;

  @media screen and (min-width: 640px) {
    margin: ${getVwSize(90)} 0 0;
  }
`;

const SName = styled.div`
  ${position("absolute")};
  bottom: ${getVwSize(100)};
  right: 0;
  ${boxSize("100vw", "auto")};
  ${flex("row", "", "space-between")};
  /* ${flex("column", "", "center")}; */
  ${paddingIgnore};
  padding: 0 ${getVwSize(50)};
  /* margin-top: ${getVwSize(90)}; */
  margin-top: ${getVwSize(10)};
  p {
    ${fontSize(20)};
    font-weight: 500;
  }

  @media screen and (min-width: 640px) {
    ${boxSize("640px", "auto")};
    padding: 0 ${getSize(50)};
    /* margin-top: ${getSize(90)}; */
    margin-top: ${getSize(10)};
    bottom: ${getSize(100)};
  }
`;
