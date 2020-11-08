// 키패드 문자열을 제공해 드리겠습니다!
const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ',
};

const telephoneWords = function (digitString) {
  let digits = digitString.split('');
  let result = [];

  let first = phoneDigitsToLetters[digits[0]];
  let second = phoneDigitsToLetters[digits[1]];
  let third = phoneDigitsToLetters[digits[2]];
  let fourth = phoneDigitsToLetters[digits[3]];

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      for (let k = 0; k < third.length; k++) {
        for (let l = 0; l < fourth.length; l++) {
          result.push(first[i] + second[j] + third[k] + fourth[l]);
        }
      }
    }
  }
  return result;
};
