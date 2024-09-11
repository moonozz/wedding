import { useState } from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import color from "./color.json";
import Title from "./Title";
// import Title from "../../section/Title";
import TitleComment from "../../section/TitleComment";
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
  const subTitle = { color: "#f32a2a", font: "Abril Fatface", type: "text" };
  const colorData = color;

  return (
    <Main>
      <Title font={"Pretendard"} />
      <TitleComment subTitle={subTitle} sectionColor={colorData.titleComment} />
      <ScrollImg imgUrl={data.img[7]} />
      <Introduce subTitle={subTitle} sectionColor={colorData.introduce} />
      <Photo
        modal={modal}
        setModal={setModal}
        subTitle={subTitle}
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
        sectionColor={colorData.photo}
        padding={{ top: "3", bottom: "9" }}
      />
      <OurDay subTitle={subTitle} sectionColor={colorData.calendar} />
      <Location subTitle={subTitle} sectionColor={colorData.location} />
      <Account
        subTitle={subTitle}
        sectionColor={colorData.account}
        padding={{ top: "3", bottom: "9" }}
      />
      <Footer />
      <FixedBtn />
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
  /* background-color: #f4f4f4; */
  ${boxSize("100vw", "")};
  max-width: ${getSize(640)};
  min-width: ${getSize(200)};
  text-align: center;
  font-family: "MaruBuri", sans-serif;

  @media screen and (min-width: 640px) {
    ${boxSize("100%", "")}
  }
`;
