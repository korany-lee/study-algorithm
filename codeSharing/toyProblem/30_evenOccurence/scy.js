const evenOccurrence = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let obj = {};
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]].count += 1;
    } else {
      obj[arr[i]] = { count: 1, firstIndex: i };
    }
  }

  for (let el in obj) {
    if (result === null && obj[el].count % 2 === 0) {
      result = obj[el].firstIndex;
    } else if (obj[el].count % 2 === 0 && result > obj[el].firstIndex) {
      result = obj[el].firstIndex;
    }
  }
  return arr[result];
};
