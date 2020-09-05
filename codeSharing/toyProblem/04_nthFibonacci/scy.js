const nthFibonacci = function(n) {
  // TODO: Your code here!
  if (n === 0) return 0;
  if (n <= 2) return 1;

  let [before, beBefore, result] = [1, 1, undefined];

  while (n > 2) {
    result = before + beBefore;
    beBefore = before;
    before = result;
    n--;
  }
  return result;
};
