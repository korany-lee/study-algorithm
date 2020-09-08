const deepEquals = function (apple, orange) {
  if (Object.keys(apple).length !== Object.keys(orange).length) return false;
  for (let key in apple) {
    if (typeof apple[key] !== "object" && apple[key] !== orange[key])
      return false;
    if (typeof apple[key] === "object" && !deepEquals(apple[key], orange[key]))
      return false;
  }
  return true;
};

// const compareArr = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if(!arr2.includes(arr1[i])) return false;
//   }
//   return true;
// }
// const deepEquals = function (apple, orange) {
//   if (Object.keys(apple).length !== Object.keys(orange).length) return false;
//   for (let key in apple) {
//     if (typeof apple[key] !== 'object' && apple[key] !== orange[key])return false;
//     if (Array.isArray(apple[key]) && !compareArr(apple[key], orange[key]))return false;
//     if (typeof apple[key] === 'object' && !deepEquals(apple[key], orange[key])) return false;
//   }
//   return true;
// };
