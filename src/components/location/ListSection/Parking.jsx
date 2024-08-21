import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../../utils/sThemeUtils";
import { flex, boxSize, defaultTxtStyle } from "../../../utils/sMixinUtils";

function Parking({ el }) {
  return (
    <SContainer>
      {el.map((i, idx) => {
        return (
          <SContentLi key={idx}>
            <p>{i}</p>
          </SContentLi>
        );
      })}
    </SContainer>
  );
}

export default Parking;

const SContainer = styled.ul`
  ${boxSize("100%", "auto")};
  ${defaultTxtStyle("", "20", "")};
  ${flex("column", "flex-start", "")};
  margin-bottom: ${getVwSize(24)};
  @media screen and (min-width: 640px) {
    margin-bottom: ${getSize(24)} 0;
  }
`;

const SContentLi = styled.li`
  padding: ${getVwSize(4)} 0;

  @media screen and (min-width: 640px) {
    padding: ${getSize(4)} 0;
  }
`;
