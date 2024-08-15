const color = {
  white: "#fff",
  black: "#1A1A1A",
  red: "#f32a2a",
  lightGray: "#f4f4f4",
};

const size = {
  0: "0rem",
  10: "1rem",
  16: "1.6rem",
  18: "1.8rem",
  20: "2rem",
  24: "2.4rem",
  30: "3rem",
  32: "3.2rem",
  40: "4rem",
  50: "5rem",
  56: "5.6rem",
  60: "6rem",
  70: "7rem",
  80: "8rem",
  90: "9rem",
  100: "10rem",
  130: "13rem",
  150: "15rem",
  200: "20rem",
  260: "26rem",
  350: "35rem",
  640: "64rem",
};

// const vwSize = {
//   // fontSize * 1.56
//   // 18: `${(parseFloat(fontSize[18]) * 1.56).toFixed(2)}vw`,
//   16: `${(1.6 * 1.56).toFixed(2)}vw`,
//   18: `${(1.8 * 1.56).toFixed(2)}vw`,
//   20: `${(2 * 1.56).toFixed(2)}vw`,
//   24: `${(2.4 * 1.56).toFixed(2)}vw`,
//   30: `${(3 * 1.56).toFixed(2)}vw`,
//   32: `${(3.2 * 1.56).toFixed(2)}vw`,
//   40: `${(4 * 1.56).toFixed(2)}vw`,
//   70: `${(7 * 1.56).toFixed(2)}vw`,
//   80: `${(8 * 1.56).toFixed(2)}vw`,
//   90: `${(9 * 1.56).toFixed(2)}vw`,
//   100: `${(10 * 1.56).toFixed(2)}vw`,
//   130: `${(13 * 1.56).toFixed(2)}vw`,
//   200: `${(20 * 1.56).toFixed(2)}vw`,
//   640: `${(64 * 1.56).toFixed(2)}vw`,
// };

const vwSize = Object.fromEntries(
  Object.entries(size).map(([key, value]) => [
    key,
    `${(parseFloat(value) * 1.56).toFixed(2)}vw`,
  ])
);

const theme = {
  color,
  size,
  vwSize,
};

export default theme;
