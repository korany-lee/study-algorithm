// 5 of 7
const nthFibonacci = function(n) {
  if(n === 0) {
    return n;
  }
  if(n === 1) {
    return n;
  }
  if (n <= 4 && n !== 1 && n !== 0) {
  return n-1;
}

return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}
