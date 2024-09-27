import styled from "styled-components";
import data from "../../data/data.json";
import { useScrollEvent } from "../../hook/useScrollEvent";
import { useSubTitle } from "../../components/subTitle";
import { getDate, getWeek, getTime } from "../../utils/filter";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  sectionPadding,
  fontSize,
  defaultTxtStyle,
  animation,
} from "../../utils/sMixinUtils";

function TitleComment({ subTitle, sectionColor, titleComment }) {
  const { ref, isView } = useScrollEvent();

  return (
    <SContainer $sectionColor={sectionColor}>
      <div ref={ref} className={isView ? "frame-in" : ""}>
        {useSubTitle({
          type: subTitle.type,
          text: titleComment,
          font: subTitle.font,
          color: sectionColor.pointColor,
        })}
        <SHallInfo>
          <p>
            {data.information[0].EngName} ∙ {data.information[1].EngName}
          </p>
          <p>
            {getDate("", 4)}&nbsp; &nbsp;{getWeek(data.when, "eng")}
            &nbsp; &nbsp;
            {getTime("eng")}
          </p>
          <p>{data.location.weddingHall}</p>
        </SHallInfo>
        <SScriptDiv>
          <p>
            나의 사랑, 나의 어여쁜 자야
            <br />
            일어나서 함께 가자
            <br />
            아가서 2:10
          </p>
          <p>
            3년을 함께한 저희는 <br />
            3월 30일 3시 30분 결혼합니다.
          </p>
        </SScriptDiv>
      </div>
      {/* <ScrollImg imgUrl={data.img[7]} margin={100} /> */}
    </SContainer>
  );
}

export default TitleComment;

const SContainer = styled.section`
  background-color: ${({ $sectionColor }) => $sectionColor.bg};
  color: ${({ $sectionColor }) => $sectionColor.color};
  ${sectionPadding};

  div {
    &.frame-in {
      ${animation};
    }
  }
`;

const SHallInfo = styled.div`
  padding: ${getVwSize(40)} 0 ${getVwSize(50)};

  p:first-child {
    font-weight: 700;
    ${fontSize("24")};
    margin-bottom: ${getVwSize(20)};
  }
  p {
    ${fontSize("20")};
  }

  @media screen and (min-width: 640px) {
    padding: ${getSize(40)} 0 ${getSize(50)};

    p:first-child {
      margin-bottom: ${getSize(20)};
    }
  }
`;

const SScriptDiv = styled.div`
  ${defaultTxtStyle("1.8", "24", "40")};
`;
