const binarySearch = function (array, target) {
  // TODO: Your code here!
  let [start, end, pivot] = [0, array.length - 1];

  while (start <= end) {
    pivot = Math.floor((start + end) / 2);
    if (array[pivot] === target) {
      return pivot;
    } else if (array[pivot] > target) {
      end = pivot - 1;
    } else if (target > array[pivot]) {
      start = pivot + 1;
    }
  }
  return null;
};
