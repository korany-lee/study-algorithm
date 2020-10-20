const characterFrequency = function (string) {
  let result = [...new Set(string)].sort();

  for (let i = 0; i < result.length; i++) {
    let arr = [result[i], string.match(new RegExp(result[i], "g")).length];
    result[i] = arr;
  }

  return result.sort((a, b) => b[1] - a[1]);
};
