import React, { useEffect } from "react";
import styled from "styled-components";
import { useScrollEvent } from "../../hook/useScrollEvent";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  animation,
  boxSize,
  defaultTxtStyle,
  flex,
  fontFamily,
} from "../../utils/sMixinUtils";
// import ColorTag from "./ColorTag";
import { Subway, Bus, Parking } from "./ListSection";

function List({ type, title, el }) {
  const { ref, isView } = useScrollEvent();

  return (
    <SContainer ref={ref} className={isView ? "frame-in" : ""}>
      <STitle>{title}</STitle>
      {type === "subway" ? (
        // <SContent>
        //   {el.map((i, idx) => {
        //     return (
        //       <SContentLi key={idx}>
        //         <SColorTag>
        //           {i.line.map((e, idx) => {
        //             return (
        //               <STagGroup key={idx}>
        //                 <ColorTag lineColor={e} /> <STagP>{e}</STagP>
        //               </STagGroup>
        //             );
        //           })}
        //         </SColorTag>
        //         <SDiscript>{i.discript}</SDiscript>
        //       </SContentLi>
        //     );
        //   })}
        // </SContent>
        <Subway el={el} />
      ) : type === "bus" ? (
        // <SContent>
        //   {el.map((i, idx) => {
        //     return (
        //       <SContentLi key={idx}>
        //         <p>{i.name}</p>
        //         <SColorTag>
        //           {i.number?.map((e, idx) => {
        //             // 그런데 저 물음표가 꼭 붙어야만 되는 이유가 뭐야?
        //             return (
        //               <STagGroup key={idx}>
        //                 <ColorTag lineColor={e[0]} /> <STagP>{e[1]}</STagP>
        //               </STagGroup>
        //             );
        //           })}
        //         </SColorTag>
        //       </SContentLi>
        //     );
        //   })}
        //   <SDiscript>{el[el.length - 1]}</SDiscript>
        // </SContent>
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
  ${fontFamily("MaruBuri", "")};

  &.frame-in {
    ${animation};
  }

  @media screen and (min-width: 640px) {
    padding: ${getSize(60)} 0 ${getSize(24)};
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

// const SContent = styled.ul`
//   ${boxSize("100%", "auto")};
//   ${defaultTxtStyle("", "20", "")};
// `;

// const SContentLi = styled.li`
//   ${flex("column", "flex-start", "")};
// `;

// const SColorTag = styled.div`
//   ${flex("row", "", "")};
// `;

// const STagGroup = styled.div`
//   ${flex("row", "", "")};
// `;

// const SDiscript = styled.p`
//   /* ${boxSize("100%", "auto")}; */
//   text-align: left;
//   line-height: 1.8;
//   padding: ${getVwSize(10)} 0 0 ${getVwSize(26)};
//   margin-bottom: ${getVwSize(32)};

//   @media screen and (min-width: 640px) {
//     padding-left: ${getSize(24)};
//     margin-bottom: ${getSize(40)};
//   }
// `;

// const STagP = styled.p`
//   margin-right: ${getSize(8)};
// `;
