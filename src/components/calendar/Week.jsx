import React from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import HeartIcon from "../icon/Heart";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  boxSize,
  defaultTxtStyle,
  position,
  xyValue,
} from "../../utils/sMixinUtils";

function Week({ el }) {
  const date = data.when;
  const day = new Date(date).getDate().toString();

  return (
    <SWeekLi>
      <SWeekUl>
        {el.map((i, idx) => {
          if (i === day) {
            return (
              <SDayLi key={idx}>
                <p style={{ color: "#fff", zIndex: 10, position: "relative" }}>
                  {i}
                </p>
                <SHeartSpan>
                  <HeartIcon
                    stroke="#f32a2a"
                    color="#f32a2a"
                    width={60}
                    height={"auto"}
                  />
                </SHeartSpan>
              </SDayLi>
            );
          } else {
            return (
              <SDayLi key={idx}>
                <p>{i}</p>
              </SDayLi>
            );
          }
        })}
      </SWeekUl>
    </SWeekLi>
  );
}

export default Week;

const SWeekLi = styled.li`
  ${boxSize("100%", "auto")};
`;

const SWeekUl = styled.ul`
  ${boxSize("100%", "auto")};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const SDayLi = styled.li`
  ${position("relative")};
  padding: ${getVwSize(16)} ${getVwSize(10)};

  @media screen and (min-width: 640px) {
    padding: ${getSize(16)} ${getSize(10)};
  }
`;

const SHeartSpan = styled.span`
  ${position("absolute")};
  ${xyValue("8", "0", "0", "0")};

  @media screen and (min-width: 640px) {
  }
`;
