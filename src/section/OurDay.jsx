import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import SubTitle from "../components/SubTitle";
import Calendar from "../components/calendar/Calendar";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import {
  boxSize,
  flex,
  defaultTxtStyle,
  fontFamily,
} from "../utils/sMixinUtils";

function OurDay() {
  const groom = data.information[0].name.slice(-2);
  const bride = data.information[1].name.slice(-2);

  const dayCalculator = () => {
    const weddingDay = new Date(data.when);
    const today = new Date();
    const dday = weddingDay - today;

    return Math.floor(dday / (1000 * 60 * 60 * 24));
  };
  return (
    <SContainer>
      <SubTitle text={"OUR DAY"} />
      <Calendar />
      <SDDay>
        <p>{`${groom}, ${bride}의 결혼식이`}&nbsp;</p>
        <p>{dayCalculator()}</p>
        <p>일 남았습니다.</p>
      </SDDay>
    </SContainer>
  );
}

export default OurDay;

const SContainer = styled.div`
  padding: ${getSize(60)} 0 ${getSize(90)};
  /* width: ${getVwSize(640)}; */
  ${boxSize("100%", "auto")};
  ${flex("column", "center", "center")};

  @media screen and (min-width: 640px) {
    /* width: ${getSize(640)}; */
  }
`;

const SDDay = styled.div`
  ${flex("row", "", "")};
  ${fontFamily("MaruBuri", "")};
  ${defaultTxtStyle("1.6", "20", "")};
  p:nth-child(2) {
    color: ${({ theme }) => theme.color.red};
  }
`;
