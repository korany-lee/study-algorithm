const sumArray = function (array) {
  let max = Math.min(...array); // 시간복잡도와 공간복잡도 초과...
  let sum = 0;
  for (let num of array) {
    sum += num;
    if (max < sum) max = sum;
    if (sum < 0) sum = 0; // 뒤에 있는 숫자가 커버쳐줄 수 있느냐? -> 이미 영역 침범
  }
  return max;
};