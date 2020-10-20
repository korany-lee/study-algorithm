var testingTransform = function (array) {
  var transform = [];

  for (var i = 0; i < array.length; i++)
    transform.push({ value: array[i], i: i });

  return transform;
};

const swap = (left, right, arr) => {
  let temp = arr[left];
  [arr[left], arr[right]] = [arr[right], temp];
};

const insertSort = (a, b) => {
  return a.value - b.value;
};

var insertionSort = function (array, callback) {
  callback = callback || insertSort;
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 1; j--) {
      if (callback(array[j - 1], array[j]) > 0) {
        swap(j - 1, j, array);
      } else {
        break;
      }
    }
  }
  return array;
};
