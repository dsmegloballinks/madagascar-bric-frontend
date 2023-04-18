/* eslint-disable no-useless-escape */

export const isInvalidEmail = (str) => {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return !emailRegex.test(str);
};

export const isOnlyNumber = (str) => {
  let regex = /^[0-9\b.]+$/;
  return regex.test(str);
};

export const isOnlyNumberUs = (str) => {
  let regex = /^([0-9 ]|\(|\)|\-|\+)+$/;
  return regex.test(str);
};

export const isUsNumber = (str) => {
  // let regex = /\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/;
  let regex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/; //(###) ###-####
  return regex.test(str);
};
