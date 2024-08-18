import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { boxSize, defaultTxtStyle } from "../../utils/sMixinUtils";

function Week({ el }) {
  return (
    <SWeekLi>
      <SWeekUl>
        {el.map((i, idx) => {
          return (
            <SDayLi key={idx}>
              <p>{i}</p>
            </SDayLi>
          );
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
  padding: ${getVwSize(16)} ${getVwSize(10)};

  @media screen and (min-width: 640px) {
    padding: ${getSize(16)} ${getSize(10)};
  }
`;
