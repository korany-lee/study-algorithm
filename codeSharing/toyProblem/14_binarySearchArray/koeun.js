const binarySearch = function (array, target) {
  let low = 0;
  let high = array.length - 1;
  let mid, guess;

  while (low <= high) {
    mid = Math.floor((low + high) / 2) //내림
    guess = array[mid];
    if(guess === target) {
      return mid;
    }
    if(guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
};
//hello coding을 학습했습니다.
//스터디 이전에 스스로 다시 한번 작성해볼 것입니다!