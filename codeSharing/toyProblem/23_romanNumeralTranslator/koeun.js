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
  let [first, second] = [romanNumeral[0], romanNumeral[1]];
  let result = 0;

  if (
    !DIGIT_VALUES.hasOwnProperty(romanNumeral) &&
    typeof romanNumeral !== 'string'
  ) {
    //ㅜㅜ
    return null;
  }

  if (romanNumeral.length === 1) {
    return DIGIT_VALUES[romanNumeral];
  }

  if (!romanNumeral.length) {
    return result;
  }

  //재귀를 빠져나오면서 result를 더해주는 연산이 필요해써요
  if (DIGIT_VALUES[first] >= DIGIT_VALUES[second]) {
    result = DIGIT_VALUES[first];
    result = result + translateRomanNumeral(romanNumeral.slice(1)); //오우씨 됐다!!!
  } else {
    result = DIGIT_VALUES[second] - DIGIT_VALUES[first];
    result = result + translateRomanNumeral(romanNumeral.slice(2));
  }

  return result;
};
