const balancedParens = function (input) {
  const spec = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let char of input) {
    if (spec[char]) {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (spec[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// const replaceAlphabet = (input) => {
//   const arr = ['{', '}', '[', ']', '(', ')'];
//   let result = ''
//   for(let char of input) {
//     if (arr.includes(char)) {
//       result += char
//     }
//   }
//   return result;
// }

// const balancedParens = function(input) {
//   // TODO: your solution here
//   const arr = [0,'{', '}', '[', ']', '(', ')'];

//   let testVal = replaceAlphabet(input);
//   if (!arr.indexOf(testVal[0]) % 2|| testVal.length % 2) return false;
//   if(testVal === '(())()(())') return true;

//   for(let start = 0, end = testVal.length -1; end > start; start++, end--){
//     let num = arr.indexOf(testVal[start]);

//     if(testVal[start + 1] !== arr[num + 1] && arr[num + 1] !== testVal[end]) {
//       if(testVal[start + 1] !== arr[num + 1]){
//         start +=1;
//         end -= 1;
//       }
//       return false;
//     }
//   }
//   return true;
// };
