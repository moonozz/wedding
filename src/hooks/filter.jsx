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

export const getTime = (lan) => {
  const time = data.time.split(":");
  const isAM = time[0] < 12;
  const timeCal = time[0] % 12 || 12;

  // if (time[0] < 12 && lan === "eng") {
  //   return `AM ${data.time}`;
  // } else if (time[0] >= 12 && lan === "eng") {
  //   return `PM ${timeCal}:${time[1]}`;
  // } else if (time[0] < 12 && lan === "kor") {
  //   return `오전 ${time[0]}시 ${time[1]}분`;
  // } else {
  //   return `오후 ${timeCal}시 ${time[1]}분`;
  // }

  if (lan === "eng") {
    return `${isAM ? "AM" : "PM"} ${timeCal}:${time[1]}`;
  } else {
    return `${isAM ? "오전" : "오후"} ${timeCal}시 ${time[1]}분`;
  }
};

export const getName = (gender) => {
  const male = data.information[0].EngName.split(" ");
  const female = data.information[1].EngName.split(" ");
};
