const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const translateRomanNumeral = function (romanNumeral) {
  // TODO: 여기에 코드를 작성합니다.
  let count = 0;
  if (romanNumeral.length === 0) {
    return 0;
  } else if (typeof romanNumeral !== "string") {
    return null;
  } else if ((romanNumeral.length = 1 && romanNumeral in DIGIT_VALUES)) {
    return DIGIT_VALUES[romanNumeral];
  }

  for (let i = 0; i < romanNumeral.length; i++) {
    let indexVal = DIGIT_VALUES[romanNumeral[i]];
    let nextVal = DIGIT_VALUES[romanNumeral[i + 1]];

    if (indexVal >= nextVal || !nextVal) {
      count += indexVal;
    } else if (indexVal < nextVal) {
      count += nextVal - indexVal;
      i++;
    }
  }
  return count;
};
