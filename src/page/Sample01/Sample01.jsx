import { useState } from "react";
import styled from "styled-components";
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
import { getSize } from "../../utils/sThemeUtils";
import { flex, boxSize, position } from "../../utils/sMixinUtils";

function Sample01() {
  const [modal, setModal] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const subColor = "#f32a2a";

  const subTitle = "Abril Fatface";

  return (
    <Main>
      <Title font={"Pretendard"} />
      <TitleComment font={subTitle} subColor={subColor} />
      <Introduce subColor={subColor} />
      <Photo
        modal={modal}
        setModal={setModal}
        font={subTitle}
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
        subColor={subColor}
      />
      <OurDay font={subTitle} subColor={subColor} />
      <Location font={subTitle} subColor={subColor} />
      <Account font={subTitle} subColor={subColor} />
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
  background-color: #f4f4f4;
  ${boxSize("100vw", "")};
  max-width: ${getSize(640)};
  min-width: ${getSize(200)};
  padding: 0 ${getSize(20)} 0;
  text-align: center;
  font-family: "MaruBuri", sans-serif;

  @media screen and (min-width: 640px) {
    padding: 0 ${getSize(20)} 0;
    ${boxSize("100%", "")}
  }
`;
