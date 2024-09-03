import React, { useEffect } from "react";
import styled from "styled-components";
import { useScrollEvent } from "../../hook/useScrollEvent";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { animation, flex, fontSize } from "../../utils/sMixinUtils";
import { Subway, Bus, Parking } from "./ListSection";

function List({ type, title, el }) {
  const { ref, isView } = useScrollEvent();

  return (
    <SContainer ref={ref} className={isView ? "frame-in" : ""}>
      <STitle>{title}</STitle>
      {type === "subway" ? (
        <Subway el={el} />
      ) : type === "bus" ? (
        <Bus el={el} />
      ) : type === "parking" ? (
        <Parking el={el} />
      ) : null}
    </SContainer>
  );
}

export default List;

const SContainer = styled.div`
  border-top: 0.5px solid rgb(0, 0, 0, 0.2);
  padding: ${getVwSize(60)} 0 ${getVwSize(24)};
  margin: 0 ${getSize(20)};
  ${flex("column", "flex-start", "")};

  &.frame-in {
    ${animation};
  }

  @media screen and (min-width: 640px) {
    padding: ${getSize(60)} 0 ${getSize(24)};
  }
`;

const STitle = styled.p`
  ${fontSize("24")}
  margin-bottom: ${getVwSize(32)};
  font-weight: 900;

  @media screen and (min-width: 640px) {
    margin-bottom: ${getSize(40)};
  }
`;
