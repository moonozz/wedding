import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../../utils/sThemeUtils";
import { flex, boxSize, defaultTxtStyle } from "../../../utils/sMixinUtils";
import ColorTag from "../ColorTag";

function Bus({ el }) {
  return (
    <SContainer>
      {el
        .filter((item) => typeof item !== "string")
        .map((i, idx) => {
          return (
            <SContentLi key={idx}>
              <SStopNm>{i.name}</SStopNm>
              {i.number?.map((e, idx) => {
                return (
                  <STagGroup key={idx}>
                    <ColorTag lineColor={e[0]} />
                    <p>
                      {e[0]} : {e[1]}
                    </p>
                  </STagGroup>
                );
              })}
            </SContentLi>
          );
        })}
      <SDiscript>{el[el.length - 1]}</SDiscript>
    </SContainer>
  );
}

export default Bus;

const SContainer = styled.ul`
  ${boxSize("100%", "auto")};
  ${defaultTxtStyle("", "20", "")};
`;

const SContentLi = styled.li`
  ${flex("column", "flex-start", "")};
  margin-bottom: ${getVwSize(24)};

  @media screen and (min-width: 640px) {
    margin-bottom: ${getSize(24)} 0;
  }
`;

const SStopNm = styled.p`
  font-weight: 700;
  margin-bottom: ${getVwSize(10)};

  @media screen and (min-width: 640px) {
    margin-bottom: ${getSize(10)} 0;
  }
`;

const STagGroup = styled.div`
  ${flex("row", "", "")};
  padding: ${getVwSize(4)} 0;

  @media screen and (min-width: 640px) {
    padding: ${getSize(4)} 0;
  }
`;

const SDiscript = styled.p`
  text-align: left;
  line-height: 1.8;
  margin-bottom: ${getVwSize(32)};

  @media screen and (min-width: 640px) {
    margin-bottom: ${getSize(40)};
  }
`;
