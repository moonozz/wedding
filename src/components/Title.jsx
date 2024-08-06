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
        <Txt02 className="aoboshi-one w-100 flex-col flex-center">
          <CircleTxt className="absolute">
            <p>Save our date</p>
          </CircleTxt>
          <BigTxt>
            <span className="first-title absolute">Happy</span>
            <span className="second-title absolute">Wedding</span>
            <span className="third-title absolute">Day</span>
          </BigTxt>
          <BottomTxt className="w-100 absolute">
            <div>
              <span>Bo Gum</span>
              <span>&</span>
              <span>Su ji</span>
            </div>
            <div>
              <span>2024. 01. 27 Sat</span>
              <span>PM 1:30</span>
            </div>
          </BottomTxt>
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
  padding: 0 9vw;
  /* height: 85vh; */
  /* min-height: 110rem; */
  /* max-height: 120rem; */
  @media screen and (min-width: 640px) {
    padding: 0 5.8rem;
  }
`;

const Date = styled.div`
  margin-bottom: 8.8vw;
  text-align: center;
  p:first-child {
    font-size: 3.8vw;
    font-weight: 300;
  }
  p:last-child {
    font-size: 19vw;
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
  font-size: 15.5vw;
  font-weight: 800;
  color: #de2b2b;
  @media screen and (min-width: 640px) {
    font-size: 10rem;
  }
`;

const Txt02 = styled.div``;

const CircleTxt = styled.div`
  top: 3.7vw;
  color: white;
  p {
    font-size: 3.1vw;
    border-radius: 100%;
    border: 0.1rem solid white;
    padding: 1.2vw 2.5vw 1.4vw;
  }
  @media screen and (min-width: 640px) {
    top: 2.4rem;
    p {
      font-size: 2rem;
      padding: 0.8rem 1.6rem 0.9rem;
    }
  }
`;

const BigTxt = styled.div`
  font-size: 15.6vw;
  font-weight: 800;
  color: #ff511a;
  .first-title {
    top: 17vw;
    left: 3.8vw;
  }
  .second-title {
    top: 47.9vw;
    /* left: 36.8vw; */
  }
  .third-title {
    top: 61.9vw;
    left: 18.8vw;
  }

  @media screen and (min-width: 640px) {
    font-size: 10rem;
    .first-title {
      top: 11rem;
      left: 2.4rem;
    }
    .second-title {
      top: 30.6rem;
      /* left: 23.4rem; */
    }
    .third-title {
      top: 39.6rem;
      left: 12rem;
    }
  }
`;

const BottomTxt = styled.div`
  bottom: 3.7vw;
  color: white;
  padding: 0 4.5vw;
  div {
    display: flex;
    justify-content: space-between;
    margin-top: 0.4rem;
  }
  span {
    font-size: 2.7vw;
  }
  @media screen and (min-width: 640px) {
    bottom: 2.4rem;
    padding: 0 3rem;
    div {
      margin-top: 0.4rem;
    }
    span {
      font-size: 1.7rem;
    }
  }
`;

const Txt03 = styled.div``;
