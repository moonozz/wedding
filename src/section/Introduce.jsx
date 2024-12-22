import styled from "styled-components";
import { useScrollEvent } from "../hook/useScrollEvent";
import Name from "../components/name/Name";
import Call from "../components/name/Call";
// import SubTitleTxt from "../components/subTitle/SubTitleTxt";
import HeartIcon from "../components/icon/Heart";
import { getSize } from "../utils/sThemeUtils";
import { sectionPadding, animation } from "../utils/sMixinUtils";

function Introduce({ data, sectionColor }) {
  const { ref, isView } = useScrollEvent();

  return (
    <SContainer $sectionColor={sectionColor}>
      <div ref={ref} className={isView ? "frame-in" : ""}>
        <HeartIcon
          stroke={`${sectionColor.pointColor}`}
          color={`${sectionColor.pointColor}`}
          width={40}
          height={"auto"}
        />
        <Name data={data} />
        <Call data={data} sectionColor={sectionColor} />
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
