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
  if (romanNumeral === '') return 0;
  if (typeof romanNumeral !== 'string') return null;
  
  let eachRoman = romanNumeral.split('');
  if (!eachRoman.every(el => Object.keys(DIGIT_VALUES).includes(el))) {
    return null;
  }

  let result = 0;
  for (let i = 0; i < eachRoman.length - 1; i++) {
    if (DIGIT_VALUES[eachRoman[i]] >= DIGIT_VALUES[eachRoman[i + 1]]) {
      result += DIGIT_VALUES[eachRoman[i]]
    } else {
      result -= DIGIT_VALUES[eachRoman[i]]
    }
  }
  return result + DIGIT_VALUES[eachRoman[eachRoman.length - 1]];
};
