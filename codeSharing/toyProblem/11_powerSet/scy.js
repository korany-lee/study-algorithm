const powerSet = function (str) {
  let result = [];
  str = [...new Set(str.split(""))];

  const func = (string, len) => {
    let el = string[0];
    for (let i = len - 1; i < str.length; i++) {}
  };
  func("", 0);
  return result;
};

// const powerSet = function (str) {
//   let result = [];
//   str = [...new Set(str.split(''))];

//   const func = (input, el) => {
//     input = input.split('').sort((a, b) => a.codePointAt() - b.codePointAt()).join("")
//     result.push(input)
//     for(let i = el; i < str.length; i++){
//       func(input + str[i], i + 1);
//     }
//   }
//   func("", 0)
//   return result;
// };

// a b c d e f
// ab, ac, ad, ae, af, bc, bd, be, bf, cd, ce, cf, de, df, ef
const arraySearch = (arr) => {
  let result = [];
  let test = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      test = arr[i] + arr[j];
      result.push(test);
    }
  }
  return result;
};
