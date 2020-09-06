const commonCharacters = function(string1, string2, ...args) {
  if (!string1.length || !string2.length) {
    return "";
  }

  let result = string1.replace(/\s/g, "");
  let arr = [string2, ...args];

  while (arr.length) {
    let word = "";
    for (let char of result) {
      if (arr[0].includes(char) && !word.includes(char)) {
        word += char;
      }
    }
    result = word;
    arr.shift();
  }
  return result;
};
