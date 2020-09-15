const rotatedArraySearch = function (rotated, target) {
  let low = 0;
  let high = rotated.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (rotated[mid] === target) {
      return mid;
    } else if (rotated[mid] > target) {
      high = mid - 1;
    } else if (target > rotated[mid]) {
      low = mid + 1;
    }
  }
  return null;
};
