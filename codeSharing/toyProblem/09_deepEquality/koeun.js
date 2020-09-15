//13 of 16
//문제 잡는중..

const deepEquals = function (apple, orange) {
  let [appleKey, orangeKey] = [Object.keys(apple), Object.keys(orange)];
  let [appleVal, orangeVal] = [Object.values(apple), Object.values(orange)];
  let [ababy, bbaby] = [{}, {}];
  let result = false;
  
  //서로 길이 다르면 당연히 false
  if(appleKey.length !== orangeKey.length) {
    return false;
  }

  //key들끼리 비교
  if (appleKey.includes(...orangeKey)) {
    if (appleVal.includes(...orangeVal)) {
      result = true;
    }
    if (appleVal.length >= 2 && appleVal.filter(x => typeof x === "object")) {
      ababy = appleVal.filter(x => typeof x === "object");
      bbaby = orangeVal.filter(x => typeof x === "object");
      result = deepEquals(ababy[0], bbaby[0]);
    }
  }
  return result;
};
