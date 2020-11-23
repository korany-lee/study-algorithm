var testingTransform = function (array) {
  var transform = [];

  for (var i = 0; i < array.length; i++)
    transform.push({ value: array[i], i: i });

  return transform;
};

var insertionSort = function (array, callback) {
  const campare = (a, b) => a.value - b.value; 
  callback = callback || campare;

  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (callback(array[j], array[j + 1]) > 0) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      } else {
        break;
      }
    }
  }
  return array;
};