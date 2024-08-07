import React from "react";
import data from "../data/data.json";

export const getKorDate = () => {
  const when = new Date(data.when);
  const year = when.getFullYear();
  // const month = ("0" + (when.getMonth()+1)).slice(-2);
  const month = when.getMonth() + 1;
  const day = when.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

export const getWeek = (i, lan) => {
  const KorWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const EngWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayIndex = new Date(i).getDay();

  return lan === "kor" ? `${KorWeek[dayIndex]}요일` : EngWeek[dayIndex];
};

export const getTime = () => {
  const time = data.time.split(":");

  if (time[0] < 12) {
    return `AM ${data.time}`;
  } else {
    const timeCal = time[0] - 12;
    return `PM ${timeCal}:${time[1]}`;
  }
};

export const getName = (gender) => {
  const male = data.information[0].EngName.split(" ");
  const female = data.information[1].EngName.split(" ");
};
