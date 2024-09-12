import data from "../data/data.json";

export const getDate = (type, yearlength) => {
  const when = new Date(data.when);
  const year = when.getFullYear();
  // const month = ("0" + (when.getMonth()+1)).slice(-2);
  const month = when.getMonth() + 1;
  const day = when.getDate();

  const shortYear = year.toString().slice(-2);
  const selectYear = yearlength === 2 ? shortYear : year;

  if (type === "kor") {
    return `${selectYear}년 ${month}월 ${day}일`;
  } else return `${selectYear}. ${month}. ${day}`;
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

export const recordImg = (img) => {
  const recordImg = [];

  for (let i = 0; i < img.length; i += 2) {
    recordImg.push(img[i]);
  }
  for (let i = 1; i < img.length; i += 2) {
    recordImg.push(img[i]);
  }

  return recordImg;
};

export const getDday = () => {
  const weddingDay = new Date(data.when);
  const today = new Date();
  const dday = weddingDay - today;

  return Math.floor(dday / (1000 * 60 * 60 * 24));
};
