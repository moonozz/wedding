import React, { useEffect } from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { defaultTxtStyle, flex, fontFamily } from "../../utils/sMixinUtils";
import ColorTag from "./ColorTag";

function List({ type, title, el }) {
  useEffect(() => {
    console.log(el);
  }, []);

  return (
    <SContainer>
      <STitle>{title}</STitle>
      {type === "subway" || "parking" ? (
        <SContent>
          {el.map((i) => {
            return (
              <SContentLi>
                <SColorTag>
                  {i.line.map((e) => {
                    return (
                      <STagGroup>
                        <ColorTag lineColor={e} /> <STagP>{e}</STagP>
                      </STagGroup>
                    );
                  })}
                </SColorTag>
                <SDiscript>{i.discript}</SDiscript>
              </SContentLi>
            );
          })}
        </SContent>
      ) : (
        <ColorTag>{}</ColorTag>
      )}
    </SContainer>
  );
}

export default List;

const SContainer = styled.div`
  border-top: 0.5px solid rgb(0, 0, 0, 0.2);
  padding: ${getVwSize(60)} 0;
  margin: 0 ${getSize(20)};
  ${flex("column", "flex-start", "")};
  ${fontFamily("MaruBuri", "")};

  @media screen and (min-width: 640px) {
    padding: ${getSize(60)} 0;
  }
`;

const STitle = styled.p`
  font-size: ${getVwSize(24)};
  margin-bottom: ${getVwSize(32)};
  font-weight: 900;

  @media screen and (min-width: 640px) {
    font-size: ${getSize(24)};
    margin-bottom: ${getSize(40)};
  }
`;

const SContent = styled.ul`
  ${defaultTxtStyle("", "20", "")};
`;

const SContentLi = styled.li`
  ${flex("column", "", "")};
`;

const SColorTag = styled.div`
  ${flex("row", "", "")};
`;

const STagGroup = styled.div`
  ${flex("row", "", "")};
`;

const SDiscript = styled.p`
  text-align: left;
  line-height: 1.8;
  padding: ${getVwSize(10)} 0 0 ${getVwSize(26)};
  margin-bottom: ${getVwSize(32)};

  @media screen and (min-width: 640px) {
    padding-left: ${getSize(24)};
    margin-bottom: ${getSize(40)};
  }
`;

const STagP = styled.p`
  margin-right: ${getSize(8)};
`;
