/** @format */

const firstNonRepeatedCharacter = function (string) {
  let arr = string.split('');
  let obj = arr.reduce((a, c) => {
    if (a[c] === undefined) {
      a[c] = 0;
    } else {
      a[c] = 1;
    }
    return a;
  }, {});
  for (let key in obj) {
    if (obj[key] === 0) {
      return key;
    }
  }
};
