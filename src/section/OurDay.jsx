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
  dim,
  position,
} from "../utils/sMixinUtils";

function OurDay({ subTitle, sectionColor, calenderBg, imgUrl }) {
  const { ref, isView } = useScrollEvent();

  const groom = data.information[0].name.slice(-2);
  const bride = data.information[1].name.slice(-2);

  return (
    <SContainer>
      {/* <SAnimationDiv ref={ref} className={isView ? "frame-in" : ""}> */}
      <SBg
        $sectionColor={sectionColor}
        $calenderBg={calenderBg}
        $imgUrl={imgUrl}
      >
        <div ref={ref} className={isView ? "frame-in" : ""}>
          {useSubTitle({
            type: subTitle.type,
            text: "Our Day",
            font: subTitle.font,
            color: sectionColor.pointColor,
          })}
          <Calendar
            pointColor={sectionColor.pointColor}
            pointTxtColor={sectionColor.pointTxtColor}
          />
          <SDDay $sectionColor={sectionColor}>
            <p>{`${groom}, ${bride}의 결혼식이`}&nbsp;</p>
            <p>{getDday()}</p>
            <p>일 남았습니다.</p>
          </SDDay>
        </div>
      </SBg>
    </SContainer>
  );
}

export default OurDay;

const SContainer = styled.section`
  ${boxSize("100%", "100%")};
  ${position("relative")};
  div:first-child {
    ${flex("column", "center", "center")};
    ${boxSize("100%", "auto")};
    &.frame-in {
      ${animation}
    }
  }

  @media screen and (min-width: 640px) {
    ${boxSize("64rem", "")};
  }
`;

const SBg = styled.div`
  ${sectionPadding};
  ${({ $calenderBg, $sectionColor, $imgUrl }) =>
    $calenderBg === "photo"
      ? `
        background-image: url(${process.env.PUBLIC_URL}/assets/${$imgUrl});
        color: ${$sectionColor.color};
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        &::before {
          ${dim}
        }
      `
      : `
        background-color: ${$sectionColor.bg};
        color: ${$sectionColor.color};
      `}
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
