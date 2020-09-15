/** @format */

var rotatedArraySearch = function (rotated, target) {
  let [left, right] = [0, rotated.length - 1];
  while (left <= right) {
    //
    let mid = Math.floor((left + right) / 2);
    if (target === rotated[mid]) return mid;
    if (rotated[mid] <= rotated[right]) {
      if (target < rotated[mid] || target > rotated[right]) {
        //왼쪽 서치
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (rotated[mid] >= rotated[left]) {
      //오른쪽 서치
      if (target > rotated[mid] || target < rotated[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return null;
};
