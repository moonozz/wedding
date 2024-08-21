import { useRef } from "react";
import styled from "styled-components";
import { useScrollEvent } from "../hook/useScrollEvent";
import Name from "../components/name/Name";
import Call from "../components/name/Call";
import SubTitle from "../components/SubTitle";
import HeartIcon from "../components/icon/Heart";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { fontFamily, animation } from "../utils/sMixinUtils";

function Introduce() {
  // const ref = useRef(null);
  const { ref, isView } = useScrollEvent();

  return (
    <SContainer ref={ref} className={isView ? "frame-in" : ""}>
      <SubTitle
        text={
          <HeartIcon
            stroke="#f32a2a"
            color="#f32a2a"
            width={40}
            height={"auto"}
          />
        }
      />
      <Name />
      {/* <ScrollImg imgUrl={data.img[7]} /> */}
      <Call />
    </SContainer>
  );
}

export default Introduce;

const SContainer = styled.section`
  padding: ${getVwSize(90)} 0;
  ${fontFamily("MaruBuri", "400")};

  &.frame-in {
    ${animation};
  }

  @media screen and (min-width: 640px) {
    padding: ${getSize(90)} 0;
  }
`;
