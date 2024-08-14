import React from "react";
import styled from "styled-components";
import { flex } from "../../utils/sMixinUtils";
import { getSize, getVwSize } from "../../utils/sThemeUtils";

function SCallLi({ tag, name, phone }) {
  return (
    <Container>
      <span>{tag}</span>
      <p>{name}</p>
      <a href={`tel:${phone}`}>전화걸기</a>
    </Container>
  );
}

export default SCallLi;

const Container = styled.li`
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
    font-size: ${getVwSize(24)};
    @media screen and (min-width: 640px) {
      font-size: ${getSize(24)};
    }
  }
`;
