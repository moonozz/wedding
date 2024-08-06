import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import { getKorDate, getWeek, getTime } from "../hooks/filter";

function Title() {
  return (
    <TitleSec>
      <TitleDate>
        <p>
          {getKorDate()} {getWeek(data.when, "kor")}
        </p>
        <p>{data.time}</p>
      </TitleDate>
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
        {/* <Txt02 className="aoboshi-one w-100 flex-col flex-center">
          <CircleTxt className="absolute t-24">
            <p>Save our date</p>
          </CircleTxt>
          <BigTxt>
            <span className="first-title absolute">Happy</span>
            <span className="second-title absolute">Wedding</span>
            <span className="third-title absolute">Day</span>
          </BigTxt>
          <PosterTxt className="w-100 absolute b-24">
            <div>
              <span>Bo Gum</span>
              <span>&</span>
              <span>Su ji</span>
            </div>
            <div>
              <span>{data.when} {getWeek(data.when, "Eng")}</span>
              <span>{getTime()}</span>
            </div>
          </PosterTxt>
        </Txt02> */}
        <Txt03 className="flex-col flex-center abril-fatface">
          <PosterTxt className="aoboshi-one w-100 absolute t-24">
            <div>
              <span>{data.information[0].EngName}</span>
              <span>&</span>
              <span>{data.information[1].EngName}</span>
            </div>
            <div>
              <span>
                {data.when} {getWeek(data.when, "Eng")}
              </span>
              <span>{getTime()}</span>
            </div>
          </PosterTxt>
          <BottomTitle className="absolute b-24 flex-col">
            <span>We are</span>
            <span>Getting</span>
            <span>&#40;Married&#41;</span>
          </BottomTitle>
        </Txt03>
      </div>
    </TitleSec>
  );
}

export default Title;

const TitleSec = styled.div`
  /* background-color: #fff8f0; */
  padding: 0 9vw;
  @media screen and (min-width: 640px) {
    padding: 0 5.8rem;
  }
`;

const TitleDate = styled.div`
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
  color: white;
  p {
    font-size: 3.1vw;
    border-radius: 100%;
    border: 0.1rem solid white;
    padding: 1.2vw 2.5vw 1.4vw;
  }
  @media screen and (min-width: 640px) {
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

const PosterTxt = styled.div`
  color: white;
  padding: 0 4.5vw;
  div {
    display: flex;
    margin-top: 0.4rem;
  }
  span {
    flex-grow: 1;
    flex-basis: 33%;
    font-size: 2.7vw;
  }
  span:first-child {
    text-align: left;
  }
  span:last-child {
    text-align: right;
  }
  @media screen and (min-width: 640px) {
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

const BottomTitle = styled.div`
  color: white;
  span:last-child {
    color: #f32a2a;
    margin-bottom: 0.5vw;
  }
  span {
    font-size: 8vw;
    line-height: 1.2;
  }
  @media screen and (min-width: 640px) {
    span:last-child {
      margin-bottom: 0.5vw;
    }
    span {
      font-size: 5rem;
    }
  }
`;
