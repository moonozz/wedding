import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import Modal from "../Modal";
import { recordImg } from "../../utils/filter";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { boxSize, position, flex, fontFamily } from "../../utils/sMixinUtils";

function PhotoList({ imgUrl, discript, modal, setModal }) {
  const [currentImg, setCurrentImg] = useState("");

  const imgData = data.img.slice(1);

  const handleModalOpen = (img) => {
    setModal(true);
    setCurrentImg(img);
    // console.log(currentImg);
  };

  useEffect(() => {
    // console.log(imgData);
    // console.log(recordImg(imgData));
    // console.log(currentImg);
  }, []);

  return (
    <Container>
      <Discript>{discript}</Discript>
      <ImageContainer>
        {recordImg(imgData).map((el) => {
          return (
            <ImgLi key={el}>
              <Image
                src={`${process.env.PUBLIC_URL}/assets/${el}`}
                alt={el}
                onClick={() => handleModalOpen(el)}
              />
              {/* <p>{el}</p> */}
            </ImgLi>
          );
        })}
      </ImageContainer>
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
    </Container>
  );
}

export default PhotoList;

const Container = styled.div`
  ${boxSize("100%", "auto")};
  padding: 0 ${getVwSize(50)};
  flex-flow: column wrap;
  ${flex("column", "", "")};
  ${position("relative")};

  @media screen and (min-width: 640px) {
    padding: 0 ${getSize(50)};
  }
`;

const ImageContainer = styled.ul`
  columns: 2;
  column-gap: 3rem;
`;

const Discript = styled.p`
  ${fontFamily("MaruBuri", "400")};
  font-size: ${getVwSize(24)};
  margin: ${getVwSize(40)} 0;

  @media screen and (min-width: 640px) {
    font-size: ${getSize(24)};
    margin: ${getSize(40)} 0;
  }
`;

const ImgLi = styled.li`
  ${flex("row", "center", "center")};
  ${position("relative")};
  ${boxSize("100%", "auto")}
  margin-bottom: ${getSize(40)};
`;

const Image = styled.img`
  ${boxSize("100%", "auto")};
  object-fit: cover;
  border-radius: ${getVwSize(10)};
  @media screen and (min-width: 640px) {
    border-radius: ${getSize(10)};
  }
`;
