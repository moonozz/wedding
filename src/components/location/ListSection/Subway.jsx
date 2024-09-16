import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../../utils/sThemeUtils";
import { flex, boxSize, defaultTxtStyle } from "../../../utils/sMixinUtils";
import ColorTag from "../ColorTag";

function Subway({ el }) {
  return (
    <SContainer>
      {el.map((i, idx) => {
        return (
          <SContentLi key={idx}>
            <SLineDiv>
              {i.line.map((e, idx) => {
                return (
                  <STagGroup key={idx}>
                    <ColorTag lineColor={e} />
                    <STagP>{e}</STagP>
                  </STagGroup>
                );
              })}
            </SLineDiv>
            <SDiscript>{i.discript}</SDiscript>
          </SContentLi>
        );
      })}
    </SContainer>
  );
}

export default Subway;

const SContainer = styled.ul`
  ${boxSize("100%", "auto")};
  ${defaultTxtStyle("", "24", "")};
`;

const SContentLi = styled.li`
  ${flex("column", "flex-start", "")};
`;

const SLineDiv = styled.div`
  ${flex("row", "", "")};
`;

const STagGroup = styled.div`
  ${flex("row", "baseline", "")};
  margin: ${getVwSize(10)} 0;

  @media screen and (min-width: 640px) {
    margin: ${getSize(10)} 0;
  }
`;

const STagP = styled.p`
  margin-right: ${getVwSize(16)};

  @media screen and (min-width: 640px) {
    margin-right: ${getSize(16)};
  }
`;

const SDiscript = styled.p`
  text-align: left;
  line-height: 1.8;
  padding-left: ${getVwSize(26)};
  margin-bottom: ${getVwSize(32)};

  @media screen and (min-width: 640px) {
    padding-left: ${getSize(24)};
    margin-bottom: ${getSize(32)};
  }
`;
