import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import { useScrollEvent } from "../hook/useScrollEvent";
import { useSubTitle } from "../components/subTitle";
import Calendar from "../components/calendar/Calendar";
import { getDday } from "../utils/filter";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import {
  boxSize,
  flex,
  defaultTxtStyle,
  sectionPadding,
  animation,
} from "../utils/sMixinUtils";

function OurDay({ subTitle, sectionColor }) {
  const { ref, isView } = useScrollEvent();

  const groom = data.information[0].name.slice(-2);
  const bride = data.information[1].name.slice(-2);

  return (
    <SContainer $sectionColor={sectionColor}>
      {/* <SAnimationDiv ref={ref} className={isView ? "frame-in" : ""}> */}
      <div ref={ref} className={isView ? "frame-in" : ""}>
        {useSubTitle({
          type: subTitle.type,
          text: "Our Day",
          font: subTitle.font,
          color: sectionColor.pointColor,
        })}
        <Calendar pointColor={sectionColor.pointColor} />
        <SDDay $sectionColor={sectionColor}>
          <p>{`${groom}, ${bride}의 결혼식이`}&nbsp;</p>
          <p>{getDday()}</p>
          <p>일 남았습니다.</p>
        </SDDay>
      </div>
    </SContainer>
  );
}

export default OurDay;

const SContainer = styled.section`
  ${sectionPadding};
  /* padding: ${getSize(60)} 0 ${getSize(90)}; */
  background-color: ${({ $sectionColor }) => $sectionColor.bg};
  color: ${({ $sectionColor }) => $sectionColor.color};

  div:first-child {
    ${flex("column", "center", "center")};
    ${boxSize("100%", "auto")};
    &.frame-in {
      ${animation}
    }
  }
`;

const SDDay = styled.div`
  ${flex("row", "", "")};
  ${defaultTxtStyle("1.6", "24", "")};
  font-weight: 700;
  margin-top: ${getSize(20)};
  p:nth-child(2) {
    color: ${({ $sectionColor }) => $sectionColor.pointColor};
  }
`;
