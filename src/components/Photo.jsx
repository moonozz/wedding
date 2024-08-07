import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PhotoLiSwipe } from "../hooks/photoList";
import data from "../data/data.json";

function Photo() {
  const imgData = data.img.slice(1);

  return (
    <PhotoSec>
      <h3 className="abril-fatface title">PHOTO</h3>
      <Container>
        <Inner>
          {/* {data.img
            .filter((el) => el !== "title.jpg")
            .map((el) => {
              return <PhotoLiSwipe imgUrl={el} />;
            })} */}
          {imgData?.map((el) => {
            return <PhotoLiSwipe key={el} imgUrl={el} />;
          })}
        </Inner>
      </Container>
    </PhotoSec>
  );
}

export default Photo;

const PhotoSec = styled.section`
  padding: 10rem 0;
`;

const Container = styled.div`
  height: 120vw;
  overflow: hidden;
  position: relative;
  touch-action: pan-x;
`;

const Inner = styled.ul`
  width: calc(${data.img.length - 1} * 80vw);
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  /* transition-property: transform; */
  gap: 2rem;
`;
