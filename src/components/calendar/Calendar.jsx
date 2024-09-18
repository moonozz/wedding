import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import Week from "./Week";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { flex, boxSize, defaultTxtStyle } from "../../utils/sMixinUtils";

function Calendar({ pointColor, pointTxtColor }) {
  const [month, setMonth] = useState([]);

  const date = data.when;
  const dateYear = new Date(date).getFullYear();
  const dateMonth = new Date(date).getMonth();

  const firstWeek = new Date(dateYear, dateMonth, 1).getDay(); // 1일의 요일 구하기
  const lastDay = new Date(dateYear, dateMonth + 1, 0).getDate(); // dateMonth의 마지막 날짜 구하기
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const getWeekSlice = (arr) => {
    //arr을 인자로 받아서 7개씩 묶은 배열을 배열로 리턴하기
    const weekSliceArr = [];

    for (let i = 0; i < arr.length; i += 7) {
      const sliceArr = arr.slice(i, i + 7);
      weekSliceArr.push(sliceArr);
    }

    return weekSliceArr;
  };

  const makeWeekArr = () => {
    // 1일의 요일만큼 1일 앞에 0추가하고 1부터 lastDay 까지의 배열 만들기
    const zeroArr = Array.from({ length: firstWeek }, () => "");
    const arr = zeroArr.concat(
      Array.from({ length: lastDay }, (_, i) => `${i + 1}`)
    );

    setMonth(getWeekSlice(arr));
  };

  useEffect(() => {
    makeWeekArr();
  }, []);

  return (
    <Scontainer>
      <SMonth>
        <p>{dateMonth + 1}월</p>
      </SMonth>
      <SMonthUl>
        <li>
          <SWeekUl $pointColor={pointColor}>
            {week.map((el, idx) => {
              return (
                <li key={idx}>
                  <p>{el}</p>
                </li>
              );
            })}
          </SWeekUl>
        </li>
        {month.map((el, idx) => {
          return (
            <Week
              key={idx}
              el={el}
              pointColor={pointColor}
              pointTxtColor={pointTxtColor}
            />
          );
        })}
      </SMonthUl>
    </Scontainer>
  );
}

export default Calendar;

const Scontainer = styled.div`
  ${boxSize("80%", "auto")};
  ${flex("column", "", "")};
  ${defaultTxtStyle("1.6", "24", "")}
  margin: ${getVwSize(40)} 0 ${getVwSize(20)};
`;

const SMonth = styled.div`
  ${defaultTxtStyle("1.6", "26", "")};
  /* padding: ${getVwSize(16)} 0; */
`;

const SMonthUl = styled.ul`
  ${flex("column", "", "")};
`;

const SWeekUl = styled.ul`
  ${boxSize("100%", "auto")}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  li:first-child {
    /* color: ${({ theme }) => theme.color.red}; */
    color: ${({ $pointColor }) => $pointColor};
  }
  li {
    padding: ${getVwSize(24)} ${getVwSize(10)};

    @media screen and (min-width: 640px) {
      padding: ${getSize(24)} ${getSize(10)};
    }
  }
`;
