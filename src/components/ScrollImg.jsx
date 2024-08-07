import React from "react";
import styled from "styled-components";

function ScrollImg({ imgUrl }) {
  return (
    <ScrollSec className="relative">
      <Box className="absolute">
        {/* <Img $image={imgUrl} /> */}
        <Img $image={imgUrl} />
      </Box>
    </ScrollSec>
  );
}

export default ScrollImg;

const ScrollSec = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  height: 62.5vw;
  overflow: hidden;
  @media screen and (min-width: 640px) {
    height: 40rem;
    margin-left: calc(50% - 32rem);
  }
`;

const Box = styled.div`
  width: 64rem;
  height: 100%;
  clip: rect(0, auto, auto, 0);
`;

const Img = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background: url(${process.env.PUBLIC_URL}/assets/${(props) => props.$image})
    no-repeat center center;
  background-size: cover;

  @media screen and (min-width: 640px) {
    width: 64rem;
  }
`;
