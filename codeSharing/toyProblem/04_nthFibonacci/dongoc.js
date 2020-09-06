const nthFibonacci = function (n) {
  let count = 2;
  let first = 0;
  let second = 1;
  if (n <= 1) return n;
  while (count <= n) {
    [second, first] = [second + first, second]
    count++;
  }
  return second;
};
