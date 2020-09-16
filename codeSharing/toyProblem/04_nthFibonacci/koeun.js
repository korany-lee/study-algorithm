let nthFibonacci = function(n) {
  let fibo1 = 0, fibo2 = 1;
  let result = 0;
   if(n === 0) {
    return fibo1;
  }
  if(n === 1) {
    return fibo2;
  }
  for(let i = 1; i < n; i++) {
    result = fibo1 + fibo2;
    fibo1 = fibo2;  
    fibo2 = result; 
  }
  return result;
}

//5 of 7
/* const nthFibonacci = function(n) {
  if (n === 0) {
    return 0;
  }
  if(n < 3) {
    return 1;
  }


  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
} */

//삼항연산자 연습!
//return n === 0 ? 0 : n < 3 ? 1 : nthFibonacci(n - 1) + nthFibonacci(n - 2); 

//참고에 나온 iterator 이해가 안가는데 아래로 됨
/* let factorial = function(num) {
  let result = 1;
  for(let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
} */