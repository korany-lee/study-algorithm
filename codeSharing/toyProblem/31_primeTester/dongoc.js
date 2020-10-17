const primeTester = function (n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // 이 if문은 n이 숫자가 아니거나, 1보다 작거나, 정수가 아닌 경우를 처리합니다.
    return false;
  }
  if (n === 2) return true;
  if (n === 1 || n % 2 === 0) return false

  // N의 약수는 무조건 sqrt(N)의 범위에 존재한다.
  let sqrt = Math.floor(Math.sqrt(n));

  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const primeSieve = function (start, end) {
  let result = []
  if (start === 1 && end >= 2) start++;
  if (start === 2) {
    result.push(start); 
    start++;
  }
  if (start % 2 === 0) start++;

  for (let i = start; i <= end; i += 2) {
    if (primeTester(i)) {
      result.push(i)
    }
  }
  return result;
};