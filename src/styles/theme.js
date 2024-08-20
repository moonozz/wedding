const color = {
  white: "#fff",
  black: "#1A1A1A",
  red: "#f32a2a",
  lightGray: "#f4f4f4",

  line1: "#263C96",
  line2: "#3CB44A",
  line3: "#FF7300",
  line4: "#2C9EDE",
  line5: "#8936E0",
  line6: "#B5500B",
  line7: "#697215",
  line8: "#E51E6E",
  line9: "#CEA43A",
  gyeonggang: "#2683F2",
  gyeongui: "#7CC4A5",
  gyeongchun: "#01AD77",
  airport: "#69A5D1",
  kimpogold: "#96710A",
  seohae: "#8BC53F",
  bundang: "#FFCE33",
  sillim: "#4E67A5",
  sinbundang: "#A71E31",
  everline: "#77C371",
  uiSinseol: "#C5C000",
  uiJeongbu: "#FF9D27",
  incheon01: "#6F99D0",
  incheon02: "#FFB850",
  magtrainf: "#FFCD12",

  busGreen: "#59BE0A",
  busBlue: "#1E7BDB",
  busRed: "#E43506",
  busDefault: "#89DF45",
  busAirport: "#63B4E6",
  busVillage: "#89DF45",
};

const size = {
  0: "0rem",
  4: "0.4rem",
  8: "0.8rem",
  10: "1rem",
  16: "1.6rem",
  18: "1.8rem",
  20: "2rem",
  24: "2.4rem",
  26: "2.6rem",
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
