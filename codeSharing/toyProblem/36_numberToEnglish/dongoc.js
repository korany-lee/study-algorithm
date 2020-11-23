let numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
let numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  let num = this.valueOf();
  if (num === 0) return 'zero';
  return this._toEngHelper(num).join(' ');
};

Number.prototype._toEngHelper = function(num) {
  let result = [];
  let str = String(num);
  if (!str.length || (str[0] === '0' && str.length === 1)) return [];
  
  if (str[0] === '0') {
    result = result.concat(this._toEngHelper(str.slice(1)));
  }

  // obj에 들어있는 숫자인 경우
  else if ((num > 0 && num <= 20) || (num < 100 && num % 10 === 0)) { // else if!!!!!!!!!!!
    result = result.concat(numbersToWords[str]);
  } 

  // 100보다 작을 경우
  else if (str.length < 3) {
    let [head, tail] = str;
    result = result.concat([numbersToWords[head + '0'], [numbersToWords[tail]]].join('-'));
  }

  // 1000보다 작을 경우
  else if (str.length < 4) {
    let len = str.length - 1;
    let [head, tail] = [str[0], str.slice(1)];
    result = result.concat(numbersToWords[head], 'hundred', this._toEngHelper(tail));
  }

  // 1000보다 클 경우
  else {
    let len = str.length;
    let reminder = len % 3 || 3;
    result = result.concat(
      this._toEngHelper(str.slice(0, reminder)), 
      numbersToPlace[Math.pow(10, len - reminder)], 
      this._toEngHelper(str.slice(reminder))
    );
  };
  return result;
}

//----------------------------------------------------------------
// 리팩토링 전
// Number.prototype.toEnglish = function () {
//   let num = this.valueOf();
//   if (num === 0) return 'zero';

//   let result = this._toEngHelper(String(num));
//   return result.filter(el => el !== " " && el !== undefined).join(' ');
// };

// Number.prototype._toEngHelper = function(str) {
//   let result = [];
//   let num = Number(str);
//   if (!str.length || (str[0] === '0' && str.length === 1)) return [];
  
//   if (str[0] === '0') {
//     result = result.concat(this._toEngHelper(str.slice(1)));
//   }

//   // obj에 들어있는 숫자인 경우
//   else if ((num > 0 && num <= 20) || (num < 100 && num % 10 === 0)) { // else if!!!!!!!!!!!
//     result = result.concat(numbersToWords[str]);
//   } 

//   // 100보다 작을 경우
//   else if (str.length < 3) {
//     let [head, tail] = str;
//     result = result.concat([numbersToWords[head + '0'], [numbersToWords[tail]]].join('-'));
//   }

//   // 1000보다 작을 경우
//   else if (str.length < 4) {
//     let len = str.length - 1;
//     let [head, tail] = [str[0], str.slice(1)];
//     result = result.concat(numbersToWords[head], 'hundred', this._toEngHelper(tail));
//     // result = result.concat(numbersToWords[head], numbersToPlace[Math.pow(10, len)], this._toEngHelper(tail));
//   }

//   // 1000보다 클 경우
//   else {
//     let len = str.length
//     if (len % 3 === 1) { //5,000 five thousand
//       result = result.concat(
//         numbersToWords[str[0]], 
//         numbersToPlace[Math.pow(10, len - 1)], 
//         this._toEngHelper(str.slice(1))
//       );
//     } 
//     else if (len % 3 === 2) { // 50,000 fifty thousand
//       result = result.concat(
//         this._toEngHelper(str.slice(0, 2)),
//         numbersToPlace[Math.pow(10, len - 2)],
//         this._toEngHelper(str.slice(2))
//       );
//     } 
//     else if (len % 3 === 0) { // 500,000 fifty hundred thousand
//       result = result.concat(
//         this._toEngHelper(str.slice(0, 3)),
//         numbersToPlace[Math.pow(10, len - 3)],
//         this._toEngHelper(str.slice(3))
//       );
//     }
//     // result = result.concat(this._toEngHelper(str));
//   }
//   return result;
// }

  // else if (num === Math.pow(10, (str.length - 1))) {
  //   result = numbersToPlace[str];
  // }

//----------------------------------------------------------------
