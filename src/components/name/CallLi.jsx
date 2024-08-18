import React from "react";
import styled from "styled-components";
import { flex } from "../../utils/sMixinUtils";
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
    font-size: ${getVwSize(20)};
    @media screen and (min-width: 640px) {
      min-width: ${getSize(100)};
      font-size: ${getSize(20)};
    }
  }

  a {
    font-size: ${getVwSize(20)};
    @media screen and (min-width: 640px) {
      font-size: ${getSize(20)};
    }
  }
`;
