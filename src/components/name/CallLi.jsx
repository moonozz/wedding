import React from "react";
import styled from "styled-components";
import { flex, fontSize } from "../../utils/sMixinUtils";
import { getSize, getVwSize } from "../../utils/sThemeUtils";

function CallLi({ tag, name, phone }) {
  return (
    <SContainer>
      <span>{tag}</span>
      <p>{name}</p>
      <a href={`tel:${phone}`}>전화걸기</a>
    </SContainer>
  );
}

export default CallLi;

const SContainer = styled.li`
  ${flex("row", "baseline", "space-between")};

  span {
    min-width: ${getVwSize(100)};
    ${fontSize("20")};
    @media screen and (min-width: 640px) {
      min-width: ${getSize(100)};
    }
  }

  a {
    ${fontSize("20")};
  }
`;
