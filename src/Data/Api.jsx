export const API_KEY = "AIzaSyCIg4LNTP01pELqre7VI1au2u5C1F2iRmw";

export const valueConverter = (val) => {
  if (val > 1000000) {
    return Math.floor(val / 1000000) + "M";
  } else if (val > 10000) {
    return Math.floor(val / 1000) + "k";
  } else {
    return val;
  }
};
