const largestProductOfThree = function (array) {
  array.sort((a, b) => b - a);
  const neg = array.filter((num) => num < 0).sort((a, b) => a - b);

  let positive = array[0] * array[1] * array[2];
  let negative = array[0] * neg[0] * neg[1];

  if (array.every((num) => num < 0)) return positive;

  return negative > positive ? negative : positive;
};
