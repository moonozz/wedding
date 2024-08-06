import React from "react";
import styled from "styled-components";
import data from "../data/data.json";

function Title() {
  return (
    <TitleSec>
      <Date>
        <p>
          {data.when} {data.week}
        </p>
        <p>{data.time}</p>
      </Date>
      <div className="relative">
        <img
          src={`${process.env.PUBLIC_URL}/assets/${data.img[0]}`}
          alt="박보검과 수지의 청첩장 타이틀 이미지"
          className="w-100"
        />
        {/* <Txt01 className="aoboshi-one flex-col">
          <span>Happy</span>
          <span>Wedding</span>
          <span>Day</span>
        </Txt01> */}
        <Txt02 className="aoboshi-one absolute flex-col">
          <span className="first-title">Happy</span>
          <span className="second-title">Wedding</span>
          <span className="third-title">Day</span>
        </Txt02>
        {/* <div className="aoboshi-one txt-03">
        <span>Happy</span>
        <span>Wedding</span>
        <span>Day</span>
      </div> */}
      </div>
    </TitleSec>
  );
}

export default Title;

const TitleSec = styled.div`
  padding: 0 5.8rem;
  /* height: 85vh; */
  /* min-height: 110rem; */
  /* max-height: 120rem; */
`;

const Date = styled.div`
  margin-bottom: 5.6rem;
  text-align: center;
  p:first-child {
    font-size: 3.8vw;
    font-weight: 300;
  }
  p:last-child {
    font-size: 18.5vw;
    font-weight: 100;
  }

  @media screen and (min-width: 640px) {
    margin-bottom: 5.6rem;
    text-align: center;
    p:first-child {
      font-size: 2.4rem;
      font-weight: 300;
    }
    p:last-child {
      font-size: 12rem;
      font-weight: 100;
    }
  }
`;

const Txt01 = styled.div`
  font-size: 16vw;
  font-weight: 800;
  color: #de2b2b;
  @media screen and (min-width: 640px) {
    font-size: 10rem;
  }
`;

const Txt02 = styled.div`
  top: 9rem;
  font-size: 16vw;
  font-weight: 800;
  color: #de2b2b;
  @media screen and (min-width: 640px) {
    font-size: 10rem;
  }
`;

const Txt03 = styled.div``;
