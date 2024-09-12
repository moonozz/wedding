import styled from "styled-components";
import data from "../data/data.json";
import { useScrollEvent } from "../hook/useScrollEvent";
import { useSubTitle } from "../components/subTitle";
import { getKorDate, getWeek, getTime } from "../utils/filter";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import {
  sectionPadding,
  fontSize,
  defaultTxtStyle,
  animation,
} from "../utils/sMixinUtils";

function TitleComment({ subTitle, sectionColor }) {
  const { ref, isView } = useScrollEvent();

  return (
    <SContainer $sectionColor={sectionColor}>
      <div ref={ref} className={isView ? "frame-in" : ""}>
        {useSubTitle({
          type: subTitle.type,
          text: "***",
          font: subTitle.font,
          color: sectionColor.pointColor,
        })}
        <SHallInfo>
          <p>
            {data.information[0].EngName} ∙ {data.information[1].EngName}
          </p>
          <p>
            {getKorDate()} {getWeek(data.when, "kor")} {getTime("kor")}
          </p>
          <p>{data.location.weddingHall}</p>
        </SHallInfo>
        <SScriptDiv>
          <p>
            작은 우연이 모여 서로를 알게 되고,
            <br />
            작은 순간들에 사랑이 스며들어
            <br />
            서로를 바라보게 되었습니다.
          </p>
          <p>
            이제 같은 시간 속에서 <br />
            평생을 함께 하려고 합니다.
          </p>
          <p>
            저희 두 사람의 새 출발을
            <br />
            함께 축복해주세요.
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
  padding: ${getVwSize(20)} 0 ${getVwSize(50)};

  p:first-child {
    font-weight: 900;
    ${fontSize("24")};
    margin-bottom: ${getVwSize(20)};
  }
  p {
    ${fontSize("20")};
  }

  @media screen and (min-width: 640px) {
    padding: ${getSize(20)} 0 ${getSize(50)};

    p:first-child {
      margin-bottom: ${getSize(20)};
    }
  }
`;

const SScriptDiv = styled.div`
  ${defaultTxtStyle("1.8", "24", "40")};
`;
