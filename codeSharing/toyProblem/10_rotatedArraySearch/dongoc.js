const rotatedArraySearch = function (rotated, target) {
    let [firstIndex, lastIndex] = [0, rotated.length - 1];
    while (firstIndex !== lastIndex) { // 무슨 조건이어야 돌아갈까?
      let midIndex = Math.floor((firstIndex + lastIndex) / 2)
      if (rotated[midIndex] === target) {
        return midIndex;
      }
      if (rotated[midIndex] < target)  { //target이 더 크다는 것은 항상 뒤쪽에 있다는 뜻 mid + 1과 last 사이
        firstIndex = midIndex + 1;
      } 
      else if (rotated[midIndex] > target) { // target이 더 작다는 것은 두 가지 경우. 앞 혹은 뒤
        if (rotated[firstIndex] === target) {
          return firstIndex;
        } 
        else if (rotated[firstIndex] > target) { // target이 first보다 작다는 것은 뒤에 있다는 의미
          firstIndex = midIndex + 1;
        } 
        else { // target이 first보다 크다는 것은 앞에 있다는 의미
          lastIndex = midIndex - 1;
        }
      }
    }
    return null;
  }; 