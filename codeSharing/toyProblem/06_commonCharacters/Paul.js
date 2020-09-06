/** @format */

const commonCharacters = function (string1, string2) {
  const str1 = [...new Set(string1.replace(/\s+/g, '').split(''))];
  const str2 = [...new Set(string2.replace(/\s+/g, '').split(''))];
  const result = [];
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        result.push(str1[i]);
        console.log(str1[i]);
      }
    }
  }
  return result.join('');
};
