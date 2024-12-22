import { useState } from "react";
import styled from "styled-components";
import data from "./data.json";
import Title from "./Title";
import TitleComment from "./TitleComment";
import Introduce from "../../section/Introduce";
import Photo from "../../section/Photo";
import OurDay from "../../section/OurDay";
import Location from "../../section/Location";
import Account from "../../section/Account";
import Footer from "../../section/Footer";
import FixedBtn from "../../section/FixedBtn";
import Modal from "../../components/Modal";
import ScrollImg from "../../components/ScrollImg";
import { getSize } from "../../utils/sThemeUtils";
import { flex, boxSize, position } from "../../utils/sMixinUtils";

function Sample01() {
  const [modal, setModal] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const titleComment = "***";
  const subTitle = { color: "#f32a2a", font: "Abril Fatface", type: "text" };
  const photoInfo = { type: "", text: "사진을 넘겨보세요." };
  const emojiArr = [
    ["😎", "💗"], // 버튼에 들어가는 텍스트
    ["🤵🏻‍♂️", "👰🏻‍♀️"], // 오른쪽 버튼 클릭시 보이는 이모지
    ["🎉", "😎"], // 왼쪽 버튼 클릭시 보이는 이모지
  ];
  const shareImgURL = "https://ifh.cc/g/vyV3ov.jpg";
  const fontFamily = "GowunBatang-Regular";
  const calenderBg = "color";

  return (
    <Main>
      <Title font={"Pretendard"} />
      <TitleComment
        subTitle={subTitle}
        sectionColor={data.color.titleComment}
        titleComment={titleComment}
      />
      <ScrollImg imgUrl={data.img[6]} />
      <Introduce sectionColor={data.color.introduce} />
      <Photo
        modal={modal}
        setModal={setModal}
        subTitle={subTitle}
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
        sectionColor={data.color.photo}
        padding={{ top: "3", bottom: "9" }}
        photoInfo={photoInfo}
      />
      <OurDay
        subTitle={subTitle}
        sectionColor={data.color.calendar}
        calenderBg={calenderBg}
      />
      <Location
        subTitle={subTitle}
        sectionColor={data.color.location}
        font={fontFamily}
      />
      <Account
        subTitle={subTitle}
        sectionColor={data.color.account}
        padding={{ top: "3", bottom: "6" }}
        font={fontFamily}
      />
      <Footer font={fontFamily} shareImgURL={shareImgURL} />
      <FixedBtn emojiArr={emojiArr} />
      {modal ? (
        <Modal
          imgUrl={currentImg}
          modal={modal}
          setModal={setModal}
          setCurrentImg={setCurrentImg}
        />
      ) : (
        ""
      )}
    </Main>
  );
}

export default Sample01;

const Main = styled.div`
  ${position("relative")};
  ${flex("column", "", "")};
  ${boxSize("100vw", "")};
  max-width: ${getSize(640)};
  min-width: ${getSize(200)};
  text-align: center;
  font-family: "GowunBatang-Regular", sans-serif;

  @media screen and (min-width: 640px) {
    ${boxSize("100%", "")}
  }
`;
