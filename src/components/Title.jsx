import React from "react";
import data from "../data/data.json";

function Title() {
  return (
    <div className="Title">
      <div className="date">
        <p>
          {data.when} {data.week}
        </p>
        <p>{data.time}</p>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/${data.img[0]}`}
        alt="박보검과 수지의 청첩장 타이틀 이미지"
      />
      <div className="txt">
        <span>Happy</span>
        <span>Wedding</span>
        <span>Day</span>
      </div>
    </div>
  );
}

export default Title;
