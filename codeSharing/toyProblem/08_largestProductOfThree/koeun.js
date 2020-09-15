const largestProductOfThree = function(array) {
  let negative = array.filter((x) => { return x < 0 });
  let negaArr, doubleNega, result;
  let max = Math.max(...array);

  if(negative.length >= 2) {
    negaArr = negative.sort(function(a, b){return b - a;});
    doubleNega = negaArr.slice(negaArr.length - 2);
    result = doubleNega.reduce((acc,cur)=>{return acc*cur}, max);
  }
  let sortArr = array.sort(function(a, b){ return a - b; });
  let num = 1;
  for(let i = 0; i < 3; i++) {
    num *= sortArr.pop();
  }
  if(num < result) {
    return result;
  }
  return num;
};