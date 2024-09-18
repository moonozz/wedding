import styled from "styled-components";
import { useScrollEvent } from "../hook/useScrollEvent";
import Name from "../components/name/Name";
import Call from "../components/name/Call";
// import SubTitleTxt from "../components/subTitle/SubTitleTxt";
import HeartIcon from "../components/icon/Heart";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { sectionPadding, animation } from "../utils/sMixinUtils";

function Introduce({ subTitle, sectionColor }) {
  const { ref, isView } = useScrollEvent();

  return (
    <SContainer $sectionColor={sectionColor}>
      <div ref={ref} className={isView ? "frame-in" : ""}>
        {/* <SubTitleTxt
          text={
            <HeartIcon
              stroke={`${subTitle.color}`}
              color={`${subTitle.color}`}
              width={40}
              height={"auto"}
            />
          }
        /> */}
        <HeartIcon
          stroke={`${sectionColor.pointColor}`}
          color={`${sectionColor.pointColor}`}
          width={40}
          height={"auto"}
        />
        <Name />
        <Call sectionColor={sectionColor} />
      </div>
    </SContainer>
  );
}

export default Introduce;

const SContainer = styled.section`
  ${sectionPadding};
  background-color: ${({ $sectionColor }) => $sectionColor.bg};
  color: ${({ $sectionColor }) => $sectionColor.color};

  div {
    &.frame-in {
      ${animation};
    }
  }

  @media screen and (min-width: 640px) {
    padding: ${getSize(90)} 0;
  }
`;
