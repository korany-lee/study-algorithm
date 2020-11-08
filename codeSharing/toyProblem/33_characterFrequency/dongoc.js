const characterFrequency = function (string) {
  let result = string.split('').reduce((obj, key) => {
    !obj[key] ? obj[key] = 1 : obj[key]++;
    return obj;
  }, {})
  result = Object.entries(result).sort((pre, next) => {
    if (pre[1] > next[1]) return -1; 
    else if (pre[1] < next[1]) return 1;
    else if (pre[0] > next[0]) return 1;
    else if (pre[0] < next[0]) return -1;
    return 0;
    });
  return result;
};