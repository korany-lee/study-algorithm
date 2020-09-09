/** @format */

const largestProductOfThree = function (array) {
  let newArr = array.slice().sort((a, b) => b - a);
  const len = newArr.length;
  const [largest, larger, large, smaller, smallest] = [
    newArr[0],
    newArr[1],
    newArr[2],
    newArr[len - 2],
    newArr[len - 1],
  ];
  return Math.max(largest * larger * large, largest * smallest * smaller);
};
